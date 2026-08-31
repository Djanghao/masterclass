# [Python 3] SortedList (needs optimization) with comments

**Author:** chestnut890123
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1867682/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1867682/)

---

```
from sortedcontainers import SortedList

class Solution:
    def longestRepeating(self, s: str, queryCharacters: str, queryIndices: List[int]) -> List[int]:
        
        s = list(s)
        loc = defaultdict(lambda: SortedList()) # segment offsets (start, end) stored by character
        max_len = SortedList() # segment length stored by character

        i = 0
        while i < len(s):
            j = i
            while j < len(s) and s[i] == s[j]:
                j += 1
            loc[s[i]].add((i, j-1))
            max_len.add(j - i)
            i = j
            
        # helper function to remove segment
        def del_seg(w, old_l, old_r):
            loc[w].remove((old_l, old_r))
            max_len.remove(old_r - old_l + 1)
        
        # helper function to add segment
        def add_seg(w, new_l, new_r):
            loc[w].add((new_l, new_r))
            max_len.add(new_r - new_l + 1)

        ans = [0] * len(queryIndices)
        for k in range(len(queryIndices)):
            old, new = s[queryIndices[k]], queryCharacters[k]
            s[queryIndices[k]] = new
            pos = (queryIndices[k], queryIndices[k])

            # old segment delete
            if pos in loc[old]:
                del_seg(old, *pos)
            else:
                l1 = bisect.bisect_left(loc[old], pos)
                if l1 == 0:
                    old_pos = loc[old][l1]
                    l, r = old_pos
                    del_seg(old, *old_pos)
                    add_seg(old, l + 1, r)
                elif l1 == len(loc[old]):
                    old_pos = loc[old][l1-1]
                    l, r = old_pos
                    del_seg(old, *old_pos)
                    if pos[0] == r:
                        add_seg(old, l, r-1)
                    else:
                        add_seg(old, l, pos[0]-1)
                        add_seg(old, pos[0] + 1, r)
                else:
                    a, b = loc[old][l1 - 1]
                    c, d = loc[old][l1]
                    if pos[0] == b:
                        del_seg(old, a, b)
                        add_seg(old, a, b-1)
                    elif pos[0] == c:
                        del_seg(old, c, d)
                        add_seg(old, c+1, d)
                    elif pos[0] < b:
                        del_seg(old, a, b)
                        add_seg(old, a, pos[0]-1)
                        add_seg(old, pos[0]+1, b)
                    elif pos[0] > c:
                        del_seg(old, c, d)
                        add_seg(old, c, pos[0]-1)
                        add_seg(old, pos[0]+1, d)

            # new segment insert
            if not loc[new]:
                add_seg(new, *pos)
                ans[k] = max_len[-1]
                continue
            l2 = bisect.bisect_left(loc[new], pos)
            if l2 == 0:
                l, r = loc[new][l2]
                if l - pos[0] > 1:
                    add_seg(new, *pos)
                else:
                    del_seg(new, l, r)
                    add_seg(new, pos[0], r)

            elif l2 == len(loc[new]):
                l, r = loc[new][l2 - 1]
                if pos[0] - r > 1:
                    add_seg(new, *pos)
                else:
                    del_seg(new, l, r)
                    add_seg(new, l, pos[0])
            else:
                a, b = loc[new][l2 - 1]
                c, d = loc[new][l2]
                if pos[0] - b == 1 and c - pos[0] == 1:
                    del_seg(new, a, b)
                    del_seg(new, c, d)
                    add_seg(new, a, d)
                elif pos[0] - b == 1:
                    del_seg(new, a, b)
                    add_seg(new, a, pos[0])
                elif c - pos[0] == 1:
                    del_seg(new, c, d)
                    add_seg(new, pos[0], d)
                else:
                    add_seg(new, *pos)
            ans[k] = max_len[-1]
        return ans
