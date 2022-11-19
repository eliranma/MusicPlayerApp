import AppRoutes from './Routes'
// import AppTabs from './Tabs'
import React from 'react'
import PlayerProvider from './context/PlayerContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import AppProvider from './context/AppContext'


library.add(faForward, faPlay)
config.autoA11y = true

const App = () => {
  return (
    <AppProvider>
    <PlayerProvider>
      <AppRoutes />
    </PlayerProvider>
    </AppProvider>
  )
}

export default App
