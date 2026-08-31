# Java Easiest Solution

**Author:** Janhvi__28
**Votes:** 6
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/2870133/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/2870133/)

---

```
class Solution {
    public String arrangeWords(String text) {
        String[] words = text.split(" ");
        words[0] = words[0].toLowerCase();
        Arrays.sort(words, Comparator.comparingInt(String::length));
        words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1);
        return String.join(" ", words);
    }
}
```