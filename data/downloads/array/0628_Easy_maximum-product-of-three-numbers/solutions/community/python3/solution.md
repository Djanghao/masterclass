# easiest two lines of code#python3

**Author:** Mohammad_tanveer
**Votes:** 44
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3309876/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3309876/)

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
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        return max(nums[-1]*nums[-2]*nums[-3],nums[0]*nums[1]*nums[-1])
        #please do upvote as it makes me to code more.
```
# consider upvoting
![57jfh9.jpg](./images/0.jpeg)
