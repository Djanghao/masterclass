# [Python3] prefix sum

**Author:** ye15
**Votes:** 8
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1429757/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1429757/)

---


```
class Solution:
    def widestPairOfIndices(self, nums1: List[int], nums2: List[int]) -> int:
        ans = prefix = 0
        seen = {0: -1}
        for i in range(len(nums1)): 
            prefix += nums1[i] - nums2[i]
            if prefix in seen: ans = max(ans, i - seen[prefix])
            seen.setdefault(prefix, i)
        return ans 
```

Implemented in C++ 
```
class Solution {
public:
    int widestPairOfIndices(vector<int>& nums1, vector<int>& nums2) {
        int ans = 0, prefix = 0; 
        unordered_map<int, int> seen = {{0, -1}}; 
        for (int i = 0; i < nums1.size(); ++i) {
            prefix += nums1[i] - nums2[i]; 
            if (seen.count(prefix)) ans = max(ans, i - seen[prefix]); 
            else seen[prefix] = i; 
        }
        return ans; 
    }
};
```