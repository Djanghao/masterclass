# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/5985922/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/5985922/)

---

Loop through each element arr1[i].
For each arr1[i], check all elements arr2[j] to see if all differences |arr1[i] - arr2[j]| are greater than d.
If arr1[i] is sufficiently far from all elements in arr2, increment the count.
Return the count as the distance value.

# Complexity
- Time complexity: 7ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.79mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let result: number[] = []
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.every(e => Math.abs(arr1[i] - e) > d)) {
          result.push(arr1[i])
        }
    }
    return result.length
};
```