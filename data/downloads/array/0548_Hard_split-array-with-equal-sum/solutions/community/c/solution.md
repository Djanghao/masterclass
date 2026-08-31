# [C++|Java|Python3] nested loop

**Author:** ye15
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/3027642/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/3027642/)

---

**C++**
```
class Solution {
public:
    bool splitArray(vector<int>& nums) {
        vector<int> prefix(1); 
        for (auto& x : nums) prefix.push_back(prefix.back() + x); 
        for (int j = 0, n = nums.size(); j < n; ++j) {
            unordered_set<int> seen; 
            for (int i = 1; i+1 < j; ++i) 
                if (prefix[i] == prefix[j] - prefix[i+1]) seen.insert(prefix[i]); 
            for (int k = j+2; k+1 < n; ++k)
                if (prefix[k] - prefix[j+1] == prefix.back() - prefix[k+1] && seen.count(prefix[k] - prefix[j+1])) return true; 
        }
        return false; 
    }
};
```
**Java**
```
class Solution {
    public boolean splitArray(int[] nums) {
        int n = nums.length; 
        int[] prefix = new int[n+1]; 
        for (int i = 0; i < n; ++i) prefix[i+1] = prefix[i] + nums[i]; 
        for (int j = 0; j < n; ++j) {
            Set<Integer> seen = new HashSet(); 
            for (int i = 1; i+1 < j; ++i) 
                if (prefix[i] == prefix[j] - prefix[i+1]) seen.add(prefix[i]); 
            for (int k = j+2; k+1 < n; ++k) 
                if (prefix[k] - prefix[j+1] == prefix[n] - prefix[k+1] && seen.contains(prefix[k] - prefix[j+1])) return true; 
        }
        return false; 
    }
}
```
**Python3**
```
class Solution:
    def splitArray(self, nums: List[int]) -> bool:
        prefix = list(accumulate(nums, initial=0))
        for j in range(len(nums)): 
            seen = set()
            for i in range(1, j-1): 
                if prefix[i] == prefix[j] - prefix[i+1]: seen.add(prefix[i])
            for k in range(j+2, len(nums)-1): 
                if prefix[k] - prefix[j+1] == prefix[-1] - prefix[k+1] and prefix[k] - prefix[j+1] in seen: return True 
        return False 
```