# easy c++ solution || just do what they have said

**Author:** youdontknow001
**Votes:** 11
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/2851066/](https://leetcode.com/problems/subrectangle-queries/solutions/2851066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SubrectangleQueries {
    vector<vector<int>> res;
public:
    SubrectangleQueries(vector<vector<int>>& rectangle) {
        res=rectangle;
    }
    
    void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int i=row1;i<=row2;i++){
            for(int j=col1;j<=col2;j++){
                res[i][j]=newValue;
            }
        }
    }
    
    int getValue(int row, int col) {
        return res[row][col];
    }
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * SubrectangleQueries* obj = new SubrectangleQueries(rectangle);
 * obj->updateSubrectangle(row1,col1,row2,col2,newValue);
 * int param_2 = obj->getValue(row,col);
 */
```