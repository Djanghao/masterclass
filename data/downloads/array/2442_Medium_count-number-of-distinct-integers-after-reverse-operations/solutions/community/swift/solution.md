# Using set, easy to understand

**Author:** swarmeme
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5026197/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5026197/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countDistinctIntegers(_ nums: [Int]) -> Int {
        var nums = Set(nums)
        
        for i in nums{
            var res = 0
            var temp = i
            while temp != 0{
                var tem = temp % 10
                res = res*10 + tem
                temp /= 10
            }
            nums.insert(res)
        }
        return nums.count
    }
//upvote pls :)
}
```