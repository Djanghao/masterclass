# Python Solution

**Author:** KG-Profile
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5143892/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5143892/)

---


# Code
```
class Solution:
    def findProductsOfElements(self, queries: List[List[int]]) -> List[int]:
        def countOnes(max_val):
            total_set_bits = 0
            n = max_val + 1
            p = 0
            while (1 << p) <= max_val:
                total_pairs = n // (1 << (p + 1))
                total_set_bits += total_pairs * (1 << p)
                total_set_bits += max(0, n % (1 << (p + 1)) - (1 << p))
                p += 1
            return total_set_bits

        def grab(n):
            res = [0] * 64
            for p in range(64):
                total_pairs = (n + 1) // (1 << (p + 1))
                res[p] += total_pairs * (1 << p)
                remainder = (n + 1) % (1 << (p + 1))
                if remainder > (1 << p):
                    res[p] += remainder - (1 << p)
            return res

        def upTo(max_index):
            min_val, max_val = 0, max_index + 5
            highest, excess = 0, max_index + 1
            while min_val <= max_val:
                mid_val = min_val + (max_val - min_val) // 2
                amt_of_ones = countOnes(mid_val)
                if amt_of_ones < max_index + 1:
                    highest = mid_val
                    excess = max_index + 1 - amt_of_ones
                    min_val = mid_val + 1
                elif amt_of_ones > max_index + 1:
                    max_val = mid_val - 1
                else:
                    highest = mid_val
                    excess = 0
                    break
            bit_counts = grab(highest)
            if excess == 0:
                return bit_counts
            higher = max_val + 1
            for p in range(64):
                if (higher & (1 << p)) != 0:
                    bit_counts[p] += 1
                    excess -= 1
                    if excess == 0:
                        return bit_counts
            return bit_counts

        def modPow(base, pow, mod):
            if pow == 0:
                return 1
            lesser = modPow(base, pow // 2, mod)
            lesser = (lesser * lesser) % mod
            if pow % 2 == 1:
                lesser = (lesser * base) % mod
            return lesser

        def fulfil(query):
            from_val, to_val, mod = query
            up_to = upTo(to_val)
            littler = upTo(from_val - 1)
            res = 1
            pow_val = 1
            for i in range(63):
                amt = up_to[i] - littler[i]
                if amt == 0:
                    pow_val = (pow_val * 2) % mod
                    continue
                mult = modPow(1 << i, amt, mod)
                res = (res * mult) % mod
                pow_val = (pow_val * 2) % mod
                if res == 0:
                    return 0
            return res

        res = []
        for query in queries:
            res.append(fulfil(query))
        return res

```