# JS Solution - Greedy

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/4614990/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/4614990/)

---

Pro tip: **\u7231\u5C0F\u8C22 \uD83D\uDC9C**

# Complexity
- Let `n = flowers.length`
- Time complexity: $$O(nlogn)$$
- Space complexity: $$O(n)$$

# Code
```js
let suf = Array(100001).fill(0);

/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function (flowers, newFlowers, target, full, partial) {
  let n = flowers.length;
  flowers.sort((a, b) => b - a);
  let res = 0;

  let lastIndex = n - 1;
  let minIndex = n - 2;
  suf[n - 1] = 0;
  suf[n] = 0;

  for (; minIndex >= 0; --minIndex) {
    if (flowers[minIndex] >= target) break;

    suf[minIndex] =
      suf[minIndex + 1] +
      (flowers[minIndex] - flowers[minIndex + 1]) * (n - lastIndex);

    if (suf[minIndex] > newFlowers) break;
    if (flowers[minIndex] != flowers[minIndex - 1]) lastIndex = minIndex;
  }
  ++minIndex;
  let min = Math.min(
    target - 1,
    flowers[minIndex] +
      Math.floor((newFlowers - suf[minIndex]) / (n - minIndex))
  );

  for (let i = 0; i < n; ++i) {
    if (flowers[i] >= target) {
      continue;
    }
    res = Math.max(res, i * full + min * partial);
    
    if (target - flowers[i] > newFlowers) break;
    newFlowers -= target - flowers[i];
    flowers[i] = target;
    while (
      minIndex <= i ||
      newFlowers < suf[minIndex] ||
      flowers[minIndex] == flowers[minIndex - 1]
    )
      ++minIndex;
    min = Math.min(
      target - 1,
      flowers[minIndex] +
        Math.floor((newFlowers - suf[minIndex]) / (n - minIndex))
    );
  }
  if (flowers[n - 1] >= target) res = Math.max(res, n * full);

  return res;
};
```