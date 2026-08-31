# [Math + Python] Using 2 variables linear algebra to solve the problem

**Author:** Suraj1127
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/551868/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/551868/)

---

We are given here the number of tomato slices (T) and the number of cheese slices (C). Using them, we should make the burgers, jumbo and small. A jumbo burger requires 4 tomato slices and 1 cheese slice and a small burger requires 2 tomato slices and 1 cheese slices. Let J and S represent the number of jumbo burgers and small burgers. Also, 

So, 
*4J + 2S = T
  J +   S = C*

Given the values of T and C, we should find the values of J and S. That is solving the two variable linear equations. But wait! Are there any constraints?

Yes, there are. The number of burgers can't be decimals or negatives.
So, the constraints are:
*J \u2208  {0, 1, 2, 3, ...}*
*S \u2208  {0, 1, 2, 3, ...}*

As the matrix `[[4, 2], [1, 1]]` has non-zero determinant (i.e 2), there exists a unique solution. After finding the solution, we need to see if the solution satisfies the constraints. If it satisfies, return the list `[J, S]`, else return `[]`.

To find the inverse matrix, we divide the adjoint matrix by the determinant. So, the solution is:
*[[J], [S]] = 0.5 * [[0.5, -1], [0.5, 2]] x [[T], [C]]*

Note that `x` represents matrix multiplication. So, we come up with the following solution.

Python solution:
```
class Solution:
    def numOfBurgers(self, tomatoSlices, cheeseSlices):
		# on the basis of the matrix solution
        ans = [0.5 * tomatoSlices - cheeseSlices, -0.5 * tomatoSlices + 2 * cheeseSlices]
		
		# using the constraints to see if solution satisfies it
        if 0 <= int(ans[0]) == ans[0] and 0 <= int(ans[1]) == ans[1]:
            return [int(ans[0]), int(ans[1])]
        else:
            return []
```

Have fun!