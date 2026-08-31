# 4 lines solution

**Author:** SuperViktor123
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/4186369/](https://leetcode.com/problems/corporate-flight-bookings/solutions/4186369/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

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
    pub fn corp_flight_bookings(bookings: Vec<Vec<i32>>, n: i32) -> Vec<i32> {
        println!("{:?}", bookings);
        let mut result: Vec<i32> = Vec::new();
        for _ in 0..n { result.push(0); }
        for booking in bookings { for idx in booking[0] as usize - 1..booking[1] as usize { result[idx] = result[idx] + booking[2]; } }
        result
    }
}
```