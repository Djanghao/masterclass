# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/2725416/](https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/2725416/)

---

```
impl Solution {
    pub fn min_sum_square_diff(nums1: Vec<i32>, nums2: Vec<i32>, k1: i32, k2: i32) -> i64 {
        let n = nums1.len();       
        let mut a = vec![(0i64,0);n];
        let mut tot = 0;
        for i in 0..n {
            a[i] = ((nums1[i] - nums2[i]).abs() as i64, 1);
            tot += a[i].0;
        }
    
        let mut num = (k1+k2) as i64;
        if tot <= num {
            return 0
        }
    
        a.sort();
        while 0 < num && a.len() > 1 {
            let (b1v, b1num) = a.pop().unwrap();
            let (b2v, b2num) = a.pop().unwrap();
    
            let diff = b1v - b2v;
            if diff == 0 {
                a.push((b2v, b2num + b1num));
            } else if diff * b1num <= num {
                num -= diff * b1num;
                a.push((b2v, b2num + b1num));
            } else {
                let v = num / b1num;
                let av = num % b1num;
                a.push((b2v, b2num));
                a.push((b1v-v-1, av));
                a.push((b1v-v, b1num-av));
                num = 0;
            }
        }
    
        let mut result = 0;
        if num != 0 {
            let (left_v, left_num) = a.pop().unwrap();
            let v = num / left_num;
            let av = num % left_num;
    
            a.push((left_v-v-1, av));
            a.push((left_v-v, left_num-av));
        }
    
        for (v, num) in a {
            result += v * v * num;
        }  
        result
    }
}
```