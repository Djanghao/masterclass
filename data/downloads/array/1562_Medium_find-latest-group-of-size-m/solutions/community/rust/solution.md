# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3171140/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3171140/)

---

# Code
```
impl Solution {
    pub fn find_latest_step(arr: Vec<i32>, m: i32) -> i32 {
        let (n, m) = (arr.len(), m as usize);
        if n == m {
            return n as i32;
        }
        let mut length = vec![0; n + 2];
        let mut count = vec![0; n + 1];
        let mut ans = -1;
        for (i, &a) in arr.iter().enumerate() {
            let (a, low, high) = (a as usize, length[a as usize - 1], length[a as usize + 1]);
            let sum = low + high + 1;
            length[a - low] = sum;
            length[a + high] = sum;
            count[low] -= 1;
            count[high] -= 1;
            count[sum] += 1;
            if count[m] > 0 {
                ans = i as i32 + 1;
            }
        }
        ans
    }
}
```