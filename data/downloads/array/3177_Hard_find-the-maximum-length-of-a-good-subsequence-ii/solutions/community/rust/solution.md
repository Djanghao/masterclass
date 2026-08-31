# rust a workable not optimal solution with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5281821/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5281821/)

---

# Intuition
let $dp[i, k']$ be the longest subsequence end with $nums(i)$ with $k'$ changes. $dp[i, k']$ is the maximum of these two options: 
1. the maximum $i'$ so that $nums[i']==nums[i]$, also known as the index of previous same number, $dp[i', k']+1$. That is, adding a same tail number to a sequence which didn't contribute to change number.
2. the maximum of $dp[j, k'-1]+1$ so that $j<i$ and $nums[j]!=nums[i]$. That is, adding a different tail number to a sequence which make change number increase 1.

My solution is to maintain an array $M$ keeping track of longest sequnece with $k'$ changes. $M[k']$ is actually a heap which length is 2. Since I want to find the length of longest subsequence which end is not a specific number, we may need the length of the second longest subsequence. $M[k']$ has the structure: ((longest length, the tail of longest), second longest length). I also maintain a $rec$ which $res[n][k']$ means the longest sequence ends with $n$ and with $k'$ changes, $-1$ means no such sequence.


# Optimization
I just allocate all changes from $0$ to $k$, however, for most of time it is unnecessary. If I can allocate the Vec based on the length needed I can save lots of space.

Also I feel the check in inner loop is a little not concise. Too lazy to write a better version.

# Complexity
- Time complexity:
$$O(n*k)$$

- Space complexity:
$$O(n*k)$$

# Code
```
use std::cmp::max;
use std::collections::HashMap;

impl Solution {
    pub fn maximum_length(nums: Vec<i32>, k: i32) -> i32 {
        let mut k=k as usize;
        let mut M=vec![((-1, 0), -1); k+1];
        let mut rec:HashMap<i32, Vec<i32>>=HashMap::new();
        for &n in &nums{
            if !rec.contains_key(&n){
                rec.insert(n, vec![-1; k+1]);
                rec.entry(n).and_modify(|x|x[0]=0);
            }
            let recn=rec.get_mut(&n).unwrap();
            recn[0]+=1;
            if recn[0]>M[0].0.0{
                M[0].1=M[0].0.0;
                M[0].0=(recn[0], n);
            }else if recn[0]>M[0].1{
                M[0].1=recn[0];
            }
            for i in 1..=k{
                let mut tmp=if recn[i]>=0{recn[i]+1}else{-1};
                let m=if M[i-1].0.1==n{M[i-1].1}else{M[i-1].0.0}+1;
                tmp=max(m, tmp);
                if tmp<=0{break;}
                recn[i]=tmp;
                if tmp>M[i].0.0{
                    M[i].1=M[i].0.0;
                    M[i].0=(tmp, n);
                }else if tmp>M[i].1{
                    M[i].1=tmp;
                }
            }
        }
        M.into_iter().map(|x|x.0.0).max().unwrap()
    }
}


```