# count individual bits

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/5994254/](https://leetcode.com/problems/total-hamming-distance/solutions/5994254/)

---

```rust []
impl Solution {
    pub fn total_hamming_distance(nums: Vec<i32>) -> i32 {
        let mut v = [0; 32];
        let mut n = nums.len() as i32;
        for mut x in nums.into_iter() {
            for k in 0..31 {
                if x == 0 {break}
                v[k] += x & 1;
                x >>= 1;
            }
        }
        v.into_iter().map(|i|i*(n-i)).sum::<i32>()
    }
}
```