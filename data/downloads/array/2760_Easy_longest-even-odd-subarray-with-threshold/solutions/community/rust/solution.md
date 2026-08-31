# [Python/C++/Rust] Very Simple Sliding Window Solution Beats 100%

**Author:** talalshafei
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5971113/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5971113/)

---

- `parity` variable to make sure the window is alternating between even and odd numbers.
- keep expanding the window and update `ans`
- if any violation happens to the given coditions, reset the `r, l, and parity` to start a new window

# Complexity
- Time complexity: $$O(n)$$
- Space complexity:$$O(1)$$

# Code
```python3 []
class Solution:
    def longestAlternatingSubarray(self, nums: List[int], t: int) -> int:
        parity, r, l, ans, n = 0, 0, 0, 0, len(nums)

        while r<n:
            if nums[r]%2==parity and nums[r]<= t: 
                parity^=1
                ans=max(ans, r-l+1)
                r+=1
            else:
                parity = 0
                while r<n and (nums[r]%2 or nums[r]>t): r+=1
                l=r

        return ans
```
```cpp []
class Solution {
public:
    int longestAlternatingSubarray(vector<int>& nums, int t) {
        int parity=0, r=0, l=0, ans=0, n=nums.size();
        while(r<n){
            if(nums[r]%2==parity && nums[r]<=t){
                ans=max(ans, r-l+1);
                parity^=1;
                r++;
            }
            else{
                parity=0;
                while(r<n && (nums[r]%2 || nums[r]>t)) r++;
                l=r;
            }
        }
        return ans;
    }
};
```
```rust []
use std::cmp::max;
impl Solution {
    pub fn longest_alternating_subarray(nums: Vec<i32>, t: i32) -> i32 {
        let (mut parity, mut r, mut l, mut ans, n) = (0, 0, 0, 0, nums.len());
        while r < n {
            if nums[r]%2==parity && nums[r]<=t {
                ans=max(ans, r-l+1);
                parity^=1;
                r+=1;
            }
            else {
                parity=0;
                while r<n && (nums[r]%2==1 || nums[r]>t){ r+=1; }
                l=r;
            }
        }
        return ans as i32;
    }
}
```