# Trivial two-line solution: normalize, then compare

**Author:** anikit
**Votes:** 37
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/1894440/](https://leetcode.com/problems/valid-palindrome/solutions/1894440/)

---

First, we lower every character and exclude all non-alphanumeric ones.
Second, we compare the result to its reversed version using `SequenceEqual`.
```csharp
public bool IsPalindrome(string s)
{    
    var clean = s.ToLower().Where(x => char.IsLetterOrDigit(x));
    return clean.Reverse().SequenceEqual(clean);
}
```
There is no need to convert the enumerable to an array or a string.