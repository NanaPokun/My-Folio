import { RoughNotation } from "react-rough-notation";


const RainbowHighlight = ({ color, children }) => {

    const animationDuration = Math.floor( 30 * children.lenght );
    return (
        <RoughNotation
        type="highlight"
        multiline={true}
        padding={[0, 2]}
        iterations={1}
        animationDuration={animationDuration}
        color={color}
        >
        {children}
        </RoughNotation>
    );
}
 
export default RainbowHighlight;