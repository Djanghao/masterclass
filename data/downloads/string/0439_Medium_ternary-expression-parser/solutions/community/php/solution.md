# PHP Stack Solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3813471/](https://leetcode.com/problems/ternary-expression-parser/solutions/3813471/)

---

# Code
```
class Solution {
    function parseTernary($expression) {
        $stack = [];
        for($i=0;$i<strlen($expression);$i++){
            $stack[]= $expression[$i];
        }
        while (count($stack)>1){
            $local = [];
            $cur = array_pop($stack);
            while ($cur != '?'){
                $local[] = $cur;
                $cur = array_pop($stack);
            }
            $cur = array_pop($stack);
            if($cur == 'T'){
                $stack[] = array_pop($local);
            }
            array_pop($local);
            array_pop($local);
            while(count($local)>0){
                 $stack[] = array_pop($local);
            }
        }
        return $stack[0];
    }
}
```
Here's how the method works:

A variable **\\$stack** is initialized as an empty array. This stack will be used to simulate the evaluation process of the ternary expression.

The for loop iterates through each character of the input **\\$expression** string and pushes each character onto the stack. This converts the string into a stack-like structure, allowing us to process the expression from right to left.

The while loop runs as long as there are more than one element in the **\\$stack**. The loop is responsible for evaluating the ternary expression.

Inside the loop, a local array **\\$local** is created. This array will store characters from the stack until the question mark '?' is encountered. The characters in **\\$local** represent the first part of the ternary expression, which is the condition.

The loop pops characters from the stack one by one and adds them to the **\\$local** array until it encounters the '?' character. At this point, the local array contains the condition of the ternary expression.

After the '?' character is encountered, the next character is popped from the stack and stored in the variable **\\$cur**. This character represents either the value if the condition is true ('T') or the value if the condition is false.

The method checks if **\\$cur** is equal to 'T'. If it is, it means the condition is true, and we should keep the value corresponding to the true condition. In this case, the last element from the local array (array_pop(**\\$local**)) is pushed back to the **\\$stack**.

Regardless of whether the condition is true or false, the two characters following the '?' are popped from the local array and discarded. These two characters represent the values if the condition is true and false, respectively.

The loop then continues to process the remaining characters in the local array and pops and pushes them back to the **\\$stack**.

The while loop continues until there is only one element left in the **\\$stack**, which represents the final evaluated result of the ternary expression.

Finally, the method returns the first element of the **\\$stack**, which is the final result of the ternary expression.




