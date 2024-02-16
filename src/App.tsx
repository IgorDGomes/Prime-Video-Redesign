import { CustomMagnetOne } from "./sections/CustomMagnetOne"
import { CustomMagnetTwo } from "./sections/CustomMagnetTwo"
import { Features } from "./sections/Features"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hr } from "./sections/Hr"

function App() {

  return (
    <>
      <Header />
      <Hr />
      <CustomMagnetOne />
      <Hr />
      <CustomMagnetTwo />
      <Hr />
      <Features />
      <Hr />
      <Footer />
    </>
  )
}

export default App
