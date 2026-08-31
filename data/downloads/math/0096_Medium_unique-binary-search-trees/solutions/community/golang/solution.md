# Golang DP Solution with explanation

**Author:** Alg
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/428600/](https://leetcode.com/problems/unique-binary-search-trees/solutions/428600/)

---

```
/*
p from 1 to n, each node use to root, left tree has p-1 nodes, right tree has n-p nodes

f(n): numbers of unique BST with n nodes
n 	f(n)
0:	f(0) = 1
1:	f(0) * f(0) = 1 (right 0 left 0)
2:	f(1) * f(0) + f(0) * f(1) = 1 + 1 = 2 (right 1 left 0\uFF0Cright 0 left 1)
3\uFF1A	f(2) * f(0) + f(1) * f(1) + f(0) * f(2) = 2 + 1 + 2 = 5 (right 2 left 0\uFF0Cright 1 left 1\uFF0Cright 0 left 2)
4\uFF1A	f(3) * f(0) + f(2) * f(1) + f(1) * f(2) + f(0) * f(3) = 5 + 2 + 2 + 5 = 14 (right 3 left 0\uFF0Cright 2 left 1\uFF0Cright 1 left 2\uFF0Cright 0 left 3)
5\uFF1A	f(4) * f(0) + f(3) * f(1) + f(2) * f(2) + f(1) * f(3) + f(0) * f(4) = 14 + 5 + 4 + 5 + 14 = 42 (right 4 left 0\uFF0Cright 3 left 1\uFF0Cright 2 left 2\uFF0Cright 1 left 3\uFF0Cright 0 left 4)
......
n:	i from n-1 to 0, j=n-1-i, f(n) init to 0, f(n) += f(i) * f(j) 
*/

func f(n int, pool []int) int {
	if pool[n] != 0 {
		return pool[n]
	}

	sum := 0
	for i := n-1; i >= 0; i--{
		sum += f(i, pool) * f(n-1-i, pool)
	}
	pool[n] = sum
	return sum
}

func numTrees(n int) int {
    pool := make([]int, n+1) //save f(i)
    pool[0] = 1 //recursive base case, init here
    return f(n, pool)
}
```