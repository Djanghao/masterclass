# Rust one liner, 0ms

**Author:** e52fa787
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996031/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996031/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

For people in front of the `k`-th person, they can buy at most as many tickets as `k` before `k` is done buying. This can be neatly written as
```
min(tickets[i], tickets[k])
```
For people behind the `k`-th person, they can buy at most one less ticket than `k` before `k` is done buying, so their number of purchases looks like
```
min(tickets[i], tickets[k]-1)
```
So we just need to sum these expressions up for the whole queue, with the `-1` added if `i > k` (i.e the person is behind `k` in the queue)

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
## Rust
The summing is done using `.fold()`, with `.enumerate()` applied first for access to the index. The `i > k` check is done just by casting the boolean result to an `i32` and adding it directly. The actual summand after some type casting is `std::cmp::min(tickets[k as usize] - i32::from(i as i32>k), v)`
```
impl Solution {
    pub fn time_required_to_buy(tickets: Vec<i32>, k: i32) -> i32 {
        tickets.iter().enumerate().fold(0, |s, (i, &v)| s + std::cmp::min(tickets[k as usize] - i32::from(i as i32>k), v))
    }
}
```