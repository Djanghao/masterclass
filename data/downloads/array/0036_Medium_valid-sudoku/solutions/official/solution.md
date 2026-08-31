# Official Solution

**Link:** [https://leetcode.com/problems/valid-sudoku/solution/](https://leetcode.com/problems/valid-sudoku/solution/)

---

[TOC]

## Overview

A valid sudoku board should satisfy three conditions: (1) each row, (2) each column, and (3) each box has no duplicate numbers.

For instance, in example 1 from the problem description, for `board[2][1] = 9`, we need to check the following conditions.

![example_1](../Figures/36/Example_1.jpg)

1. Does number 9 appear more than once in the third row?

2. Does number 9 appear more than once in the second column?

3. Does number 9 appear more than once in the first box?

In order to check 9 rows, 9 columns, and 9 boxes, we need to distinguish each of these entities.
It is comparatively intuitive to check for duplicates in each row and column, given the row index `r` and column index `c`.

We can create a hash set for each row. For `board[r][c]`, we check if the number already exists in the hash set corresponding to $$r^{th}$$ row. If yes, this row contains a duplicate value, therefore the sudoku is not valid. Otherwise, we will proceed to check the next position until we finish scanning the whole sudoku board. The same logic can be applied to each column.

The tricky part is when we check the validity of each box. The question is, given row index `r` and column index `c`, how to assign the position to one of the 9 boxes correctly?
The first observation is that, in each column, rows 0, 1, and 2 belong to the same box, as do rows 3, 4, and 5, and rows 6, 7, and 8.

What do they have in common? Every group of three belonging to the same box has the same outcome when we perform integer division by three. Therefore, we can use `r/3` (`/` signifies floor division) to ensure that the rows are grouped as expected and use `c/3` to ensure that the columns are grouped correctly. Then, `(r/3, c/3)` can uniquely mark each box, and we can directly use the tuple as the hash key if we want to create a hash set for each box.

Alternatively, we can use the numbers  0 through 8 to represent these boxes, where `(r/3) * 3 + (c/3)` is used calculate a number in the range from 0 to 8. I.e. the square located at `(r, c)` belongs to the box `(r/3) * 3 + (c/3)`.

!?!../Documents/36/36_subsqare_definitions.json:960,680!?!

Notice that reading from left to right, the box indices are continuous from 0 to 8, and will increase by column first.

For each row, column, and box, there are several ways to store which numbers have already appeared so far. Here are three that we will use in this article:

1. Create a hash set for each row, column, and box (see Approach 1 for illustration).
2. Create an array of length 9 with values 0 and 1 representing "not seen" and "previously seen" states, respectively (see Approach 2 for illustration).
3. Use a binary number with a value 0 or 1 at each position representing the previous occurrence of each number (see Approach 3 for illustration).

Many problems can be solved using hash sets, arrays, or binary numbers to record previously seen numbers, and below, we will show how each of these methods can be used to help check the validity of a sudoku board.

> After solving this problem, you can practice the above techniques on a similar problem ([Find Winner on a Tic Tac Toe Game](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/)) or try a more advanced follow-up problem ([Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)).

</br>

---

### Approach 1: Hash Set

**Intuition**

In a valid sudoku puzzle, each row, column, and box contains digits in the range from 1 through 9 without repetition. To check if the sudoku is valid, for each number, we must check if that number is repeated anywhere in the same row, column, or box. However, it would be very inefficient to read the entire row, column, and box every time we check if a number is a duplicate. Instead, as we are iterating over the numbers in the sudoku, we can use hash sets to store the previously seen numbers in each row, column, and box. Via hash sets, we can determine if the current number already exists in the corresponding row, column, or box in constant time. An example of this process is shown below.

!?!../Documents/36/36_method1_hashset.json:960,680!?!

**Algorithm**

1. Initialize a list containing 9 hash sets, where the hash set at index `r` will be used to store previously seen numbers in row `r` of the sudoku. Likewise, initialize lists of 9 hash sets to track the columns and boxes too.

2. Iterate over each position `(r, c)` in the sudoku. At each iteration, if there is a number at the current position:

    - Check if the number exists in the hash set for the current row, column, or box. If it does, return `false`, because this is the second occurrence of the number in the current row, column, or box.

    - Otherwise, update the set responsible for tracking previously seen numbers in the current row, column, and box. The index of the current box is `(r / 3) * 3 + (c / 3)` where `/` represents floor division.

3. If no duplicates were found after every position on the sudoku board has been visited, then the sudoku is valid, so return `true`.

<iframe src="https://leetcode.com/playground/3eX6S7As/shared" frameBorder="0" width="100%" height="500" name="3eX6S7As"></iframe>

**Complexity Analysis**

Let $$N$$ be the board length, which is 9 in this question. Note that since the value of $$N$$ is fixed, the time and space complexity of this algorithm can be interpreted as $$O(1)$$.  However, to better compare each of the presented approaches, we will treat $$N$$ as an arbitrary value in the complexity analysis below.

* Time complexity: $$O(N^2)$$ because we need to traverse every position in the board, and each of the four check steps is an $$O(1)$$ operation.

* Space complexity: $$O(N^2)$$ because in the worst-case scenario, if the board is full, we need a hash set each with size `N` to store all seen numbers for each of the `N` rows, `N` columns, and `N` boxes, respectively.

</br>

---

### Approach 2: Array of Fixed Length

**Intuition**

Apart from using a hash set, we can also use an array of fixed length to check for duplicates. Each position (`pos`) in the array represents the status of the number `pos + 1`. Therefore, we can determine if we have already seen some number in constant time. We need an array for each row, column, and box. This approach is a mental stepping stone for Approach 3 where bitmasking is used.

**Algorithm**

1. Initialize an array of size `N` filled with zeros for each row, column, and box, where `N` is the sudoku board length, which is 9 in this case.

2. Iterate over each position `(r, c)` in the sudoku. At each iteration, if there is a number at the current position:

    - Check if the number `n` has been previously seen by checking the $$n-1^{th}$$ index in the array. If the value at this index equals to 1, it means that we have already seen this number, so the sudoku is not valid. We return `false` in this case.

    - Otherwise, if the value at this position equals 0, then it is the first time encountering this number, so we update the value at this position to 1 to mark that we have seen this number.

3. Once every position on the sudoku board is checked, with no duplicates found, we will return `true`.

Let's take the leftmost column in the sudoku shown below as an example.

!?!../Documents/36/36_method2_array.json:960,680!?!

<iframe src="https://leetcode.com/playground/JTdcFCLK/shared" frameBorder="0" width="100%" height="500" name="JTdcFCLK"></iframe>

**Complexity Analysis**

Let $$N$$ be the board length, which is 9 in this question. Note that since the value of $$N$$ is fixed, the time and space complexity of this algorithm can be interpreted as $$O(1)$$.  However, to better compare each of the presented approaches, we will treat $$N$$ as an arbitrary value in the complexity analysis below.

* Time complexity: $$O(N^2)$$ because we need to traverse every position in the board, and each of the four check steps is an $$O(1)$$ operation.

* Space complexity: $$O(N^2)$$ because we need to create `3N` arrays each with size `N` to store all previously seen numbers for all rows, columns, and boxes.

</br>

---

### Approach 3: Bitmasking

**Intuition**

In Approach 2 we showed how we can use values at different positions of an array to mark whether the number corresponding to each position has been seen or not. Each position in the array can take a value of 0 or 1, which can be represented by a single bit. Therefore, we can improve on the space complexity by using bitmasking.

To recap, for a binary number, each bit can take a value of 0 or 1. We can use a binary number with 9 digits to represent whether numbers 1 through 9 have been visited or not. Now the question is, "how do we set a bit to 1 when a number is seen and how do we check if a bit is already set to 1?"
Let's first review the two most commonly used operations for `get` and `set` in bitmasking. Such operations on bits are commonly referred to as bitwise operations.

1. Check if the $$i^{th}$$ bit of a binary number is set to 1: `x & (1 << i)`. If this expression evaluates to `0`, the bit is not set.  Let's elaborate on how this works:

   - `1 << i` means the number 1 is bit shifted to the left `i` times.  For example, `1 << 2` changes the number 1 (`'0001'`) to the number 4 (`'0100'`).  Notice that in the binary representation, the 1 is shifted two places to the left.

   - Bitwise AND (`&`) returns only the bits that are set in both the left **and** right operand.  For example, `5 & 4 = '0101' & '0100' = '0100' = 4`.  Notice that in the binary representation, the only remaining set bit is the bit that was set in both numbers.  One more example for clarity, `10 & 4 = '1010' & '0100' = '0000' = 0`. When two numbers do not share any set bits, bitwise AND returns 0, otherwise, it will return a nonzero value.  This is why we can use bitwise AND to check if the $$i^{th}$$ bit from the right has been set.  

2. Set the $$i^{th}$$ bit of a binary number `x` to 1: `x = x | (1 << i)`

   - Bitwise OR (`|`) returns the bits that are set in the left **or** right operand. For example, `10 | 4 = '1010' | '0100' = '1110' = 14`.  Notice that the third bit from the right has been set (changed from 0 to 1).  This is why we can use `x = x | (1 << i)` to set the $$i^{th}$$ bit from the right in the integer `x`.

> Here we use 9 bits to represent numbers 1 to 9. You might wonder, if these numbers are not continuous, can we still use bitmasking to represent the presence or absence of each number? The answer is yes. For instance, if we know upfront that the possible discrete values are `[1, 9, 10, 100]` (any small set of possible values), we can use a hashmap `{1:0, 9:1, 10:2, 100:3}` to track the correspondence between possible values and positions in the binary number. So, we can use a 4-digit binary number to represent the status of each number in `[1, 9, 10, 100]`, even though these numbers are not continuous.

> To better understand bit manipulation, you may check out this post ([A summary: how to use bit manipulation to solve problems easily and efficiently](https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently)) by @LHearen.

**Algorithm**

1. Use an integer for each row, column, and box to track which numbers have been previously seen. The $$i^{th}$$ bit from the right marks the previous occurrence of the number `i`. For example, `'000001010'` signifies the numbers 2 and 4 have been previously seen.

2. Iterate over each position `(r, c)` in the sudoku board. At each iteration, if there is a number at the current position:

    - Use `x & (1 << i)` to check if we have seen the number `i + 1` previously. If `x & (1 << i)` is nonzero, then the number `i + 1` is a duplicate and the sudoku is not valid.

    - Otherwise, we haven't seen this number before, and we will use `x | (1 << i)` to set the $$i^{th}$$ bit from the right to signify the number `i + 1` has been seen.

3. Once every position on the sudoku board has been checked, if no duplicates were found, we return `true`.

Let's take the upper-left box as an example.

!?!../Documents/36/36_method3_binary.json:960,680!?!

<iframe src="https://leetcode.com/playground/PA8nBcB3/shared" frameBorder="0" width="100%" height="500" name="PA8nBcB3"></iframe>

**Complexity Analysis**

Let $$N$$ be the board length, which is 9 in this question. Note that since the value of $$N$$ is fixed, the time and space complexity of this algorithm can be interpreted as $$O(1)$$.  However, to better compare each of the presented approaches, we will treat $$N$$ as an arbitrary value in the complexity analysis below.

* Time complexity: $$O(N^2)$$ because we need to traverse every position in the board, and each of the four check steps is an $$O(1)$$ operation.

* Space complexity: $$O(N)$$ because in the worst-case scenario, if the board is full, we need `3N` binary numbers to store all seen numbers in all rows, columns, and boxes. Using a binary number to record the occurrence of numbers is probably the most space-efficient method.