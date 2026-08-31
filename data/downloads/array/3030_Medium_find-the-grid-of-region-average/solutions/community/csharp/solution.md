# Direct simple solution, Brute force, O(n)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674298/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674298/)

---

# Intuition
Use brute force.

# Approach
At first create an auxiliary 2-d array of lists of integers:
```
var aux = InitImageResultAux(image);
```
The type of each item in this array is `List<int>` and will contain the list of averages for all regions, which contains cell (i, j).
Then go through the array `image` and fill the array `aux` with averages values:
```
for (int j = 1; j < image[i].Length - 1; j++)
{
    if (IsRegion(i, j, image, threshold))
    {
        var aver = GetAver(i, j, image);
        FillAux(aver, i, j, aux);
    }
}
```
Finally construct the result from the auxiliary array `aux`:
```
for (int i = 0; i < aux.Length; i++)
{
    for (int j = 0; j < aux[i].Length; j++)
    {
        if (aux[i][j].Count == 0)
        {
            rs[i][j] = image[i][j];
        }
        else
        {
            var sum = aux[i][j].Sum();
            rs[i][j] = sum / aux[i][j].Count;
        }
    }
}
```

# Complexity
- Time complexity:
$$O(n)$$, where n is image.Length * image[i].Length

- Space complexity:
$$O(n)$$, where n is image.Length * image[i].Length

# Code
```
public class Solution {
    public int[][] ResultGrid(int[][] image, int threshold) {
        var aux = InitImageResultAux(image);
        for (int i = 1; i < image.Length - 1; i++)
        {
            for (int j = 1; j < image[i].Length - 1; j++)
            {
                if (IsRegion(i, j, image, threshold))
                {
                    var aver = GetAver(i, j, image);
                    FillAux(aver, i, j, aux);
                }
            }
        }
        var rs = InitImageResult(image);
        for (int i = 0; i < aux.Length; i++)
        {
            for (int j = 0; j < aux[i].Length; j++)
            {
                if (aux[i][j].Count == 0)
                {
                    rs[i][j] = image[i][j];
                }
                else
                {
                    var sum = aux[i][j].Sum();
                    rs[i][j] = sum / aux[i][j].Count;
                }
            }
        }
        return rs;
    }
    private void FillAux(int aver, int row, int col, List<int>[][] aux)
    {
        for (int i = row - 1; i <= row + 1; i++)
        {
            for (int j = col - 1; j <= col + 1; j++)
            {
                aux[i][j].Add(aver);
            }
        }
    }
    private int GetAver(int row, int col, int[][] image)
    {
        var rs = 0;
        var sum = 0;
        for (int i = row - 1; i <= row + 1; i++)
        {
            for (int j = col - 1; j <= col + 1; j++)
            {
                sum += image[i][j];
            }
        }
        rs = sum / 9;
        return rs;
    }
    private bool IsRegion(int row, int col, int[][] image, int threshold)
    {
        for (int i = row - 1; i <= row + 1; i++)
        {
            for (int j = col - 1; j <= col + 1; j++)
            {
                if (i != row + 1)
                {
                    if (Math.Abs(image[i][j] - image[i + 1][j]) > threshold) return false;
                }
                if (j != col + 1)
                {
                    if (Math.Abs(image[i][j] - image[i][j + 1]) > threshold) return false;
                }
            }
        }
        return true;
    }
    private List<int>[][] InitImageResultAux(int[][] image)
    {
        var rs = new List<int>[image.Length][];
        for (int i = 0; i < rs.Length; i++)
        {
            rs[i] = new List<int>[image[i].Length];
            for (int j = 0; j < rs[i].Length; j++)
            {
                rs[i][j] = new List<int>();
            }
        }
        return rs;
    }
    private int[][] InitImageResult(int[][] image)
    {
        var rs = new int[image.Length][];
        for (int i = 0; i < rs.Length; i++)
        {
            rs[i] = new int[image[i].Length];
        }
        return rs;
    }
}
```