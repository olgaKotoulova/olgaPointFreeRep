import "./styles.css";

export default function App() {
  variadicFunction1("a", "b");
  variadicFunction2("c", "d", "e");
  variadicFunction2("f");
  console.log(operation(add, 10, 20));
  console.log(operation(multiply, 10, 20, 30, 40, 50));
  concat("string1")("string2");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function variadicFunction1() {
  //console.log("===Arguments Object1===");
  //Array.from(arguments).forEach((arg) => console.log(arg));
  return null;
}
function variadicFunction2(a, b) {
  //console.log("===Declared Parameters2===");
  //console.log(a);
  //console.log(b);
  //console.log("===Arguments Object2===");
  //Array.from(arguments).forEach((arg) => console.log(arg));
  return null;
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function operation(operator) {
  // Take all but the first argument
  let implicitArguments = Array.from(arguments).slice(1);
  // Same thing using rest operator
  //let [operator1, ...implicitArguments2] = [...arguments];
  //console.log(operator1, implicitArguments2);

  // spread the array arguments into the function execution
  return operator(...implicitArguments);
}

/*
A pattern that is central to point-free style is that of 
data-last function signatures. This pattern emerges from the
practice of currying a function. A curried function is a 
function that always takes and applies one argument at a time.
Instead of thinking of a function as taking multiple arguments
and then producing a single output, we must think of our
function as a series of steps before finally arriving at
a "final" value.
*/
function concat2(string1) {
  return function (string2) {
    return string1 + string2;
  };
}

// or using a cleaner function expression syntax
const concat = (string1) => (string2) => string1 + string2;

//rozepsano
const concat1 = (string1) => {
  return (string2) => {
    return string1 + string2;
  };
};
