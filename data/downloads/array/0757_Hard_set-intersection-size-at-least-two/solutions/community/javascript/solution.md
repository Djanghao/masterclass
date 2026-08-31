# Javascript Solution - O(nlogn)

**Author:** scweiss1
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/694428/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/694428/)

---


Original solution is credited to [@yuanzhi247012's Python solution](https://leetcode.com/problems/set-intersection-size-at-least-two/discuss/439986/Python-keep-track-of-the-right-most-2-points) from which I adapted it for JS:

```
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    const sortedIntervals = intervals.sort(sortEndsThenStarts)
    let currentTail = []
    let answer = 0
    sortedIntervals.forEach(interval => {
        const start = interval[0]
        const end = interval[1]
        const startPoint = currentTail[0]
        const lastPoint = currentTail[1]
        
        if (!currentTail.length || lastPoint < start){
            currentTail = [end -1, end]
            answer += 2
        } else if ( startPoint < start){
            currentTail = [currentTail[1], end]
            answer += 1
        }

    })
    return answer

};

function sortEndsThenStarts(intervalA, intervalB){
    return intervalA[1] < intervalB[1] ? -1 : 1
}
```

The intuition here, which I did _not_ find immediately obvious from the description of the problem _or_ the example test cases is that what's of concern is the final numbers that are included and then _minimizing_ the overlap, but not creating a full set between the edges and minimizing _that_.

For example,
- The test case of `[[1, 2], [2, 3], [2, 4], [4, 5]]` ends up creating a set `{1,2,3,4,5}` of which the size is `5`.
- Contrast that with the example case of `[[1,2],[6,7]]` This creates a set of `{1,2,6,7}` which has a size of `4`. Notably, we do _not_ care about the numbers _between_. 

This is why when we get a totally distinct new set (the `start` of the interval is greater than the `lastPoint` of the "tracked interval"), we increment by 2 (the smallest amount for which _any_ new set can be tracked), but if it's overlapping, we only increment one to account for the new extension.

Also, peculiarly, the sort function is particular:
While this work: 
```

function sortEndsThenStarts(intervalA, intervalB){
    return intervalA[1] < intervalB[1] ? -1 : 1
}
``` 
This fails on one of the tests:
```

function sortEndsThenStarts(intervalA, intervalB){
    if(interval[1] === interval[1]){
	  return intervalA[0] < intervalB[0] ? -1 : 1 
	}
	return intervalA[1] < intervalB[1] ? -1 : 1
}
```