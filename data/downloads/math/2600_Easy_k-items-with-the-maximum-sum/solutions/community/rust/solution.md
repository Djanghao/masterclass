# subtract necessary number of negative values

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5891591/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5891591/)

---

```rust []
impl Solution {
    pub fn k_items_with_maximum_sum(num_ones: i32, num_zeros: i32, num_neg_ones: i32, k: i32) -> i32 {
        if k <= num_ones {k} 
        else {
           num_ones - (k - num_ones - num_zeros).max(0)
        }
    }
}
```