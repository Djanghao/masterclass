# [Python] Intuitive short solution

**Author:** m-Just
**Votes:** 3
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/858117/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/858117/)

---

Basically just brute-force with some minor optimizations.
```python
def getProbability(self, balls: List[int]) -> float:
    M = len(balls)
    N = sum(balls)
    F = [math.factorial(n) for n in range(N // 2 + 1)]

    s1 = [0] * M
    s2 = [0] * M

    def find(i):
        if i == M:
            if sum(s1) == sum(s2) and len([n for n in s1 if n]) == len([n for n in s2 if n]):
                base1 = F[N // 2] // math.prod(F[n] for n in s1)
                base2 = F[N // 2] // math.prod(F[n] for n in s2)
                return base1 * base2
            return 0

        s = 0
        for n in range(balls[i]+1):
            s1[i] = n
            s2[i] = balls[i] - n
            s += find(i+1)
        return s

    base = math.factorial(N) // math.prod(math.factorial(n) for n in balls)
    return find(0) / base
```
Vote up if find this helpful, thanks!