# Official Solution

**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solution/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solution/)

---

[TOC]

## Solution
---
#### Overview ####

We have to build a string of length $$n$$ that consists of English lowercase characters `a-z` by ensuring that following conditions are satisfied,
- The numeric value of a string must be equal to a given value $$k$$. The numeric value of a string is equal to the sum of numeric values of all its characters.
The numeric value of alphabet characters ranges from $$1$$ to $$26$$, where value of $$a = 1$$, $$b=2$$ and so on.
- The string must be _lexicographically smallest string_. In other words, we must build a string that would be the smallest in its dictionary order for a given numeric value.

The value of $$k$$ would be at least $$n$$.
If $$k = n$$, the numeric value of every position would be $$1$$ (`a`).

Example: if `n = 3` and `k = 3`, result would be  `aaa`.

The value of $$k$$ would be at most $$(n * 26)$$.
If $$k = (n*26)$$, the numeric value of every position would be $$26$$ (`z`).

Example: if `n = 3` and `k = 78 (3 * 26)` , result would be  `zzz`.



Based on these insights, let's implement the solution using different approaches.

---
#### Approach 1: Build number from left to right

**Intuition**

Typically, we have to build a string by filling each position with a character that satisfies some conditions. To implement the solution for this problem we must answer the following question: _How to choose a character to be put for a given position in the string_.

To answer this question we must have information on 2 parameters,
1) The remaining value of $$k$$ at any given point.
2) The number of positions that are yet to be filled.

Let's assume, we are given $$n = 4$$ and we have the first $$2$$ positions in the result filled with `a`. Now we have to decide which character to put at $$3^{rd}$$ position. Let's understand scenarios with different $$k$$ values.

_Scenario 1_: If the given $$k$$ value is $$32$$. After filling first 2 positions with `a` ( numeric value = $$1$$), the remaining $$k$$ value would be $$30$$. Now we have to split $$30$$ into remaining $$2$$ positions in such a way that resultant string is _lexicographically smallest_.

> Lexicographically smallest string is always alphabetically sorted. But an alphabetically sorted string may not be always lexicographically sorted. Example, numeric value of $$dz$$ (`4 + 26 = 30`) is same as the numeric value of $$ey$$ (`5 + 25 = 30`). Both the strings are alphabetically sorted. But, the former is also lexicographically sorted while the latter is not.

Thus, we have to choose the character at $$3^{rd}$$ position in such a way that the character at $$4^{th}$$ position would be as large as possible. We know that the largest possible character is `z` with a numeric value of $$26$$. As the remaining $$k$$ value is $$30$$, we can reserve $$26$$ for $$4^{th}$$ position and use the remaining for current position $$3$$.

Hence, the numeric value chosen for $$3^{rd}$$ position would be $$4 $$ `(30 - 26)` and the character with the numeric value $$4$$ is $$d$$. The resultant string would be `aadz`.

The following figure illustrates the idea.

![img](../Documents/5506/smallestStringExample1.svg)

_Scenario 2_: If the given $$k$$ value is $$24$$. After filling first 2 positions with `a` (numeric value = 1), the remaining $$k$$ value would be $$22$$.
Now, since the remaining $$k$$ value is less than $$26$$, we must assign $$3^{rd}$$ position with smallest character i.e `a` having numeric value $$1$$ and leave the rest for $$4^{th}$$ position. The resultant string would be `aaau`.

The following figure illustrates the idea.

![img](../Documents/5506/smallestStringExample2.svg)

Based on the above examples, we could develop the following intuition to choose a character for a position.

Given a value $$k$$ and number of positions left to be filled as $$\text{positionsLeft}$$,
- If $$k$$ is greater than $$\text{positionsLeft} * 26$$, we can reserve the maximum numeric value $$26$$ `(character = z)` for all the positions left. After that we could assign numeric value $$ k - (\text{positionsLeft} * 26)$$ for the current position.

- Otherwise, we must assign the smallest character i.e `a` at the current position.

**Algorithm**
- Build a string or character array `result` to store the characters chosen for each position.
- Iterate from position $$1$$ to $$n$$ and fill the character at each position.
Find the positions left to be filled excluding the current position given by  `positionsLeft` as  `n - position - 1`.

     * If value of $$k$$ is greater than `positionsLeft * 26`, we could reserve numeric value $$26$$ `(character = z)` for all the remaining positions `positionsLeft`.

        The numeric value for current `position` given by variable `add` would be `k - (positionsLeft * 26)`. Subtract the calculated value `add` from `k` to find the remaining `k` value after filling the current position.
   * Otherwise, we must fill the the current position with the smallest character `a` having numeric value $$1$$. Subtract $$1$$ from `k` to find the remaining `k` value after filling the current position.

- The process would continue until all the positions are filled.

**Implementation**

<iframe src="https://leetcode.com/playground/HtTEQxzd/shared" frameBorder="0" width="100%" height="361" name="HtTEQxzd"></iframe>

**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(n)$$, as we iterate over $$n$$ positions to build the resultant string.

- Space Complexity: $$\mathcal{O}(1)$$, as we use constant extra space to store `add` and `position` variables.
---

#### Approach 2: Build number from right

**Intuition**

There is another way of looking at the problem. We know that we must fill all the $$n$$ positions and the smallest character could be `a` with numeric value $$1$$. If we have any $$k$$ left, we try to reserve as much as possible for the last positions.

Hence, we could first fill all the positions with `a`. Then iterate from backward: the last position to the first position. As we iterate from $$n^{th}$$ position, we must try to allocate the maximum possible value to each position.

**Algorithm**

- Build a string or character array `result` to store the characters chosen for each position.

- Fill all the `n` positions in `result` with character `a`. Since character `a` has numeric value $$1$$, subtract `n` from `k`. (since we have filled `n` positions with numeric value $$1$$).

- Now, start iterating from the last position `n-1` and allocate the maximum possible numeric value to each position based on the remaining `k`.
As we have already allocated `a` at each position with a value $$1$$, the maximum additional value that we can add at each position would be $$25$$ (`26 - 1`).

-  Calculate the additional value to be added given by `add` as a minimum of `25` and `k`. Add the calculated value `add` at the current position and also subtract it from `k`.

- The process would continue until either all the positions are filled or there are no `k` values left `(k = 0)`.



**Implementation**
<iframe src="https://leetcode.com/playground/P7Pay79C/shared" frameBorder="0" width="100%" height="276" name="P7Pay79C"></iframe>

**Complexity Analysis**

-  Time Complexity: $$\mathcal{O}(n)$$, as we iterate over $$n$$ positions to build the resultant string. First, to initialize all the positions with character `a` and then to add the additional value.

- Space Complexity: $$\mathcal{O}(1)$$, as we use constant extra space to store `add` and `position` variables.
---

#### Approach 3: Build number from right - Optimised solution

**Intuition**

In _Approach 2_, we first filled all the positions with the smallest character `a`, subtracted $$1$$ numeric value for each position from $$k$$, and later calculated the additional value. Instead of that, we could simply leave some value from $$k$$ for the remaining positions while iterating over each position from backward.

While allocating a numeric value at any position, we must just make sure that there would be sufficient `k` values left such that all the remaining positions would get at least the smallest numeric value i.e `1`.

**Algorithm**

- Build a string or character array `result` to store the character chosen for each position.

 - Start iterating from last position `n-1` and allocate maximum possible numeric value to each position based on remaining `k`.
- We know that the largest character at any position could be `z` with numeric value $$26$$. Also, we must leave some value from `k`, that is, `1` numeric value for each remaining position (`k - position`). Thus the maximum numeric value for the current position given by `add` can be calculated as,  minimum of `k - position` and `26`.

- Subtract the value calculated for the current position `add` from `k`.

- The process would continue until all the positions are filled.


**Implementation**

<iframe src="https://leetcode.com/playground/QRfoToqU/shared" frameBorder="0" width="100%" height="276" name="QRfoToqU"></iframe>

**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(n)$$, as we iterate over $$n$$ positions to build the resultant string.

- Space Complexity: $$\mathcal{O}(1)$$, as we use constant extra space to store `add` and `position` variables.