# Java easy, 0ms, Faster 100%

**Author:** AmrDeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/1251157/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/1251157/)

---

```java
class Solution {
    public boolean queryString(String s, int n) {
        for(int i = 1 ; i <= n ; i++) {
            String binary = Integer.toBinaryString(i);
            if(!s.contains(binary)) return false; 
        }
        return true;
    }
}
```