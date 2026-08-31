# 306: Time 95%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 14
**Link:** [https://leetcode.com/problems/additive-number/solutions/3240422/](https://leetcode.com/problems/additive-number/solutions/3240422/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This solution works by checking all possible combinations of the first two numbers, and then iterating through the rest of the string to check if it forms a valid additive sequence. We start by iterating over all possible positions for the second number, which must be at least one position after the first number. We then check if either of the first two numbers have leading zeros, which would make the sequence invalid. We then initialize the first two numbers and iterate through the rest of the string, calculating the next number in the sequence and checking if it matches the remaining string. If it does, we continue iterating with the next number in the sequence, and if we reach the end of the string, we have found a valid additive sequence. If we have checked all possible combinations of the first two numbers without finding a valid sequence, we return False. This solution has a time complexity of O(n^3), which is better than the brute force solution.

# Complexity
- Time complexity:
95%

- Space complexity:
69.78%

# Code
```
class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        n = len(num)
        
        # check if the sequence is valid starting from the first two numbers
        for i in range(1, n):
            for j in range(i+1, n):
                # if the first two numbers have leading zeros, move on to the next iteration
                if num[0] == "0" and i > 1:
                    break
                if num[i] == "0" and j > i+1:
                    break
                    
                # initialize the first two numbers and check if the sequence is valid
                num1 = int(num[:i])
                num2 = int(num[i:j])
                k = j
                while k < n:
                    # calculate the next number in the sequence and check if it matches the remaining string
                    num3 = num1 + num2
                    if num[k:].startswith(str(num3)):
                        k += len(str(num3))
                        num1 = num2
                        num2 = num3
                    else:
                        break
                if k == n:
                    return True
                
        # if no valid sequence is found, return False
        return False

```