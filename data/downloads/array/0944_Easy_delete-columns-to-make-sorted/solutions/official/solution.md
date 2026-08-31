# Official Solution

**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solution/](https://leetcode.com/problems/delete-columns-to-make-sorted/solution/)

---

[TOC]

## Solution

--- 


### Approach 1: Matrix Traversing

#### Intuition

We have $N$ strings, each of the same length, say $K$, in a list `strs`. If we make a grid or matrix using these strings with one on each line, we want to find the number of columns in the matrix that are not in lexicographic order.

To be in lexicographic order, each character in the column should be equal to or greater than the corresponding character in the previous row. Therefore, we will iterate over the columns and for each column, we will iterate over the rows starting from index `1` (not zero, as we will compare the character to the character in the previous row). We will then increment the count of unsorted columns every time we observe a character smaller than the character in the previous row.

The figure below demonstrates three cases, each with four rows and a single column. The first two columns are sorted as the characters are in lexicographic order. However, the last one is not as the smaller character `e` comes after `g`.

![fig](../Figures/944/944A.png)

#### Algorithm

1. Iterate over the columns from `0` to `K - 1`, for each column `col`:

    - Iterate over the rows `row` from `1` to `N - 1`:

        - If the character at index `col` in the string `strs[row]` is smaller than the character at index `col` in the string `strs[row - 1]`, then increment the counter variable `answer`. Also, we can break the inner loop here as we find the current column unsorted.
        - Otherwise, we check the next `row`.

2. Return `answer`.

#### Implementation


<iframe src="https://leetcode.com/playground/hotTRvdq/shared" frameBorder="0" width="100%" height="463" name="hotTRvdq"></iframe>


#### Complexity Analysis

Here $N$ is the number of strings in the given list `strs`, and $K$ is the length of each string.

* Time complexity: $O(N * K)$.

  We are iterating over each of the $K$ characters in all the $N$ strings. Although we break early in the case where we find the column unsorted, in the worst case when there is no unsorted column, we will have to iterate over each character. Hence, the total time complexity is $O(N * K)$.

* Space complexity: $O(1)$.

  We don't need any extra space apart from the variable `answer` used to store the count of unsorted columns.


---