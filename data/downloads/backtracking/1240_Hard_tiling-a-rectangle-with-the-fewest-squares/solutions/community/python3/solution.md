# Super efficient Python (with explanations). Single array size N and complexity O(n log(n)log(m))

**Author:** dracdrac
**Votes:** 2
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/961799/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/961799/)

---

I checked for different solutions in the 99% range and they all seem to be based on DFS with caching. My algorithm is definitely way more efficient, specially in terms of memory usage.

I made some comparisons of my algorithm against the DFS approach using much larger values (see table below). My algorithm took mere `135ms` for  `n=3841, m=973`, while the `dfs` with `lru_cache` version never completed (I needed to interrupt the Kernel after some minutes).

I had some hard time trying to figure out what is the correct complexity. I realized that fitting squares in a rectangle is actually a logarithmic solution, so I'd say my algorithm is something like `O(max(n,m) * log(n) * log(m))` amortized. I  counted the cycles of all inner loops and it looks like it supports that formula:
```
    Solution().tilingRectangle(10, 9),          # cycles: 67
    Solution().tilingRectangle(13, 11),         # cycles: 94
    Solution().tilingRectangle(101, 97),        # cycles: 2268
    Solution().tilingRectangle(1003, 930),      # cycles: 49792
    Solution().tilingRectangle(10003, 10001),   # cycles: 1168531
    Solution().tilingRectangle(100001, 11193),  # cycles: 2455011
    Solution().tilingRectangle(100001, 13),     # cycles: 61738    
```
(please help me to figure out the correct complexity in the comments in case this is not correct)

Here is my code (with explanations below):

```python
class Solution:
    def tilingRectangle(self, n: int, m: int) -> int:

        def fill_missing(a: List[List[int]], n: int, ra: int) -> int:
            c = 0
            if n > 0:
                while ra > 0:
                    b = min(ra, n)
                    t = ra // b
                    # Multiple adjacent squares of same size
                    # can be treated as a rectangle of width b * t and height b
                    a.append([b * t, b])
                    ra -= b * t
                    c += t
            return c

        def find_rects_count(n, m, initial) -> int:
            a = [ [initial, initial] ]

            cnt = 1 + fill_missing(a, n, m - initial)
            
            while n > 0:
                min_n = min( x[1] for x in a )
                ra = m
                for i, item in zip(itertools.count(len(a)-1, -1), reversed(a)):
                    item[1] -= min_n
                    if item[1] == 0:
                        a[i]=a[-1]
                        a.pop()
                    else:
                        ra -= item[0]
                n -= min_n
                cnt += fill_missing(a, n, ra)

            return cnt
            
        boundary = min(n, m)
        r = n * m
        for b in range(boundary//2, boundary+1):
            r = min(r, find_rects_count(n, m, b))

        return r
```

Lets take example 3 of the description:
![image](./images/0.png)

Flip it upside down and imagine this structure representing the squares present on each line:

```
n = 11 (height), m = 13 (width)
     +-------+-------+
n=11 |   7   |   6   |
n=10 |   7   |   6   |
n= 9 |   7   |   6   |
n= 8 |   7   |   6   |
n= 7 |   7   |   6   |
n= 6 |   7   |   6   |
n= 5 |   7   | 1 | 5 |
n= 4 |  4  |  4  | 5 |
n= 3 |  4  |  4  | 5 |
n= 2 |  4  |  4  | 5 |
n= 1 |  4  |  4  | 5 |
     +-------+-------+
```

In array `a`, we keep track of all squares present in the current line, using the following structure:
`a=[ [<square_size>, <remaining_lines>], ...]`

So for line `n=11`, we would have:
`n = 11 , a = [ [7,7], [6,6] ]`

The next step is finding which is the next line where a square will be complete. This is defined by `n` minus "the smallest of the `remaining_lines` value". In this example, we know `6` is the smallest one, which means at line `n=5` we know we need to "refill" some "missing" squares (function `fill_missing`).

After removing all complete squares of previous lines, we know line `n=5` still have the last line of square `7`, which means we have `6` more "empty" spaces fill up to `13` (`m`). Since we are at line `n=5`, we know we can't add any square larger than `5`,  so we add a square of size `5` + a square of size `1`.

Iterating the same logic for all lines, you will see these values:
```
n=11,  a=[ [7, 7], [6, 6] ]  # Started with a square 7x7 and 6x6
n= 5,  a=[ [7, 1], [1, 1], [5, 5] ] # Square 6x6 is gone. 7x7 still there with one line remaining. We created 1x1 and 5x5
n= 4,  a=[ [8, 4], [5, 4] ] # Square 7x7 and 1x1 are gone. 5x5 still there with 4 lines remaining. We created 2 squares of 4x4 (hence 8, 4).
n= 0,  a=[ ] # All squares are gone
```

Finally, since we want to find the best combination, we need to run this same algorithm and try different sizes for the first square. The range `min(n,m) / 2` is enough to test all combinations that makes sense. Actually, my intuition says it can be reduced even further, to something like `sqrt(min(n,m))` but I haven't tried it yet. Note currently this loop dominates the complexity `O(n)`.

PS: No way I would have solved this in 20 minutes without having ever seen it. I haven't timed myself, but I'd say it took me more than 90 minutes to get into this solution. Now that I figured out an efficient way to keep track of the remaining squares, I can eventually do that again in 20 minutes.

PS2: There is a way to optmize it even further by calculating vertical repetitions in a similar fashion as I calculated horizontal consecutive squares. The way my algorithm is curretly coded, that part dominates the `O(n)` complexity when you have for example `n=100, m=99` and an initial block of side `99`, which gives you `100` cycles to complete the vertical squares, but if you calculated the height to accomodate these vertical connected squares, you would have only 2 cycles, although it is amortized to `log(n)` for different runs.

PS3: Try this algorithm in your local machine with much larger values. Leetcode caps `n <= 13` and `m <= 13`.
