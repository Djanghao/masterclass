# C++ | Multiset | Using Next Function | Explained

**Author:** Rishabhsinghal12
**Votes:** 24
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445735/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445735/)

---

**DISCLAIMER: This is not an optimised approach but it is working**	


**C++ Code:**
```
vector<int> getSubarrayBeauty(vector<int>& nums, int k, int x) {
        
        int n = nums.size(), j = 0;
        
        multiset<int> ms;
        vector<int> res;
        
        for(int i = 0; i < n; i++) {
            
            if(nums[i] < 0) ms.insert(nums[i]);
            
            if(i-j+1 == k) {
                
                if(ms.size() < x)res.push_back(0);
                else res.push_back(*next(ms.begin(), x - 1));
                
                if(nums[j] < 0) ms.erase(ms.find(nums[j]));
                
                j++;
            }
        }
        
        return res;
    }
```