# Rust Concise Solution

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2588607/](https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2588607/)

---

~~~
impl Solution {
    pub fn minimum_money(transactions: Vec<Vec<i32>>) -> i64 {
        let mut sum = 0; // net spending
        for t in &transactions { sum += i32::max(0, t[0] - t[1]) as i64; }
        
        let mut ret = sum;
	    // Performing current transaction at the end
        for t in transactions {   
            if t[0] <= t[1] { ret = ret.max(sum + t[0] as i64); }
            else { ret = ret.max(sum + t[1] as i64); }
        }
        ret
    }
}
~~~