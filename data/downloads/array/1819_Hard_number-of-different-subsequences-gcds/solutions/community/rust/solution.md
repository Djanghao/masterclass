# Rust solution

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142238/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142238/)

---

```rust
impl Solution {
    pub fn count_different_subsequence_gc_ds(nums: Vec<i32>) -> i32 {
        let max_num = *nums.iter().max().unwrap();
        let mut vec = vec![false; max_num as usize + 1];
        for num in nums {
            vec[num as usize] = true;
        }

        let mut res = 0;
        for i in 1..=max_num {
            let mut gcd = 0;
            for j in (i..=max_num).step_by(i as usize) {
                if vec[j as usize] {
                    gcd = Self::gcd(gcd, j);
                }
            }
            if gcd == i {
                res += 1;
            }
        }
        res
    }

    fn gcd(mut a: i32, mut b: i32) -> i32 {
        while b != 0 {
            let tmp = a;
            a = b;
            b = tmp % b;
        }
        a
    }
}
```