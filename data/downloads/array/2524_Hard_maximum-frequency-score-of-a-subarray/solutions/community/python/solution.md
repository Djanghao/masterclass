# Python | Clean Code

**Author:** nika-skybytska
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2997155/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2997155/)

---

# Intuition

The scores of consecutive subarrays do not differ much.

# Approach

Namely, the frequencies of at most two elements differ: the one being appended to the back, and the one being removed from the front. If you maintain a frequency table, then the corresponding frequency scores can be updated easily.

1. A common technique to simplify the code is to separate the update into three parts: (i) subtract the old contribution of the element, (ii) update the element frequency, and (iii) add the new contribution of the element:

```python
score -= value(append)
frequency[append] += 1
score += value(append)
```

2. Instead of initializing the subarray with `nums[:k]`, you may process all elements in the same fashion, but only record results for `pos >= k - 1`:

```python
for pos, append in enumerate(nums):
    ...
    if pos >= k - 1:
        max_score = max(max_score, score % mod)
```

3. Python has a built-in support for efficient modular exponentiation in [pow](https://docs.python.org/3/library/functions.html#pow). Use it!

4. Exposing a function `frequency_score` may simplify your teammates' work in similar task. It also helps avoid duplication of conditional statements:

```python
def frequency_score(num: int, frequency: tp.Mapping[int, int],
                    mod: int=10**9+7) -> int:
    return pow(num, frequency[num], mod) if frequency[num] else 0
```

5. It would be more convenient to define it as a `lambda` so that `frequency` and `mod` get captured. However, there is a way to bind these arguments once to simplify the following calls - `functools.partial`:

```python
value = functools.partial(frequency_score, frequency=frequency, mod=mod)
...
for pos, append in enumerate(nums):
    score -= value(append)
    frequency[append] += 1
    score += value(append)
```

instead of

```python
for pos, append in enumerate(nums):
    score -= frequency_score(append, frequency, mod)
    frequency[append] += 1
    score += frequency_score(append, frequency, mod)
```

This way you get the best of both worlds: a simple way to call it both with and without additional context.

# Complexity

- Time complexity: $$O(n \\log n)$$, since we perform $$O(n)$$ modular exponentiations and maximum power is $$O(n)$$.

- Space complexity: $$O(n)$$ to store a frequency mapping. Sadly it is not $$O(k)$$, as `collections.Counter` does not erase keys with value `0`.

# Code

[Submission link.](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/submissions/871083306/)

```
import collections
import functools
import typing as tp


def frequency_score(num: int, frequency: tp.Mapping[int, int],
                    mod: int=10**9+7) -> int:
    return pow(num, frequency[num], mod) if frequency[num] else 0


class Solution:
    def maxFrequencyScore(self, nums: list[int], k: int,
                          mod: int=10**9+7) -> int:
        max_score, score = 0, 0
        frequency = collections.Counter()
        value = functools.partial(frequency_score, frequency=frequency, mod=mod)

        for pos, append in enumerate(nums):
            score -= value(append)
            frequency[append] += 1
            score += value(append)

            if pos >= k:
                remove = nums[pos - k]
                score -= value(remove)
                frequency[remove] -= 1
                score += value(remove)

            if pos >= k - 1:
                max_score = max(max_score, score % mod)

        return max_score

```