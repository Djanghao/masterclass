# Easy PHP solution with comments

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/5600448/](https://leetcode.com/problems/basic-calculator/solutions/5600448/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function calculate($s) {
        $stack = []; 
        $result = 0; // For the on-going result
        $current = 0; 
        $sign = 1; // 1 means positive, -1 means negative
        $chars = str_split($s);
        
        foreach($chars as $letter) {
            if(is_numeric($letter)) { 
                // Forming operand, since it could be more than one digit
                $current = 10 * $current + intval($letter);
            } else if ($letter === '+') { 
                // Evaluate the expression to the left with result, sign, operand
                $result += $sign * $current;
                // Reset operand
                $current = 0; 
                // Save the recently encountered '+' sign
                $sign = 1;
            } else if ($letter === '-') { 
                $result += $sign * $current;
                $current = 0; 
                $sign = -1;
            } else if ($letter === '(') { 
                // Push the result and sign on to the stack, for later
                // We push the result first, then sign
                array_push($stack, $result); 
                array_push($stack, $sign); 

                // Reset operand and result, as if new evaluation begins for the new sub-expression
                $sign = 1;
                $result = 0; 
            } else if ($letter === ')') {
                // Evaluate the expression to the left with result, sign and operand
                $result += $sign * $current; 

                // ')' marks end of expression within a set of parenthesis
                // Its result is multiplied with sign on top of stack
                // as stack.pop() is the sign before the parenthesis
                $result *= array_pop($stack);

                // Then add to the next operand on the top.
                // as stack.pop() is the result calculated before this parenthesis
                // (operand on stack) + (sign on stack * (result from parenthesis))
                $result += array_pop($stack);

                // Reset the operand
                $current = 0;
            }
        }
        //remaining result 
        if ($current !== 0) { 
            $result += $sign * $current;
        }
        return $result;
    }
}
```