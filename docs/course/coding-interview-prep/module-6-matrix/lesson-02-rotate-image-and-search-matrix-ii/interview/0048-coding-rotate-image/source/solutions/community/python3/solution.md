# Easy Python from scratch (2 Steps)

**Author:** bw1226
**Votes:** 361
**Link:** [https://leetcode.com/problems/rotate-image/solutions/842087/](https://leetcode.com/problems/rotate-image/solutions/842087/)

---

	# reverse
	l = 0
	r = len(matrix) -1
	while l < r:
		matrix[l], matrix[r] = matrix[r], matrix[l]
		l += 1
		r -= 1
	# transpose 
	for i in range(len(matrix)):
		for j in range(i):
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
			
We want to rotate
[1,2,3],
[4,5,6],
[7,8,9]
->
[7,4,1],
[8,5,2],
[9,6,3]]

We can do this in two steps.
Reversing the matrix does this:
[1,2,3],
[4,5,6],
[7,8,9]] 
-> 
[7, 8, 9],
[4, 5, 6], 
[1, 2, 3]

Transposing means: rows become columns, columns become rows.

[7, 8, 9], 
[4, 5, 6], 
[1, 2, 3]
 ->
[7,4,1],
[8,5,2],
[9,6,3]
If you like this explanation, please consider giving it a star on my [github](https://github.com/bwiens/leetcode-python). Means a lot to me.