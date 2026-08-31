# [Python] Simple dumb O(N) solution, no binary search needed

**Author:** vu-dinh-hung
**Votes:** 7
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2807491/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2807491/)

---

# Intuition
The idea is to figure out how many characters the parts count take up. Once we know that, generating all the parts is trivial.

# Approach
Simply check if 9, 99, 999, or 9999 parts are enough to split the whole message, since 9, 99, 999, or 9999 are the maximum possible parts count for 1, 2, 3, or 4 characters.

Let's say a message splits into 14 parts. For that string, the `splitable` function below will return `True` for 99, but `False` for 9 -> we need to reserve 2 characters for the parts count.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution:
    def splitMessage(self, message: str, limit: int) -> List[str]:
        def splitable_within(parts_limit):
            # check the message length achievable with <parts_limit> parts
            length = sum(limit - len(str(i)) - len(str(parts_limit)) - 3 for i in range(1, parts_limit + 1))
            return length >= len(message)
        
        parts_limit = 9
        if not splitable_within(parts_limit):
            parts_limit = 99
        if not splitable_within(parts_limit):
            parts_limit = 999
        if not splitable_within(parts_limit):
            parts_limit = 9999
        if not splitable_within(parts_limit):
            return []
        
        # generate the actual message parts
        parts = []
        m_index = 0  # message index
        for part_index in range(1, parts_limit + 1):
            if m_index >= len(message): break
            length = limit - len(str(part_index)) - len(str(parts_limit)) - 3
            parts.append(message[m_index:m_index + length])
            m_index += length
        
        return [f'{part}<{i + 1}/{len(parts)}>' for i, part in enumerate(parts)]

```