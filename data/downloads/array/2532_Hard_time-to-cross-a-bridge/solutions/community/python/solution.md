# Event queue simulation (3 queues)

**Author:** antarestrue
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016945/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016945/)

---

We need a queue for left side workers `ql`, a queue for right side workers `qr`, and a queue for events `qt`.  We also need a flag `b` to represent the bridge is occpied or not.

For the event queue, we record what will happen at a certain future time, rather than what happens now.  So, for each event in the queue, we can check the time `t` and the state `st`, and enqueue the future events.

Be careful about the same-time events.  We cannot make the appropriate move before we collect all events at a certain timing point.
```
class Solution:
    def findCrossingTime(self, n: int, k: int, time: List[List[int]]) -> int:
        ql = []
        qr = []
        qt = []
        # state:
        # 0: arrive r
        # 1: arrive l
        # 2: join qr
        # 3: join ql
		# after each timing point: check if we should send a worker onto the bridge
        
        for x in range(k):
            heappush(ql, (-(time[x][0] + time[x][2]), -x))
            
        ct = 0
        ans = 0
		# send the first worker
        b = 1
        i = -heappop(ql)[1]
        heappush(qt, (time[i][0], 0, i))  # when, what, who

        while qt:
            ct = qt[0][0]
            
            def chkgo():  # send a worker onto the bridge
                nonlocal b
                if qr:
                    j = -heappop(qr)[1]
                    heappush(qt, (ct + time[j][2], 1, j))
                elif ql:
                    if n:
                        j = -heappop(ql)[1]
                        heappush(qt, (ct + time[j][0], 0, j))
                    else:
                        b = 0
                else:
                    b = 0
                    
            while qt and qt[0][0] == ct:
                t, st, i = heappop(qt)
                assert(t == ct)
                if st == 0:
                    n -= 1
                    heappush(qt, (t + time[i][1], 2, i))
                    b = 0
                    # do not chkgo() here
                elif st == 1:
                    heappush(qt, (t + time[i][3], 3, i))
                    b = 0
                    # do not chkgo() here
                    ans = ct
                elif st == 2:
                    heappush(qr, (-(time[i][0] + time[i][2]), -i))
                elif st == 3:
                    heappush(ql, (-(time[i][0] + time[i][2]), -i))
            if not b:
                b = 1
                chkgo()
                
        return ans
```