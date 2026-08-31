# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/2709816/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/2709816/)

---

```
impl Solution {
    pub fn get_max_len(nums: Vec<i32>) -> i32 {
        let mut memo = vec![vec![]];
        let mut result = 0;
        
        for v in nums {
            if v == 0 {
                memo.push(vec![]);
            } else if v > 0 {
                let li = memo.len()-1;
                memo[li].push(true);
            } else {
                let li = memo.len()-1;
                memo[li].push(false);
            }
        }

        for arr in memo {
            let mut minuses = vec![];
            let n = arr.len();
            for i in 0 ..n {
                if !arr[i] {
                    minuses.push(i);
                }
            }

            let len = minuses.len();
            if minuses.len() % 2 == 0 {
                result = result.max(arr.len() as i32);
            } else {
                let right = (arr.len() - (minuses[0] + 1)).max(0) as i32;
                let left = minuses[len-1] as i32;
                result = result.max(right).max(left);
            }
        }
        result
    }
}
```