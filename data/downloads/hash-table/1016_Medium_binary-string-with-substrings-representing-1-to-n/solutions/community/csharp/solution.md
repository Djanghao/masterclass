# Python + C# solutions: another bluffing question...

**Author:** huikinglam02
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/2436354/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/2436354/)

---

List of bluffing Leetcode questions:
1. [1016. Binary String With Substrings Representing 1 To N](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/)
2. [2311. Longest Binary Subsequence Less Than or Equal to K](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/)

**Python**
```
class Solution:
    # First impression of the question suggests the check priorities should be from high n to low.
    # 1 <= n <= 10^9
    # Think about it a little more, how long s need to be to cover [1 10^9]?
    # It would be enormous, on the order of 10^8
    # but in our case, 1 <= s.length <= 1000
    # Therefore if we can just keep scanning from n downwards and report false if cannot find
    # generating binary string of n is easy
    def queryString(self, s: str, n: int) -> bool:
        for i in range(n, 0,-1):
            if bin(i)[2:] not in s:
                return False
        return True
```
**C#**
```
using System;
public class Solution 
{
    public bool QueryString(string s, int n) 
    {
        for (int i = n; i > 0; i--)
        {
            if (!s.Contains(Convert.ToString(i, 2)))
            {
                return false;
            }
        }
        return true;
    }
}
```