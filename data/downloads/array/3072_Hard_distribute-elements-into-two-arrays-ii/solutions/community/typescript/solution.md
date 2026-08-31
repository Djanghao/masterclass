# 100% beats with ts

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/5076267/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/5076267/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function resultArray(nums: number[]): number[] {
  // put the frequency data into a PriorityQueue
  const arr1 = [nums[0]], arr2 = [nums[1]];

  let sortedArr1 = [...arr1], sortedArr2 = [...arr2];
  // len > 3
  const len = nums.length;
  for (let i = 2; i < len; i++) {
    const n = nums[i];
    const idx1 = findFirstBigger(sortedArr1, n);
    const idx2 = findFirstBigger(sortedArr2, n);
    if (arr1.length - idx1 < arr2.length - idx2) {
      arr2.push(n);
      sortedArr2.splice(idx2, 0, n)
    } else if(arr1.length - idx1 > arr2.length - idx2) {
      arr1.push(n);
      sortedArr1.splice(idx1, 0, n);
    } else {
      if (arr1.length > arr2.length) {
        arr2.push(n);
        sortedArr2.splice(idx2, 0, n)
      } else {
        arr1.push(n);
        sortedArr1.splice(idx1, 0, n);
      }
    }
  }
  return arr1.concat(arr2);
};

function findFirstBigger(arr: number[], n: number) {
  let l = 0, r = arr.length - 1;
  let res = Infinity;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] <= n) {
      l = mid + 1;
    } else if (arr[mid] > n) {
      r = mid - 1;
      res = mid;
    }
  }
  return res;
}

```