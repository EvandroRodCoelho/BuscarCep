import { StyleGlobal, Container } from "./style/styles"
import { Header } from "./components/Header"
import { SearchCep } from "./components/SeachCep"
export const App = () => {

  return (
    <>
      <StyleGlobal />

      <Header />
      <SearchCep />
    </>
  )
}