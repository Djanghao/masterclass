# C# binary search beats 100%

**Author:** kiryushin
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/426336/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/426336/)

---

```
public class Solution {
    public int FindKthNumber(int m, int n, int k) {
        if (m < n) {
            var tmp = m;
            m = n;
            n = tmp;
        }

        int from = 1, to = m * n + 1;
        while (from < to) {
            int middle = from + (to - from) / 2;
            int less = getLessEqualThan(middle, m, n);
            if (less < k) {
                from = middle + 1;
            } else {
                to = middle;
            }
        }
        return from;
    }
    
    private int getLessEqualThan(int target, int m, int n) {
        if (m * n <= target)
            return m * n;
        int m1 = Math.Min(m, target), n1 = Math.Min(n, target / m1);
        int result = m1 * n1;
        while (n1 < n && n1 < target) {
            n1++;
            while (m1 * n1 > target) {
                m1--;
            }
            result += m1;
        }
        return result;
    }
}
```