# Simple Js solution

**Author:** BaraaSoft
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/5971126/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/5971126/)

---



# Complexity
- Time complexity:
The time complexity of this solution is  O ( n \xD7 m ), where  n  is the number of rooms and  m represents the number of corridors.

- Space complexity:
The space complexity of this solution is  O (n^2)

# Code
```javascript []
/**
 * @param {number} n
 * @param {number[][]} corridors
 * @return {number}
 */
var numberOfPaths = function(n, corridors) {
    const graph={}
    let cycle=0;
    for([s,d] of corridors){
        // constructing an aadjacency list
        graph[s] ||=new Set();
        graph[d] ||= new Set();
        graph[s].add(d)
        graph[d].add(s)
        // if we find an interection, means that we've found a cycle
        cycle += (new Set([ ...graph[s] ].filter(x=> graph[d].has(x))) ).size
    }

   return cycle;
    
};
```