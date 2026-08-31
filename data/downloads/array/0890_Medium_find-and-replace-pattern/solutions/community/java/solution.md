# JAVA || Easy Solution || 100% faster code.

**Author:** shivrastogi
**Votes:** 135
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/2348332/](https://leetcode.com/problems/find-and-replace-pattern/solutions/2348332/)

---

PLEASE UPVOTE IF YOU LIKE.
```
class Solution {
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        List<String> res = new ArrayList<>();
        for (String word : words) {
            if (check(word, pattern)) res.add(word);
        }
        return res;
    }
    
    boolean check(String a, String b) {
        for (int i = 0; i < a.length(); i++) {
            if (a.indexOf(a.charAt(i)) != b.indexOf(b.charAt(i))) return false;
        }
        return true;
    }
}
```