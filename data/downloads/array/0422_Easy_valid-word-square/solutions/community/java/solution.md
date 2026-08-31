# [Java] easiest way to memorize the solution || O(1)-Space

**Author:** xieyun95
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/1203609/](https://leetcode.com/problems/valid-word-square/solutions/1203609/)

---

```
class Solution {
    public boolean validWordSquare(List<String> words) {
        for (int i = 0; i < words.size(); i++) {
            String word = words.get(i);
            
            for (int j = 0; j < word.length(); j++) {
                // c1 = words.get(i).charAt(j)
                char c1 = word.charAt(j);
                
                /* check potential pairing c2 = words.get(j).charAt(i);
                We may have a mismatch if one of these case happens: 
                
                1. words.get(j) may not exist           ==>  j >= words.size()
                2. words.get(j) may not have charAt(i)  ==>  i >= words.get(j).length()
                3. c2 exists but may not match c1       ==>  c2 != c1
                
                */
                if (j >= words.size() || i >= words.get(j).length()) return false;

                char c2 = words.get(j).charAt(i);
                if (c1 != c2) return false;
            }
        }
        return true;
    }
}
```