# rust 100% simple solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5455970/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5455970/)

---



# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    const MOD:usize=1000000007;
    pub fn count_special_subsequences(nums: Vec<i32>) -> i32 {
        let mut two_prev=0;
        let mut one_prev=0;
        let mut zero_prev=0;
        let mut res=0usize;
        for i in (0..nums.len()).rev(){
            if nums[i]==2{
                two_prev=(two_prev*2+1)%Self::MOD;
            }else if nums[i]==1{
                one_prev+=(one_prev+two_prev);
                one_prev%=Self::MOD;
            }else{
                res+=(zero_prev+one_prev);
                res%=Self::MOD;
                zero_prev+=(zero_prev+one_prev);
                zero_prev%=Self::MOD;
            }
        }
        res as i32
    }
}
```