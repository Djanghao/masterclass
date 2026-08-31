# Simple Explanation for the Traversal and Tracking Past Calculations

**Author:** woi55
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3573634/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3573634/)

---

# Intuition
Traverse the points in order of size so all points less than (or alternatively greater than) have already been calculated. Use these previous calculations for the new point and increase length by 1.

# Approach
1. Use a priority queue to order the points
2. Track previous longest path for each row and for each column
    - Beware of multiple points in a row or column having the same value (use next largest value for length)
3. Track overall longest path.

# Complexity
- Time complexity:
$O(m*n log(m*n))$
    - $O(m*n)$ for the traversal
    - $O(m*n log(m*n))$ for the sorting

- Space complexity:
$O(m*n)$

# Code
```
public class Solution {
    public int MaxIncreasingCells(int[][] mat) {
        int m = mat.Length;
        int n = mat[0].Length;
        PriorityQueue<(int r, int c), int> pq = MakeAndFillPriorityQueue(mat);
        List<int[]>[] bestRows = MakeAndFillBestLists(m, 3);
        List<int[]>[] bestColumns = MakeAndFillBestLists(n, 3);
        int best = 0; int currBest;
        int row; int column; int val;
        while (pq.Count > 0) {
            row = pq.Peek().r; column = pq.Peek().c; pq.Dequeue();
            val = mat[row][column];
            currBest = Math.Max(GetBest(bestRows[row], val), GetBest(bestColumns[column], val)) + 1;
            UpdateBest(bestRows[row], val, currBest);
            UpdateBest(bestColumns[column], val, currBest);
            best = Math.Max(best, currBest);
        }
        return best;
    }

    private PriorityQueue<(int, int), int> MakeAndFillPriorityQueue(int[][] mat) {
        int m = mat.Length;
        int n = mat[0].Length;
        PriorityQueue<(int r, int c), int> pq = new PriorityQueue<(int, int), int>();
        for (int row = 0; row < m; ++row) {
            for (int column = 0; column < n; ++column) {
                pq.Enqueue((row, column), mat[row][column]);
            }
        }
        return pq;
    }

    private List<int[]>[] MakeAndFillBestLists(int n, int size) {
        List<int[]>[] l = new List<int[]>[n];
        for (int i = 0; i < n; ++i) {
            l[i] = new List<int[]>(size);
            l[i].Add(new int[] {-999999, 0});
        }
        return l;
    }

    private int GetBest(List<int[]> l, int val) {
        int n = l.Count - 1;
        if (l[n][0] == val) {
            return l[n - 1][1];
        } else {
            return l[n][1];
        }
    }

    private void UpdateBest(List<int[]> l, int val, int best) {
        int n = l.Count - 1;
        if (l[n][0] == val) {
            l[n][1] = Math.Max(l[n][1], best);
        } else {
            l.Add(new int[] {val, best});
        }
        if (l.Count > 2) {
            l.RemoveAt(0);
        }
    }
}
```