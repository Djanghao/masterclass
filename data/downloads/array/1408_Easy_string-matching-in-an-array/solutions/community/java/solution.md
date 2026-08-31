# Java Solution 98 %

**Author:** JiaxiChen
**Votes:** 25
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/1177184/](https://leetcode.com/problems/string-matching-in-an-array/solutions/1177184/)

---

```
class Solution {
    public List<String> stringMatching(String[] words) {
        String str = String.join(" ", words);
        List<String> res = new ArrayList<>();
        for(int i = 0; i < words.length; i++){
            if(str.indexOf(words[i]) != str.lastIndexOf(words[i])){
                res.add(words[i]);
            }
        }
        return res;
    }
}
```