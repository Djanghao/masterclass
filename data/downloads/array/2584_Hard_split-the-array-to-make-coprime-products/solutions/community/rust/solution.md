# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3260675/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3260675/)

---

# Code
```
impl Solution {
    pub fn find_valid_split(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;
        fn factorize(n: i32) -> Vec<i32> {
            let mut res = Vec::new();
            let mut n = n;
            let mut i = 2;
            while n > 1 && i < 1000 {
                if n % i == 0 {
                    res.push(i);
                    while n % i == 0 {
                        n /= i;
                    }
                }
                i += 1 + (i % 2);
            }
            if n > 1 {
                res.push(n);
            }
            res
        }

        let (mut left, mut right) = (HashMap::new(), HashMap::new());
        for n in nums.iter() {
            for f in factorize(*n) {
                *right.entry(f).or_insert(0) += 1;
            }
        }
        let mut common = 0;
        for (i, &num) in nums.iter().enumerate().take(nums.len() - 1) {
            for f in factorize(num) {
                let l = left.entry(f).or_insert(0);
                common += (*l == 0) as i32;
                *l += 1;
                common -= (*l == right[&f]) as i32;
            }
            if common == 0 {
                return i as i32;
            }
        }
        -1
    }
}
```