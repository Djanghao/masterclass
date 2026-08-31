# JS/Ts and Pythong

**Author:** jitulteron9
**Votes:** 1
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4278746/](https://leetcode.com/problems/bus-routes/solutions/4278746/)

---

# JS/TS
```
function numBusesToDestination(routes: number[][], s: number, t: number): number {
    const buses = routes.length
    const mp = {}
    for(let i =0;i<buses;i++){
        for(let j =0;j<routes[i].length;j++){
            let stop = routes[i][j]
            let list = mp[stop]?mp[stop]:[]
            list.push(i)
            mp[stop] = list
        }
    }

    let bus_vis = new Set();
    let bus_stop_vis = new Set()
    let queue = []
    queue.push(s)
    bus_stop_vis.add(s)
    let lev = 0;

    while(queue.length){
        let sz = queue.length
        while(sz){
            let stop = queue.shift()

            if(stop==t) return lev

            let list = mp[stop]

            for(let bus of list){
                if(bus_vis.has(bus)) continue
                
                for(let bus_stop of routes[bus]){
                    if(bus_stop_vis.has(bus_stop)) continue
                    queue.push(bus_stop)
                    bus_stop_vis.add(bus_stop)

                }
                bus_vis.add(bus)
            }
            sz--
        }
        lev++;
    }


    return -1
};
```

# Python 
```
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], s: int, t: int) -> int:
        mp = {}
        n = len(routes)

        for i in range(n):
            for j in range(len(routes[i])):
                bus_stop_no = routes[i][j]
                ls = mp.get(bus_stop_no,[])
                ls.append(i)
                mp[bus_stop_no] = ls
        
        bus_stop_vis = set([])
        bus_vis = set([])
        lev = 0

        queue = []
        queue.append(s)
        bus_stop_vis.add(s)

        while len(queue):
            sz = len(queue)

            while sz:
                rem = queue.pop(0)

                if rem == t:
                    return lev

                bus_ls = mp[rem]

                for bus in bus_ls:
                    if bus in bus_vis:
                        continue 

                    for bus_stop in routes[bus]:
                        if bus_stop in bus_stop_vis:
                            continue

                        queue.append(bus_stop)
                        bus_stop_vis.add(bus_stop)
                    
                    bus_vis.add(bus)

                sz-=1
            
            lev+=1

            
        return -1
        


```
```