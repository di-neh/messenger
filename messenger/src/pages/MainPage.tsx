import {Layout} from "../layout/Layout.tsx";
import styled from "styled-components";
import wall from "../assets/wall.png";
import { EllipsisVertical, Search} from "lucide-react";
import kit from "../assets/kit.jpg";
import Dialog from "../components/Dialog.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../States/store.ts";



const Wrapper = styled.div`
    display: flex;
    height: 100vh; 
`

const Side = styled.div`
    display: flex;
    height: 100vh; 
    width: 24%;
    flex-direction: column;
    padding: 0;
    flex: 1;
    border-right: 1px solid #393838;
`
const Header = styled.header`
    background: #212121;
    height: 52px;
    width: 100%;
    padding: 5px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`
const Main = styled.div`
    flex: 3;
    background-image: url(${wall});
`
const Profile = styled.div` 
    display: flex;
    align-items: center;
`

const MainPage = () => {
    const selectedSender = useSelector((state: RootState) => state.app.selectedSender);

    return (
        <Wrapper>
            <Side>
                <Layout></Layout>
            </Side>


            <Main>
                <Header>
                    <Profile>
                        <img src={kit} style={{height: "42px", borderRadius: "50%", marginRight:"16px"}} alt={""}/>
                        <strong style={{fontSize:"x-large"}}>{selectedSender}</strong>
                    </Profile>
                    <div>
                    <Search size={24} style={{marginRight:"16px"}}></Search>
                        <EllipsisVertical size={24}></EllipsisVertical>
                    </div>
                </Header>
                <Dialog></Dialog>
            </Main>
        </Wrapper>

    );
};

export default MainPage;