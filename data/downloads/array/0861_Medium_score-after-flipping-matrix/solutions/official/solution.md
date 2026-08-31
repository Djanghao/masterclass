# Official Solution

**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solution/](https://leetcode.com/problems/score-after-flipping-matrix/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a matrix containing only `0`'s and `1`'s, and we have the ability to flip the values of any row or column of the matrix. Our goal is to find the maximum sum (`score`) that can be obtained by summing the integer values created by each row of the matrix.

**Key Observations:**
1. Flipping a row or a column consists of changing all the `1`'s to `0`'s and vice versa.
2. The value of each row of the matrix is the integer value of the row when interpreted as a binary number.
3. We can flip a row or column any number of times (possibly 0).
    
---

### Approach 1: Greedy Way (Modifying Input)

#### Intuition

Since our goal is to maximize the sum of the matrix's rows, our initial focus should be on maximizing the integer value of each row.

In a binary number, the bits in higher-order positions carry more weight in determining the decimal value than those in lower-order positions. Therefore, a single `1` in the leftmost position always contributes more to the decimal value than any combination of `1`'s in less significant positions. This concept is illustrated in the diagram below.

![Binary to Decimal](../Figures/861/binary_decimal.png)

Since higher-order bits contribute more significantly to the value, our initial strategy will focus on maximizing them. Ideally, we want all bits in the first column of the matrix (first digit) to be `1`. This can be achieved using the row modification operation. If the first value of a row is `0`, we traverse the row and toggle each element. This effectively ensures the first digit is `1`, increasing the overall integer value of the row.

Now that we have optimized each row, let's shift our focus to optimizing the columns. The contribution of a column to the score of the matrix depends solely on the number of `1`'s in the column. So, it would be ideal for us to maximize the number of `1`'s in each column. To do so, we can use the column modification operation. We flip a column if it has more `0`'s than `1`'s, effectively interchanging the number of `0`'s and `1`'s in the column.

The entire process is illustrated in the slideshow below.

!?!../Documents/861/flip_slideshow.json:782,582!?!

Finally, to calculate the score of the matrix, we need to accumulate the integer equivalent of each row. Since the integer value of a row is the sum of the decimal values of each bit, the total score can be obtained by summing the decimal equivalent of every element in the matrix. To determine the contribution of a bit, we left-shift it by its position within the row, representing its place value. This effectively assigns the correct weight (power of 2) to each bit. 

For example, consider a row `[1, 1, 0, 0]`. The third `1` from the right needs to be left shifted by 2, which effectively multiples it with $2^2$ (its place value). The resultant value is the contribution of this `1` to the score of the matrix.

In summary, the maximal score for a matrix is obtained by following two key steps:
1. Flip rows to ensure all elements in the first column of the matrix are `1`'s.
2. Flip a column if it contains more `0`'s than `1`'s.

> Note: In binary numbers, each digit represents a power of $2$, with the rightmost digit being $2^0$ (one's place), the next digit being $2^1$ (two's place), and so on. The decimal value of a bit in a binary number can be represented by left shifting the bit by its place value. For example, in the binary number $100101$, the decimal contribution of the third bit from the left is $1<<2$, which is equivalent to $4$.

#### Algorithm

1. Initialize variables:
   - `m` and `n` as the number of rows and columns in `grid` respectively.
   - `score` to store the maximum score of the matrix
2. Iterate through the first column of the matrix.
   - If the element is `0`, flip the entire row.
3. Iterate from the second column to the last column of the matrix. For each column:
   - Count the number of `0`'s and store it in `countZero`.
   - If number of `0`'s is greater, flip the entire column.
4. Iterate over the modified matrix.
    - For each element, add it to `score` by left shifting it by the place value of the current column.
5. Return `score`, which stores the highest possible score of the matrix.

#### Implementation

<iframe src="https://leetcode.com/playground/6Ns9FkMb/shared" frameBorder="0" width="100%" height="500" name="6Ns9FkMb"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns of the matrix, respectively.

- Time complexity: $O(m \cdot n)$

    In the worst case, we traverse the entire matrix twice. The total number of cells in the matrix is $m \cdot n$. Thus, the time complexity is $O(2 \cdot m \cdot n)$, which simplifies to $O(m \cdot n)$.

- Space complexity: $O(1)$

    We do not use any additional data structures in our implementation. Therefore, the space complexity remains $O(1)$.

---

### Approach 2: Greedy Way (Without Modifying Input)

#### Intuition

It is often not recommended to modify the input data in place. Therefore, let us try to solve the problem without modifying the matrix.

Let `m` and `n` be the number of rows and columns in the matrix, respectively. As we saw previously, to maximize the score, the first element of each row has to be `1`. Thus, we can add $1<<(n-1)$ to the result `m` times to account for the first element of each row. This adds the contribution of the first column to the result.

Now, we need to maximize the contribution of the remaining columns in the matrix. Similar to our previous approach, we need to count the total number of `0`'s and `1`'s in each column and flip the column if the number of `0`'s is greater. However, if the first element in a particular row is `0`, it means that the row has been flipped previously to make the first element `1`. Let us consider all possible scenarios in this regard:

| First Element | Current Element | Current Element (after potential flip) |
|:---:|:---:|:---:|
| 0             | 0              | 1                                 |
| 0             | 1              | 0                                 |
| 1             | 0              | 0                                 |
| 1             | 1              | 1                                 |

We can see that an element resolves to `1` only when it matches the first element in its row. Thus, to count the number of `1`'s in the column, we can simply count the instances where the first element is equal to the current element.

Once we have the total number of `1`'s in the column, we can decide whether it is profitable to flip the column or not. We will get the maximum contribution from the column if the number of `1`'s is greater than the number of `0`'s. Thus, the number of `1`'s contributing to the score from that particular column would be the higher value between the counts of `0`'s and `1`'s. 

#### Algorithm
 
1. Initialize `m` and `n` as the number of rows and columns in `grid` respectively.
2. Initialize `score` to `(1<<(n-1))*m` to account for the first column of `1`'s.
3. Iterate from the second column to the last column of the matrix. For each column:
   - Initialize `countSameBits` as `0`. 
   - For each element, check if it matches with the first element of the row.
     - If it matches, increment `countSameBits`.
   - Left shift `1` by the place value of the column and add it to the result `max(countSameBits, m-countSameBits)` times.
4. Return `score`, which is our required result.

#### Implementation

<iframe src="https://leetcode.com/playground/3BCUNdNL/shared" frameBorder="0" width="100%" height="500" name="3BCUNdNL"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns of the matrix, respectively.

* Time complexity: $O(m \cdot n)$

    We traverse the entire matrix only once. The total number of cells in the matrix is $m \cdot n$, resulting in a time complexity of $O(m \cdot n)$.

* Space complexity: $O(1)$

    We do not use any additional space in our implementation. Therefore, our space complexity remains $O(1)$.

---