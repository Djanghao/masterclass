# [C++] | DFS | 8ms

**Author:** dexter_2000
**Votes:** 5
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/1639713/](https://leetcode.com/problems/factor-combinations/solutions/1639713/)

---

```
vector<vector<int>> getFactors(int n) {
        vector<vector<int>> ans;
        vector<int>factors;
        getResult(ans,factors,n);
        return ans;
    }
    void getResult(vector<vector<int>>&ans,vector<int>&factors,int n){
        int i=factors.empty()?2:factors.back();
        for(;i<=n/i;i++){
            if(n%i==0){
                factors.push_back(i);
                factors.push_back(n/i);
                ans.push_back(factors);
                factors.pop_back();
                getResult(ans,factors,n/i);
                factors.pop_back();
            }
        } 
    }
```