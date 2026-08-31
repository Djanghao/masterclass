# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3174473/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3174473/)

---

# Code
```
impl Solution {
    pub fn num_ways(s: String) -> i32 {
        let s = s.as_bytes();
        let n = s.len();
        let mut one = 0;
        let mod_num = 1_000_000_007;
        let ans;
        for &item in s.iter().take(n) {
            if item == b'1' {
                one += 1;
            }
        }
        if one % 3 != 0 {
            return 0;
        } else if one == 0 {
            ans = ((n as i64 - 1) * (n as i64 - 2) / 2) % mod_num;
        } else {
            let count_of_one = one / 3;
            let (mut index1, mut index1end, mut index2, mut index2end) = (-1, -1, -1, -1);
            let mut count = 0;
            for (i, &item) in s.iter().enumerate().take(n) {
                if item == b'1' {
                    count += 1;
                }
                if count == count_of_one && index1 == -1 {
                    index1 = i as i64;
                }
                if count == count_of_one + 1 && index2 == -1 {
                    index2 = i as i64;
                }
                if count == count_of_one * 2 && index1end == -1 {
                    index1end = i as i64;
                }
                if count == count_of_one * 2 + 1 && index2end == -1 {
                    index2end = i as i64;
                }
            }
            ans = ((index2 - index1) % mod_num) * ((index2end - index1end) % mod_num) % mod_num;
        }

        ans as _
    }
}
```