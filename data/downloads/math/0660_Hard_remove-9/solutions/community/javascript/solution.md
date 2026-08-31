# Simple Maths | 9-Base System

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-9/solutions/6112737/](https://leetcode.com/problems/remove-9/solutions/6112737/)

---

**Let me explain this in a simpler way:**
1. Think of it like making a list of numbers but skipping any number that has a 9 in it:
1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21...
The key insight is this: if you want to find the nth number in this sequence, you can convert n to base-9.

**$$Examples:$$**

- When n = 9, it converts to "10" in base-9, which gives us 10
- When n = 17, it converts to "18" in base-9, which gives us 18
- When n = 18, it converts to "20" in base-9, which gives us 20

**This works because:**

- Base-9 only uses digits 0-8
- When you convert back to decimal, it naturally skips any number containing 9

## Using Recursion

```javascript []
var newInteger = n => {
  return n < 9 ? n : newInteger(Math.floor(n / 9)) * 10 + n % 9;
}
```

## Simple parseInt

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function (n) {
  return parseInt(n.toString(9))
};
```


## Iterative way

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function (n) {
  let res = 0
  let place = 1

  //Convert n to base-9 and map the digits to 1-9
  while (n > 0) {
    res += (n % 9) * place
    n = Math.floor(n / 9)
    place *= 10
  }
  return res
};
```



