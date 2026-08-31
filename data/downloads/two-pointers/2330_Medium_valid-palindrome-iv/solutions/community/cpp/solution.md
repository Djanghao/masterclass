# Beats 100% of Submissions! Easy to Understand Solution

**Author:** joeylu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/6064503/](https://leetcode.com/problems/valid-palindrome-iv/solutions/6064503/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are given a string and we must determine whether we can change it into a palindrome in one or two steps.

A palindrome is any string whose front half and back half are the same. 

# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to run a for loop from 0 to half of the string. 
- At each index, you check if the element at the `s[i]` and see if it's equal to `s[s.length()/2-i-1]` 
- This basically allows you to check if the front half and back half is equal
- If it's equal then increment steps by 1, else just continue
- Then at the end check if steps is greater than 2 (if the string is "aa" for an example, it's guaranteed to be able to be changed, hence we don't need to worry if steps is equal to 0)
- Return steps

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    bool makePalindrome(string s) {
        int steps = 0;
        for (int i=0;i<s.length()/2;i++) {
            if (s[i]!= s[s.length()-1-i]) {
                steps++;
            }
        }

        if (steps > 2) return false;
        return true;

    }
};
```