# Rust | 13ms | O(n) | beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349827/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349827/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn number_of_subarrays(nums: Vec<i32>, k: i32) -> i32 {
        let l = nums.len() as i32;
        let mut nums = nums.iter().enumerate().filter(|&(i, n)| n & 1 == 1).map(|(i, n)| i as i32).collect::<Vec<_>>();
        if nums.len() == 0 {return 0;}
        nums.insert(0, -1);
        nums.push(l);
        let (mut left, mut right, mut ans) = (1, k as usize, 0);
        while right < nums.len() - 1 {
            ans += (nums[right+1]-nums[right]) * (nums[left]-nums[left-1]);
            right += 1;
            left += 1;
        }
        ans
    }
}
```