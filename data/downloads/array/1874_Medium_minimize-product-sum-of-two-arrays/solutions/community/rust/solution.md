# Functional in-place solution

**Author:** meltyness
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/6130584/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/6130584/)

---

# Intuition
push the spider back into the bowl

# Code
```rust []
impl Solution {
    pub fn min_product_sum(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> i32 {
        nums1.sort();
        nums2.sort();
        nums2.reverse();

        nums1.iter().zip(nums2.iter()).map(|(a,b)| a*b).sum()
    }
}
```