# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3368899/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3368899/)

---

# Code
```
impl Solution {
    pub fn make_sub_k_sum_equal(arr: Vec<i32>, k: i32) -> i64 {
        fn gcd(a: i64, b: i64) -> i64 {
            if b == 0 {
                a
            } else {
                gcd(b, a % b)
            }
        }

        let arr = arr.iter().map(|&x| x as i64).collect::<Vec<_>>();
        let k = k as i64;
        let n = arr.len() as i64;
        let k = gcd(n, k);
        let mut ans = 0;
        for i in 0..k {
            let mut vec = vec![];
            for j in (i..n).step_by(k as usize) {
                vec.push(arr[j as usize]);
            }
            vec.sort();
            let mid = vec.len() / 2;
            for ind in 0..vec.len() {
                ans += (vec[mid] - vec[ind]).abs();
            }
        }
        ans
    }
}
```