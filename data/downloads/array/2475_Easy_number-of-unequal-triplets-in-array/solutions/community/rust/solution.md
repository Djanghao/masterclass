# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2832782/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2832782/)

---

```
impl Solution {
    pub fn unequal_triplets(nums: Vec<i32>) -> i32 {
        let l = nums.len();
        let mut res = 0;
        for (i, &a) in nums.iter().enumerate().take(l - 2) {
            for (j, &b) in nums.iter().enumerate().take(l - 1).skip(i + 1) {
                nums[j + 1..]
                    .iter()
                    .filter(|&&c| a != b && b != c && c != a)
                    .for_each(|_| res += 1);
            }
        }
        res
    }
}
```