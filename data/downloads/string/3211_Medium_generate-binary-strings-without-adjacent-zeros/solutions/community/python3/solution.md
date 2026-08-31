# Generating Binary Strings with Valid Substring Conditions

**Author:** himajakinthada
**Votes:** 14
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431780/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431780/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of the function validStrings is to generate all binary strings of length n such that every substring of length 2 contains at least one '1'. This can be achieved by iteratively constructing longer strings based on the validity of shorter strings.

# Approach
<!-- Describe your approach to solving the problem. -->
Approach
1. Start with an initial list valid containing the strings '0' and '1'. These are the valid binary strings of length 1.

2. Use a loop to iterate n-1 times (since we've already initialized for length 1).
Within each iteration, create a new list new_valid to store updated valid strings.

3. For each string s in the current valid list:
Check the last character of s.
If the last character is '1', append both '0' and '1' to s to form new valid strings.
If the last character is '0', append only '1' to s to ensure every substring of length 2 contains at least one '1'.
4. Update the valid list with the contents of new_valid for the next iteration.
Output:

5. After completing the iterations, the valid list will contain all valid binary strings of length n.

# Code
```
class Solution:
    def validStrings(self, n: int) -> List[str]:
        if n == 1:
            return ['0', '1']
        valid = ['0', '1']
        
        for _ in range(n - 1):
            new_valid = []
            for s in valid:
                if s[-1] == '1':
                    new_valid.append(s + '0')
                    new_valid.append(s + '1')
                else:
                    new_valid.append(s + '1')
            valid = new_valid
        
        return valid



        
```