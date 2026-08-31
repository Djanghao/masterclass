# Python 3 || 10 lines,  Counter, heap,  || T/S: 99% / 96%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4885311/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4885311/)

---

Here's the plan (revised May 2024): 

1. We use a *Counter*`ctr`to determine the counts of the characters in `s`. It follows that  `qmark` = `ctr['?']` is the number of '?'s in `s`.

1. We construct an array `heap` of the tuples `(ctr[ch],ch)` to keep track of the counts of all twenty-six elements of the alphabet. We heapify `heap`.

1. We pop `qmark` best elements off the heap, in which best means (a) the cheapest and then (b) the lexicographically smallest. For each, we increase its cost by one and push it back onto the stack.
2. From the stack, we move the final costs of each character to a dictionary `dic`.
3. We iterate through the alphabet to replace the `?` characters with the best replacement available. (It may be necessary for the interested reader to review the syntax for the method `replace` to grasp this operation.)

```
alphabet = ascii_lowercase

class Solution:
    def minimizeStringValue(self, s: str)  -> str:

        ctr, dic = Counter(s), defaultdict(int)                 # <-- 1.
        qmarks = ctr['?']
        rep = lambda x, y: x.replace('?', y, dic[y] - ctr[y])

        heap = list(map(lambda x: (ctr[x],x), alphabet))        # <-- 2.
        heapify(heap)
        
        for _ in range(qmarks):                                 # <-- 3.
            cost, ch = heappop(heap)
            heappush(heap, (cost + 1, ch))

        for cost, ch in heap: dic[ch] = cost                    # <-- 4.

        return reduce(rep, alphabet, s)                         # <-- 5.
```
[https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/submissions/1267016824/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/submissions/1267016824/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.