# JS suspiciously simple solution + some explanation

**Author:** crankyinmv
**Votes:** 7
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754093/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754093/)

---

### Intuition
I thought this was going to require a priority queue, but since the priority doesn't change and no new items are added with time it doesn't.

The idea is to allocate your planting work in such a way as to minimize the *planted* time + the growing time for each flower.
### Approach
It turns out that the grow time alone is the priority.  No need to take remaining planting time into account or switch between flowers.  Get the flower with the longest grow time planted first.

- Smush the plant and grow times together to maintain pairing.
- Sort the times by grow time descending.
- Run through the times in order:
    - Add the current planting time to the plant time.
    - Recalculate the bloom time as the max of the current bloom time and the planted time + the current grow time.
- Return the bloom time.

### Complexity
- Time complexity: O(nlog(n))
- Space complexity: O(n)

### Code
```
/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) 
{
    let times = [];
    for(let i=0; i<plantTime.length; i++)
            times.push([plantTime[i], growTime[i]]);

    times.sort((a,b)=>b[1]-a[1]);

    let t = 0, bt = 0;
    for(let i=0; i<times.length; i++)
    {
        t += times[i][0];
        bt = Math.max(bt, t+times[i][1]);
    }
    return bt;
};
```