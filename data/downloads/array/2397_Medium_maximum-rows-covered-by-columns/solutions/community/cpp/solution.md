# Check all subsets using Bit Masking

**Author:** Harshyd26
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/4633503/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/4633503/)

---

According to the problem if we select a set of columns then 

**For ith row(matrix[i]) to be valid:**

**1. If the jth col is selected:** 
    we don't care if there are `0` or `1` in matrix[i][j].
**2. If the jth column is not selected**
`if(matrix[i][j]==1)` then that row will be invalid for those set of selected columns

**# Conclusion:**
Find no. of valid rows i.e  `mat[i][j] = 0 for all unselected coloumns` for all possible combinations of columns and take the maximum of all combinations.

I commented the code so that it become easy for you to understand, a basic understanding of bit operations is required.

# Code
```
class Solution {
public:
    int maximumRows(vector<vector<int>>& matrix, int k) {
        
        int m = matrix.size();
        int n = matrix[0].size();
		int subset_ct = (1<<n);     //Total subset (2^n)

        int ans = 0;
		for(int mask = 1; mask < subset_ct; mask++){    //Iterate for each subset possible
			if(__builtin_popcount(mask)==k){    //If exact k col are selected
                int temp = m;       //Initially mark all the row valid
                for(int i=0;i<m;i++){   //For a possible combination of col check the no. of valid rows
                    for(int j=0;j<n;j++){
                        if(!(mask&(1<<j)) && matrix[i][n-j-1]==1) {temp--; break;}
                    }
                }
                ans = max(ans,temp);
            }
		}

        return ans;
    }
};
```