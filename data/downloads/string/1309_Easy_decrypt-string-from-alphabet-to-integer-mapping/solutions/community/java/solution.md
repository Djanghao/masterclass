# HashMap Solution JAVA

**Author:** ImranAnsari
**Votes:** 50
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/500231/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/500231/)

---

```
class Solution {
    public String freqAlphabets(String str) {
        HashMap<String, Character> map = new HashMap<>();
        int k = 1;
        for (char ch = 'a'; ch <= 'z'; ch++) {
            if (ch < 'j')
                map.put(String.valueOf(k++), ch);
            else
                map.put(String.valueOf(k++)+"#", ch);
        }
        
        StringBuilder sb = new StringBuilder();
        int i = str.length() - 1;
        while (i >= 0) {
            if (str.charAt(i) == '#') {
                sb.append(map.get(str.substring(i - 2, i+1)));
                i -= 3;
            } else {
                sb.append(map.get(str.substring(i, i + 1)));
                i--;
            }
        }
        
        return sb.reverse().toString();
    }
}
```