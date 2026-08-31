# Simple  rust solution

**Author:** giggs-lynx
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-pooling/solutions/1921588/](https://leetcode.com/problems/car-pooling/solutions/1921588/)

---

```rust
impl Solution {
    pub fn car_pooling(trips: Vec<Vec<i32>>, capacity: i32) -> bool {
        let mut pick = vec![0; 1001];
        let mut drop = vec![0; 1001];

        for trip in trips {
            pick[trip[1] as usize] += trip[0];
            drop[trip[2] as usize] += trip[0];
        }

        let mut capacity = capacity;

        for i in 0usize..=1000 {
            capacity += drop[i];
            capacity -= pick[i];

            if capacity < 0 {
                return false;
            }
        }

        true
    }
}
```