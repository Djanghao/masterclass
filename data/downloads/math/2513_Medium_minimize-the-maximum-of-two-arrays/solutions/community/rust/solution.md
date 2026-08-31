# Rust Binary Search

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947119/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947119/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use binary search to find the minimum such mid. After removing the numbers between 1 & mid inclusive that are not valid for constructing either arrays:
1) Do we have enough numbers to construct the first array?
2) Do we have enough number to construct the second array?
3) The remain total is no less than unique_cnt1 + unique_cnt2? 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn minimize_set(divisor1: i32, divisor2: i32, unique_cnt1: i32, unique_cnt2: i32) -> i32 {
        let (mut left, mut right) = (1, i32::MAX);
        
        while left < right {
            let mid = left + (right - left) / 2;
            if Self::valid(divisor1 as i64, divisor2 as i64, unique_cnt1 as i64, unique_cnt2 as i64, mid as i64) { right = mid; }
            else { left = mid + 1; }
        }
        
        left
    }

    fn gcd(a: i64, b: i64) -> i64 {
        if a < b { return Self::gcd(b, a) }
        if a % b == 0 { return b }
        Self::gcd(b, a % b)
    }
    
    fn valid(divisor1: i64, divisor2: i64, unique_cnt1: i64, unique_cnt2: i64, mid: i64) -> bool {
        let (mut cnt1, mut cnt2) = (mid / divisor1, mid / divisor2);
        let d = Self::gcd(divisor1, divisor2);
        let dbl = mid / (divisor1 * divisor2 / d);
        
        cnt1 + unique_cnt1 <= mid && cnt2 + unique_cnt2 <= mid && mid -  dbl >= unique_cnt1 + unique_cnt2 
    }
}
```