import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/Routes.ts";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {MainPage} from "./components/templates/MainPage.tsx";

function App() {
  return (
      <main className={"app"}>
          <Routes>
              {routes.map((item, index) => {
                  const Element = item.element
                  return <Route key={index} path={item.path} element={
                      <MainPage type={item.type}>
                        <Element/>
                      </MainPage>
                      }/>
              })}
              <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </main>
  )
}

export default App