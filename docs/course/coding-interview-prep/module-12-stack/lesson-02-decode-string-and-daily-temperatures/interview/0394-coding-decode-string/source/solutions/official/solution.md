# Official Solution

**Link:** [https://leetcode.com/problems/decode-string/solution/](https://leetcode.com/problems/decode-string/solution/)

---

[TOC]

## Solution

---
### Overview
We are given string $$s$$ in a particular form `k[string]` and we have to decode it  as `string` repeated `k` times . For example,`2[b]` is decoded as  `bb`.

 The problem seems straightforward at first glance. But the trick here is that there can be nested encoded strings like `k[string k[string]]`. For example, string s =`3[a2[c]]`. In such cases, we must decode the innermost string and continue in an outward direction until the entire string is decoded.

 ![img](../Figures/394/decode_overview.png)


If you have solved similar problem such as [Evaluate Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) or [Simplify Path](https://leetcode.com/problems/simplify-path/) , it is clear that [Stack Data Structure](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))  is best suited to implement such problems. We could implement a stack data structure or recursively build the solution by using an internal call stack. Let's understand both approaches in detail.

---
### Approach 1: Using Stack

**Intuition**

We have to decode the result in a particular pattern. We know that the input is always valid. The pattern begins with a number `k`, followed by opening braces `[`, followed by `string`. Post that, there could be one of the following cases :
1) There is another nested pattern `k[string k[string]]`
2) There is a closing bracket  `k[string]`

Since we have to start decoding the innermost pattern first, continue iterating over the string `s`, pushing each character to the stack until it is not a closing bracket `]`.  Once we encounter the closing bracket `]`, we must start decoding the pattern.

As we know that stack follows the Last In First Out (LIFO) Principle, the top of the stack would have the data we must decode.

**Algorithm**

The input can contain an alphabet `(a-z)`, digit `(0-9)`, opening braces `[` or closing braces `]`. Start traversing string `s` and process each character based on the following rules:

Case 1) Current character is not a closing bracket `]`.

Push the current character to stack.

Case 2) Current character is a closing bracket `]`.

Start decoding the last traversed string by popping the string `decodedString` and number `k` from the top of the stack.
- Pop from the stack while the next character is not an opening bracket `[` and append each character (`a-z`) to the `decodedString`.
- Pop opening bracket `[` from the stack.
- Pop from the stack while the next character is a digit `(0-9)` and build the number `k`.

Now that we have `k` and `decodedString` , decode the pattern `k[decodedString]`  by pushing the `decodedString` to stack `k` times.

Once the entire string is traversed, pop the `result` from stack and return.

!?!../Documents/394_LIS.json:1430,1004!?!

**Implementation**

<iframe src="https://leetcode.com/playground/AzNzLDhS/shared" frameBorder="0" width="100%" height="500" name="AzNzLDhS"></iframe>

**Complexity Analysis**

* Time Complexity: $\mathcal{O}(\text{maxK}^{\text{countK}} \cdot n)$
  
  where $\text{maxK}$ is the maximum value of $k$, $\text{countK}$ is the count of nested $k$ values, and $n$ is the maximum length of the encoded string.

  Example: For $s = \texttt{20[a10[bc]]}$, $\text{maxK} = 20$, $\text{countK} = 2$ (since there are 2 nested $k$ values: `20` and `10`), and there are 2 encoded strings `a` and `bc` with the maximum encoded string length $n = 2$.

  The worst case occurs when there are multiple nested patterns. Suppose all $k$ values ($\text{maxK}$) are `10` and all encoded strings ($n$) are of size `2`.

  For $s = \texttt{10[ab10[cd]]10[ef]}$, the time complexity is roughly: $10 \cdot \texttt{cd} \cdot 10 \cdot \texttt{ab} + 10 \cdot 2 = 10^2 \cdot 2$

  Hence, for an encoded pattern of the form $\text{maxK[nmaxK[n]]}$, the time complexity to decode is: $\mathcal{O}(\text{maxK}^{\text{countK}} \cdot n)$

* Space Complexity: $\mathcal{O}\left(\sum (\text{maxK}^{\text{countK}} \cdot n)\right)$
  
  where $\text{maxK}$ is the maximum value of $k$, $\text{countK}$ is the count of nested $k$ values, and $n$ is the maximum length of the encoded string.

  The maximum stack size would be equivalent to the sum of all decoded strings of the form $\text{maxK[nmaxK[n]]}$.

---

### Approach 2: Using 2 Stack

**Intuition**

In the previous approach, we used a single character stack to store the digits`(0-9)` as well as letters `(a-z)`.
 We could instead maintain 2 separate stacks.
- `countStack`: The stack would store all the integer `k`.
- `stringStack`: The stack would store all the decoded strings.

Also, instead of pushing the decoded string to the stack character by character, we could improve our algorithm by appending all the characters into the string first and then push the entire string into the `stringStack`. Let's look at the algorithm in detail.

**Algorithm**

Iterate over the string `s` and process each character as follows:

Case 1) If the current character is a digit `(0-9)`, append it to the number `k`.

Case 2) If the current character is a letter `(a-z)`,  append it to the `currentString`.

Case 3) If current character is a opening bracket `[`, push `k` and `currentString` into` countStack` and `stringStack` respectively.

Case 4) Closing bracket `]`: We must begin the decoding process,
- We must decode the `currentString`. Pop `currentK` from the `countStack` and decode the pattern `currentK[currentString]`

- As the `stringStack` contains the previously decoded string, pop the `decodedString` from the `stringStack`.
Update the `decodedString` = `decodedString` + `currentK[currentString]`

![img](../Figures/394/twoStack_diagram.png)

**Implementation**

<iframe src="https://leetcode.com/playground/ds9neWBo/shared" frameBorder="0" width="100%" height="500" name="ds9neWBo"></iframe>

**Complexity Analysis**

Assume, $$n$$ is the length of the string $$s$$.
* Time Complexity: $$\mathcal{O}(\text{maxK} \cdot n)$$,  where $$\text{maxK}$$ is the maximum value of $$k$$ and $$n$$ is the length of a given string $$s$$. We traverse a string of size $$n$$ and iterate $$k$$ times to decode each pattern of form $$\text{k[string]}$$. This gives us worst case time complexity as $$\mathcal{O}(\text{maxK} \cdot n)$$.


* Space Complexity: $$\mathcal{O}(m+n)$$, where $$m$$ is the number of `letters(a-z)` and $$n$$ is the number of `digits(0-9)` in string $$s$$. In worst case, the maximum size of $$\text{stringStack}$$ and  $$\text{countStack}$$ could be $$m$$ and $$n$$ respectively.

---

### Approach 3: Using Recursion

**Intuition**

In the previous approach, we implemented an external stack to keep the track of each character traversed. Ideally, a stack is required when we have nested encoded string in the form `k[string k[string]]`.

Using this intuition, we could start by building `k` and `string` and recursively decode for each nested substring. The recursion uses an internal call stack to store the previous state. Let's understand the algorithm in detail.

**Algorithm**

-  Build `result` while next character is letter `(a-z)` and build the number k while next character is a digit `(0-9)` by iterating over string `s`.
- Ignore the next `[` character and recursively find the nested `decodedString`.
- Decode the current pattern `k[decodedString]` and append it to the result.
- Return the current `result`.

The above steps are repeated recursively for each pattern until the entire string `s` is traversed.

Base Condition: We must define a base condition that must be satisfied to backtrack from the recursive call.
In this case, we would backtrack and return the `result` when we have traversed the string `s` or the next character is `]` and there is no nested substring.

Thanks to [@bluedawnstar](https://leetcode.com/bluedawnstar/) for suggesting the solution.

**Implementation**

<iframe src="https://leetcode.com/playground/b9eL4VsZ/shared" frameBorder="0" width="100%" height="500" name="b9eL4VsZ"></iframe>

**Complexity Analysis**

Assume, $$n$$ is the length of the string $$s$$.
* Time Complexity: $$\mathcal{O}(\text{maxK} \cdot n)$$ as in _Approach 2_

* Space Complexity: $$\mathcal{O}(n)$$. This is the space used to store the internal call stack used for recursion. As we are recursively decoding each nested pattern, the maximum depth of recursive call stack would not be more than $$n$$