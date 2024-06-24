import { HeaderContainer } from "./styles";
import header_effect_left from "../../assets/header_effect_left.svg"
import header_effect_right from "../../assets/header_effect_right.svg"
import header_logo from "../../assets/header_logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img className="imgleft" src={header_effect_left} alt="" />

            <div className="logoContaienr">
                <img src={header_logo} alt="" />
                <h1>Github Blog</h1>
            </div>

            <img className="imgright" src={header_effect_right} alt="" />
        </HeaderContainer>
    )
}