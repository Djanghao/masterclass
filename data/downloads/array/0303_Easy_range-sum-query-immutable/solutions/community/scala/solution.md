# Sleek One Liner Solution - {Logic can be used in other languages too}

**Author:** leagueflyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/4057475/](https://leetcode.com/problems/range-sum-query-immutable/solutions/4057475/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
We simply know the value of i and j.
We also know that we gotta include both i and j....
Simply do list slicing 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
O(1)

# Code
```
class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums 
        
    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left:right+1])
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
```