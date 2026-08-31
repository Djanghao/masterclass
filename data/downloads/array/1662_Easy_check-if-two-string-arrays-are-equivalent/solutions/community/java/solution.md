# Java | 1 ms, 1 Line solution

**Author:** JustinButler
**Votes:** 58
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1081442/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1081442/)

---

```
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) 
    {
        return(String.join("", word1).equals(String.join("", word2)));
    }
}