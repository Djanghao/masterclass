# Official Solution

**Link:** [https://leetcode.com/problems/basic-calculator/solution/](https://leetcode.com/problems/basic-calculator/solution/)

---

[TOC]

## Solution

This problem is all about understanding the following:

* Input always contains valid strings
* The rules of addition and subtraction
* Implication of precedence by parenthesis
* Spaces do not affect the evaluation of the input expression

<center>
<img src="../Figures/224/Basic_Calculator_0.png" width="600"/>
</center>

### Approach 1: Stack and String Reversal

**Intuition**

This question qualifies really well for a stack question. Since the expression might have parenthesis, we can use a stack to find the value for each sub-expression within a parenthesis. Essentially, we need to *delay* processing the main expression until we are done evaluating the interim sub-expressions within parenthesis and to introduce this delay, we use a stack.

We push the elements of the expression one by one onto the stack until we get a closing bracket `)`. Then we pop the elements from the stack one by one and evaluate the expression on-the-go. This is done till we find the corresponding `(` opening bracket. This kind of evaluation is very common when using the stack data structure. However, if you notice the way we calculate the final answer, you will realize that we actually process the values from right to left whereas it should be the other way around.

<center>
<img src="../Figures/224/Basic_Calculator_1.png" width="600"/>
</center>

From the above example we realize that following the simple stack push and pop methodology will not help us here. We need to understand how `+` and `-` work. `+` follows the associative property. For the expression $$A+B+C$$,  we have $$(A+B)+C = A+(B+C)$$. However,  `-` does not follow this rule which is the root cause of all the problems in this approach.

If we use a stack and read the elements of the expression from left to right, we end up evaluating the expression from right-to-left. This means we are expecting $$(A-B)-C$$ to be equal to $$(C-B)-A$$ which is not correct. Subtraction is neither associative nor commutative.

This problem could be solved very easily by reversing the string and then using basic drill using a stack. Reversing a string helps since we now put the elements of the expression into the stack from right to left and evaluation for the expression is done correctly from left to right.

<center>
<img src="../Figures/224/Basic_Calculator_2.png" width="600"/>
</center>

**Algorithm**

1. Iterate the expression string in reverse order one character at a time. Since we are reading the expression character by character, we need to be careful when we are reading digits and non-digits.
2. The operands could be formed by multiple characters. A string "123" would mean a numeric 123, which could be formed as: `123` >> `120 + 3` >> `100 + 20 + 3`. Thus, if the character read is a digit we need to form the operand by multiplying a power of `10` to the current digit and adding it to the overall operand. We do this since we are processing the string in the reverse order.
3. The operands could be formed by multiple characters. We need to keep track of an on-going operand. This part is a bit tricky since in this case the string is reversed. Once we encounter a character which is not a digit, we push the operand onto the stack.
4. When we encounter an opening parenthesis `(`, this means an expression just ended. Recall we have reversed the expression. So an opening bracket would signify the end of the an expression. This calls for evaluation of the expression by popping operands and operators off the stack till we pop corresponding closing parenthesis. The final result of the expression is pushed back onto the stack.

    >Note: We are evaluating all the sub-expressions within the main expression. The sub-expressions on the right get evaluated first but the main expression itself is evaluated from left to right when all its components are resolved, which is very important for correct results.

    For eg. For expression $$A - (B+C) + (D+E-F)$$, $$D+E-F$$ is evaluated before $$B+C$$. While evaluating $$D+E-F$$ the order is from left to right. Similarly for the parent expression, all the child components are evaluated and stored on the stack so that final evaluation is left to right.

5. Push the other non-digits onto to the stack.
6. Do this until we get the final result. It's possible that we don't have any more characters left to process but the stack is still non-empty. This would happen when the main expression is not enclosed by parenthesis. So, once we are done evaluating the entire expression, we check if the stack is non-empty. If it is, we treat the elements in it as one final expression and evaluate it the same way we would if we had encountered an opening bracket.

    We can also cover the original expression with a set of parenthesis to avoid this extra call.

<iframe src="https://leetcode.com/playground/kdn6DGoL/shared" frameBorder="0" width="100%" height="500" name="kdn6DGoL"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where N is the length of the string.

* Space Complexity: $$O(N)$$, where N is the length of the string.
<br/>
<br/>

---

### Approach 2: Stack and No String Reversal

**Intuition**

A very easy way to solve the problem of associativity for `-` we tackled in the previous approach, is to use `-` operator as the magnitude for the operand to the right of the operator. Once we start using `-` as a magnitude for the operands, we just have one operator left which is addition and `+` is associative.

for e.g. $$A - B - C$$ could be re-written as $$A + (-B) + (-C)$$.

> The re-written expression would follow associativity rule. Thus evaluating the expression from right or left, won't change the result.

What we need to keep in mind is that the expressions given would be complicated, i.e. there would be expressions nested within other expressions. Even if we have something like `(A - (B - C))` we need to associate the `negative sign` outside of `B-C` with the result of `B-C` instead of just with `B`.

We can solve this problem by following the basic drill before and associating the sign with the expression to the right of it. However, the approach that we will instead take has a small twist to it in that we will be evaluating most of the expression on-the-go. This reduces the number of push and pop operations.

<center>
<img src="../Figures/224/Basic_Calculator_3.png" width="600"/>
</center>

Follow the below steps closely. This algorithm is inspired from [discussion post](https://leetcode.com/problems/basic-calculator/discuss/62361/southpenguin) by [southpenguin](https://leetcode.com/southpenguin/).

**Algorithm**

1. Iterate the expression string one character at a time. Since we are reading the expression character by character, we need to be careful when we are reading digits and non-digits.
2. The operands could be formed by multiple characters. A string "123" would mean a numeric 123, which could be formed as: `123` >> `120 + 3` >> `100 + 20 + 3`. Thus, if the character read is a digit we need to form the operand by multiplying `10` to the previously formed continuing operand and adding the digit to it.
3. Whenever we encounter an operator such as `+` or `-` we first evaluate the expression to the left and then save this `sign` for the next evaluation.
    <center>
    <img src="../Figures/224/Basic_Calculator_4.png" width="600"/>
    </center>
4. If the character is an opening parenthesis `(`, we just push the result calculated so far and the `sign` on to the stack (the sign and the magnitude) and start a fresh as if we are calculating a new expression.
5. If the character is a closing parenthesis `)`, we first calculate the expression to the left. The result from this would be the result of the expression within the set of parenthesis that just concluded. This result is then multiplied with the sign, if there is any on top of the stack.
Remember we saved the `sign` on top of the stack when we had encountered an open parenthesis? This sign is associated with the parenthesis that started then, thus when the expression ends or concludes, we pop the `sign` and multiply it with result of the expression. It is then just added to the next element on top of the stack.

<iframe src="https://leetcode.com/playground/dAjj5PB6/shared" frameBorder="0" width="100%" height="500" name="dAjj5PB6"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where N is the length of the string. The difference in time complexity between this approach and the previous one is that every character in this approach will get processed exactly once. However, in the previous approach, each character can potentially get processed twice, once when it's pushed onto the stack and once when it's popped for processing of the final result (or a subexpression). That's why this approach is faster.

* Space Complexity: $$O(N)$$, where N is the length of the string.
<br/>
<br/>