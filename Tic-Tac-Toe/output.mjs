import ANSI from "./ANSI.mjs"

function print(text, color = ANSI.COLOR.YELLOW) {
    console.log(color, text, ANSI.RESET)
};

export default print
