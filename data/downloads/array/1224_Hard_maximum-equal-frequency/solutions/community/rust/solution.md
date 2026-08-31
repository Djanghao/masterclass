# rust 3ms solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/5571637/](https://leetcode.com/problems/maximum-equal-frequency/solutions/5571637/)

---

![image.png](./images/0.png)


# Intuition
There are several possible situations:
1. all elements appears once.
2. $i$ elements appears $\\frac{n-1}{i}$ times, one element appears once.
3. $i$ elements appears $\\frac{n-1}{i+1}$ times, one element appears $\\frac{n-1}{i+1}+1$ times.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$, but huge.

# Code
```
impl Solution {
    pub fn max_equal_freq(nums: Vec<i32>) -> i32 {
        let mut frq=vec![0; 100001];
        let mut frqfrq=vec![0; 100001];
        let mut last=0;
        let mut res=1;
        for (i, &n) in nums.iter().enumerate(){
            let n=n as usize;
            if frq[n]!=0{
                frqfrq[frq[n]]-=1;
            }
            frq[n]+=1;
            let f=frq[n];
            frqfrq[f]+=1;
            if frqfrq[1]==i+1
            ||frqfrq[last]*last==i
            ||frq[n]*frqfrq[f]==i
            ||(last+1<frqfrq.len()&&frqfrq[last+1]==1&&last*(frqfrq[last]+1)==i)
            ||(f+1<frqfrq.len()&&frqfrq[f+1]==1&&f*(frqfrq[f]+1)==i){
                res=i+1;
            }
            last=f;
        }
        res as i32
    }
}
```