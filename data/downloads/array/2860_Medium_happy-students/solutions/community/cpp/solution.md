# ✅ [C++] | Simple Solution | N*Log(N) | Sorting | Greedy

**Author:** 007_abhishek
**Votes:** 29
**Link:** [https://leetcode.com/problems/happy-students/solutions/4053863/](https://leetcode.com/problems/happy-students/solutions/4053863/)

---

# Complexity
- Time complexity: O(N log(N))

# Code
```
class Solution {
public:
    int countWays(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int ans = 0, n = nums.size();
        int selected = 0;
        if(nums[0]!=0) ans = 1; // Not Selecting AnyOne
        for(int i=0;i<n;i++) {
            selected++;
            if(selected>nums[i]) {  // No. of Selected Students is strictly greater than nums[i].
                if(i+1<n && selected<nums[i+1]) // Considering from (i+1) to n Students is not Selected.
                    ans++; 
                else if(i+1==n) ans++;  // Last Student
            }
        }
        return ans;
    }
};
```