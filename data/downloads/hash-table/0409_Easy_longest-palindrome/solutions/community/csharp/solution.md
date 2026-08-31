# Simplest solution using HashSet

**Author:** Abster2970
**Votes:** 17
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/3119881/](https://leetcode.com/problems/longest-palindrome/solutions/3119881/)

---

# Intuition
In palindromes with even number of characters each of them must have a pair. We can use HashSet, then add and remove the same character, and at the time of removal that will be +2 to our overall length. 

If in the end our set is not empty, no matter how many unique characters will be left over, it can be just "a" or "a, b, c", if we were building the palindrome, we could pick any of them and build the palindrome using that (there's no pair for each of them), that's why we're adding +1 in the end in that case.

# Code
```
public class Solution {
    public int LongestPalindrome(string s) {
        var set = new HashSet<char>();
        var maxLength = 0;

        foreach (var c in s)
        {
            if (set.Contains(c))
            {
                set.Remove(c);
                maxLength += 2;
            }
            else
                set.Add(c);
        }

        return set.Count > 0 ? maxLength + 1 : maxLength;
    }
}
```