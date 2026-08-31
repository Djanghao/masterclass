# Javascript with comments

**Author:** AurBatao
**Votes:** 16
**Link:** [https://leetcode.com/problems/car-fleet/solutions/1627641/](https://leetcode.com/problems/car-fleet/solutions/1627641/)

---

```
/**
 *  O(NlogN) Quick sort the cars by position. (Other sort can be applied)
    O(N) One pass for all cars from the end to start (another direction also works).

    O(N) Space for sorted cars.
    O(1) space is possible if we sort pos inplace.
 */
var carFleet = function(target, position, speed) {
    let len = position.length;
    let map = new Map(), res = 0, lastTime = -1; // last time is the time last car reached target
    
    // store car position and its speed
    for(let i = 0; i < len; i++){
        map.set(position[i], speed[i]);
    }
    
    // sort cars with their position, with first car being the closest car to target
    const sortedPos = [...map.keys()].sort((a, b) => b - a);
    
    for(let i = 0; i < len; i++){
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]);
        
        // case 1: if our curr car is fast and takes even less time to reach target then our last car, they will be merged
        // case 2: our current car takes more time to reach target, it cant merge with the last car it has to be a new fleet
        if(time > lastTime){ 
            res++;
            lastTime = time;
        }
    }
    
    return res;
};