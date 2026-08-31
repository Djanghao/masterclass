# 401: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 28
**Link:** [https://leetcode.com/problems/binary-watch/solutions/3258559/](https://leetcode.com/problems/binary-watch/solutions/3258559/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize an empty list to store the output.
2. Loop through all possible combinations of hours and minutes from 0 to 11 and 0 to 59 respectively.
3. For each combination, count the number of set bits in the binary representation of hours and minutes by using the count() method of the string representation of the binary number.
4. Check if the total number of set bits equals the input parameter turnedOn.
5. If it does, format the hours and minutes into a string with the required format of "HH:MM" and append it to the output list.
6. Return the output list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        output = []
        # Loop through all possible combinations of hours and minutes and count the number of set bits
        for h in range(12):
            for m in range(60):
                if bin(h).count('1') + bin(m).count('1') == turnedOn:  # Check if the number of set bits in hours and minutes equals the target number
                    output.append(f"{h}:{m:02d}")  # Add the valid combination of hours and minutes to the output list
        return output

```