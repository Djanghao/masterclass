# C++ | Easy | 6 lines |  Two pointer | 100%

**Author:** kooskoos
**Votes:** 215
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/646988/](https://leetcode.com/problems/interval-list-intersections/solutions/646988/)

---

```
vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {
        vector<vector<int>> v;
        int i=0,j=0;
        while(i<A.size() && j<B.size()){
            int l=max(A[i][0], B[j][0]);
            int u=min(A[i][1], B[j][1]);
            if(l<=u) v.push_back({l,u});
            if(A[i][1] < B[j][1])   i++;
            else j++;
        }
        return v;
    }
```