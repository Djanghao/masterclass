# Sort list, fix 2 pointers, collapse 2 other pointers (clean w/ explanation)

**Author:** sdk__
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum/solutions/5394987/](https://leetcode.com/problems/4sum/solutions/5394987/)

---

# Explanation

We follow the same intuition as finding triplets that sum to the target.

We fix the first and second pointers, then collapse the third and fourth pointers from the remaining list's beginning and end. Because the list is sorted, we can easily collapse the pointers inward to fine-tune the sum toward the target.

We skip duplicates by ensuring each pointer is the "first" of its kind. Note that the first and second pointers may be adjacent, in which case this check should be ignored for the latter.

# Code

```ts
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const sums: Array<[number, number, number, number]> = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j - i > 1 && nums[j - 1] === nums[j]) {
        continue;
      }
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum < target) {
          do {k++} while (nums[k - 1] === nums[k]);
        } else if (sum > target) {
          do {l--} while (nums[l] === nums[l + 1]);
        } else {
          sums.push([nums[i], nums[j], nums[k], nums[l]]);
          do {k++} while (nums[k - 1] === nums[k]);
          do {l--} while (nums[l] === nums[l + 1]);
        }
      }
    }
  }
  return sums;
}
```

# Complexity

- Time: $O(n^3)$ where $n$ is the length of the input list. We sort the list then iterate it in a triple loop, which runs in $O(n\\log n + n^3) = O(n^3)$ time.
- Space: $O(1)$, since we use no extra (nonconstant) space. We don't count the space of the output list.