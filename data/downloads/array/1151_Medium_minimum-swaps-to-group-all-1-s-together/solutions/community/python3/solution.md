# [Python3] sliding window

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1416447/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1416447/)

---


```
class Solution:
    def minSwaps(self, data: List[int]) -> int:
        k = sum(data) # window size 
        ans = val = 0 
        for i, x in enumerate(data): 
            val += x
            if i >= k: val -= data[i-k]
            if i+1 >= k: ans = max(ans, val)
        return k - ans
```

Implemented in C++ 
```
class Solution {
public:
    int minSwaps(vector<int>& data) {
        int ans = 0, val = 0, k = accumulate(data.begin(), data.end(), 0); 
        for (int i = 0; i < data.size(); ++i) {
            val += data[i]; 
            if (i >= k) val -= data[i-k]; 
            if (i+1 >= k) ans = max(ans, val); 
        }
        return k - ans; 
    }
};
```