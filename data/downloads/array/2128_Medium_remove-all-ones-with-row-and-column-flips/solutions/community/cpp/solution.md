# [C++] 2 Approaches [Detailed Intuition and Explanation]

**Author:** cryptx_
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/2210353/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/2210353/)

---

```
/*
    https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/
    
    Few things to note:
    1. Odd no. of flips result in a flip 
    2. Order of flip operations doesn't matter since all that matters is the no. of flips on a cell
    
    Now the next thing to note is, since order of operations doesn't matter, we can apply all row operations first and then use the other col operations and vice-versa.
    Also it's only possible to get the result, if all the rows are either same or some are exactly opposite to others.
    Eg: 00001
        00001 (same rows)
        
        10001
        01110 (exactly opposite rows)
        
    In case of same rows, we can do column flips for each 1 cell and since all the rows are same, they all will also get the same result and every cell will become 0 in the end.
    
    In case of opp. rows, we can first do a row flip which will make it same as the other rows and then repeat the above opeartion.
   Below are two approaches utilizing the above facts:
    
	Solution 1
	Taking row 0 as reference, check if others are either same or exactly opposite.
    
    Solution 2
    Since all the rows need to be same or some can be exactly opposite and order of operations doesn't matter. we do col flips 1st to remove the 1s in the 1st row, all the rows same as that should see the same effect. After this we should be seeing the rows to be all 1s (opp rows) or 0s (same rows), if not then not possible to remove all 1s.
*/
class Solution {
public:
    // SOLUTION 1
    // TC: O(mn)
    // SC: O(1)
    bool sol1(vector<vector<int>>& grid) {
        // taking row1 as reference, compare all other 
        // rows. They should either be same or exactly opposite to
        // reference row. 
        for(int r = 1; r < grid.size(); r++) {
            bool same = true, opp = true;
            // either all same
            for(int c = 0; c < grid[0].size(); c++)
                if(grid[0][c] != grid[r][c]) {
                    same = false;
                    break;
                }
            
            // if the row was not the same, then check if it is exactly the opp.
            if(!same) {
                for(int c = 0; c < grid[0].size(); c++)
                    if(grid[0][c] == grid[r][c]) {
                        opp = false;
                        break;
                    }
            }
            
            // if the row doesnt fall in either same or opp category, then can't remove all 1s
            if(!same && !opp)
                return false;
        }
        return true;
    }
    
    // SOLUTION 2
    // TC: O(mn)
    // SC: O(1)
    bool sol2(vector<vector<int>>& grid) {
        // If it is possible to remove all 1s, then all the rows
        // will either be same or some will be exactly opp to each other.
        // So if we take any row and start making it all 0s by flipping the col with 1, then at the end of this operation then each row will either be all 0s (same row as ref row) or all 1s (exactly opp to ref row) 
        
        // Taking row 0 as reference
        for(int c = 0; c < grid[0].size(); c++)
            // current cell is 1
            if(grid[0][c]) 
                // flip the entire column to make the curr cell 0
                for(int r = 1; r < grid.size(); r++)
                    grid[r][c] = !grid[r][c];
            
        // now after making the ref row 0 all 0s, other rows should also be
        // all 0s or 1s
        for(int r = 1; r < grid.size(); r++) {
            int sum = 0;
            for(int c = 0; c < grid[0].size(); c++)
                sum += grid[r][c];
            
            if(sum != 0 && sum != grid[0].size())
                return false;
        }
        return true;
    }
    
    bool removeOnes(vector<vector<int>>& grid) {
        // return sol1(grid);
        return sol2(grid);
    }
};
```