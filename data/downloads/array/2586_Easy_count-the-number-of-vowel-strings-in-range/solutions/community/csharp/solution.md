# ✅ C# | easy and readable solution 🚅 faster than 100% 💻 less than 100%

**Author:** Thanat05
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3288315/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3288315/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int VowelStrings(string[] words, int left, int right) {
        int counter = 0;
        string vowels = "aeiou";
        for (int i = left; i <= right; i++)
        {
            int length = words[i].Length - 1;
            if (vowels.Contains(words[i][0]) && vowels.Contains(words[i][length]))
                counter++;
        }
        return counter;
    }
}
```

If you like it don't forget to **upvote!**