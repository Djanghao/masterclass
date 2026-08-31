# Readable code for Sliding window technique - JS/TS

**Author:** ShaalanMarwan
**Votes:** 4
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/2385328/](https://leetcode.com/problems/fruit-into-baskets/solutions/2385328/)

---

The Algorithm's **time complexity** will be:**O(N)** 
where N is number type of Fruits 
for **space complexity** will be **O(1)**
```
function totalFruit(fruits: number[]): number {
  let maximumFruit = 0;

  let windowStart = 0;

  let fruitsFreq = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let currentFruit = fruits[windowEnd];
    if (!fruitsFreq[currentFruit]) {
      fruitsFreq[currentFruit] = 0;
    }
    fruitsFreq[currentFruit]++;

    while (Object.keys(fruitsFreq).length > 2) {
      let leftFruit = fruits[windowStart];

      fruitsFreq[leftFruit]--;

      if (fruitsFreq[leftFruit] === 0) {
        delete fruitsFreq[leftFruit];
      }
      windowStart++;
    }
    maximumFruit = Math.max(maximumFruit, windowEnd - windowStart + 1);
  }

  return maximumFruit;
}

```