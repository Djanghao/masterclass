# ✔️ [Python3] GREEDY VALIDATION ヾ(＾-＾)ノ, Explained

**Author:** artod
**Votes:** 101
**Link:** [https://leetcode.com/problems/partition-labels/solutions/1868757/](https://leetcode.com/problems/partition-labels/solutions/1868757/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

Since each letter can appear only in one part, we cannot form a part shorter than the index of the last appearance of a letter subtracted by an index of the first appearance. For example here (**a**bsf**a**b) the lengths of the first part are limited by the positions of the letter `a`. So it's important to know at what index each letter appears in the string last time. We can create a hash map and fill it with the last indexes for letters.

Also, we have to validate a candidate part. For the same example (**a***b*sfa**b**) we see that letter `a` cannot form a border for the first part because of a nasty letter `b` inside. So we need to expand the range of the initial part.

Time: **O(n)** - 2 sweeps
Space: **O(1)** - hashmap consist of max 26 keys

Runtime: 36 ms, faster than **96.88%** of Python3 online submissions for Partition Labels.
Memory Usage: 13.8 MB, less than **98.78%** of Python3 online submissions for Partition Labels.

```
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        L = len(s)
        last = {s[i]: i for i in range(L)} # last appearance of the letter
        i, ans = 0, []
        while i < L:
            end, j = last[s[i]], i + 1
            while j < end: # validation of the part [i, end]
                if last[s[j]] > end:
                    end = last[s[j]] # extend the part
                j += 1
           
            ans.append(end - i + 1)
            i = end + 1
            
        return ans
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**