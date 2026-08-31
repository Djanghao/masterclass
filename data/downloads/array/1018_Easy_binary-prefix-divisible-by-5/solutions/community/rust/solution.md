# default

**Author:** elitecoder666
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/5155753/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/5155753/)

---



# Code
```
impl Solution
{
    pub fn prefixes_div_by5(nums: Vec<i32>) -> Vec<bool>
    {
        let mut ans = vec![false; nums.len()];
        
        let mut val = 0;
        for i in 0..nums.len()
        {
            val = ((val * 2) + nums[i]) % 5;
            ans[i] = (val == 0);
        }

        return ans;
    }
}
```