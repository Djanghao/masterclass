# JS solution - Greedy + Merge Sort

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/4560810/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/4560810/)

---

![image.png](./images/0.png)

Pro tip: Love lil Xi\xE8 \uD83D\uDC9C \u7231\u5C0F\u8C22 \uD83D\uDC9C
Like, seriously, how solutions with `slice` and `split` have better time smh that's weird.

# Complexity
- let `n = s.length`; `m = alphabet size = 26`
- Time complexity: $$O(n(logn + m))$$
- Space complexity: $$O(n + m)$$

# Code
```js
let first = new Int16Array(26);
let target = new Int16Array(2000);
let msTemp = new Int16Array(2000);

function mergeSort(l, r) {
  if (l >= r) return 0;

  let m = (l + r) >> 1;
  let inv = mergeSort(l, m) + mergeSort(m + 1, r);

  let li = l;
  let ri = m;

  for (; li <= m; ++li) {
    while (ri < r && target[ri + 1] < target[li]) ++ri 
    inv += ri - m;
  }
  
  li = l;
  ri = m+1;
  for (let i = l; i <= r; i++) {
    if (li > m) msTemp[i] = target[ri++];
    else if (ri > r) msTemp[i] = target[li++];
    else if (target[li] < target[ri]) msTemp[i] = target[li++];
    else msTemp[i] = target[ri++];
  }
  for (let i = l; i <= r; i++) target[i] = msTemp[i];

  return inv;
}

/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function (s) {
  let n = s.length;
  let h = n >> 1;

  let cur = 0;

  first.fill(-1);
  target.fill(-1, 0, n);

  for (let i = n - 1; i >= 0; --i) {
    if (target[i] >= 0) continue;

    let c = s.charCodeAt(i) - 97;
    do {
      ++first[c];
    } while (s[first[c]] != s[i]);

    if (i === first[c]) {
      target[i] = h;
    } else {
      target[first[c]] = cur++;
      target[i] = n - cur;
    }
  }

  return mergeSort(0, n - 1);
};
```