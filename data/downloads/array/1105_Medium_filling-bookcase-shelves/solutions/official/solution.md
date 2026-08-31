# Official Solution

**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solution/](https://leetcode.com/problems/filling-bookcase-shelves/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of `books`, where each book has a specified thickness and height, and a bookcase with a given `shelfWidth`. The goal is to arrange the books in the bookcase to minimize its height.  

As we process each book sequentially, we have two options: place the book on the current shelf (if its thickness is less than or equal to the remaining width), or start a new shelf. When a new shelf is created, the height of the bookcase increases by the height of the tallest book on the previous shelf.  

Our task is to determine the minimum possible height of the bookcase after all books have been placed.  

---

### Approach 1: Top-Down Dynamic Programming

### Intuition

When processing each book in the `books` array, we have two options: place the book on the current shelf or start a new shelf. Since it's not immediately clear which option will yield the minimum height of the bookcase, we need to evaluate both scenarios and choose the one that results in the smallest height.  

We can model this problem using recursion by defining a function $f(i, remainingShelfWidth, maxHeight)$ that represents the minimum height of the bookcase containing all books up to book `i`, with the current shelf having a remaining width of `remainingShelfWidth` and a maximum height of `maxHeight`. This function essentially breaks down the problem into smaller subproblems:  

- **New Shelf Option**: If we choose to put book `i` on a new shelf, the height of the bookcase will be equal to the height of the previous shelf plus the height of book `i`. This leads to the subproblem $f(i + 1, shelfWidth - books[i][0], books[i][1])$, where we process book `i + 1` with a new shelf containing book `i`. 

- **Current Shelf Option**: If we choose to put book `i` on the current shelf, the remaining width of the shelf decreases, and the maximum height of the shelf may increase if the height of book `i` exceeds the current `maxHeight`. This leads to the subproblem $f(i + 1, remainingShelfWidth - books[i][0], \max(maxHeight, books[i][1]))$.

To find the optimal height of the bookcase, we can use the recurrence relation below encompassing these two options. This recurrence relation compares the height of the bookcase when placing the book on a new shelf (adding the height of the previous shelf to the result of processing the remaining books) versus placing it on the current shelf (adjusting width and height accordingly):

$$f(i, remainingShelfWidth, maxHeight) = \min\left(maxHeight + f(i + 1, shelfWidth - books[i][0], books[i][1]), f(i + 1, remainingShelfWidth - books[i][0], \max(maxHeight, books[i][1]))\right)$$  

If we look at the recursive calls that would be made for Example 1, we notice that subproblems appear more than once.  

![Recursive call tree](../Figures/1105/recursive_call_tree.drawio.png)  

Without any optimizations, this recursive approach would lead to an exponential time complexity of $O(2^N)$ due to the doubling of recursive calls at each book. However, we can utilize a technique called memoization to store previously computed results. This way, if the same subproblem is encountered again, we can retrieve the result from a cache rather than recalculating it. With this optimization, the time complexity would be linearly proportional to the number of unique subproblems.

We use a 2D array `memo` as our cache, where `memo[i][j]` represents the minimum height of the bookcase containing all books up to `i` with $j$ remaining shelf space. Note that `maxHeight` is implicitly handled by this memoization structure because the height is recalculated based on the maximum height of books in the current configuration.  

### Algorithm

1. Initialize a 2D array `memo` to cache previous computations, where `memo[i][remainingShelfWidth]` stores the minimum height of the bookcase containing all books up to the `i-th` book with `remainingShelfWidth` width available on the current shelf.  
2. Call `dpHelper(books, shelfWidth, memo, 0, shelfWidth, 0)` to start the dynamic programming process from the first book, with the full shelf width available and initial height set to 0.  
3. In `dpHelper` function:   
    *  If `i == books.length`: 
        * Finish the current shelf and return its height `maxHeight`
    * **If the result is already computed in `memo`:**  
        * Return the cached result to avoid redundant calculations.  
    * **Calculate the height for different scenarios:**  
        * Extract the current book's width (`currentBook[0]`) and height (`currentBook[1]`).  
        * **Option 1:** Place the current book on a new shelf:  
            * Compute height by adding the height of the bookcase for the rest of the books starting from `i + 1` with a new shelf width (`shelfWidth - currentBook[0]`) and updated height (`currentBook[1]`).  
        * **Option 2:** Place the current book on the current shelf:
            * Initialize `maxHeightUpdated` to be the maximum of `maxHeight` and `currentBook[1]`.   
            * Compute height by adding the height of the bookcase for the rest of the books starting from `i + 1` with updated remaining shelf width (`remainingShelfWidth - currentBook[0]`) and updated maximum height (`maxHeightUpdated`).  
        * **Store the minimum height** between the two options in `memo[i][remainingShelfWidth]` to use it for future computations.  
    * Return the cached result from `memo[i][remainingShelfWidth]`.  
4. Return the result from `dpHelper` for the initial call to get the minimum height of the bookcase to accommodate all books on the shelves.  

### Implementation

<iframe src="https://leetcode.com/playground/mBUzBhxk/shared" frameBorder="0" width="100%" height="500" name="mBUzBhxk"></iframe>

### Complexity Analysis

Let $N$ be the length of array `books`, and $W$ be the `shelfWidth`.

* Time Complexity: $O(N \cdot W)$ 

    There are a total of $O(N \cdot W)$ possible subproblems to be solved. Each subproblem takes constant time, so the total time complexity is $O(N \cdot W \cdot H)$.

* Space Complexity: $O(N \cdot W)$

    Our `memo` array has a size of $N \cdot W$. Thus, the total space complexity is $O(N \cdot W)$.

### Approach 2: Bottom-Up Dynamic Programming

### Intuition

In the previous recurrence relation, we used a top-down approach where we recursively solved subproblems in decreasing order of size. Now, let’s explore a bottom-up approach, where our subproblems are solved in increasing order of size.  

We can define a subproblem $f(i)$ as the minimum possible height of the bookcase when containing all books up to (but not including) book `i`. This allows us to compute the bookcase height incrementally:  

- **Base Cases**:  
  - For `i = 0`, $f(0)$ is trivially `0`, as there are no books to place.  
  - For `i = 1`, $f(1)$ is simply the height of the first book, `books[0][1]`, since it must be placed on the first shelf.  
Starting from these base cases, we build up to $f(books.length)$, which will be our final answer.  

To compute $f(i + 1)$, we need to consider how to arrange book `i` on the shelves, taking advantage of the previously computed values $f(j)$ for $0 \leq j < i + 1$:  

- **New Shelf Option**: Similar to approach 1, one option is to place book `i` on a new shelf. The height of the bookcase in this scenario would be `books[i][1] + f(i)`, where `f(i)` is the height when arranging all books up to book `i-1`.  

- **Combining Books**: Another option is to place book `i` on a shelf along with some of the previous books. To do this, we need to consider moving all possible numbers of previous books onto this new shelf and check which arrangement yields the minimum height:  

  - For each possible number of previous books that can fit within the `shelfWidth`, calculate the height of the shelf with book `i` and the previous books. For example, if we decide to place book `i` along with book `i-1`, the smallest possible height would be $\max(books[i][1], books[i-1][1]) + f(i-1)$. This involves taking the maximum height of books on the new shelf and adding it to the height from the previous arrangement without the current books.  

By iterating through all possible combinations of previous books that can fit on the shelf with book `i`, we determine the minimal height for $f(i + 1)$.  

The final solution, $f(books.length)$, gives us the minimum height of the bookcase when all books are placed optimally.  

### Algorithm

1. Initialize `dp` array of size `books.length + 1`. `dp[i]` represents the minimum height of the bookshelf when containing all books up to and excluding book `i`.  
2. Set base cases:  
    * `dp[0]` is 0 (height of an empty bookcase).  
    * `dp[1]` is the height of the first book, `books[0][1]`.  
3. Iterate from `i = 2` to `books.length`:  
    * Calculate the remaining shelf width after placing the current book `books[i - 1]` on a new shelf.  
    * Initialize `maxHeight` to the height of the current book.  
    * Set `dp[i]` to the height of the current book (`books[i - 1][1]`) plus the height of the bookcase containing all previous books (`dp[i - 1]`).  
    * Iterate backwards from `j = i - 1`:  
        * Check if adding the book `books[j - 1]` to the shelf still fits within the remaining shelf width.  
        * Update `maxHeight` to be the maximum height of books on the current shelf.  
        * Calculate the height if the current set of books (`books[j - 1]` to `books[i - 1]`) are placed on the same shelf.  
        * Update `dp[i]` to be the minimum of the current `dp[i]` and the height of this configuration (`maxHeight + dp[j - 1]`).  
        * Decrease `j` to consider additional books on the same shelf.  
4. Return `dp[books.length]` which represents the minimum height of the bookcase required to store all the books.  

### Implementation

<iframe src="https://leetcode.com/playground/FtuDUAVm/shared" frameBorder="0" width="100%" height="500" name="FtuDUAVm"></iframe>

### Complexity Analysis

Let $N$ be the length of array `books`, and $W$ be the `shelfWidth`.

* Time Complexity: $O(N \cdot W)$

    There are $O(N)$ subproblems to complete. In the worst case, each subproblem `dp[i]` takes $O(W)$ time to calculate the heights when adding previous books onto the new shelf. Thus, the total time complexity is $O(N \cdot W)$.

* Space Complexity: $O(N)$

    The `dp` array has $N + 1$ elements, so the total space complexity is $O(N)$.