# Python, O(n) (faster than 99%, memory usage less than 100%)

**Author:** karbayev
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/589572/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/589572/)

---

We calculate how many possible happy substrings of given length minus one exist \u2013 using this number, `k`, a list of possible letters and the last used letter we easily calculate what would be the letter at the current index.

This solution has O(n) runtime complexity and O(1) space complexity (result not counted).
Even though we're using `sorted(chars - set(last))` in the loop, it's safe to estimate the runtime complexity as linear, since the sorted list consist only of 3 elements for the first iteration and afterward always 2 elements. Could have replaced it with manual rearrangement, but `sorted` is much more concise.

```python
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        # calculate total number of happy strings of length n
        total = 3 * 2**(n-1)
        if k > total:
            return ""

        # alphabet:
        chars = set('abc')
        # last used letter (begin with empty):
        last = ''

        result = ['']*n
        for i in range(n):
            # list of possible letters after the last used one:
            choice = sorted(chars - set(last))
            # how many substrings of length (n-i-1) are possible:
            total //= len(choice)
            # pick the letter at index i:
            last = choice[(k-1)//total]
            result[i] = last
            # reduce k to pick from substrings:
            k %= total

        return ''.join(result)
```

Example: we're given n = 3, k = 9.
The total number of happy strings of length 3 is 12 (3\\*2^(n-1)).
Let's find first letter: we can choose from a list of letters `[a, b, c]`, and after we pick one of them, there will be 4 possible happy substrings of length 2 (since we're reducing the number of possibilities by 3 by picking one of three letters). `(k-1) // total substrings = (9-1) // 4 = 2` is the index in our list of possible letters, so the first letter is `c`. We also need to set `k = 9 % 4 = 1` (as `k` needs to be smaller than the number of possible substrings).
Second letter: now we choose only from `[a, b]` and after we pick one of them, we'll have only 2 possible happy substrings of length 1 left. `(k-1) // total substrings = (1-1) // 2 = 0` is the index in our list of possible letters, so our second letter is `a`. Now `k = 2 % 1 = 1`.
Third letter: a list of possible letters now is `[b,c]`, and there's only one possible happy substring of length 1 - an empty string. After repeating our calculations, we get the index of the third letter equal to 0 - which correspons to letter `b`.
So, the resulting string would be `cab`.

The same code without comments:
```python
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        total = 3 * 2**(n-1)
        if k > total:
            return ''
        chars, last, result = set('abc'), '', ['']*n
        for i in range(n):
            choice = sorted(chars - set(last))
            total //= len(choice)
            last = choice[(k-1)//total]
            result[i], k = last, k % total
        return ''.join(result)
```