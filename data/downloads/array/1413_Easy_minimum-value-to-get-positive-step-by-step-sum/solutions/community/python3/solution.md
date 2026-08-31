# Python Simplest Solution With Explanation | Beg to adv | Prefix sum

**Author:** rlakshay14
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2315920/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2315920/)

---

```python
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        prefix_sum = 0 # taking this variable to store prefix sum
        min_start_value = 1 # as stated in the question min startValue shouldn`t be less then 1.
        
        for num in nums: # traversing through the provided list
            prefix_sum += num # calculating prefix sum
            min_start_value = max(min_start_value, 1-prefix_sum) # Taking max as value shouldnt be less them 1. Subtracting 1 to convert the negetives to positives.
        return min_start_value
```

```python
Values of prefix_sum & min_start_values would be as follows for better understanding:-
prefix_sum: 0,-3,-1,-4,0,2
min_start_value:1,4,4,5,5,5
```

***Found helpful, Do upvote !!***