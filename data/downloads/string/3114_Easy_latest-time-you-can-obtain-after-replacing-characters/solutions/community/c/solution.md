# Simple solution in C

**Author:** OguzhanUmutlu
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5907119/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5907119/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```c []
char* findLatestTime(char* s) {
    char c1 = s[0];
    char c2 = s[1];
    char c3 = s[3];
    char c4 = s[4];
    if (c1 == '?') s[0] = c2 == '?' || c2 == '1' || c2 == '0' ? '1' : '0';
    if (c2 == '?') s[1] = c1 != '0' ? '1' : '9';
    if (c3 == '?') s[3] = '5';
    if (c4 == '?') s[4] = '9';
    
    return s;
}
```