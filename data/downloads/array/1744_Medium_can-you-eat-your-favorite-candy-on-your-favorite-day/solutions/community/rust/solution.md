# Rust Prefix Sum

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/2519356/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/2519356/)

---

~~~
impl Solution {
    pub fn can_eat(candies_count: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<bool> {
        let (m, n) = (candies_count.len(), queries.len());
        let mut sum = vec![0i64; m + 1];
        for i in 0..m { sum[i + 1] = sum[i] + candies_count[i] as i64; }
        
        let mut ret = vec![false; n];
        for i in 0..n {
            let (u, v, w) = (queries[i][0], queries[i][1], queries[i][2]);
            
            if sum[u as usize + 1] <= v as i64 { continue }
            if sum[u as usize] - w as i64 >= v as i64 * w as i64 { continue }
            
            ret[i] = true;
        }
        
        ret
    }
}
~~~