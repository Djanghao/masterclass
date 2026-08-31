# [Python] O(n): Full proof, find the multiplicative order of 2

**Author:** kcsquared
**Votes:** 69
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130660/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130660/)

---

The permutation we're given is a bit hard to work with, and we're asked to find the order of this permutation:

```
if i % 2 == 0, then arr[i] = perm[i / 2].
if i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2] = perm[(n - 1 + i) / 2]
```
Let's look at an example and see what patterns we can observe when n = 10:
1. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
2. [0, 5, 1, 6, 2, 7, 3, 8, 4, 9]
3. [0, 7, 5, 3, 1, 8, 6, 4, 2, 9]
4. [0, 8, 7, 6, 5, 4, 3, 2, 1, 9]
5. [0, 4, 8, 3, 7, 2, 6, 1, 5, 9]
6. [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
7. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

One thing to notice is that the **start and end of the list** never change. Looking at the second to last column shows another pattern: it seems that the values in a column are almost divided by 2 each time: 8 -> 4 -> 2 -> 1, then we get a different value. Let's dive in and see if we can solve this.

A very handy property of permutations is that they're invertible: we can consider the opposite permutation, since the number of iterations to go from our sorted list is equal in either direction. Let's write the formula for the **inverse permutation**:

arr_inverse[f(x)] = perm[x]
```
if i * 2 <= n-1, then arr_inverse[i] = perm[2 * i]
if i * 2 > n-1, then arr_inverse[i] = perm[2 * i - (n-1)]

So arr_inverse[i] = perm[(2 * i) % (n-1)]
```

So our permutation really just takes every index to twice that index, modulo n-1. To find the inverse, we just need to **find the smallest power of 2 congruent to 1 modulo n-1**. This can be done in O(n) by brute force, or in O((log n) + O(factoring)) by factoring n-1 and using the Chinese Remainder theorem,

Python Code:
```python
def reinitializePermutation(self, n: int) -> int:
	if n == 2:
		return 1
	mod = n - 1
	curr_power = 2
	cnt = 1
	# Find multiplicative order modulo n-1
	while curr_power != 1:
		curr_power = (2*curr_power) % mod
		cnt += 1
	return cnt
```
If you have any questions, feel free to ask. If this was helpful, upvotes are appreciated :)


Edit: For those who are curious, here's the **strictly better than O(n)** solution using prime factorization and Chinese Remainder Theorem. The factoring method here takes O(sqrt(n)) time; it's hard to write the actual optimal complexity of integer factoring without using a huge formula, but the runtime is bigger than any polynomial of log n, and smaller than any polynomial of n.

I'm using some code based on [Rosetta Code](https://rosettacode.org/wiki/Multiplicative_order), modified heavily:

```python
def reinitializePermutation(self, n: int) -> int:

	def lcm(a, b):
		return (a * b) // math.gcd(a, b)

	def factor(a):
		small_primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
		for p in small_primes:
			j = 0
			while a % p == 0:
				a = a // p
				j += 1
			if j > 0:
				yield p, j
			if a < p * p:
				break
		if a > 1:
			yield a, 1

	def mult_ordr_helper(a, p, e):
		m = p ** e
		t = (p - 1) * (p ** (e - 1))  # = Phi(p**e) where p prime
		qs = [1, ]
		for f in factor(t):
			qs = [q * f[0] ** j for j in range(1 + f[1]) for q in qs]
		qs.sort()

		for q in qs:
			if pow(a, q, m) == 1:
				return q
		return qs[-1]

	def mult_order(a, m):
		mult_order_for_all_primes = (mult_ordr_helper(a, r[0], r[1]) for r in factor(m))
		return functools.reduce(lcm, mult_order_for_all_primes, 1)

	return mult_order(2, n - 1)
```
