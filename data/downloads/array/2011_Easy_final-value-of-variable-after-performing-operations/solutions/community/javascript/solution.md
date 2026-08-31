# Javascript One-line Solution [Time:81% | Mem:92%] w/ documentation

**Author:** Sporego
**Votes:** 41
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1520355/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1520355/)

---

```
const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)
```

# Common Questions (How is this one liner is achieved?)
**Why are we using `++acc` instead of `acc++`?**
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
**Documentation**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

**How does `Array.prototype.reduce()` work?**
It is important to understand two concepts:
* What is a reducer?
	* Example: `const reducer = (accumulator, currentValue) => { ... } `
	* A "reducer" is an user-supplied callback function that walks through the array in ascending (index) order, running once at each index.
* What is an accumulator?
	* An "accumulator" is where we *store/remember* the *accumulated* value *so far*, which is also the last value returned by the last ran instance of "reducer".

Basically `Array.prototype.reduce()` can be thought as a fancy way to write an ascending `for` loop. During each loop the "reducer" is ran once and returns a value which is the accumulator that is passed on to the next instance of reducer. Kind of like the following:

```
let array = [...]
 for (let i=0;i<arr.length;i++) {
// take accumulator from previous instance (at array[i-1]) and currentValue at index (at array[i])
// do some reducing (bsically do some stuff)
 return accumulator // which will be passed to the next instance of reducer which will be run at array[i+1]
 }
```
**Documentation**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
**Documentation**: (TypedArray) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce

**What is a ternary `condition ? exprIfTrue : exprIfFalse` ?**
* **condition**
	* An expression whose value is used as a condition.
* **exprIfTrue**
	* An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to true).
* **exprIfFalse**
	* An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).

**Documentation**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
