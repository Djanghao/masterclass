# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/3268237/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/3268237/)

---

# Code
```
impl Solution {
    pub fn valid_subarray_size(nums: Vec<i32>, threshold: i32) -> i32 {
        let mut st = vec![];
        let mut nums = nums;
        nums.push(0);
        for i in 0..nums.len() {
            while !st.is_empty() && nums[i] < nums[st[st.len() - 1]] {
                let val = nums[st[st.len() - 1]];
                st.pop();
                let j = if st.is_empty() { -1 } else { st[st.len() - 1] as i32 };
                if val > threshold / (i as i32 - j - 1) {
                    return i as i32 - j - 1;
                }
            }
            st.push(i);
        }
        -1
    }
}
```