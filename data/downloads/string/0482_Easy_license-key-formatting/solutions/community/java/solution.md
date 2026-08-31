# Clean and Self explanatory 11 ms Java Solution

**Author:** YunjingLee
**Votes:** 15
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/316752/](https://leetcode.com/problems/license-key-formatting/solutions/316752/)

---

```
class Solution {
    public String licenseKeyFormatting(String S, int K) {
        
        StringBuilder sb = new StringBuilder();

        for (int i = S.length() - 1, count = 0 ; i >= 0 ; --i) {
            
            char c = S.charAt(i);
            if (c == '-') continue;

            // put a '-' first if we already append K characters
            if (count == K) {
                sb.append('-');
                count = 0;
            }

            sb.append(Character.toUpperCase(c));
            ++count;
        }

        return sb.reverse().toString();
    }
}
```