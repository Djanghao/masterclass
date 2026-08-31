# Python / Rust - Sliding Window and Deque

**Author:** nuclearoreo
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/721619/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/721619/)

---

- **Python**

```python
class Solution:
    def longestSubarray(self, nums: List[int], limit: int):
        i, maxq, minq = 0, [], []
        
        for num in nums:
            while len(maxq) and num > maxq[-1]: maxq.pop()
            while len(minq) and num < minq[-1]: minq.pop()
                
            maxq.append(num)
            minq.append(num)
            
            if maxq[0] - minq[0] > limit:
                if maxq[0] == nums[i]: maxq.pop(0)
                if minq[0] == nums[i]: minq.pop(0)
                i += 1
                
        return len(nums) - i
```

- **Rust**

```rust
impl Solution {
    pub fn longest_subarray(nums: Vec<i32>, limit: i32) -> i32 {
        let mut i = 0;
        let mut minq: Vec<i32> = vec![];
        let mut maxq: Vec<i32> = vec![];
        
        for num in nums.iter() {
            while minq.len() > 0 && num < minq.last().unwrap() {
                minq.pop();
            }
            
            while maxq.len() > 0 && num > maxq.last().unwrap() {
                maxq.pop();
            }
            
            minq.push(*num);
            maxq.push(*num);
            
            if maxq[0] - minq[0] > limit {
                if minq[0] == nums[i] { minq.remove(0); }
                if maxq[0] == nums[i] { maxq.remove(0); }
                i += 1;
            }
            
        }
        
        return (nums.len() as i32) - (i as i32);
    }
}
```