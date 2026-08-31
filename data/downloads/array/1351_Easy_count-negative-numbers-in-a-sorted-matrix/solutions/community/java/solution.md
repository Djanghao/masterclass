# Java, binary search, beats 100%, explained

**Author:** gthor10
**Votes:** 185
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/512165/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/512165/)

---

This problem can be solved with a binary search. 

For every row do the binary search to find exact position of the fist negative element, after that all elements are negative.  Optimization here - for every next row the right limit for the binary search can be the index of the first negative from the previous row. This is due to fact that cols are also sorted so for the same column for every negative element the element below can be only negative. Thus we can explude it from the binary search on the next step.

Also taking care of the edge cases helps - if first element is < 0 then all elements in a row are negative, if last one is non-negative then all elements are non-negative.

O(rows x lg(cols)) time - need to do lg(cols) binary search for each of rows row, O(1) space - no extrace space other than few variables.

```
    public int countNegatives(int[][] grid) {
        int rows = grid.length, cols = grid[0].length; 
        int res = 0, lastNeg = cols - 1;
        for (int row = 0; row < rows; row++) {
            //check edge cases - if first element is < 0 - all elements in row are negative
            if (grid[row][0] < 0) {
                res+=cols;
                continue;
            }
            //if last element is positive - it means there are no negative numbers in a row
            if (grid[row][cols - 1] > 0)
                continue;
            //there is a mix of negative and positive ones, need to find the border. starting
            //binary search
            int l = 0, r = lastNeg;
            while (l <= r) {
                int m = l + (r - l)/2;
                if (grid[row][m] < 0) {
                    r = m - 1;
                } else
                    l = m + 1;
            }
            //l points to the first negative element, which means cols - l is a number of
            //such elements
            res += (cols - l); lastNeg = l;
        }
        return res;
    }
```