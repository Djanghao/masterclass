# JS solution - NOT O(26n) or O(nlogn) - greedy + bitmask - O(n)

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4535737/](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4535737/)

---

The approach is just partition the original string, then for each partition, we'll greedily choose which indices to change. As suggested in the code, there are only 4 of them.
It took me 2 days to find the first 3 cases, a WA gave me case #4 lol. Tough one, eww.

Lil Xie is cute btw. \u4E0D\u8981\u6B3A\u8D1F\u5C0F\u8C22 \uD83E\uDD7A

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```js
let FULL_CHAR_STATE = 67108863; // 2^26 - 1
let counters = new Uint16Array(26);

/**
 * The largest index r such that [i, r) has at most k distinct chars
 */
let longestKs = new Uint16Array(10002);
/**
 * The largest index r such that [i, r) has at most k-1 distinct chars
 */
let longestK1s = new Uint16Array(10002);

let encodedKs = new Uint32Array(10002);
let dp = new Uint16Array(10002);

function canAdd(code1, code2) {
  return (code1 | code2) != FULL_CHAR_STATE;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
  if (k == 26) return 1;

  let n = s.length;
  if (k == 1) {
    let res = 0;
    let addition = 0;
    for (let i = 0; i < n; ++i) {
      if (s[i] != s[i - 1]) ++res;
      else {
        addition = Math.max(addition, 1);
        if (s[i] == s[i + 1]) addition = 2;
      }
    }

    return res + addition;
  }

  let cnt = 0;
  let code = 0;
  let r = -1;

  counters.fill(0);
  for (let l = 0; l < n; ++l) {
    if (l) {
      let ch = s.charCodeAt(l - 1) - 97;
      --counters[ch];
      if (!counters[ch]) {
        --cnt;
      }
    }
    while (r < n && cnt < k) {
      ++r;
      if (r == n) break;
      let ch = s.charCodeAt(r) - 97;
      ++counters[ch];
      if (counters[ch] == 1) {
        ++cnt;
      }
    }

    longestK1s[l] = r;
  }

  counters.fill(0);
  cnt = 0;
  r = -1;
  for (let l = 0; l < n; ++l) {
    if (l) {
      let ch = s.charCodeAt(l - 1) - 97;
      --counters[ch];
      if (!counters[ch]) {
        --cnt;
        code &= ~(1 << ch);
      }
    }
    while (r < n && cnt <= k) {
      ++r;
      if (r == n) break;
      let ch = s.charCodeAt(r) - 97;
      if (!counters[ch]) {
        ++cnt;
        code |= 1 << ch;
      }
      ++counters[ch];
    }
    longestKs[l] = r;
    encodedKs[l] = code;
    if (r < n) {
      encodedKs[l] ^= 1 << (s.charCodeAt(r) - 97);
    }
  }
  encodedKs[n] = 0;
  encodedKs[n + 1] = 0;
  encodedKs[n + 2] = 0;
  longestKs[n] = n;
  longestKs[n + 1] = n;
  longestKs[n + 2] = n;
  longestK1s[n] = n;
  longestK1s[n + 1] = n;
  longestK1s[n + 2] = n;

  dp.fill(0, 0, n + 3);

  for (let i = n - 1; i >= 0; --i) {
    dp[i] = dp[longestKs[i]] + 1;
  }

  let res = dp[0];
  let currStart = 0;
  let currEnd = longestKs[0];
  let prevCode = 0;
  let currCode = encodedKs[0];
  let cntPre = 1;

  while (true) {
    let lk = currEnd - currStart;
    if (lk > k) {
      let lk1 = longestK1s[currStart] - currStart;

      // if there are k consecutive different chars
      if (lk1 + 1 == k) {
        // changing the char at currStart + k
        if (canAdd(currCode, encodedKs[currStart + k + 1])) {
          res = Math.max(res, cntPre + 1 + dp[longestK1s[currStart + k + 1]]);
        }

        // changing the first occurrence of the first duplicated char
        if (
          s[currStart] != s[currStart + k] ||
          canAdd(prevCode, encodedKs[currStart + 1])
        ) {
          res = Math.max(res, cntPre + 1 + dp[longestKs[currStart + k]]);
        }
      } else {
        // changing the second occurrence of the first duplicated char
        res = Math.max(res, cntPre + dp[longestK1s[currStart]]);

        // changing the first char x such that the subarray [currStart, x) has K distinct chars
        if (longestK1s[currStart] < n && canAdd(currCode, encodedKs[longestKs[currStart] + 2])) {
          res = Math.max(
            res,
            cntPre + 1 + dp[longestK1s[longestK1s[currStart] + 2]]
          );
        }
      }
    }

    if (currEnd == n) break;
    currStart = currEnd;
    currEnd = longestKs[currEnd];

    prevCode = currCode;
    currCode = encodedKs[currStart];
    ++cntPre;
  }

  return res;
};
```