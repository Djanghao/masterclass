# Simple C++ Solution

**Author:** hardikn13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/5229773/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/5229773/)

---

```
class Solution {
public:
    int minOrAfterOperations(vector<int>& nums, int k) {
        
        int n = nums.size();
        int ans = 0;
        
        for(int j = 30; j >= 0; j--)
        {
            int cnt = 0;
            int curr = (1 << 30) - 1;
            int target = ans | (1 << j) - 1;
            
            for(int &x : nums)
            {
                curr &= x;
                if((curr | target) == target)
                {
                    cnt++;
                    curr = (1 << 30) - 1;
                }
            }
            
            
            if(n - cnt > k)
                ans |= (1 << j);
        }
        
        return ans;
    }
};
```