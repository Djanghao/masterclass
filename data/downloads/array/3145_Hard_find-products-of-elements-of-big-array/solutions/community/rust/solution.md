# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5150885/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5150885/)

---


```
impl Solution {
    pub fn find_products_of_elements(queries: Vec<Vec<i64>>) -> Vec<i32> {
        let mx = 1_000_000_000_000_006;
        let lim = 60;
        let mut ret = vec![];

        let mul = |x: i64, y: i64, m: i64| -> i64 {
            let x = x % m;
            let y = y % m;
            let res = x * y;
            if res >= m {
                res % m
            } else {
                res
            }
        };

        let mod_pow = |x: i64, y: i64, m: i64| -> i64 {
            if y <= 0 {
                return 1;
            }
            let mut ans = 1;
            let mut x = x % m;
            let mut y = y;
            while y != 0 {
                if y & 1 == 1 {
                    ans = mul(ans, x, m);
                }
                x = mul(x, x, m);
                y >>= 1;
            }
            ans
        };

        let calc = |n: i64| -> i64 {
            if n <= 0 {
                return n;
            }
            let mut lo = 1;
            let mut hi = mx;
            while lo <= hi {
                let mid = (lo + hi) / 2;
                let mut sum = 0;
                for i in 0..lim {
                    let p = 1_i64 << (i + 1);
                    let mut cur = ((mid + 1) / p) * (1_i64 << i);
                    cur += 0_i64.max((mid + 1) % p - (1_i64 << i));
                    sum += cur;
                }
                if sum >= n {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            }
            hi + 1
        };

        let calc2 = |n: i64, tot: i64| -> Vec<i64> {
            let mut cnt = vec![0; lim];
            if n <= 0 {
                return cnt;
            }
            let mut sum = 0;
            for (i, cnt_i) in cnt.iter_mut().enumerate().take(lim) {
                let p = 1_i64 << (i + 1);
                let mut cur = (n / p) * (1_i64 << i);
                cur += 0_i64.max(n % p - (1_i64 << i));
                sum += cur;
                *cnt_i = cur;
            }
            if sum < tot {
                for (i, cnt_i) in cnt.iter_mut().enumerate().take(lim) {
                    if sum >= tot {
                        break;
                    }
                    if (n >> i) & 1 == 1 {
                        *cnt_i += 1;
                        sum += 1;
                    }
                }
            }
            cnt
        };

        for q in queries {
            let v1 = calc2(calc(q[1] + 1), q[1] + 1);
            let v2 = calc2(calc(q[0]), q[0]);

            let mut val = 1;
            for i in 0..lim {
                let p = 1_i64 << i;
                let temp = mod_pow(p, v1[i] - v2[i], q[2]);
                val = (val * temp) % q[2];
            }
            ret.push(val as i32);
        }
        ret
    }
}

```