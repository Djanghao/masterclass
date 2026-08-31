# C++ || Easy to understand counting

**Author:** MohakHarjani
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3495129/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3495129/)

---

```
class Solution {
public:
    vector<int> colorTheArray(int n, vector<vector<int>>& queries) 
    {
        vector<int>ans(queries.size(), 0);
        vector<int>nums(n, 0);
        int count = 0;
        for (int i = 0; i < queries.size(); i++)
        {
            int index = queries[i][0];
            int newCol = queries[i][1];
            
            int prevCol = (index - 1 < 0)? 0 : nums[index - 1];
            int nextCol = (index + 1 >= n)? 0 : nums[index + 1];
            int oldCol = nums[index];
            
            nums[index] = newCol;
            //===========================================================
            //CHECK CONTRIBUTIONS BEFORE COLORING WITH NEW COLOR
            if (oldCol != 0 && oldCol == prevCol) count--;
            if (oldCol != 0 && oldCol == nextCol) count--;
            //===============================================================
            //CHECK CONTRIBUTIONS AFTER COLORING WITH NEW COLOR
            if (newCol == prevCol) count++;
            if (newCol == nextCol) count++;
            //====================================================================
            ans[i] = count;
        }
        return ans;
    }
};
```