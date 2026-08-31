# Rust one line beats 100%

**Author:** sarang2003
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3474386/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3474386/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Get the sum of the list excluding the min and max and then divide by len-2

# Approach
<!-- Describe your approach to solving the problem. -->
Use fold to fold the list onto each other. If the given salary is equal to min or max then continue otherwise add to the accumulater.


# Code
```
impl Solution {
    pub fn average(salary: Vec<i32>) -> f64 {
        (salary.iter().fold(0, |acc, s| if s == salary.iter().min().unwrap() || s == salary.iter().max().unwrap() {acc} else {acc + s}) as f64) / (salary.len() - 2) as f64       
    }
}
```