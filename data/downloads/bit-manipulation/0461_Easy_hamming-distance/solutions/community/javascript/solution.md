# Javascript one line - with explanation

**Author:** paceockerman1010
**Votes:** 18
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/505413/](https://leetcode.com/problems/hamming-distance/solutions/505413/)

---

```js
let hammingDistance = (x, y) => (x^y).toString(2).replace(/0/g,"").length
```
**Explanation**
```js
let hammingDistance = (x, y) =>
```
Creates a function with parameters x and y (the two numbers)
```js
(x^y)
```
Does XOR between the two numbers to turn all the differing bits into 1's and the same bits into 0's
```js
.toString(2)
```
Convert to binary so we can count the number of 1's
```js
.replace(/0/g,"").length
```
Replace all the 0's with nothing using a regex with the global flag, then take the length, which is just the number of 1's remaining and therefore the number of differing bits, which is implicitly returned.