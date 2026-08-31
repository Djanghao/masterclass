# ✔️[Python3] UNPRECENDENT NUMBER OF COUNTERS o͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮(｡❛ᴗ❛｡)╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡, Explained

**Author:** artod
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1865333/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1865333/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

To be able to make all values the same on the top or bottom, the given dominos should have enough number of same values. So we need to compare the frequency of values on the top and bottom. If there are enough, say `2`s, on the bottom to meet the condition then we can return true. Also, we should account for the dominos with duplicate values. It's possible that a frequency of some value shows that we have enough suitable dominos but they may be a part of the duplicates. So we need to count such duplicates. In our case, we create a dedicated counter for every value without duplicates.

Time: **O(n)** - iteration
Space: **O(1)** - just 3 lists with constant size

Runtime: 1124 ms, faster than **94.15%** of Python3 online submissions for Minimum Domino Rotations For Equal Row.
Memory Usage: 15.1 MB, less than **44.98%** of Python3 online submissions for Minimum Domino Rotations For Equal Row.

```
class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:
        total = len(tops)
        top_fr, bot_fr, val_total = [0]*7, [0]*7, [total]*7
        for top, bot in zip(tops, bottoms):
            if top == bot:
                val_total[top] -= 1
            else:
                top_fr[top] += 1
                bot_fr[bot] += 1
                
        for val in range(1, 7):
            if (val_total[val] - top_fr[val]) == bot_fr[val]:
                return min(top_fr[val], bot_fr[val])
            
        return -1
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**