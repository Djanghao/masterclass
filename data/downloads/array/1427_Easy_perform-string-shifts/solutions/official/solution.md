# Official Solution

**Link:** [https://leetcode.com/problems/perform-string-shifts/solution/](https://leetcode.com/problems/perform-string-shifts/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simulation

#### Intuition

When given a shift operation like `[1, 4]`, the first value represents the **shift direction** (`1` for right and `0` for left), while the second value represents the **shift amount**, which is how many positions the string should be moved in the specified direction. 

The most straightforward approach to solve this problem is to simulate each shift operation step by step, applying the specified direction and amount to the string.

For example, suppose we have the string `"leetcodeiscool"`.

If we need to perform shift operation `[0, 5]`, then we'll shift the string *left* by 5, i.e.:

!?!../Documents/10004_left_shift_5.json:960,200!?!

And if we need to perform shift operation `[1, 5]`, then we'll shift the string *right* by 5, i.e.:

!?!../Documents/10004_right_shift_5.json:960,200!?!

To simulate the shift operations as shown in the example animation, we could write an algorithm that performs each operation step by step. However, there's a issue with strings in general as they are **immutable** in many programming languages like Java and Python. This means that once a string is created, it cannot be altered directly. If we want to modify it, we need to create a new string each time, which makes string manipulation computationally expensive.

For each shift operation, modifying the string has a time complexity of $$O(L)$$, where $$L$$ is the string's length. If we repeatedly modify the string for every shift, this could result in a slow solution when multiple shifts are required.

Instead of performing multiple small modifications, we can combine all the shifts into one operation and apply it at once. 
- A **left shift** is equivalent to taking the first `shift-amount` characters from the start of the string and appending them to the end.
- A **right shift** is equivalent to taking the last `shift-amount` characters from the end of the string and placing them at the front.

By combining all shift operations into one, we significantly reduce the number of string modifications.
 
![A left shift operation as a single concatenation.](../Figures/10004/concatentation_left_shift.png)

![A right shift operation as a single concatenation.](../Figures/10004/concatentation_right_shift.png)
  
!?!../Documents/10004_cabbage_shift_9.json:500,200!?!

When we perform shifts on a string, notice that after performing enough shifts, we can end up back at the original string. In this case, after seven shifts, the string `"cabbage"` would return to its original form. This is because the number of shifts corresponds to the length of the string. After every complete rotation (a full length of the string), the string looks exactly the same again.

This is significant because it means we don't need to perform the full number of shifts. For example, if we had a shift-amount of 25, instead of performing all 25 shifts, we can reduce it to a smaller number by finding the remainder of `25` when divided by the length of the string (in this case, 7). The remainder of `25 % 7` is `4`, meaning that the 25 shifts can be simplified to just 4 shifts, which will give us the same result.

This process of reducing the number of shifts by using the remainder operation (called **modulus**) helps simplify the problem. The modulus operation helps us handle large shift amounts efficiently. In fact, we can reduce any shift to `shift-amount % length_of_string`. If the shift amount is smaller than the string length (like in the case of `6 % 7`), the modulo operation doesn't change the shift amount because the remainder is the number itself.

To put this into a complete algorithm that solves the problem, we need to loop through the list of shift operations, doing a single concatenation for each one. Here is an animation of this process.

!?!../Documents/10004_repeated_concatenation_animation.json:960,360!?!

#### Algorithm

- Determine the length of the input string and store it in `len`.

- Iterate through each `move` in the `shift` array:
  - Extract `direction` and `amount` from `move`.
  - Calculate `amount % len` to handle cases where the shift exceeds the string length.

  - If `direction` is `0` (left shift):
    - Remove the first `amount` characters and append them to the end of the string.

  - If `direction` is `1` (right shift):
    - Remove the last `amount` characters and prepend them to the start of the string.

- Return the modified string after processing all shifts.

#### Implementation

<iframe src="https://leetcode.com/playground/DoqLM8u2/shared" frameBorder="0" width="100%" height="395" name="DoqLM8u2"></iframe>


#### Complexity Analysis

Let $$L$$ be the length of the string and $$N$$ be the length of the `shift` array.

- Time complexity : $$O(N \cdot L)$$.

    Making a single modification to the input string has a cost of $$O(L)$$, as we need to create a new string with the modifications. We are making one modification for each shift operation. As there are $$N$$ shift operations, this gives us a total time complexity of $$O(N \cdot L)$$.

- Space complexity : $$O(L)$$.

    While performing a string modification, we'll have both the original string and the new string in memory. Therefore, the space complexity is $$O(L)$$.

    Note that if you're using a language with mutable strings (such as C or C++), then it is possible to get the space complexity down to $$O(1)$$ by doing the shift operations in-place with a suitable algorithm. Approach 3 or 4 of the [Rotate Strings Solution Article](https://leetcode.com/problems/rotate-array/solution/) would be a great way of going about this.

Before we came up with this approach, we briefly discussed a simpler approach where instead of doing each shift operation as a single string modification, we'd do it as *shift-amount* operations. What would the time complexity for this approach be? To simplify, we'll assume that *shift-amount* must be less than or equal to $$L$$ (we can use the modulo operator to ensure this). Under this assumption, the worst case is where all the *shift-amounts* are exactly $$L - 1$$. This means that applying a shift operation will do a $$O(L)$$ string modification, $$L-1$$ times. $$(S - 1) \cdot O(L) = O(L^2)$$. Then with $$N$$ shift operations to perform, we get a total of $$O(N \cdot L ^ 2)$$. This is a lot worse!

<br/>

---

### Approach 2: Compute Net Shift

#### Intuition

In Approach 1, we applied each shift one at a time, which was costly at $O(L)$ time complexity for each shift (where **L** is the length of the string). However, if we can combine the shift amounts into a single total, we can reduce the problem to performing only **one string modification**.

For example, if we have two left shifts, `[0, 3]` and `[0, 6]`, then we can combine them into a single left shift `[0, 3 + 6] = [0, 9]`. Then, instead of performing two separate $$O(L)$$ modifications, we can perform just one.

![Combining two left shifts into a single left shift.](../Figures/10004/combine_shifts.png)

The same principle applies to right shifts as well. Just like with left shifts, instead of applying each right shift individually, we can combine all the right shifts and then perform a single string modification for the total shift amount.

!?!../Documents/10004_left_right_additions.json:960,360!?!

We can do even better than this though, as *left shifts and right shifts cancel each other out*. For example, a *left shift* by `3`, followed by a *right shift* by `3`, brings us back to the original string. It is, therefore, wasted computation to do these shift operations at all!

![Left and right shifts by the same amount canceling each other out.](../Figures/10004/left_right_cancellation.png)

What about a *right shift* by `5`, followed by a *left shift* by `3`? 

![Left and right shifts by the same amount canceling each other out.](../Figures/10004/partial_left_right_cancellation.png)

In effect, we are left with a *right shift* by `2`.

So for this approach, we'll write an algorithm that pre-processes the `shift` list, and then applies a single string modification.

To implement this, we should go through the `shift` list adding up all the *right shift-amounts* and *left shift-amounts* into two separate sums.

And then once we have these two amounts, we need to work out which is bigger, and partially cancel it out with the other. We then need to do the relevant shift with what's remaining. If both are the same, then the string won't be changed at all.

Here is the code for this algorithm. After this code, we'll look at a slight optimization/ simplification, that uses a little more math.

<iframe src="https://leetcode.com/playground/jr5mz2WJ/shared" frameBorder="0" width="100%" height="500" name="jr5mz2WJ"></iframe>


To simplify the code even further, we can take advantage of the fact that **right shifts** and **left shifts** are opposites. In other words, a right shift of `k` positions can be viewed as a left shift of `-k` positions. This allows us to combine all the shifts into a single "net shift" without worrying about whether it's a left or right shift.

If after doing this, the final value of `left_shifts` is positive, then we need to do a *left shift operation*. If it is negative, then we need to do a *right shift operation*, i.e. if it is `-5`, then we need to *right shift* by `5`.

We can simplify it further still by recognizing that the number of *right shifts* can be converted into a number of *left shifts*. Notice that all "valid" shifts of a string can be represented in a clock-like circle. For example, here is the "clock" diagram we could make for the word `"leetcode"`.

![A clock of all shifts of the word "leetcode".](../Figures/10004/clock_combinations.png)

To get the overall left shift, we take the total accumulated **left shifts**, regardless of whether they are positive (left shifts) or negative (right shifts), and apply the modulo operation with the length of the string. This ensures that the shift amount stays within the bounds of the string's length, since a shift greater than or equal to the string's length would simply bring the string back to its original configuration.

`left_shifts = left_shifts % length of string`

In most programming languages, the modulo operator (`%`) will return a result that is within the range of `0` to the divisor, ensuring that the shift amount becomes positive when needed. This behavior is helpful when we need to handle cases where the shift amount exceeds the string length or is negative, as it ensures a valid position within the bounds of the string.

For example, in languages like Python, the expression `-5 % 7` will return `2`, effectively converting the negative number into a positive equivalent in the range of `0` to `6` (for a string of length 7).

However, not all programming languages behave this way with negative numbers. In **Java**, for example, the `%` operator does not guarantee a positive result when the left operand is negative. So, if you perform `-5 % 7` in Java, the result would be `-5`, which is not the desired behavior.

To handle this correctly in Java, you can use the `Math.floorMod` function. This function behaves similarly to the modulo operator, but it ensures that the result is always non-negative, regardless of the sign of the dividend. The expression `Math.floorMod(-5, 7)` would return `2`, which is what we expect.

#### Algorithm

- Initialize `leftShifts` to track the net number of left shifts.
  
- Iterate through each shift operation in the `shift` array:
  - If the operation specifies a right shift (`move[0] == 1`), treat it as a negative left shift by negating `move[1]`.
  - Add the shift amount (`move[1]`) to `leftShifts`.

- Use `Math.floorMod` to normalize `leftShifts` to a positive value within the range of the string length.

- Perform the final left shift on the string:
  - Split the string into two substrings: one starting from `leftShifts` to the end and the other from the beginning to `leftShifts`.
  - Concatenate these substrings in reversed order to apply the shift.

- Return the resulting string after the shift.

#### Implementation

<iframe src="https://leetcode.com/playground/6ToiKfuw/shared" frameBorder="0" width="100%" height="395" name="6ToiKfuw"></iframe>


#### Complexity Analysis

Let $$L$$ be the length of the string and $$N$$ be the length of the `shift` array. Both sub-approaches here have the same complexity analysis.

- Time complexity : $$O(N + L)$$.
    
    The algorithms presented in Approach 2 both break the task into two sub-steps: calculating an overall shift and applying the shift. We'll analyze these one at a time and then combine the results.

    The first step loops through each of the $$N$$ entries in the `shift` array, adding up the total number of left shifts and the total number of right shifts. Handling each entry is an $$O(1)$$ operation, so this first step has a total cost of $$O(N)$$.

    The second step applies a single string-shift operation. As discussed in the previous approach, a string-shift operation has a cost of $$O(L)$$.

    Because we are doing these steps one-after-the-other, and we don't know whether $$N$$ or $$L$$ is bigger, we add them to get a final time complexity of $$O(N + L)$$.

- Space complexity : $$O(L)$$.

    The first step uses constant extra space to keep track of the counts. This leaves us with the space complexity of modifying a string, which, as discussed before, requires auxiliary space of $$O(L)$$.

    As stated in the previous approach, it is possible to get the space complexity down to $$O(1)$$ by using a language with mutable strings.

---