# Official Solution

**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solution/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solution/)

---

[TOC]

## Solution

---

### Approach 1: Multiple Iterations, One For Each Digit.

#### Intuition  

As outlined in the problem statement, our objective is to find the largest number. We will sequentially examine whether any of the strings `"999", "888", "777", ... ,` or `"000"` appear in the string `num`.

![slide_1a](../Figures/2264/Slide1a.jpg)

To determine if the `sameDigitNumber` string exists within string `num`, we maintain a window of size `3`, starting from the $$0^{th}$$ position of `num`. We compare the three characters in the window with the characters of `sameDigitNumber`. If any of them do not match, we shift the window one position to the right and continue this process until either all of the three characters in the window match or we have finished the iteration.

![slide_1b](../Figures/2264/Slide1b.jpg)


#### Algorithm

1. Create a `sameDigitNumbers` array containing all the same 3-digit numbers from `"999"` to `"000"` in decreasing order.

2. Create a method `contains(sameDigitNumber, num)` to check whether the string `num` only contains `sameDigitNumber`.
    - In this method, iterate over string `num` from index `idx = 0` till `num.size() - 3` and return `true` if for any index `idx`, characters at indices `idx`, `(idx + 1)`, and `(idx + 2)` are `sameDigitNumber`. Otherwise, return `false`.

3. Iterate over each `sameDigitNumber` of the `sameDigitNumbers` array, if for any `sameDigitNumber`, `contains(sameDigitNumber, num)` returns `true`, return string `sameDigitNumber`.

4. Otherwise, return an empty string.

#### Implementation

<iframe src="https://leetcode.com/playground/EE5ZcUL3/shared" frameBorder="0" width="100%" height="500" name="EE5ZcUL3"></iframe>

#### Complexity Analysis

Let $n$ be the maximum length of the `num` string.

* Time complexity:  $O(n)$
    - The initialization of array `sameDigitNumbers` of size $10$ with strings of size $3$, is considered a constant time operation.
    - In the `largestGoodInteger(num)` method, we iterate over $10$ `sameDigitNumbers` strings, for each `sameDigitNumber` we call the `contains(sameDigitNumbers, num)` method, and in this method, we iterate over the whole `num` string which is $O(n)$ time operation.  
   - Thus, overall it will take $O(10 \cdot n) = O(n)$ time.

* Space complexity: $O(1)$
    - We create an additional array `sameDigitNumbers` of size $10$, which takes constant space.


<br />

---


### Approach 2: Single Iteration

#### Intuition  

> The previous approach is sufficient for solving the given problem during an interview. This approach offers no additional advantages over the time and space complexities of the initial approach but it is listed here for the completeness of the article.
> 
> However, if faced with a follow-up question where the numbers are represented in a non-decimal base and the number of digits (denoted as `b`) can be significantly larger, the previous approach will become sub-optimal and we would be expected to propose a more optimized solution. This approach will be independent of the number of digits in the number system.

This alternative approach involves iterating through the `num` string using a window of size `3`. While iterating, if all characters of the window are the same then we store the character in `maxDigit` if it is bigger than the character already stored in `maxDigit`. In the end, we return a string of size `3` formed using `maxDigit`.

![slide_2](../Figures/2264/Slide2.jpg)

> ASCII values of characters `0` to `9` range from `48` to `57`. We need to initialize `maxDigit` with the character having an ASCII value smaller than `48`. Here we will initialize it with NUL `\0` character which has ASCII value `0`.

#### Algorithm

1. Create a variable `maxDigit` initially assigned to the NUL character `\0`.

2. Iterate on string `num` from index `idx = 0` till `num.size() - 3`.
    - For any index `idx`, if the `idx`, `(idx + 1)`, and `(idx + 2)` index characters are the same then store the maximum of `maxDigit` and `num[idx]` in `maxDigit`.

3. If `maxDigit` stores the NUL character, return an empty string. Otherwise, return a string having three `maxDigit` characters.

#### Implementation

<iframe src="https://leetcode.com/playground/8vKjsF9S/shared" frameBorder="0" width="100%" height="378" name="8vKjsF9S"></iframe>

#### Complexity Analysis

Let $n$ be the maximum length of the `num` string.

* Time complexity:  $O(n)$
    - In the `largestGoodInteger(num)` method, we iterate over the whole `num` string which takes $O(n)$ time.  

* Space complexity: $O(1)$
    - We only use an additional variable `maxDigit`.