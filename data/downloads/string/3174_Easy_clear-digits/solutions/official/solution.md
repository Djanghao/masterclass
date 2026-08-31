# Official Solution

**Link:** [https://leetcode.com/problems/clear-digits/solution/](https://leetcode.com/problems/clear-digits/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `s` containing letters and digits. Our task is to perform the following operations on every digit of the string:

1. Remove the digit.
2. Remove the last non-digit character to the left of the digit.

As we iterate through each digit in the string and apply these operations, we end up removing all digits along with some non-digit characters. In the end, we will return the final string, after processing and removing all digits.

>   According to the problem's constraints, it will always be possible to remove all digits, meaning that every digit will have a corresponding non-digit character on the left.

---

### Approach 1: Brute Force

#### Intuition

In this approach, we will simply simulate the described process until we have removed all digits from `s`.

An important observation is that as we process the string from left to right and remove digits, the part of the string we've already processed will only contain non-digit characters (or be empty). This means that the first non-digit character to the left of the current digit will always be the one immediately before it.

With this in mind, we iterate over the characters of `s` with `charIndex` from `0` to `s.length - 1`. When we encounter a digit, we remove both the digit and the non-digit character immediately before it. A key detail in the implementation is that after deleting a character, we should not increment the `charIndex`, as the next character will shift to the current position. Similarly, when deleting two characters, we should decrement the `charIndex` by `1`, as the next character to process will shift to one position left from the current one.

> To check whether the current character is a digit in the implementations below, we will use the provided built-in functions. Alternatively, we could create a custom function that checks whether the ASCII value of the character falls between the ASCII values of `'0'` and `'9'`.

#### Algorithm

-   Initialize `charIndex` to `0`.
-   While `charIndex` is less than the current length of `s`:
    -   If the character at `charIndex` is a digit:
        -   Remove the digit at `charIndex`.
        -   Remove the character at `charIndex - 1`.
        -   Decrement `charIndex` by `1` to account for the removed character.
    -   Otherwise, if the character at `charIndex` is not a digit:
        -   Move to the next character by incrementing `charIndex` by `1`.
-   Return the modified string `s`.

#### Implementation

<iframe src="https://leetcode.com/playground/hSY8duQu/shared" frameBorder="0" width="100%" height="463" name="hSY8duQu"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s` and $m$ the number of digit characters in it.

-   Time Complexity: $O(n \times m)$ or $O(n ^ 2)$.

    For each digit character, we perform one or two "erase" operations, each with time complexity $O(n)$. Therefore, processing $m$ digits takes $O(n \times m)$. Non-digit characters are skipped and contribute $O((n - m) \times 1)$ checks, which is $O(n)$. Since $m \leq n$ the overall time complexity can be expressed as $O(n^2)$.

-   Space Complexity: $O(1)$.

    Excluding the input string (which does not count toward the auxiliary space complexity), we only use a single variable (`charIndex`) to track the current character's position in the string. Therefore, the space complexity of the algorithm is $O(1)$.  

    > In Java, we use a StringBuilder to store a copy of the input string and perform all operations on it. Therefore, the space complexity for this implementation is $O(n)$.

---

### Approach 2: Stack-Like

#### Intuition

As we saw, the main issue with the brute-force approach was the repeated 'erase' operations on the input string, which added a factor of $n$ to the algorithm's time complexity.

To avoid this, instead of modifying the input, we construct the answer from scratch as we iterate over the characters of `s`:

-   When we encounter a non-digit character, we add it to the end of the answer, as it should appear in the final string unless a digit later removes it.
-   When we encounter a digit, we do not add it to the final answer. Additionally, we remove the last character from the answer, as this is the last non-digit character to the left of the current digit.

The main difference to the previous approach is that removing the last character from a string takes constant time, whereas removing a character from an arbitrary position requires $O(n)$ time. 

> In Java, we declare the answer string as a `StringBuilder`. This is essential for improving time complexity, as removing the last character from a regular String is still a $O(n)$ operation. Similarly, in Python we will use a list to take advantage of the $O(1)$ pop operation.

In this approach, we essentially treat the answer string like a stack. We push non-digit characters onto it, and we may remove some from the end as we process the string. The key idea is that we only remove the most recently added characters, ensuring that we never need to remove a character that was added before another character that hasn't been removed yet.

> For a more comprehensive understanding of Stacks, check out the [Stack Explore Card 🔗](https://leetcode.com/explore/featured/card/queue-stack/). This resource provides an in-depth look at stacks, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

!?!../Documents/3174/3174_approach2_fix.json:960,540!?!

#### Algorithm

-   Initialize `answer` to an empty string.
-   Iterate over `s` with `charIndex` from `0` to `s.length - 1`:
    -   If the character at `charIndex` is a digit:
        -   Remove the last character from `answer`.
    -   Otherwise, if the character at `charIndex` is not a digit:
        -   Add it to the end of the `answer` string.
-   Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/k5UkNpaX/shared" frameBorder="0" width="100%" height="395" name="k5UkNpaX"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s`.

-   Time Complexity: $O(n)$.

    We iterate over all characters in `s` and perform constant-time operations, including checks and either removing the last character of the `answer` string or adding the current character to the end of it. Therefore, the total time complexity of the algorithm is $O(n)$.

-   Space Complexity: $O(n)$.

    In the C++ implementation, we only need a single variable, `charIndex`, to track the position of the current character in `s`. Consequently, the algorithm uses constant ($O(1)$) extra space.

    On the other hand, the Java and Python implementations require additional structures (such as a list or a StringBuilder), to simulate stack operations. Since these structures are neither part of the input nor the output of the algorithm, they contribute to its auxiliary space complexity. This complexity is $O(n)$, as these structures can grow to at most the size of the input string.

---

### Approach 3: In-place

#### Intuition

One big advantage of the previous approach is that it does not change the input string. This is helpful in situations where the input is passed by reference (like in Java) and the algorithm runs in a multithreaded environment or when the input needs to be used again after the function call. In these cases, algorithms that modify the input directly should be avoided.

However, when this is not the case, modifying the input can be more space-efficient. In such cases, in-place algorithms like the one we’ll discuss here can be good alternatives.

So, in this approach we will integrate the "stack" logic directly into the input string. Instead of pushing non-digit characters into a separate structure, we overwrite the input string in place so that non-digit characters are positioned exactly where they will appear in the final result. 

To achieve this, we use a variable `answerLength` to track the current length of the result. When adding a new character, we place it at the `answerLength` position in the string and increase `answerLength` by `1`. When removing a character, we decrease `answerLength` by `1`, which effectively makes the last character irrelevant and ready to be overwritten.

At the end, the result is the prefix of the modified input string up to `answerLength`.

#### Algorithm

-   Initialize `answerLength` to `0`.
-   Iterate over `s` with `charIndex` from `0` to `s.length - 1`:
    -   If the character at `charIndex` is a digit:
        -   Decrement `answerLength` by `1`.
    -   Otherwise, if the character at `charIndex` is not a digit:
        -   Add it to the end of the answer, by setting `s[answerLength] = s[charIndex]`.
        -   Increment `answerLength`.
-   Return the first `answerLength` characters of the modified string `s`.

#### Implementation

<iframe src="https://leetcode.com/playground/mE87b9bk/shared" frameBorder="0" width="100%" height="497" name="mE87b9bk"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s`.

-   Time Complexity: $O(n)$.

    Like in the previous approach, we iterate over all characters in `s` and perform constant-time operations, including checks and retrievals of characters in a string. Additionally, the "resize" operation on the string requires $O(n)$ time and therefore the total time complexity of the algorithm is $O(n)$.

-   Space Complexity: $O(1)$.

    As the input string does not count as auxiliary space, the C++ implementation requires only constant extra space for the variables `answerLength` and `charIndex`. 

    However, the Java and Python implementations require additional structures (such as a list or a charArray), as they do not provide mutable strings. Since these structures are neither part of the input nor the output of the algorithm, they contribute to its auxiliary space complexity, which is $O(n)$.

---