import { Image } from "react-native"

interface PropType {
    style : {}

}

const Logo: React.FC<PropType> = ({style}) => {
    return (
        <Image style={style} source={require("@/assets/images/logoWithText.png")} />

    )
}

export default Logo