# ⚡️JS | TS⚡️ easy explained solution | Two Pointers | O(n) O(1)🔥

**Author:** yakorshak
**Votes:** 60
**Link:** [https://leetcode.com/problems/rotate-array/solutions/3413782/](https://leetcode.com/problems/rotate-array/solutions/3413782/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Two pointers

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, l, r);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  l = 0;
  r = k - 1;
  nums = reverseArr(nums, l, r);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  l = k;
  r = nums.length - 1;
  nums = reverseArr(nums, l, r);
};

function reverseArr(nums: number[], l: number, r: number): number[] {
    while(l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  return nums;
}

```
Please do not forget to upvote the solution in case it is helpfull for you \uD83D\uDD25