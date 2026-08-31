# 4-9 lines Python solutions

**Author:** StefanPochmann
**Votes:** 709
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/22282/](https://leetcode.com/problems/spiral-matrix-ii/solutions/22282/)

---

**Solution 1: *Build it inside-out*** - 44 ms, 5 lines

Start with the empty matrix, add the numbers in reverse order until we added the number 1. Always rotate the matrix clockwise and add a top row:

        ||  =>  |9|  =>  |8|      |6 7|      |4 5|      |1 2 3|
                         |9|  =>  |9 8|  =>  |9 6|  =>  |8 9 4|
                                             |8 7|      |7 6 5|

The code:

    def generateMatrix(self, n):
        A, lo = [], n*n+1
        while lo > 1:
            lo, hi = lo - len(A), lo
            A = [range(lo, hi)] + zip(*A[::-1])
        return A

While this isn't O(n^2), it's actually quite fast, presumably due to me not doing much in Python but relying on `zip` and `range` and `+` being fast. I got it accepted in 44 ms, matching the fastest time for recent Python submissions (according to the submission detail page).

---

**Solution 2: *Ugly inside-out*** - 48 ms, 4 lines

Same as solution 1, but without helper variables. Saves a line, but makes it ugly. Also, because I access A[0][0], I had to handle the n=0 case differently.

    def generateMatrix(self, n):
        A = [[n*n]]
        while A[0][0] > 1:
            A = [range(A[0][0] - len(A), A[0][0])] + zip(*A[::-1])
        return A * (n>0)

---

**Solution 3: *Walk the spiral*** - 52 ms, 9 lines

Initialize the matrix with zeros, then walk the spiral path and write the numbers 1 to n*n. Make a right turn when the cell ahead is already non-zero.

    def generateMatrix(self, n):
        A = [[0] * n for _ in range(n)]
        i, j, di, dj = 0, 0, 0, 1
        for k in xrange(n*n):
            A[i][j] = k + 1
            if A[(i+di)%n][(j+dj)%n]:
                di, dj = dj, -di
            i += di
            j += dj
        return A