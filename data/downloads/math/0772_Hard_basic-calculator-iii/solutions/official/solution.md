# Official Solution

**Link:** [https://leetcode.com/problems/basic-calculator-iii/solution/](https://leetcode.com/problems/basic-calculator-iii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Stack

**Intuition**

Before attempting this problem, we highly recommend you solve [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/submissions/) first. This problem is a follow-up, and in this editorial, we will build on the solution to Basic Calculator II.

The difference between the two problems is that in this one, the expression may have parentheses `()`, which of course needs to be evaluated first. Let's start by looking at the solution to Basic Calculator II, which is equivalent to this problem with no parentheses.

<iframe src="https://leetcode.com/playground/5aSyQVUc/shared" frameBorder="0" width="100%" height="500" name="5aSyQVUc"></iframe>

Let's analyze this solution to understand how we can solve expressions without parentheses.

The idea behind this solution is that we separate the expression into terms. A term is a number that has been fully evaluated and is independent of other terms. For example, let's say we had the expression `5 - 3 + 7 * 2 - 6 / 3`. We have four terms:

1. 5
2. -3
3. 7 * 2 = 14
4. -6 / 3 = -2

If we can calculate every term separately, the answer to the expression is simply the sum of all terms. We make use of a `stack` that we push terms onto.

As we iterate over each character `c` in the expression, we also keep track of the `previousOperator` that we have seen and the current number we are building `curr`. To construct a number, we initially have `curr = 0`. For every consecutive digit `c` we see, we perform `curr = curr * 10 + int(c)` to "add" the digit.

If we encounter a character `c` that isn't a digit or blank space, it must be an operator `+-*/`. **A number must become before an operator**, so `curr` will be non-zero. We need to handle the number we have built `curr`. There are four possibilities - `previousOperator` is:

1. `+`. This means the expression had `+ curr`. We simply push `curr` to the stack as it is a term.
2. `-`. This means the expression had `- curr`. We need to multiply `curr` by `-1` and then push it to the stack as a term.
3. `*`. This means the expression had `* curr`. Unlike the case of addition or subtraction, we need to retrieve the previous number we saw. This will be in the stack. For example, let's say we had `5 + 3 * 2`. When we encounter the `*`, we have `curr = 3` and `previousOperator = +`. This is case #1 and thus we would have just pushed `3` onto the stack. We retrieve the top of the stack as `x` and then push `x * curr` onto the stack.
4. `/`. This means the expression had `/ curr`. Like in the previous case, we need to retrieve the previous number we saw. Pop this number `x` from the stack, then perform `x / curr` and push it onto the stack.

We use a helper function `evaluate` to perform the operations. After we handle `curr`, we reset it to `0` and update `previousOperator = c`. You may also notice that we append a random character `@` to the end of `s` at the beginning. This is just for convenience as the final number would not be handled otherwise. We also initialized `previousOperator = +` because addition is the default behavior of a term. For example, the expression `5` is the addition case.

> Please take a few minutes to make sure you thoroughly understand the solution to Basic Calculator II presented here.

#### Great, we know how to solve the problem when there aren't parentheses. What if there are?

We can observe that each set of parentheses can be treated as its own isolated expression. These isolated expressions must evaluate to a constant. If we can convert each expression to its constant value, then it is equivalent to "removing" the parentheses, and we know how to proceed from there.

So how do we modify our algorithm to handle the isolated expressions? Let's first consider what to do when we encounter a `(`. We are starting a new isolated expression. Remember, once we evaluate it, it will be a constant. We should treat it as such. For example, `5 * (2 + 2)` is equivalent to `5 * 4`.

**We need to remember `previousOperator`**, because once we have finished evaluating the isolated expression, we need to treat it like a normal number. For example, let's say we have `5 * (2 + 2)`. When we encounter `(`, we have `previousOperator = *` and `5` in the stack. We will evaluate the isolated expression to `curr = 4`, and once we do, we need to remember the `*` so we can perform `5 * 4`.

To remember `previousOperator`, let's push it to the stack. Then we'll set `previousOperator = +` in preparation for evaluating the isolated expression (since as mentioned above, addition is the "default" behavior).

We will now operate as normal **until we see a )**. The reason we can operate as normal is that **each isolated expression is a valid expression in itself**. Once we see a ), we need to convert the entire isolated expression into a constant. Remember that we pushed the `previousOperator` before the isolated expression to the stack before starting. This means that **every number in the stack until an operator `+-*/`** is a term in the isolated expression. We simply find the sum of all these numbers, and treat it as `curr`. Then, we can finally pop the operator from the stack and set it to `previousOperator`.

Once we have done that, it is like there was never an isolated expression at all! For example, let's say we had the following expression:

`2 + 3 * (4 + 3 - 6 / 2)`

Once we reach the `(`, we push `*` onto the stack and have `[2, 3, *]`. Then, we carry on inside the isolated expression. Once we reach the `)`, the stack will look like this:

`[2, 3, *, 4, 3, -3]`

The sum of all the elements after the operator is `4`. Thus, we have `curr = 4`, `previousOperator = *`, and `stack = [2, 3]` after handling the isolated expression.

What if the expression was `2 + 3 * 4` instead? Guess what: once we reach the `4`, we also have `curr = 4`, `previousOperator = *`, and `stack = [2, 3]`. As you can see, the logic flows seamlessly when we treat isolated expressions as their own constant terms.

> To see how little logic is actually needed to convert the solution for Basic Calculator II to the solution for this problem, check out the Python code below. We only added 7 lines of code: lines 20 - 22 and lines 31 - 34.

**Algorithm**

1. Define a helper function `evaluate` which takes an operator and numeric arguments. Note that this function is identical to the one presented in the Basic Calculator II approach.
2. Initialize a few variables:
    - A `stack`
    - `curr` to track the current number we are building.
    - `previousOperator` to track the previous operator we saw.
    - Add a random character that won't appear in the input like `"@"` to `s`.
3. Iterate over the input. For each character `c`:
    - If `c` is a digit, then add it to `curr`.
    - Otherwise, if `c == (`, we are evaluating a new isolated expression. Push `previousOperator` to the stack and set `previousOperator = "+"`.
    - Otherwise, we need to evaluate `curr`. Use the `evaluate` function to apply the `previousOperator` to `curr` and push the result to the stack.
        - Next, reset `curr` to zero and update `previousOperator = c`.
        - Check if `c == ")"`. If so, we are at the end of an isolated expression and must fully evaluate it. Pop from the stack until you reach an operator, summing all numbers you pop into `curr`. Once you reach an operator, update `previousOperator = stack.pop()`.
4. Return the sum of all the numbers in the stack.

**Implementation**

> Notes on implementation in Java:
>
> The implementation in Java is very hacky because we need to store both numbers and operators in the stack. There are many ways to implement this, such as by using two stacks: one for the numbers and one for the operators. In this editorial, we have decided to use only one stack. To accommodate both data types, this means we need to store the numbers as strings in the stack.
>
> As you can see in the code, we have made a number of modifications to make this stack work. `previousOperator` needs to operate as a string when it is in the stack, and we need to modify our helper `evaluate` function as well. `curr` is a string, and we cast it to an integer when we need to do math, then back to string when it goes into the stack.
>
> For a problem like this, we recommend using a language like Python, which is much more lenient, allowing us to write much cleaner code. As you can see, the Python implementation is **much** neater and only a few lines different from the solution to Basic Calculator II.

<iframe src="https://leetcode.com/playground/WSqqzboe/shared" frameBorder="0" width="100%" height="500" name="WSqqzboe"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of the expression,

> For this analysis, we will assume you are using the Python implementation since it is relevant that `curr` is of type `int`.

* Time complexity: $$O(n)$$

    The analysis here is simple - each character in the input can only be pushed and popped from the stack at most one time. Every other operation in each of the $$O(n)$$ iterations costs $$O(1)$$ - updating `curr`, calling `evaluate`, etc.

* Space complexity: $$O(n)$$

    The stack could grow to a size of $$O(n)$$ - for example, if the expression contains only the addition of single-digit numbers.

<br/>

---

### Approach 2: Solve Isolated Expressions With Recursion

**Intuition**

We saw that in the previous approach if we reduced each isolated expression to its constant term, the problem was simplified to Basic Calculator II, which is much easier to solve.

The key idea to notice is that each isolated expression is itself a valid expression. This idea leads us to recursion - our algorithm is designed to take an expression and evaluate it to a constant, so we will recursively apply it every time we encounter a `(`.

We can re-use the code from Basic Calculator II. The difference now is when we encounter `(`, we will recursively call the function and set whatever value is returned to `curr`. This is equivalent to simplifying the entire isolated expression to an integer. If we ever encounter a `)` in our function, it means that this function call was made in an isolated expression and we should now return since we have reached the end. As you would expect, the sum of the terms in the stack for the current call's scope is the value of the isolated expression, so we can break from the loop and return that.

To implement this approach, we need a "global" `i` to iterate over the input with. We will implement this global iteration variable using an array `i` of length 1 since arrays are passed by reference.

**Algorithm**

1. Define a helper function `evaluate` which takes an operator and numeric arguments.
2. Define a helper function `solve(i)` that solves expressions.
    - This function will basically implement the solution to Basic Calculator II with a few changes:
    - We iterate with a while loop over `i` and access characters using `c = s[i[0]]` instead of just looping over the string directly with `c`.
    - If we encounter `(`, then set `curr = solve()`.
    - If we encounter `)`, then break from the loop and return the sum of the stack.
3. Initialize `i = [0]` and return `solve(i)`.

**Implementation**

> Thankfully, since we no longer need to store operators on the stack, the Java implementation is much cleaner this time.

<iframe src="https://leetcode.com/playground/bVw8sCaA/shared" frameBorder="0" width="100%" height="500" name="bVw8sCaA"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of the expression,

* Time complexity: $$O(n)$$

    The time complexity is the same as the previous approach for the same reason. `i` is strictly increasing and increments on each iteration. Any given character can only be pushed to a stack once and popped from a stack once, so the total number of operations across the algorithm is linear.

* Space complexity: $$O(n)$$

    The stacks across all function calls could grow to a size of $$O(n)$$ - for example, if the expression contains only the addition of single-digit numbers.

<br/>

---