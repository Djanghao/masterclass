# Efficient JS solution - DP O(N^2) (Beat 100% time)

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/4646468/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/4646468/)

---

![image.png](./images/0.png)

Pro tip: Xi\xE8 \uD83D\uDC9C She's really cute tho.

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(n)$$

# Code
```js
let MOD = 1000000007;
let pre = new Uint32Array(201);
let cur = new Uint32Array(201);

/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function (s) {
  let n = s.length;
  cur.fill(0);
  cur[0] = 1;

  for (let i = 0; i < n; ++i) {
    let tem = pre;
    pre = cur;
    cur = tem;

    if (s[i] == "I") {
      let sum = pre[0];
      cur[0] = 0;
      for (let j = 1; j <= i + 1; ++j) {
        cur[j] = sum;
        sum = (sum + pre[j]) % MOD;
      }
    } else {
      let sum = 0;
      cur[i + 1] = 0;
      for (let j = i; j >= 0; --j) {
        sum = (sum + pre[j]) % MOD;
        cur[j] = sum;
      }
    }
  }

  let res = 0;
  for (let i = 0; i <= n; ++i) res = (res + cur[i]) % MOD;

  return res;
};
```