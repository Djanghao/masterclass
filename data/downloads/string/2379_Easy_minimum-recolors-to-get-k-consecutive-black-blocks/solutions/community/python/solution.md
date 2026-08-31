# ✅ [C++/Java/Python] Beginner friendly sliding window!

**Author:** damian_arado
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454833/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454833/)

---

**flips:** to count the number of flips from `W -> B` till now.
**count:** to count the number of consecutive B's.
**minOps:** minimum operations required.
**i:** start of window.
**j:** end of window.

TC: O(n)
SC: O(1)

\u2714 C++:

```
class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        int n = blocks.size(), minOps = 1e9, flips = 0, count = 0, i = 0;
        for(int j = 0; j < n; ++j) {
            if(blocks[j] == 'W') {
                flips++;
                count++;
            } else if(blocks[j] == 'B') {
                count++;
            }
            if(count == k) {
                minOps = min(minOps, flips);
                if(blocks[i] == 'W') {
                    flips--;
                    count--;
                } else count--;
                i++;
            }
        }
        return minOps;
    }
};
```

\u2714 Java:

```
class Solution {
    public int minimumRecolors(String blocks, int k) {
        int n = blocks.length(), minOps = Integer.MAX_VALUE, flips = 0, count = 0, i = 0;
        for(int j = 0; j < n; ++j) {
            if(blocks.charAt(j) == 'W') {
                flips++;
                count++;
            } else if(blocks.charAt(j) == 'B') {
                count++;
            }
            if(count == k) {
                minOps = Math.min(minOps, flips);
                if(blocks.charAt(i) == 'W') {
                    flips--;
                    count--;
                } else count--;
                i++;
            }
        }
        return minOps;
    }
}
```

\u2714 Python:

```
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        n, minOps, flips, count, i = len(blocks), 1e9, 0, 0, 0
        for j in range (n):
            if blocks[j] == 'W':
                flips += 1
                count += 1
            elif blocks[j] == 'B':
                count += 1
            if count == k:
                minOps = min(minOps, flips)
                if blocks[i] == 'W':
                    flips -= 1
                    count -= 1
                else: count -= 1
                i += 1
        return minOps
```

Thanks a lot for reading! ^_^
\uD83D\uDCAF An upvote would be appreciated.
\uD83D\uDC47 Comment down your doubts (if any).