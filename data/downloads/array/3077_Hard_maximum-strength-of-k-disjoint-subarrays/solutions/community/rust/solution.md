# rust 11ms simple solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/5555860/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/5555860/)

---

![image.png](./images/0.png)

# Intuition
Typical dp question. Let $dp_k[i]$ be the answer of array $nums[i..]$ which $nums[i]$ must be included in the first segment, and $m_k[i]$ be the max of $dp_k[i..]$. $scale=(k+1)*{-1}^k$ this the coefficient of each segment. We have:

$$dp_k[i]=nums[i]*scale+\\max\\left(dp_k[i+1], m_{k-1}[i+1]\\right)$$

That is, $dp_k[i]$ may have two possibilities:
1. Extend the existing first segment.
2. Let $nums[i]$ itself be the first segment.

Note that the range isn't necessary to cover the whole 1..n.

# Complexity
- Time complexity:
$$O(k*(n-k))$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn maximum_strength(nums: Vec<i32>, k: i32) -> i64 {
        let n=nums.len();
        let k=k as usize;
        let mut m=vec![0i64; n];
        let mut dp=vec![0i64; n];
        let mut pos=true;
        for s in 0..k{
            let mut this_dp=vec![0; n];
            let mut this_m=vec![0; n];
            let scale=if pos{s as i64+1}else{-(s as i64+1)};
            pos=!pos;

            this_dp[n-s-1]=nums[n-s-1] as i64*scale+if s!=0{dp[n-s]}else{0};
            this_m[n-s-1]=this_dp[n-s-1];
            for i in (k-1-s..n-s-1).rev(){
                this_dp[i]=this_dp[i+1].max(m[i+1])+nums[i] as i64*scale;
                this_m[i]=this_m[i+1].max(this_dp[i]);
            }
            dp=this_dp;
            m=this_m;
        }
        m[0]
    }
}


```