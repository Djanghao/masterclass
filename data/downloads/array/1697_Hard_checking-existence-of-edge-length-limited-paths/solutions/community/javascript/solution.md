# Javascript | Union-Find Solution w/ Explanation | 100% / 100%

**Author:** sgallivan
**Votes:** 7
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/983847/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/983847/)

---

_(**Update**: Small update to the code, streamlining the union/find process, using typed arrays for smaller overhead, and reusing_ **`queries`** _as the answer array.)_

For this solution, we're going to implement a Union-Find approach. The Union-Find approach involves keeping track of groups of linked objects and uses three main components: a parent array (**par**) in which to keep track of the parent of each of our elements, a **find** function used to find the parent of an element, and a **union** function used to merge two groups together under one parent.

So first, we build our intial **par** array, making each element its own parent by mapping each element's index to its value, such that **par[i] = i**.

For the **find** function, we want to return the ultimate parent, not simply the immediate parent, so we make it a recursive function that calls itself until it finds a parent which is its own parent. We can use this function to compress future processing time by rewriting the parent of each element along the chain to subsequently point to this ultimate parent.

For the **union** function, we simply **find** the parents of the two elements and make one a child to the other. (*You can use a weighting system in order to try to keep the subgroups balanced, but in this case it's not really necessary; the compression in the **find** function accomplishes much the same time-saving, making a weighting system more of a hindrance than a help.*)

We then need to sort the edge list (**e**) so that we can process the union of only those edges below the relative limit threshold of each of the queries (**q**).

We also should sort **q** so that we only have to process the edges once each instead of having to reset **par** between each query. But because our answer array (**ans**) needs to be in the same order as the original **q**, we should instead create an order key array (**ord**) of mapped out indexes and then sort it based on the limit values in **q**. This way we can keep our **q** in its original order but access its elements in sorted order.

So now we just iterate through our ordered queries and just before checking each query we process any edge unions up to the query's limit. We can use optional chaining when checking the next query's limit in order to account for reaching the end of **e**.

Then we simply **find** the parent of each query's two nodes, and if they match, update the appropriate index in **ans** before finally rerturning **ans**.


```
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    const par = Uint32Array.from({length: n}, (_,i) => i),
          find = x => x === par[x] ? x : par[x] = find(par[x]),
          union = (x,y) => par[find(y)] = find(x)
    let ord = Uint32Array.from({length: queries.length}, (_,i) => i), j = 0
    edgeList.sort((a,b) => a[2] - b[2])
    ord.sort((a,b) => queries[a][2] - queries[b][2])
    for (let i of ord) {
        let [a,b,wt] = queries[i]
        while (edgeList[j]?.[2] < wt)
            union(edgeList[j][0], edgeList[j++][1])
        queries[i] = find(a) === find(b)
    }
    return queries
};
```