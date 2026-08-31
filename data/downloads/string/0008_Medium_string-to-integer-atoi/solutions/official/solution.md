# Official Solution

**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solution/](https://leetcode.com/problems/string-to-integer-atoi/solution/)

---

[TOC]

## Solution

--- 

### Overview

We need to implement a function that converts the given string into a signed 32-bit integer.     
Intuitively, we could build the output number out of the input string by iterating over it character by character. However, we stop building the number when a non-digit character is spotted, or the number becomes too large to fit inside a 32-bit signed integer. In the latter case, we need to clamp the result to fit the range.

We will build the integer one character at a time.  As we traverse the string from left to right, for each digit character, we will shift all digits in the current integer to the left by one place (this is done by multiplying the integer by 10). Then, we can simply add the current digit to the unit place of the integer. To better understand how this process works, let's look at an example:

![atoi](../Figures/8/Slide1.JPG)

The key to solving this problem is carefully reading the problem statement, following the rules given, thinking about edge cases, and keeping your code simple.

> **Interview Tip:** Asked a question like this in an interview? Be sure to communicate thoroughly with your interviewer to make sure you're covering all cases. In this problem, the rules are very thorough because there is no interviewer to communicate with. However, in an interview, each of these rules is a potential question to ask the interviewer if the rule is not already stated.

</br>

---

### Approach 1: Follow the Rules

**Intuition**

Given the rules outlined by the problem's description, we can iterate over the input string and use the given rules to validate it.

First read through the problem statement **very carefully**. Let's see what are all the possible characters in the input string:

- Whitespaces **(' ')**
- Digits **('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')**
- A sign **('+' or '-')**
- Anything else (alphabetic characters, symbols, special characters, etc.)

And write down all the rules for building the integer for each one these characters which will help us in writing down the conditions while building the algorithm.

**Rules**

- Whitespaces:
  - If any whitespaces occur at the beginning of the input string, we discard them. 
  - However, if whitespace occurs anywhere else in the input, then we stop and discard the rest of the input.

```scala
'   1234' => 1234 (whitespaces at beginning are removed)
'      4' => 4    (whitespaces at beginning are removed)
' 12   4' => 12   (only the leading whitespaces are removed)
```
<br />

- Digits:
  - Discard any leading zeros.
  - Read in all the digit characters until the first non-digit character or the end of the input occur and append those to the output number.
  - If no digits were found, return 0.

```scala
'12345 567 v' => 12345 (digits are appended until a non-digit character occurs)
'00123'       => 00123 => 123 (0s in the beginning of the numbers are discarded)
```
<br />

- Sign:
  - There could be at most one sign character presented at the beginning, or after skipping some whitespaces from the beginning of the input string. Otherwise, a sign anywhere else in the input string is not valid and is considered a non-digit character and we stop building the integer.
  - If a **'+'** or no sign is present, the final number will be a positive integer. On the other hand, the final number will be negative if **'-'** is the first non-whitespace character in the string.

```scala
'123'  => 123 (a number with no sign is a positive number)
'+123' => 123 (a number with '+' sign is a positive number)
'-12'  => -12 (a number with '-' sign is a negative number)
'-+12' => 0   (another sign after one sign is considered as non-digit character)
```
<br />

- Anything else:
  - If any other character not covered by previously defined rules is spotted, we stop building the output number.

```scala
'-23a45 567 v' => -23 (we stopped when 'a' character occured)
'123 45 567 v' => 123 (we stopped when a space character occured)
'a+123 bcd 45' => 0   (we stopped when 'a' character occured in the beginning)
```
<br />

- 32-bit Integer Range:
  - If the integer exceeds $$2^{31}-1$$ then it will be clamped to $$2^{31}-1$$.
  - And if the integer becomes less than $$-2^{31}$$ then it will be clamped to $$-2^{31}$$.

```scala
'12345' => 12345 (integer is in 32-bit range)
'9999999999999' => 2^31-1 (integer overflow)
'-999999999999' => -2^31   (integer underflow)
```
<br /> 

**How to check overflows/underflows?**

If we were using a `long`, `BigInteger`, or any other numeric data types to store the integers, we could check if the integer exceeds the `32-bit` range, stop building the output number, and return the clamped value.

```scala
num = num * 10 + digit
if num > 2^31 - 1 then return 2^31 - 1
else if num < -2^31 then return -2^31
```

However, here we will assume our environment doesn't allow us to use these data types which could be a constraint imposed by the interviewer. But we can't directly use a `32-bit` integer to store the final result.

For example, assume currently `result` is `1000000000` and `digit` is `1`, we can't append the current digit to result as `10000000001` is more than $$2^{31} - 1$$. So, performing the `result = result * 10 + digit` operation will result in **Runtime Error**.

Hence, first we need to check if appending the digit to the result is safe or not. If it is safe to append then update the result. Otherwise, handle the overflow/underflow.


**Let's first consider the case for overflow.**     

We will denote the maximum 32-bit integer value $$2^{31} - 1 \space = \space 2147483647$$ with **INT_MAX**, and we will append the digits one by one to the final number.     

So there could be 3 cases: 

- Case 1: If the current number is less than **INT_MAX / 10 = 214748364**, we can append any digit, and the new number will always be less than **INT_MAX**.

```
'214748363' (less than INT_MAX / 10) + '0' = '2147483630' (less than INT_MAX)
'214748363' (less than INT_MAX / 10) + '9' = '2147483639' (less than INT_MAX)
'1' (less than INT_MAX / 10) + '9' = '19' (less than INT_MAX) 
```
- Case 2: If the current number is more than **INT_MAX / 10 = 214748364**, appending any digit will result in a number greater than **INT_MAX**.

```
'214748365' + '0' = '2147483650' (more than INT_MAX)
'214748365' + '9' = '2147483659' (more than INT_MAX)
'2147483646' + '8' = '21474836468' (more than INT_MAX)
```
- Case 3: If the current number is equal to **INT_MAX / 10 = 214748364**, we can only append digits from **0-7** such that the new number will always be less than or equal to **INT_MAX**.

```
'214748364' + '0' = '2147483640' (which is less than INT_MAX)
'214748364' + '7' = '2147483647' (which is equal to INT_MAX)
'214748364' + '8' = '2147483648' (which is more than INT_MAX)
```
<br />

**Similarly for underflow.**    
The minimum 32-bit integer value is $$-2^{31} \space = \space -2147483648$$ denote it with **INT_MIN**. <br /> <br />
We append the digits one by one to the final number.     
Just like before, there could be 3 cases:
- Case 1: If the current number is greater than **INT_MIN / 10 = -214748364**, then we can append any digit and the new number will always be greater than **INT_MIN**. <br /> <br />
- Case 2: If the current number is less than **INT_MIN / 10 = -214748364**, appending any digit will result in a number less than **INT_MIN**. <br /> <br />
- Case 3: If the current number is equal to **INT_MIN / 10 = -214748364**, then we can only append digits from **0-8**, such that the new number will always be greater than or equal to **INT_MIN**. 

Notice that **cases 1 and 2** are similar for **overflow** and **underflow**. The only difference is **case 3**: for overflow, we can append any digit between **0 and 7**, but for underflow, we can append any digit between **0 and 8**.

So we can combine both the underflow and overflow checks as follows:    
  - Initially, store the sign for the final result and consider only the absolute values to build the integer and return the final result with a correct sign at the end.
  - If the current number is less than **214748364 = (INT_MAX / 10)**, we can append the next digit.
  - If the current number is greater than **214748364**:
    - And, the sign for the result is **'+'**, then the result will **overflow**, so return **INT_MAX**;
    - Or, the sign for the result is **'-'**, then the result will **underflow**, so return **INT_MIN**.
  - If the current number is equal to **214748364**:
    - If the next digit is between **0-7**, the result will always be in range.
    - If, next digit is **8**:
      - and the sign is **'+'** the result will **overflow**, so return **INT_MAX**;
      - if the sign is **'-'**, the result will not **underflow** but will still be equal to INT_MIN, so that we can return **INT_MIN**.
    - But if, the next digit is greater than **8**:
      - and the sign is **'+'** the result will **overflow**, so return **INT_MAX**;
      - if the sign is **'-'**, the result will **underflow**, so return **INT_MIN**.

> **Note:** We do not need to handle **0-7** for positive and **0-8** for negative integers separately. If the sign is **negative** and the current number is **214748364**, then appending the digit **8**, which is more than **7**, will also lead to the same result, i.e., **INT_MIN**.

**Algorithm**

1. Initialize two variables:
    - `sign` (to store the sign of the final result) as `1`.
    - `result` (to store the 32-bit integer result) as `0`.
2. Skip all leading whitespaces in the input string.
3. Check if the current character is a `'+'` or `'-'` sign:
    - If there is no symbol or the current character is `'+'`, keep `sign` equal to `1`.
    - Otherwise, if the current character is `'-'`, change `sign` to `-1`.
4. Iterate over the characters in the string as long as the current character represents a digit or until we reach the end of the input string.
    - Before appending the currently selected digit, check if the 32-bit signed integer range is violated.  If it is violated, then return `INT_MAX` or `INT_MIN` as appropriate.
    - Otherwise, if appending the digit does not result in overflow/underflow, append the current digit to the `result`.
5. Return the final `result` with its respective sign, `sign * result`.

!?!../Documents/8/slideshow1.json:960,540!?!

<br>

**Implementation**


<iframe src="https://leetcode.com/playground/U7NmpCjU/shared" frameBorder="0" width="100%" height="500" name="U7NmpCjU"></iframe>


**Complexity Analysis**

If $$N$$ is the number of characters in the input string.

* Time complexity: $$O(N)$$     

  We visit each character in the input at most once and for each character we spend a constant amount of time.

* Space complexity: $$O(1)$$     

  We have used only constant space to store the sign and the result.
    
<br/>

---

### Approach 2: Deterministic Finite Automaton (DFA)

**Intuition**

While the previous approach would likely be sufficient for an interview, the approach is specific to this problem. Here we will present an approach that uses DFA which is a more generalized approach that can also be applied to similar problems that would otherwise require writing many nested if else conditions which could become very complex. 

The Deterministic Finite Automaton approach may feel familiar to you if you have previously studied TOC (Theory Of Computation).
If you're unfamiliar with [DFA](https://en.wikipedia.org/wiki/Deterministic_finite_automaton), we will provide a short introduction below, but we encourage you to read more about DFA outside of this article as well.

<details>

<summary>Here's a short introduction to DFA. (click to expand)</summary>

<br>

Theory of Computing is the study of theoretical machines and problems which can be solved using these machines. These machines are called **state machines**. A state machine reads some input and changes the states based on those inputs.

Although we may not realize it, there are many examples of state machines that we experience every day. After becoming more familiar with DFA, you may also start to notice new examples of DFA in your environment. 
One such example that we are all familiar with is a traffic light. The most common type of traffic light has 3 lights: red, green, and yellow. At any time, only one of the lights is on and the traffic light will cycle from red (wait for some time), then to green (wait for some time), then to yellow (for a short time), and finally, turn back to red. 
Each color can be referred to as a state and the change in color is called a transition. 

How does the state machine know to transition? Each transition will be the result of some input and depending on the input we will either stay in the same state or transition to a different state. In this example, it will be after some amount of time has passed we will transition to a new color and if less than that amount of time has passed, we will remain at the same color.

![lights](../Figures/8/Slide20.JPG)

The state machines with a finite number of states are called finite state machines. Our traffic light state machine is also finite with only three states.         

Browsing a website can also be treated as a finite state machine. Think of each webpage as a state and transitions occurring due to certain clicks/events.       

So can a turnstile. For practice, you can try drawing a [state diagram for a turnstile](https://en.wikipedia.org/wiki/Finite-state_machine) that is initially locked, becomes unlocked when a coin is inserted and becomes locked again after being pushed. 

One possible application for finite state machines is to generate languages.         
A language is a set of strings made up of characters from a specified set of symbols/alphabets.       

We can traverse through the states in a state machine diagram to see what kinds of strings the machine will produce, or we can input a string and verify whether or not there exists a set of transitions that could be used to make the string.

For example, if we have symbols **R, G, Y** which represent red, green, and yellow respectively, then our traffic light state machine can generate a string like, **"GYRG"**, and will reject **"GYRY"** because, we cannot transition from a red light to a yellow light.

The finite state machine that either **accepts** or **rejects** a sequence of characters by running through a sequence of states is called **DFA**.        
There is only one path for specific input from the current state to the next state in DFA. DFAs are useful to recognize patterns in data.

<hr>

</details>

<br>

<details>

<summary>Some other LeetCode problems which can be solved using DFA:</summary>

1. [Valid Number's](https://leetcode.com/problems/valid-number/) solution article also introduces DFA.
2. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
3. [Detect Capital](https://leetcode.com/problems/detect-capital/)
4. [Find and Replace Pattern](https://leetcode.com/problems/find-and-replace-pattern/)
5. [Binary Prefix Divisible By 5](https://leetcode.com/problems/binary-prefix-divisible-by-5/)
6. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

</details>

<br>

Now that we have some basic knowledge about state machines, let's try to approach this problem by using a state machine. We can develop a simple state machine where we give the input string characters one by one as the input to the machine and it will produce the desired integer as output.

We can say, initially we are in some starting state and each time we read a character in the input string, we either stay in the current state or transition to a new state. If at any step the state becomes invalid (i.e. when a non-digit character is spotted, or the 32-bit signed integer range is reached) then we can stop building the integer.      

What we've described above is a lot like a deterministic finite automaton as in DFAs there is only one path for specific input from the current state to the next state.

The first step is to design our DFA. Picture the DFA as a directed graph, where each node is a state, and each edge is a transition labeled with a character.       

Naturally, DFA could be represented as a set of if-else conditions. The following diagram presents a common way to write these if-else conditions.

![dfa](../Figures/8/Slide10.JPG)

1. **State $$q_0$$**: represents the initial state at the beginning of the input string.

    - Discard any leading whitespace characters in the beginning as per the rules given and remain in the same $$q_0$$ state for now. 
    - If a sign character occurs, transition to state $$q_1$$.
    - If a digit character occurs, transition to state $$q_2$$.
    - Once a non-digit character is spotted, stop building the output number and immediately transition to a dead state $$q_d$$.

2. **State $$q_1$$**: we arrive at this state after the first sign character has been found.

    - After one sign character if now a digit occurs then we transition to state $$q_2$$.
    - Once a non-digit character is spotted, stop building the output number and immediately transition to a dead state $$q_d$$.

3. **State $$q_2$$**: we arrive at this state whenever the previous character was a digit.

    - Remain in the current state if the next character happened to be a digit character.
    - Once a non-digit character is spotted, stop building the output number and immediately transition to a dead state $$q_d$$.

4. **State $$q_d$$**: a dead state meaning one or more rules defined in the beginning have been violated. This state marks the end of the number-building process.



**Algorithm**

1. Initialize three variables:
    - `currentState` (to represent current state) as `q0`
    - `result` (to store result till now) as `0`
    - `sign` (to represent the sign of the final result) as `1`
2. For each character of the input string, if the current state is not `qd`:
    - If the current state is `q0`:
        - Stay in the same state if whitespaces occur.
        - If a sign occurs, change the sign variable to `-1` if it's a negative sign and change the state to `q1`.
        - If a digit occurs, append the current digit to the resulting number (clamp result if needed) and change the state to `q2`.
        - If anything else occurs, then stop building the number and transition to state `qd`.
    - If the current state is `q1`:
        - If a digit occurs, append the current digit to the resulting number (clamp result if needed) and change the state to `q2`.
        - If anything else occurs, stop building the result number and transition to state `qd`.
    - If the current state is `q2`:
        - If a digit occurs, append the current digit to the resulting number (clamp result if needed) and stay in the current state.
        - Anything else after a digit character will not be valid; hence, stop building the number and transition to state `qd`.
3. Return the final result with the respective sign, `result * sign`.

!?!../Documents/8/slideshow2.json:960,540!?!

<br>

**Implementation**


<iframe src="https://leetcode.com/playground/SmowVgu8/shared" frameBorder="0" width="100%" height="500" name="SmowVgu8"></iframe>


**Complexity Analysis**

If $$N$$ is the number of characters in the input string.

* Time complexity: $$O(N)$$
   
  We iterate over the input string exactly once, and each state transition only requires constant time.

* Space complexity: $$O(1)$$

  We have used only constant space to store the state, sign, and result.