# Sieve of Eratosthenes + Dijkstra's algorithm

**Author:** TigProg
**Votes:** 3
**Link:** [https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6123395/](https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6123395/)

---

# Complexity
- Time complexity: $$O(n\\cdot \\log(\\log(n)) + n \\cdot \\log(n)) = O(n \\cdot \\log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
import heapq

class Solution:
    def minOperations(self, n: int, m: int) -> int:        
        def get_primes(n):
            is_prime = [True] * n
            for i in range(0, n, 2):
                is_prime[i] = False
            is_prime[1] = False
            is_prime[2] = True

            for i in range(3, round(n ** 0.5) + 1, 2):
                if is_prime[i]:
                    for j in range(i * i, n, 2 * i):
                        is_prime[j] = False

            return {
                index
                for index, q in enumerate(is_prime)
                if q
            }
        
        primes = get_primes(int('9' * len(str(n))) + 1)
        if (n in primes) or (m in primes):
            return -1
        if n == m:
            return n
        
        def get_next(value: int) -> int:
            tmp = [int(char) for char in str(value)]
            for i, char in enumerate(tmp):
                if char != 9:
                    tmp[i] += 1
                    yield int(''.join(str(digit) for digit in tmp))
                    tmp[i] -= 1
                if char != 0:
                    if char == 1 and i == 0:
                        continue
                    tmp[i] -= 1
                    yield int(''.join(str(digit) for digit in tmp))
                    tmp[i] += 1
        
        h = [(n, n)]
        dist = {n: n}
        
        while h:
            d, value = heapq.heappop(h)
            if d < dist.get(value, float('inf')):
                continue
            if value == m:
                return d
            
            for next_value in get_next(value):
                if (
                    next_value not in primes
                    and dist.get(next_value, float('inf')) >= d + next_value
                ):
                    dist[next_value] = d + next_value
                    heapq.heappush(h, (d + next_value, next_value))

        return -1
```