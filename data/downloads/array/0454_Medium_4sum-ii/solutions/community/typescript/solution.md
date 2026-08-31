# TypeScript O(n^2), Easy to understand

**Author:** dostapenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/1745204/](https://leetcode.com/problems/4sum-ii/solutions/1745204/)

---

```
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const getSums = (arr1: number[], arr2: number[]): number[] => {
    const sums = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        sums.push(arr1[i] + arr2[j]);
      }
    }

    return sums;
  };

  const n1AndN2Sums = getSums(nums1, nums2);
  const n3AndN4Sums = getSums(nums3, nums4);

  const n3AndN4SumsMap: { [k: string]: number } = {};
  for (let i = 0; i < n3AndN4Sums.length; i++) {
    const n = n3AndN4Sums[i];
    if (!n3AndN4SumsMap[n]) {
      n3AndN4SumsMap[n] = 0;
    }
    n3AndN4SumsMap[n]++;
  }

  let solutions = 0;
  for (const sum of n1AndN2Sums) {
    const negativeSum = -1 * sum;
    if (negativeSum in n3AndN4SumsMap) {
      solutions += n3AndN4SumsMap[negativeSum];
    }
  }

  return solutions;
};
```