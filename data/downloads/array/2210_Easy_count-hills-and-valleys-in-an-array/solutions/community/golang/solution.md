# C++ | Golang

**Author:** pikachuu
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3355594/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3355594/)

---

# Code
```
// C++
class Solution {
public:
    int countHillValley(vector<int>& nums) {
        int n = nums.size(), prev = nums[0], ans = 0;
        for(int i = 1; i < n; i++) {
            while(i < n && nums[i] == nums[i - 1]) i++;
            if(i < n && ((nums[i - 1] > nums[i] && nums[i - 1] > prev) || (nums[i - 1] < nums[i] && nums[i - 1] < prev))) {
                ans++;
            }
            prev = nums[i - 1];
        }
        return ans;
    }
};


// Golang
func countHillValley(nums []int) int {
    var n, prev, ans int = len(nums), nums[0], 0
    for i := 1; i < n; i++ {
        for i < n && nums[i] == nums[i - 1] {i++}
        if i < n && ((nums[i - 1] > nums[i] && nums[i - 1] > prev) || (nums[i - 1] < nums[i] && nums[i - 1] < prev)) {
            ans++
        }
        prev = nums[i - 1]
    }
    return ans
}
```