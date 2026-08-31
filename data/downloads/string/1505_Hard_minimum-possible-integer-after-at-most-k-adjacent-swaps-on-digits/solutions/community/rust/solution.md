# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/3162681/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/3162681/)

---

# Code
```
impl Solution {
    pub fn min_integer(num: String, k: i32) -> String {
        let mut k = k as usize;
        let num = num.into_bytes();
        let n = num.len();
        let mut res = Vec::with_capacity(n);
        let mut q = vec![n; 10];
        for (i, &item) in num.iter().enumerate() {
            let d = (item - b'0') as usize;
            if q[d] == n {
                q[d] = i;
            }
        }
        let mut used = vec![false; n];
        let mut q_used = vec![0; 10];
        for _ in 0..n {
            for d in 0..10_usize {
                if q[d] == n {
                    continue;
                }
                let c = q[d] - q_used[d];
                if c <= k {
                    k -= c;
                    res.push(b'0' + d as u8);
                    used[q[d]] = true;
                    for d1 in 0..10_usize {
                        if q[d1] > q[d] {
                            q_used[d1] += 1;
                        }
                    }
                    while q[d] < n {
                        if used[q[d]] {
                            q_used[d] += 1;
                        }
                        q[d] += 1;
                        let &c = num.get(q[d]).unwrap_or(&0_u8);
                        if c == b'0' + d as u8 {
                            break;
                        }
                    }
                    break;
                }
            }
        }
        String::from_utf8(res).unwrap()
    }
}
```