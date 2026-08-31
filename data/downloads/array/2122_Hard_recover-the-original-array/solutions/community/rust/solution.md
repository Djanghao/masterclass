# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/3254091/](https://leetcode.com/problems/recover-the-original-array/solutions/3254091/)

---

# Code
```
impl Solution {
    pub fn recover_array(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        nums.sort();
        let n = nums.len() / 2;
        let a = nums[0];
        let mut v1 = Vec::with_capacity(n);
        let mut v2 = Vec::with_capacity(n);
        for i in 1..nums.len() {
            let k = nums[i] - a;
            if k % 2 == 1 || k == 0 || nums[i] == nums[i - 1] {
                continue;
            }
            v1.clear();
            v2.clear();
            v1.push(a);
            let mut x = 0;
            for &num in nums.iter().skip(1) {
                if x < v1.len() && num == v1[x] + k {
                    v2.push(num);
                    x += 1;
                } else {
                    v1.push(num);
                }
                if v1.len() > n || v2.len() > n {
                    break;
                }
            }
            if v1.len() != n || v2.len() != n {
                continue;
            }
            let mut ans = Vec::with_capacity(n);
            for i in 0..n {
                ans.push((v1[i] + v2[i]) / 2);
            }
            return ans;
        }
        vec![]
    }
}
```