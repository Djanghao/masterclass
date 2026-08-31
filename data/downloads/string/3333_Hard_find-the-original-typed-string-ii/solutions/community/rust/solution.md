# dp solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5986212/](https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5986212/)

---

# Intuition
The problem can be transferred to another question:

Given an array $f$ with length $n$ and a number $k$, tell how many arrays $a$ are there so that $\\sum a\\geq k$ and $0\\leq a[i]\\leq f[i]$ for each $0\\leq i\\leq n$. Apperantly, the number $ans=\\prod\\left(f[i]+1\\right)-ans'$, where $ans'$ is the number for those which sum is less than $k$, and $ans'$ is easier.

Suppose we have $dp[i][k']$ is the answer for $f[..i]$ which sum is $k'$, we have $dp[i][k']=\\sum_{j=0}^{f[i]}dp[i-1][k'-j]$. Use prefix sum to lower the time complexity.

# Complexity
- Time complexity:
$$O(n+k*max(f))$$

- Space complexity:
$$O(k)$$

# Code
```rust []
impl Solution {
    const MOD:usize=1000000007;
    pub fn possible_string_count(word: String, k: i32) -> i32 {
        let mut k=k as usize;
        if word.len()<k{
            return 0;
        }
        if word.len()==k{
            return 1;
        }
        let word=word.as_bytes();
        let mut prev=word[0];
        let mut count=0usize;
        let mut f=Vec::new();
        for c in word{
            if *c==prev{
                count+=1;
            }else{
                f.push(count-1);
                count=1;
                prev=*c;
            }
        }
        f.push(count-1);
        k=if k>f.len(){
            k-f.len()
        }else{
            0
        };

        let mut dp=vec![0usize; k+1];
        for i in 0..k{
            dp[i+1]=if i<=f[0]{1}else{0}+dp[i];
        }
        for l in &f[1..]{
            let mut cur=vec![0; k+1];
            for i in 0..k{
                let b=dp[if i>=*l{i-*l}else{0}];
                let mut a=dp[i+1];
                while a<b{
                    a+=Self::MOD;
                }
                cur[i+1]=(a-b+cur[i])%Self::MOD;
            }
            dp=cur;
        }
        let mut total=1;
        for l in &f{
            total=(total* (*l+1))%Self::MOD;
        }
        while total<dp[k]{
            total+=Self::MOD;
        }
        (total-dp[k]) as i32
    }
}
```