# Hash Table || O(N*26)

**Author:** Thiennk
**Votes:** 6
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243953/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243953/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N*26)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun clearStars(str: String): String {
        var s: MutableList<Char> = mutableListOf()
        for (i in str) s.add(i);
        var a: MutableList<MutableList<Int>> = MutableList(123) {mutableListOf()}
        for (i in 0 until s.size) {
            if (s[i] != '*')
                a[s[i].code].add(i);
            else {
                for (j in 97..122) {
                    if (a[j].size > 0) {
                        s[a[j][a[j].size - 1]] = '.'
                        a[j].removeAt(a[j].size-1);
                        break;
                    }
                }
            }
        }
        var rs = "";
        for (i in s)
            if (i != '*' && i != '.')
                rs += i;
        return rs;
    }
}
```