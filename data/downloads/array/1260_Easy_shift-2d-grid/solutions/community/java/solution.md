# Easy Java Code With Explanation(❁´◡`❁)

**Author:** hi-ravi
**Votes:** 55
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/1934848/](https://leetcode.com/problems/shift-2d-grid/solutions/1934848/)

---


```
class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        List<List<Integer>> result = new ArrayList();
        int rows = grid.length, col = grid[0].length;

        for (int r = 0; r < rows; r++)// filling all the rows of result with empty lists
            result.add(new ArrayList());
        k %= (rows * col);// every rows*col shifts grid became the same, skipping the similar shifts
        int dimension = rows * col;
        int begin = dimension - k;// element at (begin) will be at 0,0 in new grid
        int x = 0;// counter variable
        for (int i = begin; i < begin + dimension; i++) {
            int r = (i / col) % rows, c = i % col;// calculating row and cell for new grid
            result.get(x / col).add(grid[r][c]);// adding new element in new row
            x++;
        }
        return result;// returning result list
    }
}
```
<hr>
<hr>

***Time Complexity =O(N+N)=O(2N)=O(N)
Space Complexity=O(N)***

<hr>
<hr>

***UPVOTE if you like the post(^///^)***
