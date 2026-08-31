# Simple JavaScript solution using BigInt

**Author:** thepatriot
**Votes:** 135
**Link:** [https://leetcode.com/problems/add-binary/solutions/385148/](https://leetcode.com/problems/add-binary/solutions/385148/)

---

Greetings comrades:

Below is my boring but clear solution, using the proposed [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) object.

The idea is to use inputs, `a` and `b` to build two binary literals.  Calculating the sum is done by calling the `BigInt` function on our binary literals, adding them together and returning the sum with a call to the `toString` method with 2 as the argument, since we are working with binary numbers.

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};
```

Thanks for looking at my solution.  Comments/feedback is appreciated. :)