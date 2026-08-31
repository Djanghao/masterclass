# Easiest C++ Solution || Two-Pointers

**Author:** vaibhav4859
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1865658/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1865658/)

---

```
class Solution {
public:
    int countHillValley(vector<int>& nums) {
        int ans = 0, n = nums.size();
        for(int i = 1; i < n; i++){
            if(nums[i] == nums[i-1]) continue; //  same hill or valley
            
            int idx = i - 1, jdx = i + 1;
            while(idx >= 0 && nums[idx] == nums[i]) idx--;
            if(idx < 0) continue; // no left neighbour found
			
            while(jdx < n && nums[jdx] == nums[i]) jdx++;
            if(jdx == n) continue; // no right neighbour found
            
            if(nums[idx] < nums[i] && nums[jdx] < nums[i]) ans++;
            else if(nums[idx] > nums[i] && nums[jdx] > nums[i]) ans++;
        }
        return ans;
    }
};
```