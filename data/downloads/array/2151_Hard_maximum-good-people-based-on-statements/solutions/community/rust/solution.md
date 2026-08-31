# rust simple solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5576540/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5576540/)

---

# Intuition
The simplest way is to check for each possible situation whether it fits the statement.

To save time one way to to check situation from those with most good people to those with least.

# Complexity
- Time complexity:
$$O(n^2\	imes2^n)$$

- Space complexity:
$$O(2^n)$$

# Code
```
impl Solution {
    pub fn maximum_good(statements: Vec<Vec<i32>>) -> i32 {
        let n=statements.len();
        let mut states=vec![Vec::new(); n+1];
        for i in 1..(1<<n) as usize{
            states[i.count_ones() as usize].push(i);
        }
        for i in (1..=n).rev(){
            for &state in &states[i]{
                if Self::verify(state, &statements){
                    return i as i32;
                }
            }
        }
        0
    }

    fn verify(state: usize, statements:& Vec<Vec<i32>>)->bool{
        let n=statements.len();
        for i in 0..n{
            if state&1<<i!=0{
                for (j, &s) in statements[i].iter().enumerate(){
                    if s!=2&&s!=(state&1<<j>0) as i32{return false}
                }
            }
        }
        true
    }
}
```