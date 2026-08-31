# O(n) hash unordered map concise and clean C++ solution

**Author:** whoiscris
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77794/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77794/)

---

```
class Solution {
public:
    int maxSubArrayLen(vector<int>& nums, int k) {
        unordered_map<int,int> M;
        int max_k = 0;
        for(int i=0, s = 0; i<nums.size(); ++i){
            s += nums[i];
            if(M.find(s) == M.end())
                M[s] = i;
            if(M.find(s-k) != M.end())
                max_k = max(max_k, i-M[s-k]);
            if(s == k)
                max_k = max(max_k, i+1);
        }
        return max_k;
    }
};
```