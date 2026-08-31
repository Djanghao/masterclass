# Very simple

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/4623083/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/4623083/)

---

# Intuition
Just count the occurrences of pattern[1] and pattern[0] separately in a loop. If we encounter pattern[1], we increase the counter by the already accumulated number of pattern[0]. At the end, we increase the counter by the maximum occurrence (pattern[1] or pattern[0]), considering that we insert pattern[1] last and pattern[0] first.
The case when pattern[1]==pattern[0] does not need to be analyzed separately, we just check and process pattern[1] first.

# Approach

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun maximumSubsequenceCount(text: String, pattern: String): Long {
        var rez = 0L
        var cou0 = 0
        var cou1 = 0
        for (T in text) {
            if (T==pattern[1]) {
                cou1++
                rez +=cou0
            }
            if (T==pattern[0]) cou0++
        }
        // println("cou0=$cou0,cou1=$cou1")
        rez +=maxOf(cou0,cou1)
        return rez
    }
}
```