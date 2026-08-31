# ✅ C# | easy and readable solution 🚅 faster than 100%

**Author:** Thanat05
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/4322005/](https://leetcode.com/problems/maximum-repeating-substring/solutions/4322005/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int MaxRepeating(string sequence, string word) {
        if (sequence.Length < word.Length || sequence.Length == word.Length)
            return sequence != word ? 0 : 1;
        int counter = 0;
        string repeated = word;
        while (true)
            if (sequence.Contains(repeated))
            {
                counter++;
                repeated += word;
            }
            else
                break;
        return counter;
    }
}
```

If you like it don't forget to **upvote!**