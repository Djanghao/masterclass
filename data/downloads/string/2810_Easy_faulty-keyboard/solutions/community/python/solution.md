# O(n) solution without reversing each time

**Author:** almostmonday
**Votes:** 12
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3871597/](https://leetcode.com/problems/faulty-keyboard/solutions/3871597/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each time when you have to reverse the string, you change the place where you're adding a new letter.
# Approach
<!-- Describe your approach to solving the problem. -->
$$its \\space tail \\space | \\space the \\space first \\space substirng \\space | \\space its \\space front$$
* Each time when you have to reverse the string, you change the place where you're adding a new letter.
* The place changes between the tail and the front of the first substring.
* Each even substring is added to the front.
* Each odd substring has to be reversed and is added to the tail.
* If the amount of the reverses is odd, the rusult has to be reversed.

# Example:
$$abc|de|fg|hi|jk \\\\
abc \\space \\mapsto \\space cba|\\\\
cba|de \\space \\mapsto \\space ed|abc| \\\\
ed|abc|fg \\space \\mapsto \\space gf|cba|de| \\\\
gf|cba|de|hi \\space \\mapsto \\space ih|ed|abc|fg| \\\\
ih|ed|abc|fg|jk \\space \\mapsto \\space ihedabcfgjk$$
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$: output is excluded
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---
* You could find some other extraordinary solutions in my [profile](https://leetcode.com/almostmonday/) on the Solutions tab (I don't post obvious or not interesting solutions at all.)
* If this was helpful, please upvote so that others can see this solution too.
---

# Code
```
class Solution(object):
    def finalString(self, s):
        d = collections.deque()
        cnt = s.count('i') % 2
        for c in s:
            if c == 'i': cnt ^= 1
            else: d.appendleft(c) if cnt else d.append(c)
        
        return "".join(d)
```

Also, you could do it in this way:
```
class Solution:
    def finalString(self, s: str) -> str:
        cnt, d = 0, collections.deque()
        for c in s:
            if c == 'i': cnt ^= 1
            else: d.appendleft(c) if cnt else d.append(c)

        return "".join(reversed(d) if cnt else d)
```

You could use an array and two pointers instead of a deque. I've discovered this solution [here](https://leetcode.com/problems/faulty-keyboard/solutions/3880860/go-o-n-time-o-1-space-two-pointers-and-switch-no-reversing-beats-100/). Thanks to [@agilov](https://leetcode.com/agilov/).

```
class Solution(object):
    def finalString(self, s):
        d = s.count("i")
        if not d: return s
        res = [""] * (len(s) - d)
        st, end, d = 0, len(res) - 1, 1

        for i in range(len(s) - 1, -1, -1):
            if s[i] == 'i': d ^= 1
            elif d: res[end], end = s[i], end - 1
            else: res[st], st = s[i], st + 1

        return "".join(res)
```