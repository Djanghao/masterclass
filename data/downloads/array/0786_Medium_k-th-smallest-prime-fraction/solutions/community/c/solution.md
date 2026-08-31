# Simple C++ Solution

**Author:** Arbind007
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/2488364/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/2488364/)

---

```
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
         priority_queue<pair<double, pair<int, int>>> pq;
         int n = arr.size();
         for(int i = 0 ; i < n - 1; i++){
            for(int j = i + 1 ; j < n; j++){
                pq.push({(double)arr[i]/arr[j],{arr[i], arr[j]}});
                if(pq.size() > k)
                    pq.pop();
            }   
        }
        return {pq.top().second.first,pq.top().second.second};  
    }
};
```