import { useCallback, useState, useRef, useEffect } from 'react'
import identity from 'lodash/identity'
import { useRouter } from 'react-router5'

export const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const isTrue = val => val === 'true'

const inferParamParser = defaultValue => {
  if (typeof defaultValue === 'number') {
    return Number
  } else if (typeof defaultValue === 'boolean') {
    return isTrue
  } else {
    return identity
  }
}

const parseParamValue = (paramValue, defaultValue, parser) => {
  const parsedParamValue = typeof paramValue === 'string' ? parser(paramValue) : paramValue
  return paramValue === undefined ? defaultValue : parsedParamValue
}

/**
 * Similar to `useState` but uses a route parameter as state container.
 * Note that this uses *current route* in the sense of `RouteStack` component.
 * When the value is changed to `defaultValue`, the param is in fact removed from the route.
 *
 * When a default value (other than `null` or `undefined`) is used, the hook will infer the data-type from it
 * and will ensure that it always returns that correct data type. So in case of:
 *
 * ```javascript
 * const numeric = useRouteParam('someParam', 0)
 * ```
 *
 * the `numeric` will always be a `Number`, because the type is inferred from the default value.
 *
 * When using `null` or `undefined` as a default value the automatic inference is not possible,
 * therefore one is forced to pass a parser function manually:
 *
 * ```javascript
 * const numericOrNull = useRouteParam('someParam', null, stringValue => Number(stringValue))
 * ```
 *
 * or simply:
 *
 * ```javascript
 * const numericOrNull = useRouteParam('someParam', null, Number)
 * ```
 * @param paramName name of a route parameter
 * @param [defaultValue] default value in case the parameter is not present
 * @param [parser] parser function for the value - should covert a string coming from the URL to a desired data-type
 * @returns {*[]} current value and a function to change it
 */
export const useRouteParam = (paramName, defaultValue = null, parser = inferParamParser(defaultValue)) => {
  const router = useRouter()

  const parserRef = useRef(parser)
  parserRef.current = parser
  const defaultValueRef = useRef(parser)
  defaultValueRef.current = defaultValue

  const [snapshot, setSnapshot] = useState(() => {
    const route = router.getState()
    return parseParamValue(route && route.params[paramName], defaultValue, parser)
  })

  useEffect(
    () => {
      const subscription = router.subscribe({
        next: ({ route }) => {
          const parsedValue = parseParamValue(route && route.params[paramName], defaultValueRef.current, parserRef.current)
          setSnapshot(parsedValue)
        }
      })
      return () => subscription.unsubscribe()
    },
    [router, paramName, setSnapshot, parserRef, defaultValueRef]
  )

  const setValue = useCallback(
    (newValue, pushToHistory) => {
      const route = router.getState()
      return router.navigate(
        route.name,
        { ...route.params, [paramName]: newValue === defaultValue ? undefined : newValue },
        { replace: !pushToHistory }
      )
    },
    [paramName, defaultValue, router]
  )
  return [snapshot, setValue]
}

export const useBadgeId = () => useRouteParam('badgeId', null, Number)
