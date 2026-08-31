# JAVA 0ms Runtime 100%

**Author:** alfia94
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/876038/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/876038/)

---

```
public int countLetters(String S) {
        int res = 1;
        int count = 1;
        for(int i=1; i<S.length(); i++){
            if(S.charAt(i) == S.charAt(i-1))
                count++;
            else
                count = 1;
            res += count;
        }
        return res;
    }
```