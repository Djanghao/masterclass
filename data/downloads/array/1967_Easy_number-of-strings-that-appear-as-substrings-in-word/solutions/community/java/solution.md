# Java || Easy || Efficient || 3 Lines Code

**Author:** arpit2304
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1745088/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1745088/)

---

```
class Solution {
    public int numOfStrings(String[] patterns, String word) {
        int words = 0;
        for(int i = 0; i < patterns.length; i++) if(word.contains(patterns[i])) words++;
        return words;
    }
}
```
Please  **UPVOTE** if you find this helpful : )
Thanks.