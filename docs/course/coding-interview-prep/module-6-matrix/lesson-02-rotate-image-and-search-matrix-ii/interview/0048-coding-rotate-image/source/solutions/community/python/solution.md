# Seven Short Solutions (1 to 7 lines)

**Author:** StefanPochmann
**Votes:** 1186
**Link:** [https://leetcode.com/problems/rotate-image/solutions/18884/](https://leetcode.com/problems/rotate-image/solutions/18884/)

---

While these solutions are Python, I think they're understandable/interesting for non-Python coders as well. But before I begin: No mathematician would call a matrix `matrix`, so I'll use the usual `A`. Also, btw, the 40 ms reached by two of the solutions is I think the fastest achieved by Python solutions so far.

---

**Most Pythonic - `[::-1]` and `zip`** - 44 ms

The most pythonic solution is a simple one-liner using `[::-1]` to flip the matrix upside down and then `zip` to transpose it. It assigns the result back into `A`, so it's "in-place" in a sense and the OJ accepts it as such, though some people might not.

    class Solution:
        def rotate(self, A):
            A[:] = zip(*A[::-1])

---

**Most Direct** - 52 ms

A 100% in-place solution. It even reads and writes each matrix element only once and doesn't even use an extra temporary variable to hold them. It walks over the *"top-left quadrant"* of the matrix and directly rotates each element with the three corresponding elements in the other three quadrants. Note that I'm moving the four elements in parallel and that `[~i]` is way nicer than `[n-1-i]`.

    class Solution:
        def rotate(self, A):
            n = len(A)
            for i in range(n/2):
                for j in range(n-n/2):
                    A[i][j], A[~j][i], A[~i][~j], A[j][~i] = \\
                             A[~j][i], A[~i][~j], A[j][~i], A[i][j]

---

**Clean Most Pythonic** - 56 ms

While the OJ accepts the above solution, the the result rows are actually tuples, not lists, so it's a bit dirty. To fix this, we can just apply `list` to every row:

    class Solution:
        def rotate(self, A):
            A[:] = map(list, zip(*A[::-1]))

---

**List Comprehension** - 60 ms

If you don't like `zip`, you can use a nested list comprehension instead:

    class Solution:
        def rotate(self, A):
            A[:] = [[row[i] for row in A[::-1]] for i in range(len(A))]

---

**Almost as Direct** - 40 ms

If you don't like the little repetitive code of the above "Most Direct" solution, we can instead do each four-cycle of elements by using three swaps of just two elements.

    class Solution:
        def rotate(self, A):
            n = len(A)
            for i in range(n/2):
                for j in range(n-n/2):
                    for _ in '123':
                        A[i][j], A[~j][i], i, j = A[~j][i], A[i][j], ~j, ~i
                    i = ~j

---

**Flip Flip** - 40 ms

Basically the same as the first solution, but using `reverse` instead of `[::-1]` and transposing the matrix with loops instead of `zip`. It's 100% in-place, just instead of only moving elements around, it also moves the rows around.

    class Solution:
        def rotate(self, A):
            A.reverse()
            for i in range(len(A)):
                for j in range(i):
                    A[i][j], A[j][i] = A[j][i], A[i][j]

---

**Flip Flip, all by myself** - 48 ms

Similar again, but I first transpose and then flip left-right instead of upside-down, and do it all by myself in loops. This one is 100% in-place again in the sense of just moving the elements.

    class Solution:
        def rotate(self, A):
            n = len(A)
            for i in range(n):
                for j in range(i):
                    A[i][j], A[j][i] = A[j][i], A[i][j]
            for row in A:
                for j in range(n/2):
                    row[j], row[~j] = row[~j], row[j]