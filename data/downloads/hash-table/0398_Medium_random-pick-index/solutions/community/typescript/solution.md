# Binary search for O(k logn) picking

**Author:** ByteMeHarder
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/5904629/](https://leetcode.com/problems/random-pick-index/solutions/5904629/)

---

# Intuition
Search for the target in a sorted list.

# Approach
Sort the array.  Binary search for the target, and get the left and right index bounds of all the target values.  Then return a random index in that range.

BUT, since we need to return the _original_ index of the array, we keep track of the sorted _indices_, not the numbers themselves.  Then we can refer to numbers in the sorted array as `nums[sortedIdxs[i]]`.

# Complexity
- Time complexity:
$$O(nlogn)$$ to construct
$$O(klogn)$$ to pick, where $$k$$ is the number of times target appears in the array.

- Space complexity:
$$O(n)$$ for the sorted index array.

# Code
```typescript []
class Solution {
  nums: number[]
  i: number[]
  constructor(nums: number[]) {
    this.i = _.range(nums.length).sort((i, j) => nums[i] - nums[j]);
    this.nums = nums;
  }

  pick(target: number): number {
    let left = 0;
    let right = this.nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.nums[this.i[mid]] < target) {
        left = mid + 1;
      } else if (target < this.nums[this.i[mid]]) {
        right = mid - 1;
      } else {
        left = mid;
        break;
      }
    }
    right = left;
    while (this.nums[this.i[left]] === target) left--;
    while (this.nums[this.i[right]] === target) right++;
    return this.i[Math.floor(Math.random() * (right - left - 1) + (left + 1))];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
```