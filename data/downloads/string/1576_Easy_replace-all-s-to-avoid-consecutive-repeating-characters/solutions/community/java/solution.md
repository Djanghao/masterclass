# Super easy solution, O(n), beats 100%

**Author:** eaiman
**Votes:** 21
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/832010/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/832010/)

---

```
public String modifyString(String s) {
    if (s == null || s.isEmpty()) return "";
    
    char[] chars = s.toCharArray();
    for (int i=0; i<chars.length; i++) {
        if (chars[i] == '?') {
            for (char j='a'; j<='z'; j++) {
                chars[i] = j;
                if (i>0 && chars[i-1] == j) continue;
                if(i<chars.length-1 && chars[i+1] == j) continue;
                break;
            }
        }
    }
    
    return new String(chars);
}
```