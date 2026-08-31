# Python Integer Way

**Author:** WangQiuc
**Votes:** 5
**Link:** [https://leetcode.com/problems/confusing-number/solutions/314984/](https://leetcode.com/problems/confusing-number/solutions/314984/)

---

First, if any digit in N is not one of {0,1,6,8,9}, it's not a confusing number.
Second, if rotate_180_degree(N) is not equal to N, then it's a confusing number. Because it caused ambiguity after rotated by 180 degree.
And what rotate_180_degree() do is to reverse the entire N and change 6 to 9 and 9 to 6.
```
def confusingNumber(N):
	x, y, cmap = N, 0, {0:0,1:1,6:9,8:8,9:6}
	while N:
		n, m = divmod(N, 10)
		if m not in cmap: return False
		N, y = n, y*10 + cmap[m]
	return x != y
```