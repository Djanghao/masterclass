# Official Solution

**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solution/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solution/)

---

[TOC]

## Solution

---

### Overview

Since we need to find the number of substrings that begin and end with the same letter, we can focus on the first and last character of the substring and safely ignore the characters in the middle. 

Additionally, substrings with only one letter have to be considered and counted along with all their duplicates. Say the input string has 5 `a` characters, all 5 of these single character substrings have to be included in our answer. 

A common mistake when solving this problem is to overlook whether or not we need to track duplicate characters or whether substrings of length 1 are also counted. Asking clarifying questions about edge cases in an interview can be very helpful to both showcase your attention to detail and keep you on the right track. 

--- 

### Approach 1: Prefix Count

#### Intuition

Since all we need to do to identify a valid substring is ensure that the last character matches the first, we know that any given character in `s` forms a substring with every occurrence of the same character that has already appeared in the given string. 

!?!../Documents/2083/slideshow.json:960,540!?!

To pair up a letter in `s` with all the same letters that come before it, we need to keep track of how many times we've encountered it so far. This widely used concept in data structure and algorithm questions is called prefix count. In prefix count, as the name suggests, we store the number of occurrences of each element at a given index as we encounter them. 

As we iterate through the letters in `s`, the current element can be paired up with all the occurrences of that letter we have seen so far, along with the current element itself. 

The input string `s` only consists of lowercase English letters, so we can use an array with a fixed size of 26 for each letter of the alphabet instead of a hash set to store the prefix count. 

> Note: For an input string of size `10,000` where all the characters are the same letter, there are `5,000,050,000` substrings that begin and end with the same letter. Trying to store this value in a 32-bit integer data type will cause an overflow. The data type `long` in Java can hold values up to `9,223,372,036,854,775,807`, and the data type `long long` in C++ can hold values up to `9,223,372,036,854,775,807`. Therefore, we will be using these data types for this problem.


#### Algorithm

1. Initialization:
    - Get the size of the string `s` and store it in `n`.
    - Initialize `answer` to `0` to store the number of valid substrings.
    - Create a list `prefixCount` of size `26`, initialized to `0` to store the number of letters observed so far. 
2. Iterate through the string `s` from left to right:
    - For each character in the string `s`:
        - Increment the corresponding position in `prefixCount`. 
        - Update `answer` by adding the entry for the current character in `prefixCount`.
3. Return `answer` which stores the total number of valid substrings.

#### Implementation

<iframe src="https://leetcode.com/playground/PKX9wp4p/shared" frameBorder="0" width="100%" height="412" name="PKX9wp4p"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s`.

- Time Complexity: $O(n)$

    Initializing the `prefixCount` array takes $O(1)$ time, because it has a fixed size of `26`.

     Iterating through the string `s` involves a single loop that runs $n$ times. 

     Inside the loop, incrementing the count in the `prefixCount` array and updating the `answer` variable both take $O(1)$ time for each character.

     Therefore, the total time complexity is $O(n)$.

- Space Complexity: $O(1)$

    The `prefixCount` array uses constant space $O(26) = O(1)$. 

    Variables `n`, `answer`, and `i` use constant space.

    Therefore, the space complexity is $O(1)$.

---

### Approach 2: Counting

#### Intuition

We established that matching the first and last characters is sufficient to detect a valid substring. Thus, the count of valid substrings starting and ending with a specific letter precisely corresponds to the number of ways we can select two occurrences of that letter from the entire string. Consequently, if we have the frequency count of each letter in `s`, we can directly compute the total number of valid substrings starting and ending with that specific letter.

So, the problem is now reduced to counting how many ways we can pick two from the occurrences of a specific letter in the string `s`. In mathematics, we can express this as $\dbinom{n}{2}$, read as `n choose 2`, where `n` is the number of times the specific letter appears in the string. Notice that this formula doesn't include substrings of length one, which is equivalent to picking the same character twice. Thus, the correct formula is $\dbinom{n}{2} + n$ to include substrings of length one as well. 

We can simplify the formula further to get $\dbinom{n}{2} + n$ = $\dfrac{n \cdot (n - 1)}{2} + n = \dfrac{(n + 1) \cdot n}{2}$. 

> Note: As a reminder, $\dbinom{n}{k} = \dfrac{n!}{k! \cdot (n - k)!}$ . 

#### Algorithm

1. Initialization:
    - Initialize `answer` to `0` to store the number of valid substrings.
    - Create a list `frequencyCount` of size `26`, initialized to `0` to store the frequency of each letter in `s`.
2. Count the frequency of each character in the string `s`:
    - Iterate through each character in the string `s`:
        - Increment the corresponding position in `frequencyCount`.
3. Calculate the total number of valid substrings:
    - Iterate through each count in `frequencyCount`:
        - Use the formula `((currentCount + 1) * currentCount) / 2` to calculate the number of valid substrings for the current letter and add it to `answer`.
4. Return `answer` which stores the total number of valid substrings.

#### Implementation

<iframe src="https://leetcode.com/playground/HQkAv6DW/shared" frameBorder="0" width="100%" height="412" name="HQkAv6DW"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s`.

- Time Complexity: $O(n)$

    Initializing the `frequencyCount` array takes $O(1)$ time, because it has a fixed size of `26`.

    Counting the frequency of each character in the string `s` involves a single loop that runs $n$ times.

    Iterating through the `frequencyCount` array involves a loop that runs $26$ times, which is constant and does not depend on $n$.

    Inside this loop, updating the `answer` variable takes $O(1)$ time for each character.

    Therefore, the total time complexity is $O(n)$.

- Space Complexity: $O(1)$

    The `frequencyCount` array uses constant space $O(26) = O(1)$.

    Variables `answer` and `currentCount` use constant space.

    Therefore, the space complexity is $O(1)$.

---