# ⭐Easy Python Solution | Convert time to minutes

**Author:** anCoderr
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908786/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908786/)

---

1. Convert times into minutes and then the problem becomes simpler. 
2. To minimize the number of total operations we try to use the largest possible change from `[60,15,5,1]` till possible.
```
class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        current_time = 60 * int(current[0:2]) + int(current[3:5]) # Current time in minutes
        target_time = 60 * int(correct[0:2]) + int(correct[3:5]) # Target time in minutes
        diff = target_time - current_time # Difference b/w current and target times in minutes
        count = 0 # Required number of operations
		# Use GREEDY APPROACH to calculate number of operations
        for i in [60, 15, 5, 1]:
            count += diff // i # add number of operations needed with i to count
            diff %= i # Diff becomes modulo of diff with i
        return count
```
