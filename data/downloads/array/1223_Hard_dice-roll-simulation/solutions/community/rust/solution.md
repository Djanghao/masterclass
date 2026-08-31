# rust 4ms classic dp solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/5571592/](https://leetcode.com/problems/dice-roll-simulation/solutions/5571592/)

---

![image.png](./images/0.png)

# Intuition
Let $dp_i[d][l]$ be the solution of $i$ rolls which $d$ has $l$ consecutive times. This value can be derived from last state.

# Complexity
- Time complexity:
$$O(n*\\sum roll\\_max[i])$$

- Space complexity:
$$O(\\sum roll\\_max[i])$$

# Code
```
impl Solution {
    pub fn die_simulator(n: i32, roll_max: Vec<i32>) -> i32 {
        let MOD=1000000007usize;
        let mut state=Vec::new();
        for &n in &roll_max{
            state.push((vec![0usize; n as usize], 1));
        }
        for i in 0..6{
            state[i].0[0]=1;
        }
        for i in 1..n{
            let mut cur=state.clone();
            let mut total=state.iter().map(|x|x.1).sum::<usize>()%MOD;
            for j in 0..6{
                cur[j].0[0]=(total+if total<state[j].1{MOD}else{0}-state[j].1)%MOD;
                for k in 1..cur[j].0.len(){
                    cur[j].0[k]=state[j].0[k-1];
                }
                cur[j].1=cur[j].0.iter().sum::<usize>()%MOD;
            }
            state=cur;
        }
        (state.iter().map(|x|x.1).sum::<usize>()%MOD) as i32
    }
}
```