# Greedy - beat 100% time / memory

**Author:** JieMei
**Votes:** 11
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/517962/](https://leetcode.com/problems/closest-divisors/solutions/517962/)

---

The greedy principle is used in the following two aspects, so that we can immediately return once we find a candidate `i` that meets the requirment:

* Iterate candidates from `int(sqrt(num+2))` to `1`.
* Check `num + 1` before `num + 2`. Because when a candidate `i` is valid for both `num + 1` and `num + 2`, The diff value of the former is smaller. e.g. `num = 1`.

```python
    def closestDivisors(self, num: int) -> List[int]:
        for i in reversed(range(1, int((num + 2) ** 0.5) + 1)):
            if not (num + 1) % i:
                return [i, (num + 1) // i]
            if not (num + 2) % i:
                return [i, (num + 2) // i]
```