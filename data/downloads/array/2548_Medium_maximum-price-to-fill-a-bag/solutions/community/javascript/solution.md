# Javascript - Greedy

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3107295/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3107295/)

---

```
/**
 * @param {number[][]} items
 * @param {number} capacity
 * @return {number}
 */
var maxPrice = function (items, capacity) {
  let ans = 0;
  items.sort(customSort);
  let sumOfWeight = 0;
  let currCapacity = capacity;

  for (const [price, weight] of items) {
    const taken = Math.min(weight, currCapacity);
    ans += (price / weight) * taken;
    currCapacity -= taken;

    sumOfWeight += weight;
  }

  return sumOfWeight < capacity ? -1 : ans;
};

function customSort(a, b) {
  const resultOne = a[0] / a[1];
  const resultTwo = b[0] / b[1];

  return resultTwo - resultOne;
}

```