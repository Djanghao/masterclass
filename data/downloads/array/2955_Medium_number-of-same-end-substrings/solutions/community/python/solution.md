# [Python3] Prefix sum with comments and explaination

**Author:** NotTheSwimmer
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/4371784/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/4371784/)

---

The problem is simple if we allow for a loop over queries, follow by counting each character in that range:
```python
class Solution:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        result = []
        for start, end in queries:
            count = 0
            for n in Counter(s[start:end+1]).values():
                count += (n**2+n)//(2)  # Summation formula, equivalent to sum(range(n+1))
            result.append(count)
        return result
```

Unfortunately, this means our time complexity is len(queries) * len(s). Given we can both have `3 * 10**4 = 30000` characters in s and queries, our worst case is at least `30000 ** 2` operations, or 900 million, which is too many.

The nested loop in the above that we're worried about, however, isn't actually the `for n`, but rather the slicing of the list `s[start:end+1]` and iterating over it to construct the `Counter`. There will actually only be at most 26 iterations of that inner loop `for n` assuming we only have lowercase ascii characters.

So, how can we more efficiently calculate how many of each character exists between `start` and `end`? Easy! For each character, count how many occurences of it are at every index. Then, we can just go through each character and subtract how many times it occured before we started from how many times it occurs where we end. Like if you climb to the top of a 2000 ft hill, but started at 500 ft, you only climbed 1500 ft rather than the whole thing. 

We can use an array for each character in this list. We could also just hardcode the character set assuming it will always be lowercase ascii, but by doing it this way our solution will extend to other character sets and even be more performant if our character set happens to be smaller than `abcdefghijklmnopqrstuvwxyz`.

```python
class Solution:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        # Map each character to a unique index
        chars = {c: i for i, c in enumerate(set(s))}
        # Create a list to count the number of characters before each index.
        # counts[0] will be a list of all 0's because no characters exist before index 0.
        # counts[len(s)] will be a list counting the # of each respective character in s
        # because all characters are accounted for after the last character s[len(s)-1].
        counts = [[0] * len(chars)]
        for i, c in enumerate(s):
            cur = counts[-1].copy()
            cur[chars[c]] += 1
            counts.append(cur)
        # Go through each query
        result = []
        for start, end in queries:
            # Go through each character, position wise.
            # end in the queries are not inclusive, so add one.
            count = 0
            for r, l in zip(counts[end+1], counts[start]):
                n = r - l
                # Use the summation formula (same as sum(range(n+1))) but more efficient)
                count += (n**2+n)//(2)
            result.append(count)
        return result
 ```
 
 Also, here's a bit more of a code-golfy solution, but it's less performant:
 ```python
 class Solution:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        chars = {c: i for i, c in enumerate(set(s))}
        counts = [[0] * len(chars)]
        for i, c in enumerate(s):
            cur = counts[-1].copy()
            cur[chars[c]] += 1
            counts.append(cur)
        return [sum((n**2+n)//(2) for n in map(lambda rl: rl[0] - rl[1], zip(counts[R+1], counts[L]))) for L, R in queries]
```