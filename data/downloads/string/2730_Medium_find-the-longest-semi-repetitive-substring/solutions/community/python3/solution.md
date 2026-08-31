# ✅ Explained - Simple and Clear Python3 Code✅

**Author:** moazmar
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622357/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622357/)

---

# Intuition
The problem asks us to find the length of the longest semi-repetitive substring in a given string. A semi-repetitive substring is defined as a substring that contains at most one consecutive pair of the same digits.


# Approach
To solve this problem, we can iterate through the string and keep track of the lengths of consecutive substrings with the same digits. We use a dynamic programming approach to store the lengths in the 'tab' array.

We initialize the 'tab' array with the length of the first digit in the string. Then, for each subsequent digit, we check if it is the same as the previous one. If it is, we increment the length of the current substring. Otherwise, we start a new substring by appending a length of 1 to the 'tab' array.

After populating the 'tab' array, we iterate through it to find the maximum length of a semi-repetitive substring. To do this, we compare the sum of the current element and the previous element in the 'tab' array. We keep track of the maximum length encountered so far in the 'res' variable. Finally, we return the maximum length of a semi-repetitive substring, which is the maximum between 'res' and the first element in the 'tab' array.
# Complexity
- Time complexity:
Time complexity: The algorithm iterates through the input string once, resulting in a linear time complexity of O(n), where n is the length of the input string.


- Space complexity:
Space complexity: The algorithm uses additional space to store the 'tab' array, which has a length equal to the number of substrings with different digits in the input string. In the worst case, where all digits are unique, the 'tab' array would have a length of n, resulting in a space complexity of O(n).





# Code
```
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        res=0
        tab=[1]
        for i in range(1,len(s)):
            if ( s[i]==s[i-1]):
                tab.append(1)
            else:
                tab[-1]=tab[-1]+1
        for j in range(1,len(tab)):
            res=max(res,tab[j]+tab[j-1])
        
        return max(res,tab[0])
                
                
        
```