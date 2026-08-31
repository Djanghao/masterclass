# Rust 4ms solution with binary-indexed segment tree

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/546222/](https://leetcode.com/problems/range-sum-query-mutable/solutions/546222/)

---

```rust
struct NumArray {
    segtree: Vec<i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {

    fn new(nums: Vec<i32>) -> Self {
        let mut segtree: Vec<i32> = vec![0; nums.len() * 2];
        for i in 0..nums.len() {
            segtree[nums.len() + i] = nums[i];
        }
        for i in (0..nums.len()).rev() {
            segtree[i] = segtree[i * 2] + segtree[i * 2 + 1];
        }
        println!("{:?}", segtree);
        NumArray { segtree }
    }
    
    fn update(&mut self, i: i32, val: i32) {
        let mut i = i as usize + self.segtree.len() / 2;
        self.segtree[i] = val;
        while i > 0 {
            let j = if i % 2 == 0 { i + 1 } else { i - 1 };
            self.segtree[i / 2] = self.segtree[i] + self.segtree[j];
            i /= 2;
        }
    }
    
    fn sum_range(&self, i: i32, j: i32) -> i32 {
        let (mut l, mut r) = (i as usize, j as usize);
        l += self.segtree.len() / 2;
        r += self.segtree.len() / 2;
        let mut sum = 0;
        while l <= r {
            if l % 2 == 1 {
                sum += self.segtree[l];
                l += 1;
            }
            if r % 2 == 0 {
                sum += self.segtree[r];
                r -= 1;
            }
            l /= 2;
            r /= 2;
        }
        sum
    }
}
```
