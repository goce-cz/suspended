import React, { useState } from 'react'
import { RouterProvider, useRoute } from 'react-router5'

import { ROOT, routes } from './routes'
import { AppBar, Tabs, Tab, FormControlLabel, Box, Switch, Toolbar, Typography } from '@material-ui/core'

export const Root = () => {
  const { route, router } = useRoute()

  const [concurrentMode, setConcurrentMode] = useState(route.params.mode === 'concurrent')
  const [, subRoute] = route.name.split('.')

  const activeRouteIndex = routes.findIndex(({ name }) => name === subRoute)
  const activeRouteSettings = routes[activeRouteIndex]

  const Component = activeRouteSettings && activeRouteSettings.component

  const handleTabChange = (event, index) => {
    const { name } = routes[index]
    router.navigate(`${ROOT}.${name}`, { mode: route.params.mode })
  }
  const handleToggleMode = (event, newConcurrentMode) => {
    setConcurrentMode(newConcurrentMode)
    const url = router.buildUrl(route.name, { ...route.params, mode: newConcurrentMode ? 'concurrent' : 'blocking' })
    setTimeout(() => {
        window.location.href = url
      },
      500
    )
  }


  return (
    <RouterProvider router={router}>
      <Box
        display='flex'
        flexDirection='column'
        height='100%'
      >
        <AppBar position='static'>
          <Toolbar
          >
            <Typography variant='h5'>React Suspense</Typography>
            <Box flex={1}/>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Switch
                  checked={concurrentMode}
                  onChange={handleToggleMode}
                />
              }
              label="Concurrent mode"
            />
          </Toolbar>
        </AppBar>
        <Box
          flex={1}
          display='flex'
          flexDirection='row'
        >
          <Tabs
            onChange={handleTabChange}
            variant="scrollable"
            orientation='vertical'
            value={activeRouteIndex}
          >
            {routes.map(({ name }) => <Tab key={name} label={name}/>)}
          </Tabs>
          <Box flex={1}>
            {Component && <Component/>}
          </Box>
        </Box>
      </Box>

    </RouterProvider>
  )
}
