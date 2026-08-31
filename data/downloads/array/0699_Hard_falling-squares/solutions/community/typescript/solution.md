# Simple TS

**Author:** pailhead
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/5005874/](https://leetcode.com/problems/falling-squares/solutions/5005874/)

---

# Intuition
Each square landing should create an edge at some height, between two points that can catch the next square.

# Approach
Keep a list of edges that represent left, right and height. 
For each of the squares, find all the edges that overlap the bounds of the square. 
Find which edge from those results is the highest call this intersection.
Put another edge square height above the found intersection.

# Complexity
- Time complexity:
$$O(n^2)$$ I think, since the edges grow towards N with each iteration

- Space complexity:
$$O(n)$$ Since we keep track of N edges. 

# Code
```
function fallingSquares(positions: number[][]): number[] {
    let maxHeight = 0
    const answer:number[] = []
    const edges:[number,number,number][] =[]
    while(positions.length){
        const [sLeft,sHeight] = positions.shift()
        const sRight = sLeft+sHeight
        let intersectionHeights:number[] = [0]
        let maxFoundHeight = 0
        for ( let i = edges.length -1; i >= 0 ; i--){
            const testEdge = edges[i]
            const [tl,tr,th] = testEdge
            if(!intersectEdges(tl,tr,sLeft,sRight)) continue
            intersectionHeights.push(th)
            maxFoundHeight = Math.max(maxFoundHeight,th)
        }
        const nextHeight = maxFoundHeight+sHeight
        maxHeight = Math.max(maxHeight,nextHeight)
        edges.push([sLeft,sRight,nextHeight])
        answer.push(maxHeight)
    }
    return answer
};

const intersectEdges = (a:number,b:number,c:number,d:number)=>
    Math.min(b,d)-Math.max(a,c) > 0
```