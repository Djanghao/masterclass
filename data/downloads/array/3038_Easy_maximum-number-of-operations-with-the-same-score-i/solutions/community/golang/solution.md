# go

**Author:** user6510Bp
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4999932/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4999932/)

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
func maxOperations(nums []int) int {

 
        target_sum := nums[0] + nums[1]
   
        operations_count := 0
     
        n := len(nums)
      
        for i := 0; i + 1 < n && nums[i] + nums[i + 1] == target_sum; i += 2 {
          
            operations_count++
        }
        
        return operations_count
    }
```