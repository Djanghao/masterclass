# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2923907/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2923907/)

---

# Code
```
impl Solution {
    pub fn minimum_total_cost(nums1: Vec<i32>, nums2: Vec<i32>) -> i64 {
        let n = nums1.len();
        let mut res = 0;
        let mut d = std::collections::HashMap::new();
        let mut t = 0;
        let mut most = 0;
        let mut v = 0;
        for i in 0..n {
            if nums1[i] == nums2[i] {
                res += i as i64;
                t += 1;
                *d.entry(nums1[i]).or_insert(0) += 1;
                if *d.get(&nums1[i]).unwrap() > most {
                    most = *d.get(&nums1[i]).unwrap();
                    v = nums1[i];
                }
            }
        }
        if 2 * most <= t {
            return res;
        }
        let mut k = 2 * most - t;
        for i in 0..n {
            if nums1[i] != nums2[i] && nums1[i] != v && nums2[i] != v {
                res += i as i64;
                k -= 1;
            }
            if k == 0 {
                return res;
            }
        }
        -1
    }
}
```