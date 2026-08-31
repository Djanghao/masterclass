# [Python 3] Aggregate sorted list, detailed explanation (2080 ms)

**Author:** chestnut890123
**Votes:** 3
**Link:** [https://leetcode.com/problems/closest-room/solutions/1186155/](https://leetcode.com/problems/closest-room/solutions/1186155/)

---

```
class Solution:
    def closestRoom(self, rooms: List[List[int]], queries: List[List[int]]) -> List[int]:
        ans = [0] * len(queries)
        
        # sort queries to handle largest size queries first
        q = deque(sorted([(size, room, i) for i, (room, size) in enumerate(queries)], key=lambda a: (-a[0], a[1], a[2])))

        # sort rooms by descending size
        rooms = deque(sorted(rooms, key=lambda x: -x[1]))

        # current available room ids
        cands = []
        
        
        while q:
            size, room, i = q.popleft()
            # add room ids to candidates as long as top of room size meet the requirements
            while rooms and rooms[0][1] >= size:
                bisect.insort(cands, rooms.popleft()[0])
                    
            # if no room size available, return -1
            if not cands: ans[i] = -1
                
            # else use bisect to find optimal room ids
            else:
                loc = bisect.bisect_left(cands, room)
                if loc == 0: ans[i] = cands[loc]
                elif loc == len(cands): ans[i] = cands[-1]
                else: ans[i] = cands[loc - 1] if room - cands[loc - 1] <= cands[loc] - room else cands[loc]
        
        return ans