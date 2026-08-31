# Rust onepass solution

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/1184822/](https://leetcode.com/problems/faulty-sensor/solutions/1184822/)

---

```rust
impl Solution {
    pub fn bad_sensor(sensor1: Vec<i32>, sensor2: Vec<i32>) -> i32 {
        let n = sensor1.len();
        for i in 0..(n - 1) {
            if sensor1[i] == sensor2[i] { continue; }
            if &sensor1[(i + 1)..] == &sensor2[i..(n - 1)] {
                return 2;
            } else if &sensor1[i..(n - 1)] == &sensor2[(i + 1)..] {
                return 1;
            } else {
                return -1;
            }
        }
        -1
    }
}
```