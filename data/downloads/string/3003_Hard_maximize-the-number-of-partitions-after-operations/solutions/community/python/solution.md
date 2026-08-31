# O(n*26) Iterative DP Solution

**Author:** sarthakBhandari
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4548498/](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4548498/)

---

**Time: O(n * A)
Space: O(n * A)**
Where A is the alphabet size (26 alphabets)
```
def maxPartitionsAfterOperations(self, s: str, k: int) -> int:
    if k == 26:
        return 1
    
    chars = set(string.ascii_lowercase)
    n = len(s)

    partitions = []
    curr_set = set()
    curr_count = 1
    for ch in reversed(s):
        if len(curr_set) == k and ch not in curr_set:
            curr_set = set()
            curr_count += 1
        curr_set.add(ch)
        partitions.append(curr_count)
    partitions = partitions[::-1]

    appearance = []
    prev = []
    for i in range(n-1, -1, -1):
        curr = [[s[i], i]]
        for ch,j in prev:
            if ch != s[i]:
                curr.append([ch, j])
        appearance.append(curr)
        prev = curr
    appearance = appearance[::-1]
    
    ans = 1
    curr_set = set()
    curr_count = 1
    for i in range(n):
        x = len(curr_set)
        if i == n-1:
            ans = max(curr_count + (len(curr_set)==k), ans)
        else:
            options = chars - curr_set
            seen = 0
            if x == k:
                ans = max(curr_count + 1, ans)
                for ch,j in appearance[i+1]:
                    options -= {ch}
                    seen += 1
                    if options and seen == k:
                        ans = max(curr_count + 1 + partitions[j], ans)
                        break
            else:
                for ch,j in appearance[i+1]:
                    seen += (ch in options)
                    if seen + x == k:
                        ans = max(curr_count + partitions[j], ans)
                        break
            if len(curr_set) == k and s[i] not in curr_set:
                curr_set = set()
                curr_count += 1
                ans = max(curr_count, ans)
            curr_set.add(s[i])
    
    return ans
```