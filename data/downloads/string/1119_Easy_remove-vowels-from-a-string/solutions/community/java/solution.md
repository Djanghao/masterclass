# Java. 0 ms, faster than 100.00%

**Author:** Konashenov
**Votes:** 7
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/759178/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/759178/)

---

```
class Solution {
    public String removeVowels(String S) {
        char[] result = new char[S.length()];
        int index = 0;
        
        for(char c : S.toCharArray()) {
            if (c != 'a' && c != 'e' && c != 'i' && c !='o' && c != 'u') {
                result[index++] = c;
            }
        }
        
        return new String(result, 0, index);
    }
    
}
```