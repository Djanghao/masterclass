# Split to 1s, 2s, and 3s location arrays + do binary search in them - pl see code - time O(N log(M)

**Author:** gsudhir
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/4984473/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/4984473/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N log(M)) where N=queries.length and M=colors.length

- Space complexity:
O(N) + O(M)

# Code
```
function shortestDistanceColor(colors: number[], queries: number[][]): number[] {

    const result:number[] = new Array<number>(queries.length).fill(-1)

    const onesLocs:number[] = []
    const twosLocs:number[] = []
    const threesLocs:number[] = []
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 1) {
            onesLocs.push(i)
        }
        else if (colors[i] === 2) {
            twosLocs.push(i)
        }
        else threesLocs.push(i)
    }

    // Find the index of the Greatest Lower Bound
    //      k         - the bound
    //      GLB       - the greatest value in inputLocs that is <= k, or 0 (a LUB here!)
    //      GLBIndex  - the index of found GLB in inputLocs, -1 otherwise
    //
    //      TimeComplexity  -  O(log(N)), N===inputLocs.length
    //      SpaceComplexity -  O(1)
    const findGLBIndex = (k:number, inputLocs:number[]):number =>{
        if (inputLocs.length === 0) return -1
        if (inputLocs.length === 1) {
            return 0
        }
        let s = 0, e = inputLocs.length-1
        if (inputLocs[s] >= k) {
            return s
        }
        if (inputLocs[e] <= k) {
            return e
        }
        let glbFound = false
        while (!glbFound) {
            if (s===e) {
                glbFound = true
            }
            else {
                const m = Math.floor((s+e)/2)
                if (inputLocs[m] <= k) {
                    if (m === s) {
                        // no change needed for s, already GLBIndex
                        glbFound = true
                    }
                    else {
                        s = m
                    }
                }
                else {
                    e = m
                }
            }
        }
        return s
    }

    const findClosestDistance = (k:number, inputLocs:number[]):number => {
        const glbIndex = findGLBIndex(k, inputLocs)
        if (glbIndex === -1) return -1
        if (glbIndex === inputLocs.length-1) {
            const dist = inputLocs[glbIndex] - k
            return dist < 0 ? -dist : dist
        }
        let dist1 = k - inputLocs[glbIndex]
        if (dist1 < 0) dist1 = -dist1
        let dist2 = inputLocs[glbIndex+1] - k
        if (dist2 < 0) dist2 = -dist2
        if (dist1 < dist2) return dist1
        else return dist2
    }

    for (let i = 0; i < queries.length; i++) {
        const c = colors[queries[i][0]]
        if (c === queries[i][1]) {
            result[i] = 0
        }
        else {
            const k = queries[i][0]
            if (queries[i][1] === 1) {
                result[i] = findClosestDistance(k, onesLocs)
            }
            else if (queries[i][1] === 2) {
                result[i] = findClosestDistance(k, twosLocs)
            }
            else {
                result[i] = findClosestDistance(k, threesLocs)
            }
        }
    }

    return result    
};
```