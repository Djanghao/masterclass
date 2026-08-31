# One Liner💯 (Easiest)

**Author:** shehza-d
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622436/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622436/)

---


<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
I sort the input number in string and then matched with the desired outcome. 

# Code
```js
const isFascinating = (n) => "123456789" === `${n}${n * 2}${n * 3}`.split("").sort().join("")
```