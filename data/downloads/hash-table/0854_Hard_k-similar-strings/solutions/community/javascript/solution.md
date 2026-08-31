# JS graph solution searching for 2, 3 and 4-cycles, exiting early when possible. 100%-100%

**Author:** trincot
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/365101/](https://leetcode.com/problems/k-similar-strings/solutions/365101/)

---

Main ideas:
* Problem can be represented as a directed graph where each node is a pair of letters (one from A, one from B; at same index), and edges exist where the second letter of one node matches the first of a second node.
* Self referencing nodes can be excluded ("aa", "bb", ...). They do not represent swaps
* Each cycle in the graph of length *n* represents *n-1* swaps, so the result to return is the number of nodes minus the number of cycles
* A graph can be split into one or more cycles; we should maximise the number of cycles
* A greedy search of cycles in order of their length is not guaranteed to give an optimal solution. For example, one may find cycles of size 3, 3, and 6 in that way, while a different choice of the first triplet could yield 3+3+3+3.
* All cycles of a certain length could be collected, and then -- using a DFS -- the maximised, disjoint set among them could be selected: this will resolve the "problem" mentioned in the previous point
* One could do this first for cycles of 2 (although there the problem does not occur), 3 and finally 4. 
* Other lengths (5 or 6) need not to be searched, as it turns out that after pruning the graph of the above mentioned cycles, the remaining graph's size determines uniquely how many cycles are left, given that the initial graph has at most 20 nodes. These remaining cycles do not need to be identified. Their count is all we need to know.
* After having pruned cycles of smaller sizes (1, 2 or 3), there are also situations where the graph's size uniquely defines the number of cycles that remain (even though their individual sizes could differ: but we don't care). In such case we can exit early.

```
var kSimilarity = function(a, b) {
    if (a === b) return 0;
    // Set up a graph data structure, excluding self-referencing nodes
    let nodes = [];
    let link = { a: new Set, b: new Set, c: new Set, d: new Set, e: new Set, f: new Set };
    for (let i = 0; i < a.length; i++) {
        // Skip self-referencing characters (no swap needed)
        if (a[i] === b[i]) continue;
        let node = { id: i, neighbors: link[b[i]] };
        link[a[i]].add(node);
        nodes.push(node);
    }
    let result = nodes.length;
    // For small graphs (size 2 or 3) the number of cycles is now already determined:
    if (result < 4) return result - 1;

    // Helper function. Find largest group of disjoint cycles among given cycles
    function getMaxDisjointCycles(cycles) {
        let best = [];
        for (let cycle of cycles) {   
            if (cycle.every(node => !node.visited)) {
                for (let node of cycle) node.visited = true;
                let res = getMaxDisjointCycles(cycles.slice(1));
                if (res.length >= best.length) {
                    res.push(cycle);
                    best = res;
                }
                for (let node of cycle) node.visited = false; // backtrack
            }
        }
        return best;
    }
    
    // Helper function. Find all cycles of given length; find maximised disjoint set among them, 
    // and delete those
    function deleteMostCycles(len) {
        function getPaths(len) {
            if (len === 1) return nodes.map(node => [node]);
            let paths = [];
            for (let path of getPaths(len-1)) {
                for (let neighbor of path[len-2].neighbors) {
                    // Only collect paths where the first node is the "left-most"
                    if (neighbor.id > path[0].id) paths.push(path.concat(neighbor));
                }
            }
            return paths;
        }
        // Find all cycles of this length:
        let cycles = getPaths(len).filter(path => path[len-1].neighbors.has(path[0]));
        // Keep only a disjoint set: maximising the number of disjoint cycles
        if (cycles.length) cycles = getMaxDisjointCycles(cycles); 
        result -= cycles.length; // Each cycle "saves" doing one swap
        // Delete these cycles from the graph
        for (let cycle of cycles) {
            for (let i = 0; i < cycle.length; i++) {
                cycle[i].neighbors.delete(cycle[(i+1)%3]);
                cycle[i].visited = true;
            }
        }
        nodes = nodes.filter(node => !node.visited);
    }
    
    deleteMostCycles(2);
    // Remaining size of graph can be 0, 3(3), 4(4), 5(5), 6(6 or 3+3), 
    // 7(3+4), 8(3+5 or 4+4), or 9(3+3+3 or 3+6 or 4+5), or more... 
    // So considering all possibilities for some specific lengths, the number of cycles 
    // may already be determined:
    let remaining = "011111-22"[nodes.length];
    if (!isNaN(remaining)) return result - remaining; 
    deleteMostCycles(3);
    // Remaining size of graph can be 0, 4(4), 5(5), 6(6), 8(4+4), 9(4+5), 
    // 10(4+6, 5+5), 11(5+6), 12(4+4+4 or 6+6), 13(4+4+5), 14(4+4+6 or 4+5+5)
    // 15(4+5+6 or 5+5+5), 16(4+4+4+4 or 4+6+6 or 5+5+6), 17(4+4+4+5 or 5+6+6), 
    // 18(4+4+4+6 or 4+4+5+5 or 6+6+6), 19(4+4+5+6 or 4+5+5+5), 
    // 20(4+4+4+4+4 or 4+4+6+6 or 4+5+5+6 or 5+5+5+5)
    // Quick exits:
    remaining = "011111122222-333---4"[nodes.length];
    if (!isNaN(remaining)) return result - remaining;
    // Undecided lengths: 12, 16, 17, 18, 20
    deleteMostCycles(4);
    // Remaining size of graph can be 0, 5(5), 6(6), 10(5+5), 11(5+6), 12(6+6), 
    // 15(5+5+5), 16(5+5+6), 17(5+6+6), 18(6+6+6), 20(5+5+5+5)
    return result + Math.floor(nodes.length/5);
};
