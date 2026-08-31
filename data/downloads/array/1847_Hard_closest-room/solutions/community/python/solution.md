# [Python] Sort the queries and the rooms by size in decreasing order. 2000ms

**Author:** valerioio
**Votes:** 3
**Link:** [https://leetcode.com/problems/closest-room/solutions/1186454/](https://leetcode.com/problems/closest-room/solutions/1186454/)

---

Sort the queries and the rooms by size from the largest to the smallest size, then initialize an empty array that will keep the rooms big enough for the current querie, and is sorted by index ("rms" in my code).
To answer to the i-th querie update the array "rms" keeping it in order, then binary search for the preferred room and choose between the room found by the binary search and the one before.
```
class Solution:
    def closestRoom(self, rooms: List[List[int]], queries: List[List[int]]) -> List[int]:
        ans = [None] * len(queries)
        queries = sorted([(s, p, i) for i, (p, s) in enumerate(queries)], reverse = True)
        rooms.sort(reverse = True, key = itemgetter(1, 0))
        rms = [-1]    #the -1 helps handle the case when there are no rooms with the right size
        j = 0
        for s, p, i in queries:
            while j < len(rooms) and rooms[j][1] >= s:
                insort(rms, rooms[j][0])
                j += 1
            x = bisect_left(rms,p)
            ans[i] = rms[x - 1] if (x == len(rms) or x != 1 and abs( rms[x - 1] - p) <= abs(rms[x] - p)) else rms[x]
        return ans
```
Runtime: 2000 ms
Memory Usage: 49.3 MB
This solution is based on the one by DBabichev. Check out his post too for further explaination.