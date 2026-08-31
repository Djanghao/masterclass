# Map solution for C# (explanation + complexity)

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468955/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468955/)

---

# Approach
The problem can be divided into two sub-problems:
1. How to find the value in the matrix in a fast way
2. How to understand that a row or column is completely painted

So,
1. To solve the first problem, we will create a dictionary with cell values as a key and row/column indices as a value. It will cost us some space, but it allows us to get information about the cell for O(1) time.
2. Create two arrays assigned for each rows/columns indices and  increase their values during traversal of the arr array.

When we fill a row or column, we can return the result.

# Complexity
- Time complexity: O(m*n)
- Space complexity: O(m*n)

# Code
```
public int FirstCompleteIndex(int[] arr, int[][] mat)
{
    var dict = new Dictionary<int, Tuple<int, int>>();

    for (var i = 0; i < mat.Length; ++i)
    {
        for (var j = 0; j < mat[i].Length; ++j)
        {
            dict.Add(mat[i][j], new Tuple<int, int>(i, j));
        }
    }

    if (dict.Count == 0)
    {
        return -1;
    }

    var rows = new int[mat.Length];
    var cols = new int[mat[0].Length];

    for (var i = 0; i < arr.Length; ++i)
    {
        var item = dict[arr[i]];

        rows[item.Item1]++;
        cols[item.Item2]++;
        if (rows[item.Item1] == mat[0].Length || cols[item.Item2] == mat.Length)
        {
            return i;
        }
    }

    return -1;
}
```