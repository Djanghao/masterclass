# mod 3

**Author:** votrubac
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1345645/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1345645/)

---

**Java**
```java
public boolean isDecomposable(String s) {
    boolean two = false;
    for (int i = 1, cnt = 1; i <= s.length(); ++i) {
        if (i == s.length() || s.charAt(i - 1) != s.charAt(i)) {
            if (cnt % 3 == 1 || (cnt % 3 == 2 && two))
                return false;
            two |= cnt % 3 == 2;
            cnt = 0;
        }
        ++cnt;
    }
    return two;        
}
```
**C++**
```cpp
bool isDecomposable(string s) {
    bool two = false;
    for (int i = 1, cnt = 1; i <= s.size(); ++i) {
        if (i == s.size() || s[i - 1] != s[i]) {
            if (cnt % 3 == 1 || (cnt % 3 == 2 && exchange(two, true)))
                return false;
            cnt = 0;
        }
        ++cnt;
    }
    return two;
}
```