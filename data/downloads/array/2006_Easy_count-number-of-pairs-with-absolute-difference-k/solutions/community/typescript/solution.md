# 100% faster "O(n) time complexity" using hast table

**Author:** mohitAhirwal
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5073495/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5073495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
`|nums[i] - nums[j]| = k;`
`nums[i] - nums[j] = +k || -k;`
`nums[i] = nums[j] + k || nums[j] - k;`

# Approach
<!-- Describe your approach to solving the problem. -->
- According to the equation above, we need to store `nums[i]` in a Map along with its frequency.
-  Since we have `nums[j]` and `k`, we can retrieve `nums[i]` from the map to find the frequency of how many times we encountered it previously.

# Complexity
- Time complexity:
 $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countKDifference(nums: number[], k: number): number {
  const countMap = new Map<number, number>();

  let result = 0;
  for (const num of nums) {
    // retrieving the frequency of nums[i], we encountered before
    const plusCount = countMap.get(num + k) ?? 0;
    const minusCount = countMap.get(num - k) ?? 0;

    // adding the frequency of nums[i] to the result
    if (plusCount || minusCount) {
      result += plusCount + minusCount;
    }

    // stores the frequency of nums[i]
    const count = countMap.get(num) ?? 0;
    countMap.set(num, count + 1);
  }

  return result;
};
```