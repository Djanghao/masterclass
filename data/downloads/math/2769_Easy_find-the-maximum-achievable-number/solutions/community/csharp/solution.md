# ✔️✔️✔️easy 1 liner code with explanation - PYTHON || C++ || JAVA || PHP - beats 100%⚡⚡⚡

**Author:** anish_sule
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4909309/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4909309/)

---

# Code
```Python []
class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return num + 2 * t
```
```C++ []
class Solution {
public:
    int theMaximumAchievableX(int num, int t) {
        return num + 2 * t;
    }
};
```
```Java []
class Solution {
    public int theMaximumAchievableX(int num, int t) {
        return num + 2 * t;
    }
}
```
```PHP []
class Solution {
    function theMaximumAchievableX($num, $t) {
        return $num + 2 * $t;
    }
}
```

# Explanation
don't worry about the description. just read this -

from the given problem statement, we can draw this equation :
-> `num + t = x - t`
-> `x = num + 2t`

that's it. works for almost all languages!

have a good day : )