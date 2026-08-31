# ✅ C# | easy and readable solution using regex

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4239960/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4239960/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
using System.Text.RegularExpressions;
public class Solution {
    public int CountValidWords(string sentence) {
        int ans = 0;
        string[] words = sentence.Split(' ');
        Regex reg = new(@"^([a-z]+(-?[a-z]+)?)?(!|\\.|,)?$");
        foreach (string s in words)
            if (!string.IsNullOrEmpty(s) && reg.Match(s).Success)
                ans++;
        return ans;
    }
}
```

If you like it don't forget to **upvote!**