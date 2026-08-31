# C++ | followed hints | Explained

**Author:** extramiles
**Votes:** 84
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1694045/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1694045/)

---

The main fact to understand is- whenever you changed the first row for the first time, you don't need to change that row again. If you need to change that, that's an impossible case. So, we fix all the first row dependency at first. whenever there's a 1 at the first row, we change the corresponding column. 

Then we know, if any time we had to change any other column again, that means it's not possible because we have to make the change on the first row again. So, all we need to check is if we need to flip a row. So, we either see all the 0's on all rows, or we see all the 1's on that row. 


```
class Solution {
    
public:
    bool removeOnes(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        
		// If any cell on the first row has 1, flipping that column. 
        
        for(int i=0; i<m; i++){
            if(grid[0][i] == 1){
                // flipping that column
                for(int j=0; j<n; j++){
                    grid[j][i] = !grid[j][i];
                }
            }
        }
		
		// Now, all other rows should be either all 0's or all 1's. If not, than that's impossible to find a solution 
        
        for(int i=1; i<n; i++){
            int sum = 0;
            for(int j=0; j<m; j++){
                sum += grid[i][j];
            }
            
            if(sum != 0 && sum != m){
                return false;
            }
        }
        
        return true;
        
    }
};
```


@Post by- [mr_adnan]