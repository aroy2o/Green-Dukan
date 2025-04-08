
  import AppRoutes from './router/Routes'
  import Navbar from './components/Navbar/Navbar'
  import Footer from './components/Footer/Footer'
  import ErrorBoundary from './router/ErrorBoundary'
  import ScrollToTop from './components/Extra/ScrollToTop'
  const App = () => {
    return (
      <>
      <Navbar/>
      <ScrollToTop/>
      <ErrorBoundary>
      <AppRoutes/>
      </ErrorBoundary>
      <Footer/>
      </>
      )
  }

  export default App