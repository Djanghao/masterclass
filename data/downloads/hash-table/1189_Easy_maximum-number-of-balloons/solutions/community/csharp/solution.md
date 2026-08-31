# Easy C# solution (72ms)

**Author:** narek_babajanyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/619214/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/619214/)

---

```
public class Solution {
    public int MaxNumberOfBalloons(string text) {
        int[] letters = new int[26];
        int min = Int32.MaxValue;
        foreach(char c in text)
            letters[c - 'a']++;
        
        letters['l' - 'a'] /= 2;
        letters['o' - 'a'] /= 2;
        foreach(char c in "balloon")
            min = Math.Min(letters[c - 'a'], min);
        
        return min;
    }
}
```