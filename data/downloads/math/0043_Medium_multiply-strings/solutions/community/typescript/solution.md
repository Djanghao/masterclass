# Multiplication in Typescript

**Author:** pranjaljain0
**Votes:** 30
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/1241693/](https://leetcode.com/problems/multiply-strings/solutions/1241693/)

---

While doing this solution I realized a very important thing that was, While performing multiplication operation in Typescript for relatively large numbers, the end result is not perfect multiplication. also
when you try to reverse engineer by dividing the result the result are the same. with my solution you can As a result, you can multiply two 64-digit numbers. The predefined operator gives the correct result, but it loses a lot of precision because the largest integer JavaScript can display is 2\u2075\xB3-1 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

```
const number1 = 3141592653589793238462643383279502884197169399375105820974944592;
const number2 = 2718281828459045235360287471352662497757247093699959574966967627;
```
[wiki/Multiplication_algorithm](http://en.wikipedia.org/wiki/Multiplication_algorithm)