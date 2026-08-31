# JS Solution - Digit DP

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4519607/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4519607/)

---

\u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A
\u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A
\u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A
\u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A
\u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A

# Complexity
- Time complexity: $$O(log(start * finish))$$
- Space complexity: $$O(log(start * finish))$$

# Code
```js
/**
 * @param {number} num
 * @param {number} limit
 * @param {string} s
 */
function adjust(num, limit, s) {
  let sn = parseInt(s);
  let sufMod = 10 ** s.length;

  let suf = num % sufMod;
  num = Math.floor(num / sufMod);
  if (suf < sn) --num;

  if (num <= 0) return num + 1;

  let sNum = num.toString();
  let res = sNum.charCodeAt(0) - 48;
  let tight = 1;
  if (res > limit) {
    return (limit + 1) ** sNum.length;
  }
  
  for (let i = 1; i < sNum.length; ++i) {
    res *= (limit + 1);
    
    if (tight) {
      let c = sNum.charCodeAt(i) - 48;
      if (c > limit) {
        tight = 0;
        res += limit + 1;
      }
      else {
        res += c;
      }
    }
  }

  return res + tight;
}
/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
  --start;

  let ss = adjust(start, limit, s);
  let ff = adjust(finish, limit, s);

  return ff - ss;
};
```