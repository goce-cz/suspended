import React, { createContext, useCallback, useContext, useState } from 'react'


let globalSlowMo = 1

export const getSlowMoRatio = () => globalSlowMo

const SlowMoContext = createContext(null)

export const SlowMoProvider = ({ children }) => {
  const [slowMo, setSlowMo] = useState()
  const handleSlowDown = useCallback(
    ratio => {
      globalSlowMo = ratio
      setSlowMo(ratio)
    },
    [setSlowMo]
  )
  return (
    <SlowMoContext.Provider value={[slowMo, handleSlowDown]}>
      {children}
    </SlowMoContext.Provider>
  )
}

export const useSlowMo = () => useContext(SlowMoContext)
