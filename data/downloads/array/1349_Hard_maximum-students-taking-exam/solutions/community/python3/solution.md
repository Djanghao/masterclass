# [Python3] Bitmask dp

**Author:** bottlecapper
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/504547/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/504547/)

---

```
# bitmask dp
# dp[i][mask]: maximum students in seats[:i+1] with valid mask in seats[i]
# dp[i][mask] = max(dp[i-1][mask'] + valid bit(mask))
# no adjacent students: x&(x>>1) == 0
# student on good seat: x&y == x                            (y = bit(seats[i]))
# can't see front guys: x&(y>>1) == 0 and (x>>1)&y == 0     (y = pre_mask)

class Solution:
    def maxStudents(self, seats: List[List[str]]) -> int:
        m, n = len(seats), len(seats[0])
        dp = [collections.defaultdict(int) for _ in range(m+1)]
        dp[-1][0] = 0
        
        bits = []
        for row in seats:
            num = 0
            for i in range(n):
                num += (row[i]=='.')<<n-1-i
            bits.append(num)
        # print(bits)
        
        for i in range(m):
            for x in range(2**n):
                for y in dp[i-1]:
                    if x&(x>>1) == 0 and x&bits[i] == x and x&(y>>1) == 0 and (x>>1)&y == 0:
                        dp[i][x] = max(dp[i][x], dp[i-1][y] + bin(x).count('1'))
        
        return max(dp[m-1][x] for x in dp[m-1])
```