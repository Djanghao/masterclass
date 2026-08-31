# For rust lovers

**Author:** nisaacdz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4703804/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4703804/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn maximum_subarray_sum(nums: Vec<i32>, k: i32) -> i64 {
        let mut sums = vec![nums[0] as i64; nums.len()];
        for i in 1..nums.len(){
            sums[i] = sums[i - 1] + nums[i] as i64;
        }
        let mut rxi = std::collections::HashMap::new();
        let mut ans = i64::MIN;
        for i in 0..nums.len() {
            let target_1 = nums[i] - k;
            let target_2 = nums[i] + k;
            
            if let Some(&j) = rxi.get(&target_1) {
                ans = i64::max(ans, sums[i] - sums[j] + nums[j] as i64);
            }
            if let Some(&j) = rxi.get(&target_2) {
                ans = i64::max(ans, sums[i] - sums[j] + nums[j] as i64);
            }
            
            rxi.entry(nums[i]).and_modify(|v| if sums[i] - sums[*v] + (nums[*v] as i64) < nums[i] as i64 { *v = i }).or_insert(i);
        }

        if ans == i64::MIN { 0 } else { ans }
    }
}
```