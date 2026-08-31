# JAVA || Easy solution using Hashmap

**Author:** whj1117
**Votes:** 28
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1586119/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1586119/)

---

```
class Solution { 
    public boolean checkAlmostEquivalent(String word1, String word2) {
        Map<Character,Integer> map = new HashMap();
        for (int i = 0; i < word1.length(); i++) {
            map.put(word1.charAt(i), map.getOrDefault(word1.charAt(i), 0) + 1);
            map.put(word2.charAt(i), map.getOrDefault(word2.charAt(i), 0) - 1);
        }
        for (int i : map.values()) { //get value set
            if (i > 3 || i < -3) { 
                return false;
            }
        }
        return true;
    }
}