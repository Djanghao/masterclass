# DP + binary search approach.

**Author:** thrillobit
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/5781235/](https://leetcode.com/problems/dungeon-game/solutions/5781235/)

---

# Intuition
We need to find a minimum possible health to pass throuh matrix. Min HP is one, maximum is 100001.

We can easily answer the question - can the knight survive with a fixed HP level (dp, if at any stage HP becomes negative we block this partiular path).

So, we combine BS and DP approaches.

# Approach
1. Use BS approach starting with 1 -> 1000001 frame.
2. At each step check if we can pass through with the current health level.
3. Perform the check using DP, where score[i][j] = Math.Max(score[i-1][j], score[i][j-1]) + dungeon[i][j].
4. If score is negative "block" the path setting score to a big negative number.

# Complexity
- Time complexity: O(m * n) * log(m * n * 1000).
- Space complexity: O(m * n).

# Code
```csharp []
public class Solution {
    public int m_min = -2000000;

    public int CalculateMinimumHP(int[][] dungeon) {
        int l = 1, r = 1000001;
        while(r - l > 1){
            int mid = (r-l)/2 + l;
            if (CanPass(mid, ref dungeon))
                r = mid;
            else l = mid;
        }
        if (CanPass(l, ref dungeon))
            return l;
        else return r;
    }

    public bool CanPass(int x, ref int[][] dungeon){
        int n = dungeon.Length, m = dungeon[0].Length;
        int[][] score = new int[n][];
        for(int i=0; i<n; i++)
            score[i] = new int[m];
        
        score[0][0] = (x + dungeon[0][0]) > 0 ? x + dungeon[0][0] : m_min;
        for(int i=1; i<n; i++)
            score[i][0] = (score[i-1][0] + dungeon[i][0]) > 0 ? score[i-1][0] + dungeon[i][0] : m_min;
        for(int j=1; j<m; j++)
            score[0][j] = (score[0][j-1] + dungeon[0][j]) > 0 ? score[0][j-1] + dungeon[0][j] : m_min;

        for(int i=1; i<n; i++)
            for(int j=1; j<m; j++)
                score[i][j] = (Math.Max(score[i-1][j], score[i][j-1]) + dungeon[i][j]) > 0 ?
                    Math.Max(score[i-1][j], score[i][j-1]) + dungeon[i][j] : m_min;

        return score[n-1][m-1] > 0;
    }
}
```