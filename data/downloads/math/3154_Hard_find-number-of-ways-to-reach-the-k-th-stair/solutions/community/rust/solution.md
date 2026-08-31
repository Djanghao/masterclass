# rust 0ms solution with explain

**Author:** sovlynn
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5191206/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5191206/)

---

![image.png](./images/0.png)

# Intuition
Suggest at last you would reach $jump=i-1$, you will at least jump to $1+2^0+2^1+\\dots+2^{i-1}=2^i$. Since you cannot minus 1 consecutively, amoung these jumps there are only $i+1$ slots you can minus 1. If your target is k, you will select $2^i-k$ slots to operate minus operation. There are totally ${i+1}\\choose{2^i-k}$ ways to reach the target.

Try $i$ from 0 to 32.

# Optimization
In practice, if you build up a look-up table for these binomial coefficients, that will save many time.

# Code
```
impl Solution {
    pub fn ways_to_reach_stair(k: i32) -> i32 {
        let mut res=0;
        for i in 0..32{
            if k<=(1<<i)&&((1<<i)-k)<=(i+1){
                res+=Self::C(i+1, (1<<i)-k);
            }
        }
        res
    }

    fn C(n: i32, k: i32)->i32{
        let k=if k>n/2{(n-k) as u64}else{k as u64};
        let n=n as u64;
        println!("n:{n}, k:{k}");
        let mut res=1;
        for i in 0..k{
            res=res*(n-i)/(i+1);
        }
        res as i32
    }
}
```