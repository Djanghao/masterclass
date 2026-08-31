# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/3252596/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/3252596/)

---

# Code
```
impl Solution {
    pub fn max_total_fruits(fruits: Vec<Vec<i32>>, start_pos: i32, k: i32) -> i32 {
        pub fn upper_bound<T: Ord>(vec: &Vec<T>, x: &T) -> Result<usize, usize> {
            vec.iter().position(|y| y > x).ok_or(vec.len())
        }

        let v = vec![start_pos - k];
        let mut l = upper_bound(&fruits, &v).unwrap_or_else(|x| x);
        let mut sum = 0;
        let mut max_sum = 0;
        let mut r = l;
        while r < fruits.len() {
            if fruits[r][0] > start_pos + k {
                break;
            }
            sum += fruits[r][1];
            while (start_pos - 2 * fruits[l][0] + fruits[r][0]).min(2 * fruits[r][0] - fruits[l][0] - start_pos) > k {
                sum -= fruits[l][1];
                l += 1;
            }
            max_sum = max_sum.max(sum);
            r += 1;
        }
        max_sum
    }
}
```