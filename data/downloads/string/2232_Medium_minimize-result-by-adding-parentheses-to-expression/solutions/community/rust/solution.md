# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3263060/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3263060/)

---

# Code
```
impl Solution {
    pub fn minimize_result(expression: String) -> String {
        let mut plus = false;
        let mut a = String::new();
        let mut b = String::new();
        for ch in expression.chars() {
            if ch == '+' {
                plus = true;
            }
            if !plus {
                a.push(ch);
            } else {
                b.push(ch);
            }
        }
        let n = a.len();
        let m = b.len();
        let mut ans = String::new();
        let mut maxi = i32::MAX;
        for i in 0..n {
            for j in 1..m {
                let left;
                if i == 0 {
                    left = 1;
                } else {
                    left = a[0..i].parse::<i32>().unwrap();
                }
                let middle = a[i..n].parse::<i32>().unwrap() + b[0..j + 1].parse::<i32>().unwrap();
                let right;
                if j == m - 1 {
                    right = 1;
                } else {
                    right = b[j + 1..m].parse::<i32>().unwrap();
                }
                if left * middle * right < maxi {
                    maxi = left * middle * right;
                    ans = a[0..i].to_string()
                        + "("
                        + &a[i..n].to_string()
                        + &b[0..j + 1].to_string()
                        + ")"
                        + &b[j + 1..m].to_string();
                }
            }
        }
        ans
    }
}
```