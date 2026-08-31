# Python Accepted DFS + Memo Solution (With Explanation, Easy to Understand)

**Author:** amora5
**Votes:** 76
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/4095051/](https://leetcode.com/problems/stickers-to-spell-word/solutions/4095051/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Disclaimer: I'm aware that there are much more optimized solutions for this problem, but I wanted to provide a simple solution for those trying to understand this.

The main idea behind this solution is that at each point in time, we have two choices; we can either take the current sticker or we can not take the current sticker. 

#### Choice 1: Don't take the current sticker
The first choice is just skipping the current sticker. This means we increment `idx` by 1 and `target` remains the same.

#### Choice 2: Take the current sticker
If we take the current sticker (`stickers[idx]`), then we remove all possible letters from the `target` string and recurse with the same list of stickers (e.g., keeping `idx` the same) and add 1 to the result. We only stop trying to take the current sticker when it does not contain any letters in the `target` string.

In the end, we return the minimum of the different choices we've made. If there is no solution then we `dfs` will return infinity.


# Code
```
class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
        result = self.dfs(stickers, target, 0, {})
        return result if result != float("inf") else -1
    
    def dfs(self, stickers, target, idx, memo):
        # if target is empty then we don't need to take any sticker
        if target == "":
            return 0
        # if we've searched through all stickers and haven't completed the target
        # then there is no solution
        if idx == len(stickers):
            return float("inf")

        # lookup the answer in the cache
        key = (idx, target)
        if key in memo:
            return memo[key]
        
        # choice 1 don't take the current sticker
        result = self.dfs(stickers, target, idx+1, memo)

        # choice 2 try to take the current sticker
        currentSticker = stickers[idx]
        newTarget = target
        somethingRemoved = False
        for c in currentSticker:
            idxToRemove = newTarget.find(c)
            if idxToRemove != -1:
                newTarget = newTarget[:idxToRemove] + newTarget[idxToRemove+1:]
                somethingRemoved = True
        
        # only try this sticker again if we were able to remove something from
        # the target string
        if somethingRemoved:
            result = min(result, 1 + self.dfs(stickers, newTarget, idx, memo))

        # cache the result
        memo[key] = result
        return result


```