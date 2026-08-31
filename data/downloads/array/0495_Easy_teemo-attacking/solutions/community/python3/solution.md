# 495: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 11
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/3283028/](https://leetcode.com/problems/teemo-attacking/solutions/3283028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Begin by defining a function findPoisonedDuration that takes in two arguments - a list timeSeries containing non-decreasing integers and an integer duration.

2. Check if the list timeSeries is empty. If it is, return 0 as there are no poison attacks.

3. Get the length of the list timeSeries and initialize a variable poisoned_time to 0.

4. Iterate through the list timeSeries from index 0 to n-2, where n is the length of timeSeries.

5. At each iteration, calculate the duration of the poison effect by finding the minimum value between duration and the difference between the next and current element in the list.

6. Add the calculated duration of the poison effect to the poisoned_time variable.

7. Once the loop is completed, add the duration of the last poison effect to the poisoned_time variable.

8. Return the value of poisoned_time.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
    if not timeSeries:
        return 0
    n = len(timeSeries)
    poisoned_time = 0
    
    for i in range(n-1):
        # calculate the duration of the poison effect
        duration_of_effect = min(duration, timeSeries[i+1]-timeSeries[i])
        poisoned_time += duration_of_effect
        
    # add the duration of the last poison effect
    poisoned_time += duration
    
    return poisoned_time

```