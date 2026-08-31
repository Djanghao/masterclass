# rust: bitmasking with Hashmap, no sort

**Author:** happysings
**Votes:** 0
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/4623415/](https://leetcode.com/problems/cinema-seat-allocation/solutions/4623415/)

---

# Approach
only n being a large value is a challenge - so we sort based on the row index and keep all seats in a row together. We iterate row by row and check for all empty rows.
In a row - if any of the end can be filled we fill it otherwise we try to fill the center.


# Code
```rust
use std::collections::HashMap;

impl Solution {
    pub fn max_number_of_families(n: i32, reserved_seats: Vec<Vec<i32>>) -> i32 {
        let h = reserved_seats.iter().fold(HashMap::new(), |mut h, f| {
            *h.entry(f[0]).or_insert(0x03ffu16) ^= 1 << (f[1] - 1);
            h
        });
        let mut count = 0;
        let masks: [u16; 2] = [0b11110, 0b111100000]; // mask for both ends with 2-2 split doen the aisle
        for &currmask in h.values() {
            let ends = masks
                .iter()
                .filter(|&&mask| (currmask & mask) == mask)
                .count() as i32;
            if ends == 0 {
                if currmask & 0b1111000 == 0b1111000 { // mask for center
                    count += 1;
                }
            }
            count += ends;
        }
        count += (n - h.len() as i32) * 2;
        count
    }
}
```