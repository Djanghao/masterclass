# Official Solution

**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solution/](https://leetcode.com/problems/adding-spaces-to-a-string/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `s` and an integer array `spaces`. The task is to return a modified string with spaces inserted at the indices specified in the given array. 

For example, let's take `s = "LeetcodeHelpsMeLearn"` and `spaces = [8, 13, 15]`. We will insert a space before the `'H'` at index `8`, the `'M'` at index `13`, and the `'L'` at index `15`. After inserting the spaces, the string will look like this: `"Leetcode Helps Me Learn"`.

Before moving to the approach, let's discuss a few built-in functions that are designed to help build or modify strings.

##### For Java Users
- `StringBuilder`: The `StringBuilder` class is designed for building and manipulating strings. It is more efficient than using the `String` class directly because it is mutable, meaning its contents can be changed without creating a new object each time.

Let's break down some common operations you can perform with `StringBuilder`:
```java
// 1. Initializing a StringBuilder Object
StringBuilder result = new StringBuilder();
// 2. Appending a Space
result.append(' ');
// 3. Appending a Character from a String
result.append(s.charAt(stringIndex));
// 4. Converting StringBuilder to a String
String finalString = result.toString();
```

### For Python Users
- `List`: Lists are mutable sequences, typically used to store collections of items. They allow for efficient append operations, making them ideal for building and manipulating strings dynamically.

Let's break down some common operations you can perform with `List`:
```python
# 1. Initializing an empty list
result = []
# 2. Appending a space to the list
result.append(" ")
# 3. Appending the character at the specified index from the string `s`
result.append(s[string_index])
# 4. Joining all elements in the list into a single string
final_string = "".join(result)
```

### For C++ Users
- `stringstream`: The `stringstream` class is used for dynamically constructing and manipulating strings. It allows for efficient insertion and extraction of data.

Let's break down some common operations you can perform with `stringstream`:
```cpp
// 1. Initializing a new stringstream object
stringstream result;
// 2. Inserting a space into the stringstream
result << ' ';
// 3. Inserting the character at the specified index from the string `s`
result << s[stringIndex];
// 4. Converting the stringstream to a string
string finalString = result.str();
```

---

### Approach 1: Using Built-in Functions

#### Intuition

A simple approach to solving this problem is to use built-in functions from the string libraries of your preferred programming language. For example, in C++, the `stringstream` class provides a higher-level way to build strings dynamically. Instead of manually pre-allocating space, you can append characters and spaces into a stream as you traverse the original string. Each time you encounter an index in the `spaces` array, you can append a space to the stream, followed by the current character.

This is easier to implement and more intuitive for programmers who are familiar with built-in functions. However, because the underlying buffer of these built-in functions grows dynamically, it is not as memory-efficient as manually constructing the string for this problem.

#### Algorithm

- Create a `result` to dynamically construct the output string.
- Initialize `spaceIndex` to `0` to track the current position in the `spaces` array.

- For each `stringIndex` from `0` to the end of the string `s`:
  - If `spaceIndex` is within bounds of the `spaces` array and `stringIndex` matches `spaces[spaceIndex]`:
    - Append a space (`' '`) to `result` to insert a space at the specified position.
    - Increment `spaceIndex` to move to the next position in the `spaces` array.
  - Append the character `s[stringIndex]` to `result`.

- After iterating through the string, convert `result` to a string and return it as the final output.

#### Implementation

<iframe src="https://leetcode.com/playground/5uUNLTyX/shared" frameBorder="0" width="100%" height="412" name="5uUNLTyX"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `s`, and `m` be the size of the array `spaces`, which represents the number of spaces to be added.

- Time complexity: $O(n + m)$  

    The `for` loop iterates through the string `s` of length $n$, which contributes $O(n)$.  

    Within the loop, the comparison of `stringIndex` with `spaces[spaceIndex]` involves accessing the array `spaces`, which occurs `m` times at most (since `spaceIndex` is incremented for each space insertion). This contributes $O(m)$.  

    Using built-in functions to append characters to a dynamic buffer is efficient because append operations are amortized $O(1)$. Therefore, the total time complexity is $O(n + m)$.

- Space complexity: $O(1)$ (if we only count auxiliary space) or $O(n + m)$ (if we count the space for the result)

    The built-in function dynamically constructs the result string, which requires space for $n$ characters from the input string `s` and `m` spaces to be inserted. This results in $O(n + m)$ space usage for the result string, as this space is required to hold the final output.

    However, if we only consider auxiliary space for variables like `spaceIndex` and `stringIndex`, which are used to control the loop, the space complexity can be considered $O(1)$, as they require constant space. 

    Therefore, the overall space complexity is $O(n + m)$ when including the space for the result string, but $O(1)$ if we only account for the auxiliary space.

---

### Approach 2: Two-Pointer Technique 

#### Intuition

To further optimize the solution, we can use a two-pointer technique. This involves maintaining two pointers:
1. `stringIndex`, which tracks the current character in the string `s`.
2. `spaceIndex`, which tracks the current position in the `spaces` array."

As we iterate through the string using `stringIndex`, we check if it matches the current space position given by `spaces[spaceIndex]`. If they match, we insert a space at that position and move to the next space by incrementing `spaceIndex`. Regardless of whether a space was added, we append the current character from the string to the `result`. After processing all the characters, we return the final string with spaces inserted at the specified positions.

The algorithm is visualized below:

!?!../Documents/2109/2109_adding_spaces.json:700,505!?!

> For a more comprehensive understanding of the two-pointer technique, check out the [Two Pointer Explore Card 🔗](https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/). This resource provides an in-depth look at the two-pointer approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize an empty string `result` to build the output string with spaces added.
- Pre-allocate memory for `result` to improve efficiency, reserving the original string length plus the number of spaces.
- Initialize `spaceIndex` to `0` to track the current position in the `spaces` array.

- Iterate through the input string `s` using `stringIndex`:
  - If `spaceIndex` is less than the size of `spaces` and `stringIndex` equals `spaces[spaceIndex]`:
    - Append a space character `' '` to `result` at the specified position.
    - Increment `spaceIndex` to process the next space position.

  - Append the current character `s[stringIndex]` to `result`.

- Return `result` after processing all characters in `s` and adding the specified spaces.

#### Implementation

> Note: By calculating the final size of the string beforehand (original length plus the number of spaces), we can allocate the necessary memory in one go, thereby saving time and avoiding the overhead of resizing the result every time we add something.

<iframe src="https://leetcode.com/playground/862CsKhj/shared" frameBorder="0" width="100%" height="446" name="862CsKhj"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `s`, and `m` be the size of the array `spaces`, which represents the number of spaces to be added.

- Time complexity: $O(n + m)$  

    The algorithm iterates through the string `s` of length $n$ using a `for` loop, making the primary contribution to the time complexity $O(n)$.

    For every position in `s`, it checks against the current space index in the `spaces` array, which has a maximum size of `m`. Since `spaceIndex` is incremented only when a space is added, this contributes $O(m)$ to the time complexity.  

    Appending characters and spaces to the `result` string is efficient due to the pre-allocation of memory, which ensures these operations occur in amortized $O(1)$. Thus, the total time complexity is $O(n + m)$. 

- Space complexity: $O(1)$ (if we only count auxiliary space) or $O(n + m)$ (if we count the space for the result)

    If we only account for auxiliary space, the space complexity can be considered $O(1)$ because we are using a few integer variables (`spaceIndex`, `stringIndex`) to control the flow. 

    However, since the result string (constructed via built-in functions) holds $n$ characters from `s` and `m` spaces, the space required to store the result is $O(n + m)$. This is the space required for the output string and is a direct consequence of the problem's input/output constraints. 

    Therefore, the overall space complexity is $O(n + m)$ when including the space for the result string, but $O(1)$ if we only account for the auxiliary space.

---