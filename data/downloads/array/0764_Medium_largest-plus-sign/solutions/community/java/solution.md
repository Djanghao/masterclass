# Java solution || simple || Easy to Understand || O(N^2) solution

**Author:** Amritanshu23
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/5016119/](https://leetcode.com/problems/largest-plus-sign/solutions/5016119/)

---

The code aims to find the maximum order of the largest plus sign that can be formed in a grid of size n, while considering the presence of mines at certain positions within the grid. The grid is represented by a 2D array where each cell initially contains a value of 1 (indicating no mine). Mines are represented by setting specific cells to 0.

Here's a summary of the code:
**Inner Class Total:**

This class represents the lengths of arms (left, right, up, down) for each cell in the grid.
It has four integer fields: l, r, u, d, representing the lengths of the left, right, up, and down arms respectively.
The constructor initializes these fields with the provided values.

**orderOfLargestPlusSign Method:**

This method takes two parameters: n (an integer representing the size of the grid) and mine (a 2D array representing the positions of mines).

**Initializing the Grid:**

The method initializes a 2D array called mines to represent the grid. Initially, all cells are set to 1, indicating no mines.
It uses Arrays.fill() method to initialize each row of the grid with 1s.

**Setting Mines:**

The method iterates through the mine array, which contains the positions of mines, and sets the corresponding cells in the mines grid to 0, indicating the presence of a mine.

**Initializing nums Array:**

The method initializes another 2D array called nums of type Total to store the lengths of arms for each cell.
It iterates through each cell of the grid and initializes the corresponding cell in the nums array with a new instance of the Total class, initializing all arm lengths to 0.

**Calculating Arm Lengths:**

The method iterates through each row of the grid to calculate the lengths of the left and right arms for each cell.
It maintains a sum variable to keep track of the consecutive empty cells encountered (indicating the length of the arm).
If a mine is encountered, the sum is reset to 0, otherwise, it is incremented for each consecutive empty cell.

**Similar Process for Columns:**

The method then repeats a similar process for columns to calculate the lengths of the up and down arms for each cell.

**Finding Maximum Order:**

Once all arm lengths are calculated for each cell, the method iterates through the nums array to find the minimum of the lengths of all four arms for each cell.
It keeps track of the maximum of these minimums, which represents the order of the largest plus sign that can be formed.

**Returning the Result:**

Finally, the method returns the maximum order of the largest plus sign that can be formed considering the positions of mines.

```
class Solution {
    
    public class Total {
        int l;
        int r;
        int u;
        int d;
        
        Total(int l, int r, int u, int d){
            this.l = l;
            this.r = r;
            this.u = u;
            this.d = d;
        }
    }
    
    public int orderOfLargestPlusSign(int n, int[][] mine) {
        int[][] mines = new int[n][n];
        
        
        for (int[] row : mines) {
            Arrays.fill(row, 1);
        }
        
        
        for (int[] m : mine) {
            mines[m[0]][m[1]] = 0;
        }
        
        Total[][] nums = new Total[n][n];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                nums[i][j] = new Total(0, 0, 0, 0);
            }
        }
        
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = 0; j < n; j++) {
                if (mines[i][j] == 0) {
                    sum = 0;
                    nums[i][j].l = sum;
                } else {
                    nums[i][j].l = ++sum;
                }
            }
        }
        
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = n - 1; j >= 0; j--) {
                if (mines[i][j] == 0) {
                    sum = 0;
                    nums[i][j].r = sum;
                } else {
                    nums[i][j].r = ++sum;
                }
            }
        }
        
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = 0; j < n; j++) {
                if (mines[j][i] == 0) {
                    sum = 0;
                    nums[j][i].u = sum;
                } else {
                    nums[j][i].u = ++sum;
                }
            }
        }
        
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = n - 1; j >= 0; j--) {
                if (mines[j][i] == 0) {
                    sum = 0;
                    nums[j][i].d = sum;
                } else {
                    nums[j][i].d = ++sum;
                }
            }
        }
        
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[0].length; j++) {
                max = Math.max(Math.min(nums[i][j].l, Math.min(nums[i][j].r, Math.min(nums[i][j].d, nums[i][j].u))), max);
            }
        }
        
        return max;
    }
}

```