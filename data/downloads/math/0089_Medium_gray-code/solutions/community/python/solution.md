# [4 lines] Elegant, fast and easy-understand Python solution

**Author:** sevenhe716
**Votes:** 48
**Link:** [https://leetcode.com/problems/gray-code/solutions/245076/](https://leetcode.com/problems/gray-code/solutions/245076/)

---

Fisrt, we can explore the data and try to figure out the pattern. 
For example, when n=3, **results** start from 000, we can **XOR** last number in results with **X** .
`result[i+1] = X[i] ^ result[i]`
Below we can figure out the pattern of **X**:
```
result          X                  Y
0 0 0         0 0 1           0 0 1 (1)
0 0 1         0 1 0           0 1 0 (2)
0 1 1         0 0 1           0 1 1 (3)
0 1 0         1 0 0           1 0 0 (4)
1 1 0         0 0 1           1 0 1 (5)
1 1 1         0 1 0           1 1 0 (6)
1 0 1         0 0 1           1 1 1 (7)
1 0 0
```
So the keypoint is to generate **X** sequence. Here is the trick, actually **X** is **lowest one-bit** of **Y** (natural number set).
According to bit-manipulation, we can get lowest one-bit of number by
`X = Y & -Y`
Finally, we can get this elegant and easy-understand solution:
```
def grayCode(self, n: int) -> 'List[int]':
	res = [0]
	for i in range(1, 2**n):
		res.append(res[-1] ^ (i & -i))
	return res
```