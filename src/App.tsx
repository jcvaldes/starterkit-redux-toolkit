import { Navbar } from './components'
import { HomePage } from './pages'
import './App.css'
import { LayoutContainer } from './styled-components/layout.styled.components'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <HomePage />
      </LayoutContainer>
    </Provider>
  )
}

export default App
