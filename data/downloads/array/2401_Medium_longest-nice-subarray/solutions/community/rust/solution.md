# Sliding window and bit manipulation, Faster than 100% intuitive solution. O(n)

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2854880/](https://leetcode.com/problems/longest-nice-subarray/solutions/2854880/)

---

```
pub fn longest_nice_subarray(nums: Vec<i32>) -> i32 {
    let mut left = 0;
    let mut right = 0;
    let len = nums.len();
    let mut mask = 0;
        
    let mut ans = 1;
        
    while right < len {
        if mask & nums[right] == 0 {
            ans = ans.max(right - left + 1);
        } else{
            while left < right && (mask & nums[right] != 0) {
                mask = mask ^ nums[left];
                left += 1;
            }
        }
            
        mask = mask ^ nums[right];
            
        right += 1;
    }
        
    ans as i32
}
```