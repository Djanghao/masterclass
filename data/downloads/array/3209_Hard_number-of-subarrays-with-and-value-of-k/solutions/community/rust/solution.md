# rust solution with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5431231/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5431231/)

---

# Intuition
Think about a subarray starting with $nums[i]$, for each bits of $k$, the situation is different.

1. If this bit of $k$ is $1$, you may want to find the first $0$ appears, let it be $j'$, for this bit, every subarray $nums[i..j]$ which $j<j'$ is possible.
2. If this bit of $k$ is $0$, you may also want to find the first $0$ appears, let it be $j'$, for this bit, every subarray $nums[i..j]$ which $j>=j'$ is possible.

# Complexity
- Time complexity:
- $$O(n*\\log(n))$$ which $\\log(n)$ part is from the $b$ in my code.

- Space complexity:
$$O(n*\\log(n))$$

# Code
```
use std::collections::VecDeque;
use std::cmp::{min, max};

impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i64 {
        let n=nums.len();
        let bits:Vec<bool>=(0..30).map(|j|k&(1<<j)!=0).collect();

        let mut b=0;
        for &i in &nums{
            let mut tb=0;
            while (1<<tb)<=i{tb+=1;}
            b=max(b, tb);
        }
        let mut tb=0;
        while (1<<tb)<=k{tb+=1;}
        b=max(b, tb);

        let mut z=vec![VecDeque::new(); b];
        for i in 0..n{
            for j in 0..b{
                if nums[i]&(1<<j)==0{
                    z[j].push_back(i);
                }
            }
        }
        
        let mut res=0;
        for i in 0..n{
            let mut from=i;
            let mut to=n;
            for j in 0..b{
                if bits[j]{
                    to=min(to, *z[j].front().unwrap_or(&n));
                }else{
                    from=max(from, *z[j].front().unwrap_or(&n));
                }
                if to<=from{break;}
            }
            if to>from{
                res+=(to-from) as i64;
            }
            for j in 0..b{
                if z[j].len()>0&&z[j][0]==i{
                    z[j].pop_front();
                }
            }
        }
        res
    }
}

```