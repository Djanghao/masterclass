# Rust easy solution beats 100%

**Author:** Martician
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/4108590/](https://leetcode.com/problems/reducing-dishes/solutions/4108590/)

---

```
impl Solution {
    pub fn max_satisfaction(mut satisfaction: Vec<i32>) -> i32 {
        satisfaction.sort_unstable();
        
        let mut gain = 0;
        let mut rez = 0;

        for cost in satisfaction.into_iter().rev() {
            gain += cost;
            if gain <= 0 {
                break;
            }
            rez += gain;
        } 

        rez
    }
}
```