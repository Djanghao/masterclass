# Explained - using map || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 30
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468444/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468444/)

---


# Approach
We will have two map for tracking the row and col of a number, so that we can get the row,col in O(1) time.
Then we have another two map ( mprc, mpcc) which basically count the no. elements seen in that row and no. of elements seen in that column.

1. Map the row, col of each of elements
2. Travesrse the arr and keep updatinf row & col count 
3. Once the row count equal to max or col count equal to max return index


# Code
```
class Solution {
public:
    int firstCompleteIndex(vector<int>& arr, vector<vector<int>>& mat) {
        unordered_map<int, int> mpr, mpc, mprc, mpcc;
        for(int i = 0; i < mat.size(); i++){
            for(int j = 0; j< mat[0].size(); ++j){
                mpr[mat[i][j]] = i;     mpc[mat[i][j]] = j;
            }
        }
        for(int i = 0; i < arr.size(); i++){
            int n = arr[i];
            mprc[mpr[n]]++;    mpcc[mpc[n]]++;
            if(mprc[mpr[n]] == mat[0].size() || mpcc[mpc[n]] == mat.size()) return i;
        }
        return -1;
    }
};
```

Solution - 2: 
I find the following solution interesting by @Tushar_aherwar
, with reverse mapping of the above solution: https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3469270/c-solution-space-complexity-o-n/?orderBy=most_votes

<b>Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted