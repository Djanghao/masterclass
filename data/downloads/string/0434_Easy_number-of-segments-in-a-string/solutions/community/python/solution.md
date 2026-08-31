# 434: Space  90.14%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3271747/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3271747/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize the count variable to 0. This variable will keep track of the number of segments in the input string.
```
count = 0
```
2. Iterate over each character in the input string using a for loop and the range function. The for loop will loop through the string character by character.
```
for i in range(len(s)):
```
3. Inside the for loop, check if the current character is not a space and if the previous character is a space or if the current character is the first character in the string. If this condition is true, it means that a new segment has started, so we increment the count variable.
```
if s[i] != ' ' and (i == 0 or s[i-1] == ' '):
    count += 1
```
4. Once the for loop has completed, we have counted all the segments in the input string, so we return the count variable.
```
return count
```
The logic of the code is counting the number of segments in the input string, which is defined as a sequence of non-space characters that are separated by spaces. The code is iterating through each character in the string and checking if it's the start of a new segment. If it is, it increments the count variable. Finally, it returns the count variable which represents the number of segments in the input string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def countSegments(self, s: str) -> int:
        # Initialize the segment count to 0
        count = 0
        
        # Iterate over each character in the string
        for i in range(len(s)):
            # If the current character is not a space and the previous character is a space or it's the first character, increment the count
            if s[i] != ' ' and (i == 0 or s[i-1] == ' '):
                count += 1
        
        # Return the segment count
        return count

```