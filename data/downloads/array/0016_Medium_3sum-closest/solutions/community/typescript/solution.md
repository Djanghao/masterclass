# TypeScript/JavaScript O(n2) Solution

**Author:** halshar
**Votes:** 3
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/4081977/](https://leetcode.com/problems/3sum-closest/solutions/4081977/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function threeSumClosest(nums: number[], target: number): number {
  // this sum is similar to that of 3 sum
  // we'll have 3 pointers and one pointer will be constant
  // while the other 2 pointers will keep iterating
  // but here instead of exactly finding the target we need
  // to find the closest answer to the target
  const n = nums.length;
  let ans = 0;
  // we need to find the closest diff to our target
  // so let's assume the highest possible diff
  let diff = Number.MAX_SAFE_INTEGER;

  // we'll sort the array so it becomes easier to work with pointers
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const tmp = Math.abs(target - sum);
      // update the lowest diff and sum values
      if (tmp < diff) {
        ans = sum;
        diff = tmp;
      }

      // if the sum is greater than target then
      // decrease k so sum becomes smaller
      // else sum is less than target then
      // increase j so sum becomes greater
      if (sum > target) k--;
      else j++;
    }
  }
  return ans;
};
```