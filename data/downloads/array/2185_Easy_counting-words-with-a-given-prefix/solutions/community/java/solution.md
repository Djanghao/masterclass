# Java Solution | easy

**Author:** amisha544
**Votes:** 24
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1803108/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1803108/)

---

```
class Solution {
    public int prefixCount(String[] words, String pref) {
    int c = 0;
    for(String s : words) {
        if(s.indexOf(pref)==0) 
            c++;
    }
    return c; 
    }
}
```