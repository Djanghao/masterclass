# Rust facter than 100%, 91ms

**Author:** maksimryndin
**Votes:** 0
**Link:** [https://leetcode.com/problems/exam-room/solutions/5067244/](https://leetcode.com/problems/exam-room/solutions/5067244/)

---

# Intuition
Occupied seats divide the row into intervals. We should find either the max half of the closed interval (both ends are occupied seats) or the max half-open interval (one of the ends is unoccupied).
It is strongly advised to check https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5066779/rust-simple-iterative/ first 

# Approach
We store occupied seats in a vector (BTreeSet is naturally appealing but it works much slower (around 226 ms) - just try to replace with it, perhaps due to frequent heap allocations - see https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html). On every seat we check intervals and then sort the seats vector

# Complexity
- Time complexity:
seat: O(nlogn) (sorting dominates here but because the large data is usually sparsed, sorting costs are negligible) (for BTreeSet case it is O(logn))
leave: O(n) (for BTreeSet case it is O(logn))

- Space complexity:
O(n)

# Code
```
struct ExamRoom {
    seats: Vec<i32>,
    n: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ExamRoom {
    fn new(n: i32) -> Self {
        Self {
            seats: vec![],
            n,
        }
    }

    fn seat(&mut self) -> i32 {
        if self.seats.is_empty() {
            self.seats.push(0);
            return 0;
        }

        let mut best_seat = 0;
        let mut seats = self.seats.iter();
        let first_seat = *(seats.next().unwrap());
        let mut prev_seat = first_seat;
        let mut max_dist = first_seat;
        
        // O(n)
        for seat in seats {
            let dist = (seat - prev_seat) / 2;
            if dist > max_dist {
                max_dist = dist;
                best_seat = prev_seat + dist;
            }

            prev_seat = *seat;
        }
        let last_seat = *(self.seats.last().unwrap());
        if last_seat != self.n - 1 && max_dist < (self.n - 1 - last_seat) {
            max_dist = self.n - 1 - last_seat;
            best_seat = self.n - 1;
        }

        self.seats.push(best_seat);
        // O(nlogn)
        self.seats.sort_unstable();
        best_seat
    }

    fn leave(&mut self, p: i32) {
        O(n)
        self.seats.retain(|elem| *elem != p);
    }
}
```