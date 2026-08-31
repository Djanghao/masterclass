# PHP Solution with while loop and ternary Operator

**Author:** muneebshoukat60
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3081043/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3081043/)

---

# Intuition
The first thought after watching the problem was to use ternary operator and storing the value to variable.

# Approach
- Initialize a **new variable** for storing the steps count.
- Using **while loop** with given number as an argument. 
- Inside loop, using **ternary operator** to decide whether it is even or odd number. And based on the result doing operation and storing on the new value on the same given variable, which will modifies the variable.
- **Increment** the value of count variable on each iteration of loop.
- Finally, returning the count variable.

# Complexity
- Time complexity:
$$O(log n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function numberOfSteps($num) {
        $i = 0;
        while($num){
            $num = $num % 2 == 0 ? $num / 2 : $num - 1;
            $i++;
        }
        return $i;
    }
}
```