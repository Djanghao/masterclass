# Beat 100%, No NP-hard, O((nm)^3) linear algebra solution

**Author:** kkkkcom
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446456/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446456/)

---

This is a simplified version of a google phone screen posted below:
https://leetcode.com/discuss/interview-question/422725/google-phone-screen-lights-out-puzzle/397815

The simplification here mainly refers to the fairly small constraints. With m and n both <=3, we can come up with brute force exponential solution. 

But this is actually not a NP-hard problem in maths. Some good explanation can be found below:
https://www.youtube.com/watch?v=oCHCD_-nhg4
http://mathworld.wolfram.com/LightsOutPuzzle.html

I will try to explain with a detailed example below.

First, one observation is that the effect of click one cell n times is equivalently the same as click the cell n%2 times. So we either click a cell once or no click on that cell.

Now assume initial board is:
0 0 
0 1 

Let aij represents if we want to click cell (i,j), so aij is either 0 or 1. We can list the equations below:
1\\*a00 + 1\\*a01 + 1\\*a10 + 0\\*a11 = 0 (initial board[0][0])
1\\*a00 + 1\\*a01 + 0\\*a10 + 1\\*a11 = 0 (initial board[0][1])
1\\*a00 + 0\\*a01 + 1\\*a10 + 1\\*a11 = 0 (initial board[1][0])
0\\*a00 + 1\\*a01 + 1\\*a10 + 1\\*a11 = 1 (initial board[1][1])

Solving the above equations, we will get values for each aij and the sum of all aij is our answer.

In linear algebra, the above equation is usually represented as:
C (Coefficient matrix)  =
1 1 1 0
1 1 0 1 
1 0 1 1
0 1 1 1

A (Variable vectors) = [a00 a01 a10 a11]

Y (Y vectors) = [0 0 0 1]

So we have C * A\u2019 = Y

We can use Gaussian elimination to solve the above equations:
Phase 1: convert to triangle matrix
<img width="177" alt="Screen Shot 2019-12-07 at 8 48 57 PM" src="https://user-images.githubusercontent.com/55373469/70384428-0cfaa200-1933-11ea-8757-f987b071b869.png">

Phase 2: convert to diagonal matrix
<img width="179" alt="Screen Shot 2019-12-07 at 8 47 03 PM" src="https://user-images.githubusercontent.com/55373469/70384405-d6bd2280-1932-11ea-8a1d-cea9f0027464.png">

So we know that we need to click a01,a10,a11 and the minimum number of clicks needed is 3



My code is below, time comlexity is O((MN)^3), so should be able to handle some large M and N:

```
class Solution:
    def minFlips(self, mat: List[List[int]]) -> int:
        board = mat
        M = len(board)
        N = len(board[0])
        coeff = [[0]*(N*M) for _ in range(M*N)]
        y = [0]*(N*M)

        def zadd(coeff,y,i,j):
            for k in range(M*N):
                coeff[j][k] = (coeff[j][k] + coeff[i][k]) & 1
            y[j] = (y[i] + y[j]) & 1

        if not board or not board[0]: return -1

        ### Generate coeff matrix ###
        for i,row in enumerate(board):
            for j,n in enumerate(row):
                index=i*N+j
                if n==1: y[index] = 1
                for ii,jj in [(i-1,j),(i,j-1),(i,j),(i+1,j),(i,j+1)]:
                    if 0<=ii<M and 0<=jj<N:
                        coeff[index][ii*N+jj] = 1

		### Gaussian elimination phase 1 ###
        for i in range(M*N-1):
            for j in range(i,M*N):
                if coeff[j][i] == 1:
                    coeff[j],coeff[i] = coeff[i],coeff[j]
                    y[j],y[i] = y[i],y[j]
                    break
            else:
                continue
            for j in range(i+1,M*N):
                if coeff[j][i] == 1:
                    zadd(coeff,y,i,j)
		
		### Gaussian elimination phase 2 ###
        for i in range(M*N-1,0,-1):
            for j in range(i-1,-1,-1):
                if coeff[j][i] == 1:
                    zadd(coeff,y,i,j)

		### Validate and collect results ###
        clicks = []
        res = 0
        for i in range(M*N):
            if y[i]==1:
                if coeff[i][i]==1:
                    res += 1
                    clicks.append((i//N,i%N))
                else:
                    return -1
        return res
```
