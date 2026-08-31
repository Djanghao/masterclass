# C# - Simple and Readable

**Author:** jasondesu
**Votes:** 1
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/3410284/](https://leetcode.com/problems/shift-2d-grid/solutions/3410284/)

---


# Approach
Instead of figuring exactly how to slice the multiple arrays, we flatten the array and then repeat the sequence, which helps with wrapping.  Then just slice at correct index, and form back into multi-dimensional array.

# Code
```
public class Solution {
    public IList<IList<int>> ShiftGrid(int[][] grid, int k)
    {
        int width = grid[0].Length;
        int height = grid.Length;
        int count = width * height;


        // After k == count, you get back to original value. So only do %
        k = k % count;

        // Flatten grid into sequence.
        // Then repeat the sequence so we can easily shift to right slice at expected length and wrapping will taken care of
        IEnumerable<int> flat = grid.SelectMany(j => j);
        IEnumerable<int> repeated = flat.Concat(flat);
        List<int> shiftedFlat = repeated.Take(new Range(count - k, (count - k + count))).ToList();

        // Take the flat array and put back into grid shape, 1 chunk at a time
        IList<IList<int>> shiftedGrid = new List<IList<int>>();
        for(int i = 0; i < height; i++)
        {
            shiftedGrid.Add(shiftedFlat.GetRange(i * width, width)); 
        }

        return shiftedGrid;
    }
}
```