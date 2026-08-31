# Python: Explained Easy: Check all Squares.

**Author:** meaditya70
**Votes:** 19
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/1267544/](https://leetcode.com/problems/largest-magic-square/solutions/1267544/)

---

Idea: Check all Squares from largest length to length of 2. If any square is found to be a magic square, then directly return the length as we need the max length and we are already moving from max-length to length 2.
If no magic square is found, then simply return 1 as square matrix of length 1 is always a magic square.

```
		n = len(grid)
        m = len(grid[0])
        
		#the max length square will be min of both the dimensions always.
        l =  min(n,m)
        
		# traverse from max length to length > 1 by a step of -1.
        for k in range(l, 1, -1):
			# n - k + 1 and m - k + 1 is to make sure that the matrix does not go out of bound
            for i in range(n-k+1):
                for j in range(m-k+1):
					# here i, j is the index of the top-left element of matrix
					# k is the length = n of a n*n square matrix 
                    if isMagicSquare(i, j, k):
                        return k
        return 1 # always the least sized magic square
```

Now, The isMagicSquare function can be written as below,
```
		def isMagicSquare(i, j, length):
            # this set is used to store the sum of all the rows, columns and diagonals.
			# if all the sums are same then set has only one element, else it will have more than 1 element.
			s = set()
            
            #for all rows
            for x in range(length):
                sum = 0
                for y in range(length):
                    sum += grid[i+x][j+y]
                s.add(sum)
                if len(s)>1:
                    return False
            
            #for all cols
            for y in range(length):
                sum = 0
                for x in range(length):
                    sum += grid[i+x][j+y]
                s.add(sum)
                if len(s)>1:
                    return False
            
            # for forward diagonal
            sum = 0
            for x in range(length):
                sum += grid[i+x][j+x]
            s.add(sum)
            if len(s)>1:
                return False
            
            #for backward diagonal
            sum = 0
            for x in range(length):
                sum += grid[i+x][j+ length - 1 - x]
            s.add(sum)
            if len(s)>1:
                return False
            return True
```

Time Complexity: O(n^2) for isMagicSquare function and simultanesouly O(n^3) for the main function = O(n^5).
Space Complexity: O(n) for set, **though this can be reduced to constant space very easily by just using a variable and checking if the new sum is equal to the variable or not**.

Finally, the Full Code:
```
class Solution:
    def largestMagicSquare(self, grid: List[List[int]]) -> int:
        
        def isMagicSquare(i, j, length):
            s = set()
            
            #for all rows
            for x in range(length):
                sum = 0
                for y in range(length):
                    sum += grid[i+x][j+y]
                s.add(sum)
                if len(s)>1:
                    return False
            
            #for all cols
            for y in range(length):
                sum = 0
                for x in range(length):
                    sum += grid[i+x][j+y]
                s.add(sum)
                if len(s)>1:
                    return False
            
            # for forward diagonal
            sum = 0
            for x in range(length):
                sum += grid[i+x][j+x]
            s.add(sum)
            if len(s)>1:
                return False
            
            #for backward diagonal
            sum = 0
            for x in range(length):
                sum += grid[i+x][j+ length - 1 - x]
            s.add(sum)
            if len(s)>1:
                return False
            return True
        
        n = len(grid)
        m = len(grid[0])
        
        l =  min(n,m)
        
        for k in range(l, 1, -1):
            for i in range(n-k+1):
                for j in range(m-k+1):
                    if isMagicSquare(i, j, k):
                        return k
        return 1
```