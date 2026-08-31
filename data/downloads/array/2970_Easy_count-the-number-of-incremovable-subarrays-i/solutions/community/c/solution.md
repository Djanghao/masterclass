# Two Pointers || Beat 100% || O(n)

**Author:** jacklee13520
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4465187/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4465187/)

---

#### Python
```
class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        # find the left increasing subarray
        N = len(nums)
        l = 0
        while l+1 < N and nums[l] < nums[l+1]:
            l += 1
            
        # if all array are sorted
        if l >= N-1:
            return (N+1)*N//2
        
        # find the right increasing subarray
        r = N - 1
        while r >= 1 and nums[r] > nums[r-1]:
            r -= 1
            
        # two pointers
        ans = N-r     # when cut off all left part
        for i in range(l+1):
            while r < N and nums[r] <= nums[i]:
                r += 1
            ans += N-r+1
        
        return ans+1
```

#### C++
```
class Solution {
public:
    int incremovableSubarrayCount(vector<int>& nums) {
        int N = nums.size(),l = 0;
        while(l+1 < N && nums[l] < nums[l+1] && ++l);
        if(l >= N-1) return N*(N+1)/2;
        
        int r = N-1;
        while(r >= 1 && nums[r] > nums[r-1] && r--);
        
        int ans = N-r;
        for(int i = 0;i <= l;i++){
            while(r < N && nums[r] <= nums[i] && r++);
            ans += N-r+1;
        }
        
        return ++ans;
    }
};
```