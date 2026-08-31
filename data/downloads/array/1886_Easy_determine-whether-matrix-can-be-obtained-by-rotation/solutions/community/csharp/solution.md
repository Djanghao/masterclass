# C# brute force

**Author:** Dmitriy-Maksimov
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4033049/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4033049/)

---

# Code
```
public class Solution
{
    public bool FindRotation(int[][] mat, int[][] target)
    {
        var n = mat.Length;
        var m = mat[0].Length;
        var t = new int[n][];
        for (var i = 0; i < n; i++)
        {
            t[i] = new int[m];
            for (var j = 0; j < m; j++)
            {
                t[i][j] = mat[i][j];
            }
        }

        for (var i = 0; i < 4; i++)
        {
            if (Compare(t, target))
            {
                return true;
            }

            t = Rotate(t);
        }

        return false;
    }

    private static int[][] Rotate(int[][] ints)
    {
        var n = ints.Length;
        var m = ints[0].Length;
        var res = new int[n][];
        for (var i = 0; i < n; i++)
        {
            res[i] = new int[m];
            for (var j = 0; j < m; j++)
            {
                res[i][j] = ints[n - j - 1][i];
            }
        }

        return res;
    }

    private static bool Compare(int[][] ints, int[][] target)
    {
        var n = ints.Length;
        var m = ints[0].Length;
        for (var i = 0; i < n; i++)
        {
            for (var j = 0; j < m; j++)
            {
                if (ints[i][j] != target[i][j])
                {
                    return false;
                }
            }
        }

        return true;
    }
}
```