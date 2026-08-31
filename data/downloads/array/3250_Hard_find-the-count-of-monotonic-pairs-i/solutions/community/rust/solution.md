# trivial dp solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5624089/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5624089/)

---

# Intuition
This is a typical dp problem. Let $dp_i[n]$ be the solution which the increasing ends with $n$ and the decreasing ends with $num[i]-n$, we have.

$$dp_i[n]=\\sum_j^{j\\leq n &&nums[i-1]-j\\geq nums[i]-i}dp_{i-1}[j]$$

That is, for all prev pairs $(j, nums[i-1]-j)$, it should fullfill the increasing or decreasing condition.

Use prefix sum to accelerate.

# Complexity

- Time complexity:
$$O(\\sum nums)$$

- Space complexity:
$$O(\	extit{MAX}(nums))$$

# Code
```
impl Solution {
    pub fn count_of_pairs(nums: Vec<i32>) -> i32 {
        let MOD=1000000007usize;
        let mut prev=nums[0] as usize;
        let mut dp=vec![1; prev+1];
        for &n in &nums[1..]{
            let n=n as usize;
            for i in 1..dp.len(){
                dp[i]+=dp[i-1];
                dp[i]%=MOD;
            }
            let mut cur=vec![0; n+1];
            if prev>=n{
                cur.clone_from_slice(&dp[..=n]);
            }else{
                cur[n-prev..=n].clone_from_slice(&dp);
            }

            prev=n;
            dp=cur;
        }
        let mut res=0;
        for n in dp{
            res+=n;
            res%=MOD;
        }
        res as i32
    }
}
```