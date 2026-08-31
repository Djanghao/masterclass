# C# one line solution

**Author:** letrungkien7
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/3174530/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/3174530/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In a palindrome, at most one character can have odd number of apperances.

# Approach
<!-- Describe your approach to solving the problem. -->
Count the number of chacters that have odd appearances, which is the minimum number of palindromes that can be constructed from the original string.

The maximum number is obviously the length of the string.  

Anything in between can be achieved, because for any palindrome that have length more than one, we can break it down into two.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
public class Solution {
    public bool CanConstruct(string s, int k) {
        return k>= s.GroupBy(c=>c).Select(group=> group.Count())
                    .Count(count=>count%2==1)&& k<=s.Length;
    }
}
```