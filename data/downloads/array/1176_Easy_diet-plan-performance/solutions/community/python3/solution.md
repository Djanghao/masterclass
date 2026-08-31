# Python Solution

**Author:** mansoorafzal
**Votes:** 3
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/2838025/](https://leetcode.com/problems/diet-plan-performance/solutions/2838025/)

---

```
class Solution:
    def dietPlanPerformance(self, calories: List[int], k: int, lower: int, upper: int) -> int:
        n = len(calories)
        left = 0
        right = 0
        running_sum = 0
        points = 0
        
        while right < n:
            running_sum += calories[right]
            
            if right - left + 1 == k:
                if running_sum < lower:
                    points -= 1
                    
                elif running_sum > upper:
                    points += 1
                
                running_sum -= calories[left]
                left += 1
            
            right += 1
            
        return points
```