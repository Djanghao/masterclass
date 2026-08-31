# Rust simple iterative

**Author:** maksimryndin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5066779/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5066779/)

---

# Intuition
Occupied seats divide the row into intervals. We should find either the max half of the closed interval (both ends are occupied seats) or the max half-open interval (one of the ends is unoccupied)

# Approach
We iterate over the row of seats and check maximum distance on every occupied seat and on the last one

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
impl Solution {
    pub fn max_dist_to_closest(seats: Vec<i32>) -> i32 {
        let mut prev_occupied_seat = None;
        let mut max_dist = 0;
        for (seat, is_occupied) in seats.iter().enumerate() {
            if *is_occupied == 0 {
                if seat == seats.len()-1 {
                    max_dist = max_dist.max(seat-prev_occupied_seat.expect("at least one seat is occupied"));
                }
                continue;
            }
            let dist = prev_occupied_seat.map(|prev_seat: usize| (seat-prev_seat)/2).unwrap_or(seat);
            max_dist = max_dist.max(dist);
            prev_occupied_seat = Some(seat);
        }
        max_dist.try_into().unwrap()
    }
}
```