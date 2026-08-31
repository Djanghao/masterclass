# Sweep line

**Author:** dvs789
**Votes:** 24
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6053299/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6053299/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
if you don't know sweep line algorithm then i can do nothing so go and learn then this question easy for you
if you know then we make sweep line with queries  
further we check op is less then current number (nums[i]) then return false
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    bool isZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        int n=nums.size(); 
        vector<int>freq(n+1,0);         
        for(auto i:queries){
            freq[i[0]]++;
            freq[i[1]+1]--;
        }
        int op=0;
        for(int i=0;i<n;i++){
            op+=freq[i];
            if(op<nums[i])return false;
        }
        return true;        
    }
};
```