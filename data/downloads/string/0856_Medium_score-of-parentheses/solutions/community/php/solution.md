# PHP solution with comments.

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/4139812/](https://leetcode.com/problems/score-of-parentheses/solutions/4139812/)

---

# Code
```
class Solution {
function scoreOfParentheses($s) {
    // Initializing an empty stack
    $st = [];
    
    // Pushing every character of the string onto the stack
    for($i = 0; $i < strlen($s); $i++) {
        $st[] = $s[$i];
    }
    
    // $r will be used as a secondary stack to compute the score
    $r = [];

    // Process until the initial stack is empty
    while(count($st)) {
        // Pop the top element from the stack
        $cur = array_pop($st);
        
        // If the current element is an opening parenthesis
        if($cur == '(') {
            // If the top of the $r stack is a closing parenthesis, 
            // it  means we have a pair "()"
            if (end($r) == ')') {
                // Remove the closing parenthesis from $r
                array_pop($r);
                $num = 1;

                // Sum any consecutive numbers that might be on the top of the $r stack
                while(is_numeric(end($r))) {
                    $c = array_pop($r);
                    $num += $c;
                }
                // Push the computed score onto the $r stack
                $r[] = $num;
            } else {
                // If the top of the $r stack is not a closing
                // parenthesis, we have a structure like "(...)"
                $num = 0;

                // Sum any consecutive numbers on the top of the $r stack
                while(is_numeric(end($r))) {
                    $c = array_pop($r);
                    $num += $c;
                }
                // Remove the closing parenthesis that matches the current
                // opening parenthesis
                array_pop($r);

                // Multiply the computed sum by 2 and push onto the $r stack
                $r[] = $num * 2;
            }
        } else {
            // If the current element is a closing parenthesis, push it onto the $r stack
            $r[] = $cur;
        }
    }

    // Sum any remaining scores on the $r stack
    $num = 0;
    while(is_numeric(end($r))) {
        $c = array_pop($r);
        $num += $c;
    }

    // Return the computed total score
    return $num;
}}
```

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
