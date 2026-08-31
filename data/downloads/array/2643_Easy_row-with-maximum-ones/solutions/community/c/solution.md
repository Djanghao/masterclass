# C++ || Easy

**Author:** Shrikanta8
**Votes:** 4
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3421837/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3421837/)

---

```
class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
        int maxVal=0,ind=-1,c=0;
        
        for(int i=0;i<mat.size();i++){
            c=0;
            for(int j=0;j<mat[0].size();j++){
                if(mat[i][j]){
                    c++;
                }
            }
            if(c > maxVal){
                maxVal = c;
                ind=i;
            }
        }
        if(ind==-1){
            return vector<int> {0,0};
        }
        return vector<int> {ind,maxVal};
    }
};
```