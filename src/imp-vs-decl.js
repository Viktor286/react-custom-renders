
Button {
  backgrounColor: white
  textDecoration: underline
}


HOVER ACTION (cursor)

IMPERATIVE:
  const myDiv = document.createElement('div');
const myButton = document.createElement('button');


Button.style.css(backgrounColor: red) // rerender
Button.style.css(textDecoration: none) // rerender
Button.style.css(border: 1px red solid)
if (day) {
  Button.style.css(backgrounColor: black)
}

myDiv.appendChild(myButton);
document.body.appendChild(myDiv);

// ----------

const DECLARATIVE = {
  stateIdle: {
    type: 'button',
    backgrounColor: white,
    textDecoration: underline
  },
  stateHoverd: {
    type: 'button',
    backgrounColor: red,
    textDecoration: none,
    border: 1px red solid
  }
}

const DECLARATIVE_stateIdle = constructorFuntion({
  type: 'div',
  attributes: {...},
  children: [
    {
      type: 'button', // stateIdle
      attributes: {
        backgrounColor: white,
        textDecoration: underline
      }
  ],
})

const DECLARATIVE_stateIdleNightTheme = constructorFuntion({
  type: 'div',
  attributes: {...},
  children: [
    {
      type: 'button', // stateIdle
      attributes: {
        backgrounColor: black,
        textDecoration: underline
      }
  ],
})

const DECLARATIVE_stateHoverd = constructorFuntion({
  type: 'div',
  children: [
    {
      type: 'button', // stateIdle
      attributes: {
        style: {
          backgrounColor: red,
          textDecoration: none,
          border: 1px red solid
        }
      },
    // children?
  ],
})

const DECLARATIVE_stateIdle = () => {
  return <div><button style={{
    backgrounColor: red,
    textDecoration: none,
    border: 1px red solid
  }}></div>
}

  <DECLARATIVE_stateIdle>
    <DECLARATIVE_stateIdleNightTheme>
      <DECLARATIVE_stateHoverd>
        ------


        React.render(DECLARATIVE); --- >




        IMPERATIVE -- imperator: exactly what to do -- micro menager
        1. step, 2 step, 3 step...




        button(read-message)

        -- document.appendChild

        -- document.classList

        -- document...


        DECLARATIVE -- state element per time
        -- like state machine










