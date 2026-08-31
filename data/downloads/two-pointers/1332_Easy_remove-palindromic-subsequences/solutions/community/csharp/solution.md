# ✅ C# | easy and readable solution 🚅 faster than 77% 💻 less than 66%

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4828867/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4828867/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int RemovePalindromeSub(string s) {
        if (s.Length == 0)
            return 0;
        return !IsPalindrome(s) ? 2 : 1;
    }

    private bool IsPalindrome(string s)
    {
        for (int i = 0; i < s.Length / 2; i++)
            if (s[i] != s[s.Length - i - 1])
                return false;
        return true;
    }
}
```

If you like it don't forget to **upvote!**