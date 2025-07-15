import { Outlet } from "react-router"
import Header from "./Header"
import Sidebar from "./Sidebar"
import styled from "styled-components"

const SytledAppLayaout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: green;
    padding: 4%.8rem 6.6rem;
`;

const AppLayout = () => {
  return (
    <SytledAppLayaout>
        <Header />
        <Sidebar />
        <Main>
            <Outlet />
        </Main>
    </SytledAppLayaout>
  )
}

export default AppLayout
