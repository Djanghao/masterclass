# PYTHON || OPTIMAL SOLUTION || 100% EFFICIENT || EASY TO UNDERSTAND ||

**Author:** Adit_gaur
**Votes:** 19
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/5214427/](https://leetcode.com/problems/repeated-string-match/solutions/5214427/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The intuition behind this solution is to find the minimum number of times the string 'a' needs to be repeated so that it contains the string 'b' as a substring. This can be achieved by iteratively repeating 'a' and checking if 'b' is a substring of the repeated string.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate 'repeat', which is the minimum number of times 'a' needs to be repeated to reach the length of 'b'.
2. Initialize 'count' to 1.
3. In a loop that continues until 'count' exceeds 'repeat + 2':
  a. Check if 'b' is a substring of 'a' repeated 'count' times.
  b. If 'b' is found, return 'count'.
  c. If 'b' is not found, increment 'count' by 1.
4. If 'b' is not found even after repeating 'a' up to 'repeat + 2' times, return -1.

# Complexity
- Time complexity: The time complexity of the solution is O(n * m), where n is the length of the string a, and m is the length of the string b. This is because the code iterates over a up to repeat + 2 times (which is bounded by the length of b), and performs substring checking on b, which has a linear time complexity.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(n), where n is the length of the string a. This is because the code creates a new string by repeating a up to repeat + 2 times, which can have a maximum length of (repeat + 2)*n.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def repeatedStringMatch(self, a, b):
        repeat = (len(b)//len(a))
        count = 1
        while count <= repeat + 2:
            if b in a*count:
                return count
            else:
                count += 1
        return -1
```
![7c17f983-3b8b-4738-b722-c1c1466f9510_1682940288.2823734.jpeg](./images/0.jpeg)