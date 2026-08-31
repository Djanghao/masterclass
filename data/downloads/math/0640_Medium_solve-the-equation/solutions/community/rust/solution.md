# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/2877666/](https://leetcode.com/problems/solve-the-equation/solutions/2877666/)

---

# Code
```
impl Solution {
    pub fn solve_equation(equation: String) -> String {
        let equations = equation.as_bytes();
        let len = equations.len();
        let (mut tmp, mut lr, mut a, mut b, mut sign, mut calc) = (0, 1, 0, 0, 1, 0);
        for (idx, &equation) in equations.iter().enumerate() {
            if equation >= b'0' && equation <= b'9' {
                tmp = tmp * 10 + (equation - b'0') as i32;
                calc += 1;
            }
            if equation == b'x' {
                if tmp == 0 && calc == 0 {
                    a += sign * lr;
                }
                a += sign * lr * tmp;
                calc = 0;
                tmp = 0;
            }
            if equation == b'-' || equation == b'+' || equation == b'=' || idx == len - 1 {
                b += sign * lr * tmp;
                calc = 0;
                tmp = 0;
                if equation == b'-' {
                    sign = -1;
                } else if equation == b'+' {
                    sign = 1;
                } else if equation == b'=' {
                    lr = -1;
                    sign = 1;
                }
            }
        }
        if a != 0 {
            format!("x={}", -b / a)
        } else if b == 0 {
            "Infinite solutions".to_string()
        } else {
            "No solution".to_string()
        }
    }
}
```