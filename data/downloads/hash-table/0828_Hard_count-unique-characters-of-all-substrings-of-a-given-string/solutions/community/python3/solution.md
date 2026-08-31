# Simple Python3 solution O(N) time, O(1) space using defaultdict

**Author:** kunalnarang
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/1846045/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/1846045/)

---

Adapted from [https://leetcode.com/its_dark/](its_dark) solution: https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/discuss/129021/O(N)-Java-Solution-DP-Clear-and-easy-to-Understand/265186

```
from collections import defaultdict
class Solution:
    def uniqueLetterString(self, s: str) -> int:
        """
        The key ideas behind the solution:
        1. The maximum possible substrings that can end at an index are i + 1.
        2. The contribution of a character to this substring is (i + 1) - it's last seen position.
        3. At each point, sum of all contributions, gives the number of total substrings found so far.
        4. The last seen position of char is actually i + 1.
        """
        last_position = defaultdict(int) # Used for storing the last position of each character
        contribution = defaultdict(int) # Used for storing the contribution of each character so far. This
        # will possibly be updated throughout the string traversal
        res = 0
        
        for i, char in enumerate(s):
            max_possible_substrs_at_idx = i + 1
            contribution[char] = max_possible_substrs_at_idx - last_position[char]
            
            res+=sum(contribution.values())
            last_position[char] = i + 1
            
        return res
```