# VARIATION OF KTH SMALLEST ELEMENT

**Author:** RESTARTGAURAVI
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5719074/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5719074/)

---

```

class Solution {
public:
    vector<int> resultsArray(vector<vector<int>>& q, int k) {
        priority_queue<int>pq;
        vector<int>ans(q.size());
        int i=0;
        for(auto x:q){
pq.push(abs(x[0])+abs(x[1]));

if(pq.size()>k)
pq.pop();
ans[i]=pq.size()==k ? pq.top():-1;
i++;
        }
        return ans;
    }
};