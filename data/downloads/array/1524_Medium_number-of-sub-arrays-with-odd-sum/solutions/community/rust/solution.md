# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/3163739/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/3163739/)

---

# Code
```
impl Solution {
    pub fn num_of_subarrays(arr: Vec<i32>) -> i32 {
        let arr = arr.iter().map(|&x| x as i64).collect::<Vec<_>>();
        let mut ans = 0_i64;
        let mut odd = 0;
        let mut even = 1;
        let mut sum = 0;
        for &item in arr.iter() {
            sum += item;
            if sum % 2 == 0 {
                ans += odd;
                even += 1;
            } else {
                ans += even;
                odd += 1;
            }
        }
        (ans % 1_000_000_007) as _
    }
}
```