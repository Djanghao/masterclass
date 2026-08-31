# JS/TS and Python

**Author:** jitulteron9
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4809331/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4809331/)

---

# JS/TS
```
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    const withSecret = new Set([0, firstPerson])
    const scheduleMeetings = new Map()
    for(let [p1, p2, t] of meetings){
        if(!scheduleMeetings.has(t)){
            scheduleMeetings.set(t,new Map())
        }

        scheduleMeetings.get(t).set(p1, scheduleMeetings.get(t)?.get(p1)  || [])
        scheduleMeetings.get(t).set(p2, scheduleMeetings.get(t)?.get(p2)  || [])
        
        scheduleMeetings.get(t).get(p1).push(p2)
        scheduleMeetings.get(t).get(p2).push(p1)
    }

    const times = Array.from(scheduleMeetings.keys())
    times.sort((a,b)=>a-b)
    
    for(let t of times){
        const seen = new Set()
        for(let p of scheduleMeetings.get(t).keys()){
            if(withSecret.has(p) && !seen.has(p)){
                
                q = new Queue([p])
                seen.add(p)
                while(q.size()>0){
                    const cur = q.dequeue()
                    
                    for(let nxt of scheduleMeetings.get(t).get(cur)){
                        if(!seen.has(nxt)){
                            seen.add(nxt)
                            withSecret.add(nxt)
                            q.enqueue(nxt)
                        }
                    }
                }
            }
        }
    }

    return Array.from(withSecret)

};
```
# Python 
```
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        withSecret = {0, firstPerson}

        meetingSchedules = {}
        
        for p1, p2, t in meetings:
            if t not in meetingSchedules:
                meetingSchedules[t] = defaultdict(list)
            meetingSchedules[t][p1].append(p2)
            meetingSchedules[t][p2].append(p1)
        
        times = list(meetingSchedules.keys())
        times.sort()
        print(times)
        for t in times:
            seen = set()
            for p in meetingSchedules[t]:
                if p in withSecret and p not in seen:
                    q = deque([p])
                    seen.add(p)
                    while q:
                        cur = q.popleft()
                        for nxt in meetingSchedules[t][cur]:
                            if nxt not in seen:
                                q.append(nxt)
                                seen.add(nxt)
                                withSecret.add(nxt)
                        
        
        return list(withSecret)

        
        


```