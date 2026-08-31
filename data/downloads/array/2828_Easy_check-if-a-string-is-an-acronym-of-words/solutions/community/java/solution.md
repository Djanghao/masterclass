# Simple java solution

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934003/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934003/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public boolean isAcronym(List<String> words, String s) {
        StringBuilder nm=new StringBuilder();
        for(int i=0;i<words.size();i++)
        {
            nm.append(words.get(i).charAt(0));
        }
        return nm.toString().equals(s);
    }
}
```