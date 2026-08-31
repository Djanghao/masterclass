# C++ | Using Only Single Map | Explained | Easy to Understand

**Author:** Rishabhsinghal12
**Votes:** 13
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468668/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468668/)

---

**C++ Code**
```
class Solution {
public:
    int firstCompleteIndex(vector<int>& arr, vector<vector<int>>& mat) {
        
        int n = size(mat), m = size(mat[0]), res = m*n;
        
        unordered_map<int,int> map;
        
        for(int i = 0; i < m*n; i++)map[arr[i]] = i;
        
        for(int i = 0; i < n; i++) {
            int maxIdx = 0;
            
            for(int j = 0; j < m; j++) {
                maxIdx = max(maxIdx, map[mat[i][j]]);
            }
            
            res = min(res,maxIdx);
        }
        
        for(int i = 0; i < m; i++) {
            int maxIdx = 0;
            
            for(int j = 0; j < n; j++) {
                maxIdx = max(maxIdx, map[mat[j][i]]);
            }
            
            res = min(res,maxIdx);
        }
        
        return res;
        
    }
};
```

**Explanation**

* unordered_map<int,int> map; - Here used to mark the order of arr items
* First loop iterates by row, to identify by each row the index of last marked arr item. Then get the min, which row marked(finished) first:

```
for(int i = 0; i < n; i++) {
            int maxIdx = 0;
            
            for(int j = 0; j < m; j++) {
                maxIdx = max(maxIdx, map[mat[i][j]]);
            }
            
            res = min(res,maxIdx);
}
```
* Second loop iterates by column and makes the same logic as first loop described above.

* Let's test in second example of the problem:
```Input: arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]] Output: 3```

* After mark the order of arr in map, we can draw second matrix that shows the mark position by arr:

```
[5,0,6],
[4,3,7],
[1,2,8]
```

* First loop iteration by row:

```
[5,0,6], // maxIdx = 6
[4,3,7], // maxIdx = 7
[1,2,8] // maxIdx = 8

min of these is `6`, we can see by row first finished first row, by arr item index `6`
```

* Second loop iteration by column:
```
[5,0,6], 
[4,3,7], 
[1,2,8] 

Max by col:
5 3 8
```

* min of these(5,3,8) is 3, we can see by column first finished second column by arr item index 3. If we compare which one first finished by row or column, the answer is by column because arr value by index 3 becomes earlier than index 6

*Thank you @Yerkon for explaining the code*