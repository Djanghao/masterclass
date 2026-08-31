# Python, confidence destroyer

**Author:** warmr0bot
**Votes:** 6
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943667/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943667/)

---

This is one of those seemingly-easy problems, that hit you later on as all of your straightforward solutions fail and you start questioning yourself. After trying the first two obvious solutions that come to mind (DFS and BFS) and failing, I figured out the third one (mathy), much later.
1. DFS, will result in TLE:
```
def atMostNGivenDigitSetDFS(self, digits: List[str], n: int) -> int:
	digits = list(map(int, digits))

	def count_nums_with_prefix(prefix=0):
		if prefix > n: return 0
		return sum(count_nums_with_prefix(prefix * 10 + d) for d in digits) + 1

	return count_nums_with_prefix() - 1
```

2. BFS, will result in TLE:
```
def atMostNGivenDigitSetBFS(self, digits: List[str], n: int) -> int:
	digits = list(map(int, digits))
	cnt = 0
	queue = deque(digits)
	while queue:
		num = queue.popleft()
		if num > n: continue
		cnt += 1
		for d in digits:
			queue.append(num * 10 + d)

	return cnt
```
3. Math. 
a. At first we find out all the numbers that can be constructed that have length of less than n.
b. Then we count the numbers with the length same as n that can be constructed from digits.
```
def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
	digits = set(map(int, digits))
	sn = str(n)
	ln = len(sn)

	cnt = 0

	for l in range(1, ln):
		cnt += len(digits) ** l

	for i, dn in enumerate(sn):
		dn = int(dn)
		less_than = sum(d < dn for d in digits) # all leading digits that are less than current are valid
		cnt += less_than * len(digits) ** (ln - i - 1)
		if dn not in digits: break
		elif i == ln - 1: cnt += 1

	return cnt
```