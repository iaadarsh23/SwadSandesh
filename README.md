#things i have learned here and used-

1. States in react- a build in component that allows the components to manage the data that can vary or change over time
2. whenever the data changes state will rerender the component to reflect the updated data.
3. usg ex- const [count, setCount]= React.useState('0');
4. always use- we should use the call back function inside the state setter function when we want the new value by using the old value, it will behve in right manner.
   5.ternary operater- isCondition ? istrue: isfalse.
5. use the aria-label to display what is happening on the element;

#working with arrays-

1. const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
2. we dont have to directly modify the state in react
3. setterFunction(prev=>[...prev,"item to add"])//it updates the array by providing the brand new array to the old array
