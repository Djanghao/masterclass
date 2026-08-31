# C# O (m * n)

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5595259/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5595259/)

---

# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int MinFlips(int[][] grid) {
        var r = grid.Length;
        var c = grid[0].Length;
        var rlo = 0;
        var rhi = r - 1;
        var res = 0;
        while (rlo < rhi)
        {
            var r1 = grid[rlo++];
            var r2 = grid[rhi--];
            var clo = 0;
            var chi = c - 1;
            while (clo < chi)
            {
                var cnt = r1[clo] + r1[chi] + r2[clo] + r2[chi];
                res += Math.Min(cnt, 4 - cnt);
                clo++;
                chi--;
            }
        }
        var re = r % 2 == 0;
        var ce = c % 2 == 0;
        var rcnt = 0;
        var ccnt = 0;
        var rpaired = true;
        var cpaired = true;
        if (!ce)
        {
            var lo = 0;
            var hi = r - 1;
            var cc = c / 2;
            while (lo < hi)
            {
                var a = grid[lo++][cc];
                var b = grid[hi--][cc];
                if (a != b) rcnt++;
                else if (a == 1) rpaired = !rpaired;
            }
        }
        if (!re)
        {
            var lo = 0;
            var hi = c - 1;
            var row = grid[r / 2];
            while (lo < hi)
            {
                var a = row[lo++];
                var b = row[hi--];
                if (a != b) ccnt++;
                else if (a == 1) cpaired = !cpaired;
            }
        }
        if (rpaired == cpaired) res += rcnt + ccnt;
        else
        {
            var cnt = rcnt + ccnt;
            if (cnt == 0) cnt = 2;
            res += cnt;
        }
        if (!ce && !re && grid[r / 2][c / 2] == 1) res++;
        return res;
    }
}
```