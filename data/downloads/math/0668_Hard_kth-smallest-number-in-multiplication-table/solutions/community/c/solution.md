# [C++/Java/Python] Short Binary Search Solution with Explanation

**Author:** zayne-siew
**Votes:** 115
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580533/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580533/)

---

### Introduction

Given a `m x n` multiplication table, we need to find the <code>k<sup>th</sup></code> smallest number in that table, where `1 <= k <= m*n`. But first, let's consider a different point-of-view: **if we are given a number `num` where `1 <= num <= m*n`, how do we find the number of numbers in the table smaller than `num`?** As an example, consider the following table:

```text
m=5, n=4: 5 x 4 multiplication table

   1  2  3  4  5
1  1  2  3  4  5
2  2  4  6  8  10       [ 1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 8, 8, 9, 10, 12, 12, 15, 16, 20 ]
3  3  6  9  12 15
4  4  8  12 16 20
```

Say we want to find how many numbers are smaller than `12` in the table. We can break up the problem further and check the columns (or rows): how many numbers in each column is smaller than `12`? The more intuitive way is to **count the number of numbers that are strictly smaller than `12`.** For example:

```text
m=5, n=4: 5 x 4 multiplication table

   1  2  3  4  5
1  1  2  3  4  5
2  2  4  6  8  10       [ 1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 8, 8, 9, 10, 12, 12, 15, 16, 20 ]
3  3  6  9  12 15                                                   ^
4  4  8  12 16 20                                                   |
   v  v  v  v  v                                                    |
   4  4  3  2  2  --> 15  -------------------------------------------
```

Notice that, since we excluded `12` itself from the count, the final number that the total count points to will be the number just before `12`. I.e., since we obtain `15` from the total count of numbers less than `12`, we can assert that `12` is the <code>16<sup>th</sup></code> smallest number.

```text
Pseudocode:
counter = 0
for each column number i (there are m columns)
    for each row number j (there are n columns)
	    check if i*j < num (12 in our example)
		    counter = counter + 1 if so
num is the (counter+1)-th smallest number
```

This will work, but it is quite slow (rough time complexity is O(mn) here). We can do better by **obtaining the expected number of numbers smaller than `12` in each column** (i.e. determine what `j` should be) by rounding down `12 / i`. Then, since there is only a maximum of `n` rows, we need to account for this upper limit.

```text
Pseudocode:
counter = 0
for each column number i (there are m columns)
    determine expected value of j: num / i, rounded down
	counter = counter + (j, but n if j > n)
	check if i*j is num
		count = counter - 1 if so
num is the (counter+1)-th smallest number
```

The new time complexity is O(m), which will run much faster. One final optimisation is to do away with the strict checking and allow `12` itself to be included in the count:

```text
Pseudocode:
counter = 0
for each column number i (there are m columns)
    determine expected value of j: num / i, rounded down
	counter = counter + (j, but n if j > n)
num is the (counter)-th smallest number
```

```text
m=5, n=4: 5 x 4 multiplication table

   1  2  3  4  5
1  1  2  3  4  5
2  2  4  6  8  10       [ 1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 8, 8, 9, 10, 12, 12, 15, 16, 20 ]
3  3  6  9  12 15                                                           ^
4  4  8  12 16 20                                                           |
   v  v  v  v  v                                                            |
   4  4  4  3  2  --> 17  ---------------------------------------------------
```

This excludes all numbers that are strictly greater than `12`. Notice that `16 =/= 17`; we obtained two different indexes since there are duplicate `12`s. If `k = 16`, however, we would still need to return `12`. This suggests that we need to accomodate for duplicate numbers by allowing `counter >= k`, provided that the number we obtain in the <code>counter<sup>th</sup></code> index is equal to our target `num`.

---

### Binary Search

How does binary search fit into all of this? Continuing from the POV we are using (determining how many numbers are smaller than a given `num`), we now want to know: how we can obtain this `num`? For that, we can use binary search to give us numbers to check through. How does this work?

- **`num` must be bounded; `1 <= num <= m*n`**. This is not to say that `num` must be in the table, rather, we can safely assume that the <code>k<sup>th</sup></code> smallest number must fall in `[1, m*n]` since `1 <= k <= m*n`.
- **We are able to derive exactly 2 cases:** either `counter >= k` is satisfied and `num` could be the correct number that we're looking for, or `counter >= k` is not satisfied and `num` is smaller than the target number. This dichotomous nature of the conditional checking of `num` forms the basis of binary search, as we can discard/disregard one half of the search space based on this condition.

But wait, if `num` doesn't need to be in the table, how can we be sure that the resultant `num` obtained is in the table? We could perform a check after the binary search, but thanks to the way that we computed `counter`, we don't have to. Consider the following example:

```text
m=3, n=3, k=7
  1 2 3
1 1 2 3
2 2 4 6  ->  [ 1, 2, 2, 3, 3, 4, 6, 6, 9 ]
3 3 6 9                          ^

counter
   ^
   |                                                     9
   |                                      8        _____________
   |                             __________________|     |     |
   |                       6     |     |     |     |     |     |
   |              5  ____________|     |     |     |     |     |
   |           ______|     |     |     |     |     |     |     |
   |        3  |     |     |     |     |     |     |     |     |
   |     ______|     |     |     |     |     |     |     |     |
   |  1  |     |     |     |     |     |     |     |     |     |
   |_____|     |     |     |     |     |     |     |     |     |
   |     |     |     |     |     |     |     |     |     |     |
   -------------------------------------------------------------> num
      1     2     3     4     5     6     7     8     9    10
```

Let's start by defining some variables. First, denote the <code>k<sup>th</sup></code> smallest element in the table as `target`. We know from definition that `1 <= target <= m*n`. Next, denote the previous adjacent element in the table as `prev`, where `1 <= prev < target <= m*n`, and let's assume that it exists; i.e., `k > 1` (we can assert that `k = 1` is trivial, since `k = 1` always returns `1`). Finally, define `btwn` as all numbers such that `prev < btwn < target`, and note that `btwn` does not exist in the table.

We can therefore note 3 key observations:

1. The number of elements in the table that are smaller than `target` is given by <code>counter<sub>target</sub> >= k</code>. Note then that **<code>counter<sub>target</sub></code> is the closest we have that fulfils the criteria of `counter >= k`**, i.e. any smaller valid counter will result in <code>counter < k <= counter<sub>target</sub></code>.
2. **For each `btwn`, <code>counter<sub>btwn</sub> = counter<sub>prev</sub></code>**. This is because `btwn` is not found in the table, and <code>counter<sub>prev</sub></code> includes `prev` in the count.
3. Since `prev < target`, <code>counter<sub>prev</sub> < counter<sub>target</sub></code>. **Therefore, from observations 1 and 2, <code>counter<sub>prev</sub> = counter<sub>btwn</sub> < k <= counter<sub>target</sub></code>**.

From observation 3, it is clear that any number below `target` can be eliminated successfully by binary search since `counter < k`. From observation 1, we therefore conclude that `target` is the minimum possible number that satisfies `counter >= k`, and can therefore eliminate the upper search space if we obtain a number that is greater than `target`. **Both of these work together so that, in the end, the binary search limits the search space down to the final `target`**. Hence, this is why binary search is able to obtain a number from the table despite not having explicit checks for that condition.

So, now that we've established that binary search works, our implementation can be as follows:

- Obtain a number from the middle of the search space `[1, m*n]`.
- Check if this number fulfils `counter >= k`.
  - If so, our targer number must lie in the lower half of the search space.
  - Otherwise, our target number must lie in the upper half of the search space.
- Shrink the search space accordingly, and iterate until our search space reduces to a single number.

---

### Code

<iframe src="https://leetcode.com/playground/m8DfwKhi/shared" frameBorder="0" width="900" height="400"></iframe>

**TC: O(<img src="http://latex.codecogs.com/svg.image?mlog(mn)" title="mlog(mn)" />)**. The binary search is O(<img src="http://latex.codecogs.com/svg.image?log(mn)" title="log(mn)" />), and the nested counter computations runs in O(m) time.
**SC: O(1)**, since no additional data structures are used.

Please upvote if this has helped you! Appreciate any comments as well :)