# [rust] stack solution with comments

**Author:** dolpm
**Votes:** 3
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/2831481/](https://leetcode.com/problems/basic-calculator/solutions/2831481/)

---

thanks [southpenguin](https://leetcode.com/problems/basic-calculator/discuss/62361/Iterative-Java-solution-with-stack) for the idea
```
impl Solution {
    pub fn calculate(s: String) -> i32 {        
        let s = s.chars().collect::<Vec<char>>();
        let mut stack = vec![];
        
        let (mut cur_sign, mut cur_num, mut final_result) = (1, 0, 0);
                
        for c in s {
            match c {
                ' ' => {},
                '(' => {
                    // push the current calculated result for popping after
                    // the upcoming parenthesis has been calculated in full
                    stack.push(final_result);
                    // push the current sign for popping after the
                    // upcoming parenthesis has been calculated in full
                    stack.push(cur_sign);
                    // result and sign can be reset as we are entering
                    // a new calculation domain (i.e., in the parenthesis)
                    final_result = 0;
                    cur_sign = 1;
                },
                ')' => {
                    // add our current stored number to the final solution
                    final_result += cur_sign * cur_num;
                    // this would be the sign before the opening parenthesis
                    final_result *= stack.pop().unwrap();
                    // this would be the result prior to the just-solved parenthesis
                    final_result += stack.pop().unwrap();
                    // reset num and sign for upcoming value
                    cur_num = 0;
                    cur_sign = 1;
                },
                '+' => {
                    // we can add our current stored number to the final solution
                    // before updating the num + sign values for the next number
                    final_result += cur_sign * cur_num;
                    cur_num = 0;
                    cur_sign = 1;
                },
                '-' => {
                    // we can subtract our current stored number to the final solution
                    // before updating the num + sign values for the next number
                    final_result += cur_sign * cur_num;
                    cur_num = 0;
                    cur_sign = -1;
                },
                _ => {
                    // add a new least-significant digit
                    cur_num *= 10;
                    cur_num += (c as i32) - 0x30;
                }
            }
        }
        
        // if we have any stragglers, add to the result
        final_result + (cur_sign * cur_num)    
    }
}
```