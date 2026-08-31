# Easy O(1) Solution

**Author:** aayu_t
**Votes:** 7
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/3497288/](https://leetcode.com/problems/bulb-switcher-ii/solutions/3497288/)

---


# Complexity
- Time complexity: **O(1)**

- Space complexity: **O(1)**

# Code
```
class Solution {
public:
    int flipLights(int n, int k) {
        if(k == 0) return 1;
        if(n == 1) return 2;
        if(n == 2 && k == 1) return 3;
        if(n == 2 || k == 1) return 4;
        if(k == 2) return 7;
        return 8;
    }
};
```