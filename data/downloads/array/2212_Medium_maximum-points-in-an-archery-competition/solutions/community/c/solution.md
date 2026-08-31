# ✅ C++ | Backtracking | List of problems

**Author:** chandanagrawal23
**Votes:** 62
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1865563/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1865563/)

---

```
class Solution
{
    public:
    vector<int> ans;
    int target = 0;
    vector<int> maximumBobPoints(int numArrows, vector<int> &aliceArrows)
    {
        vector<int> res(12, 0);
        rec(11, numArrows, aliceArrows, 0, res);
        return ans;
    }
    void rec(int n, int numArrows, vector<int> &aliceArrow, int sum, vector<int> res)
    {
        if (n == -1 || numArrows <= 0)
        {
            if (sum > target)
            {
                target = sum;
                if (numArrows > 0)
                {
                    res[0] += numArrows;
                }
                ans = res;
            }
            return;
        }
        int req = aliceArrow[n] + 1;
        if (req <= numArrows)
        {
            res[n] = req;
            rec(n - 1, numArrows - req, aliceArrow, sum + n, res);
            res[n] = 0;
        }
        rec(n - 1, numArrows, aliceArrow, sum, res);
        return;
    }
};
```

List of similar problems - 
**Decreasing order of frequency (asked in interviews)**
https://leetcode.com/problems/word-search/
https://leetcode.com/problems/generate-parentheses/
https://leetcode.com/problems/word-search-ii/
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
https://leetcode.com/problems/optimal-account-balancing/
https://leetcode.com/problems/n-queens/
https://leetcode.com/problems/word-break-ii/
https://leetcode.com/problems/combination-sum/
https://leetcode.com/problems/sudoku-solver/
https://leetcode.com/problems/subsets/
https://leetcode.com/problems/permutations/
https://leetcode.com/problems/restore-ip-addresses/
https://leetcode.com/problems/combination-sum-ii/
https://leetcode.com/problems/all-paths-from-source-to-target/
https://leetcode.com/problems/increasing-subsequences/