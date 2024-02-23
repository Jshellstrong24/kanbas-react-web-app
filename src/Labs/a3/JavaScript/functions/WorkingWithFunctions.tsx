import ArrowFunctions from "./ArrowFunctions";
import ES5 from "./ES5Functions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    console.log('Hello World!');
    return(
       <div>
          <h1>Working With Functions</h1>
          <ES5/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
       </div>
    );
 }
 export default WorkingWithFunctions