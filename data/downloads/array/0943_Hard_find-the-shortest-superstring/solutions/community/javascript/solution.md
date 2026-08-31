# JS, Python | Detailed Traveling Salesperson Problem Solution w/ Explanation

**Author:** sgallivan
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/1231920/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/1231920/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

**Overview:**
   - _Build a map of **suffixes**._
   - _Use **suffixes** to help build the **edges** matrix of character overlaps in only **O(N * L) time**._
   - _Use a **TSP** approach to fill the **dp** matrix with the most overlaps per subset/endpoint combination._
   - _Use **bit manipulation** to define each subset with just an integer._
   - _Use **bit manipulation** to store the savings and its source node in a single int for each **dp** entry, rather than requiring a second matrix._
   - _Rebuild the circular **path** once the final **dp** result is found by backtracking previous nodes._
   - _Find the best place to cut the circular **path** into a linear **ans**._
   - _Combine the words in proper order into a single string, trimming off the overlaps, then **return** the string._

---

**Detailed Explanation:**
This is an example of the classic **Traveling Salesperson Problem** (**TSP**). In the TSP, a salesperson wants to find the best route to visit **N** cities once each while ending up back at the starting point. This is also the equivalent of finding the best possible **Hamiltonian cycle** of a graph with weighted edges. With a brute-force approach, this would mean checking **N!** permutations.

Like most factorial solutions, however, the brute force TSP solution wastes time recalculating subproblems, which makes it the ideal candidate for a **dynamic programming** (**DP**) approach. If we can identify the best possible route of a subset of **N** and store that in a DP array (**dp**), we can avoid having to redo that calculation again and use these values to build up to our eventual solution.

---

**Build Suffix Map:**
First, though, we'll need to detour a bit, because a TSP relies upon defined "weights" or "distances" between the nodes in our graph. Unlike most other graph problems, we won't want to make a map of the edges, because every node is connected to every other node. Instead, we should define **edges** as an **N * N** matrix.

To build up **edges**, we'll need to compare each word to every other word and find the maximum overlap. The value at **edges[i][j]** will then represent the amount of overlap we'll see by placing **words[i]** before **words[j]**. Since direction matters (**word1 -> word2** will not generally have the same result as **word2 -> word1**), this problem is actually an **asymmetrical TSP** (**aTSP**).

_(**Note**: Using higher-is-better overlap for **edges** rather than lower-is-better **word** length will allow us to fill both **edges** and **dp** with **0**s as a default, rather than **MAX_INT** values, which will be useful later.)_

Normally this process would have a **time complexity** of **N * (N-1) * (word.length-1)**, or **O(N^2 * L)**, but we can shorten this to **O(N * L)** by first making a **frequency map** of all the **suffixes**, then checking all prefixes against **suffixes** before updating matching combinations in **edges**.

_(**Note**: A possible optimization here would be to use this process to identify any words that share no suffixes or prefixes with any other word and extract them directly to our answer (**ans**). Since the next part will include time complexity of **2^N * N^2**, any reduction in **N** will be well worth the extra processing. This optimization is not reflected in the code below, however.)_

---

**DP Matrix Setup:**
Now, back to the DP array of subset solutions. Since these subsets will be chained to form the whole path, we'll require a separate **dp** entry not just for each subset, but each combination of endpoints for each subset. For example, storing the results for a subset with a length of **5** would require **20** entries, because there are **20** possible combinations (**5 * 4**) of endpoints.

We can simplify this quite a bit if we instead make one endpoint a constant for every entry in **dp**, and build up longer subsets from the results of shorter subsets. This will normally lock the end of our combined string of words, but because the TSP describes a circular route, it doesn't ultimately matter which node we choose as the designated endpoint. We'll choose node **M** (**M = N - 1**) for the sake of simplicity.

With one of the endpoints assumed, we can now define each entry in **dp** by only two pieces of information instead of three: **curr** will represent the other, more recent endpoint, and **currSet** will represent the entire current subset of nodes, including **curr**. In order to use **currSet** to identify a unique subset as only one piece of data, we can utilize **bit manipulation** to store the presence of up to **N** nodes in **N bits** of an integer. This is also convenient because the necessary values for **currSet** will just happen to range from **0** to **2^N** with no wasted indices in **dp**.

_(**Note**: By iterating upward from **0** to **2^N**, we will guarantee that any **dp** entries upon which we need to base the current one will have already been completed, as each possible previous **dp** entry will have the same bit value as the current, except for one bit changed from a **1** to a **0**, which will always result in a lower value.)_

In fact, since we've assumed our final endpoint for the circle, that also means we've assumed the same node as the very beginning of the circle as well, which means that none of the subsets in **dp** can contain node **M**, which means we only need to iterate **currSet** up to **2^M** instead of **2^N** (avoiding any subset that includes **M**), which more than halves both the **time** and **space complexity**.

---

**Solving for a DP Entry:**
As previously stated, each **dp** entry is defined as **dp[curr][currSet] = result**. The **result** will be the best possible overlap for a path starting at **curr**, going through all the nodes encoded in **currSet**, and then ending on node **M**. We find this best **result** by attempting each possible route from the different subsets of **currSet** that are one node shorter.

For example, let's consider **dp[1][{1,2,3,4}]**, which represents the best path taken on a graph of nodes **1-4**, ending on **1**. (The other end of the graph is node **M**, but we don't include it in the range because it's fixed.) This condition can be obtained by starting at **dp[2][{2,3,4}]** and then moving from **2** to **1** (**+edges[2][1]**), or starting at **dp[3][{2,3,4}]** and then moving from **3** to **1** (**+edges[3][1]**), or starting at **dp[4][{2,3,4}]** and then moving from **4** to **1** (**+edges[4][1]**). The largest combined overlap of those three routes will be the result stored in **dp[1][{1,2,3,4}]**.

So to evaluate that, we can define a helper function (**solve**). We'll just remove **curr** from **currSet** with bit manipulation to form the previous set (**prevSet**). Then we iterate through each node (**prev**) in **prevSet**, find out the **overlap** when using that path, and keep track of the best overlap (**bestOverlap**) seen so far and its corresponding **prev** node (**bestPrev**). The helper **solve** will then **return** these values to form the new **dp** entry.

One set of edge cases to deal with occurs when we're trying to **solve** for **dp[x][{x}]** (ie, **dp[1][{1}]** or **dp[2][{2}]**, etc.), when **curr** is the only node in **currSet**. In this situation, **prevSet** would evualate to a **null** set, but we have to remember that there's a hidden node **M** at the end of each path we're building in **dp**. So if we find that **prevSet** is empty, then **curr** represents the first node after **M**, and therefore the only possible path is moving to **curr** from node **M**, so we should **return** **edges[M][curr]** as **bestOverlap** and **M** as **bestPrev**.

---

**Storing the Path:**
Once **solve** returns its results, we _could_ store **bestOverlap** in **dp** and use another matrix to store **bestPrev**, but why double the space required? A max word length of **20** means the max overlap per word combination is **19**, and with up a max subset length in **dp** of **11**, **bestOverlap** will top out at **209**, which fits in only **8 bits** of data. The **bestPrev** value only goes up to **M** (max of **11**), which is only **4 bits** of data. So rather than using _two_ very large (**M * 2^M**) matrices, we can combine **bestOverlap** and **bestPrev** into one integer with bit manipulation before we insert it into **dp**.


**Rebuilding the Path and Building the Answer:**
Now that we've fully built up **dp**, we'll need to run **solve** one more time to find the best result for the final link back to node **M** as **curr**, completing the circle. We don't care about the **bestOverlap** this time, only the **bestPrev**, so that we can begin backtracking through **dp** entries and piece together the full cicrular **path**.

Since the problem is asking us for the shortest _linear_ **path**, not the shortest _circular_ **path**, we'll need to sever the **path** between two of the nodes. As the link that we sever will no longer be able to **overlap**, we'll want to choose the link with the least amount of **overlap**.

So as we backtrack through **dp** to build the **path**, we should also keep track of the lowest **overlap** found (**lowOverlap**) as well as the index of the second half of the link (**bestStart**) to use as the first node in our answer (**ans**). We should also remember to fill **path** from back to front, because we're backtracking through the route.

Now that we've built **path** with the indexes in proper order, we can use it to build **ans**. We'll want to iterate through **path** using a **modulo operator**, so that we can begin at **bestStart** and circle back around to **bestStart + M**. At each step, we can consult **edges** and slice off the appropriate amount of each **word** before adding it to **ans**.

And once we've finished building **ans**, we can join it together in a string and **return** it.

---

 - _**Time Complexity: O(2^M * M^2 + N * L)** where **N** is the length of the **words** array, **M** is **N - 1**, and **L** is the average length of the words in **words**_
   - _Building **Suffixes** Map: **O(N * L)**_
   - _Building **Edges** Matrix: **O(N * L)**_
   - _Building **DP** Matrix: **O(2^M * M^2)**_
   - _Building **Path** & **Ans**: **O(N * L)**_
 - _**Space Complexity: O(2^M * M + N * (N + L))**_
   - _**Suffixes** Map: **O(N * L)**_
   - _**Edges** Matrix: **O(N^2)**_
   - _**DP** Matrix: **O(2^M * M)**_
   - _**Path** & **Ans**: **O(N)**_

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 42.4MB** (beats 100% / 100%).
```javascript
var shortestSuperstring = function(words) {
    let N = words.length, suffixes = new Map(),
        edges = Array.from({length: N}, () => new Uint8Array(N))
    
    // Build the edge graph
    for (let i = 0, word = words; i < N; i++) {
        let word = words[i]
        for (let k = 1; k < word.length; k++) {
            let sub = word.slice(k)
            if (suffixes.has(sub)) suffixes.get(sub).push(i)
            else suffixes.set(sub, [i])
        }
    }
    for (let j = 0; j < N; j++) {
        let word = words[j]
        for (let k = 1; k < word.length; k++) {
            let sub = word.slice(0,k)
            if (suffixes.has(sub))
                for (let i of suffixes.get(sub))
                    edges[i][j] = Math.max(edges[i][j], k)
        }
    }
    
    // Initialize DP array
    let M = N - 1, 
        dp = Array.from({length: M}, () => new Uint16Array(1 << M))
    
    // Helper function to find the best value for dp[curr][currSet]
    // Store the previous node with bit manipulation for backtracking
    const solve = (curr, currSet) => {
        let prevSet = currSet - (1 << curr), bestOverlap = 0, bestPrev
        if (!prevSet) return (edges[M][curr] << 4) + M
        for (let prev = 0; prev < M; prev++)
            if (prevSet & 1 << prev) {
                let overlap = edges[prev][curr] + (dp[prev][prevSet] >> 4)
                if (overlap >= bestOverlap)
                    bestOverlap = overlap, bestPrev = prev
            }
        return (bestOverlap << 4) + bestPrev
    }
    
    // Build DP using solve
    for (let currSet = 1; currSet < 1 << M; currSet++)
        for (let curr = 0; curr < N; curr++)
            if (currSet & 1 << curr) 
                dp[curr][currSet] = solve(curr, currSet)
    
    // Join the ends at index M
    let curr = solve(M, (1 << N) - 1) & (1 << 4) - 1
    
    // Build the circle by backtracking path info from dp
    // and find the best place to cut the circle
    let path = [curr], currSet = (1 << M) - 1,
        bestStart = 0, lowOverlap = edges[curr][M], prev
    while (curr !== M) {
        prev = dp[curr][currSet] & (1 << 4) - 1, currSet -= 1 << curr
        let overlap = edges[prev][curr]
        if (overlap < lowOverlap)
            lowOverlap = overlap, bestStart = N - path.length
        curr = prev, path.unshift(curr)
    }
    
    // Build and return ans by cutting the circle at bestStart
    let ans = []
    for (let i = bestStart; i < bestStart + M; i++) {
        let curr = path[i%N], next = path[(i+1)%N], word = words[curr]
        ans.push(word.slice(0, word.length - edges[curr][next]))
    }
    ans.push(words[path[(bestStart+M)%N]])
    return ans.join("")
};
```

---

#### ***Python Code:***

The best result for the code below is **288ms / 14.4MB** (beats 91% / 92%).
```python
class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
        N, suffixes = len(words), defaultdict(list)
        edges = [[0] * N for _ in range(N)]
        
        # Build the suffixes map and edge graph
        for i in range(N):
            for k in range(1, len(words[i])):
                suffixes[words[i][k:]].append(i)
        for j in range(N):
            for k in range(1, len(words[j])):
                for i in suffixes[words[j][:k]]:
                    edges[i][j] = max(edges[i][j], k)
        
        # Initialize DP array
        M = N - 1
        dp = [[0] * (1 << M) for _ in range(M)]
                    
        # Helper function to find the best value for dp[curr][currSet]
        # Store the previous node with bit manipulation for backtracking
        def solve(curr: int, currSet: int) -> int:
            prevSet, bestOverlap, bestPrev = currSet - (1 << curr), 0, 0
            if not prevSet: return (edges[M][curr] << 4) + M
            for prev in range(M):
                if prevSet & 1 << prev:
                    overlap = edges[prev][curr] + ((dp[prev][prevSet]) >> 4)
                    if overlap >= bestOverlap:
                        bestOverlap, bestPrev = overlap, prev
            return (bestOverlap << 4) + bestPrev
    
        # Build DP using solve
        for currSet, curr in product(range(1, 1 << M), range(M)):
            if currSet & 1 << curr:
                dp[curr][currSet] = solve(curr, currSet)
    
        # Join the ends at index M
        curr = solve(M, (1 << N) - 1) & ((1 << 4) - 1)
    
        # Build the circle by backtracking path info from dp
        # and find the best place to cut the circle
        path, currSet = [curr], (1 << M) - 1
        bestStart, lowOverlap, prev = 0, edges[curr][M], 0
        while curr != M:
            prev = dp[curr][currSet] & ((1 << 4) - 1)
            currSet -= 1 << curr
            overlap = edges[prev][curr]
            if overlap < lowOverlap:
                lowOverlap, bestStart = overlap, N - len(path)
            curr = prev
            path[:0] = [curr]
    
        # Build and return ans by cutting the circle at bestStart
        ans = []
        for i in range(bestStart, bestStart+M):
            curr, nxt = path[i%N], path[(i+1)%N]
            word = words[curr]
            ans.append(word[:len(word)-edges[curr][nxt]])
        ans.append(words[path[(bestStart+M)%N]])
        return "".join(ans)
```