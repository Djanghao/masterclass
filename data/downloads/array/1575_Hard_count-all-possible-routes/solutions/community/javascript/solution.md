# Easy-to-Read JavaScript Solution w/ Explanation!

**Author:** EvanZhouDev
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3680421/](https://leetcode.com/problems/count-all-possible-routes/solutions/3680421/)

---

# Easy-to-Read JavaScript Solution w/ Explanation!
This was kind of a medium-hard problem.

# Intuition
Looking at this problem, it is obvious some form of DFS is necessary to traverse the graph, and find all possible routes. However, we then look at the constraints and realize that we also need Dynamic Programming, or more specifically, memoization, to reduce time usage. Based on these things, we can write the following solution.

# Approach
First, let's think about how we store things in the DFS memo. It seems necessary to use a 2-dimensional memo, because we need to keep in mind two parameters: The current position, and how much fuel we have left.

In execution, we use a JS `Map`, which stores a key of `${position},${fuel}`, and a value of how many paths to finish there are from that specific state.

Now, all we have to do is run a DFS through the array, keeping track of the current position and fuel left. If we have cached a result, use that. If no cache was found, at each position, run DFS on every other position that we can reach with our remaining fuel, and save that to cache.

We call DFS on the start node, with the original amount of fuel.

# Code
```
var countRoutes = function (locations, start, finish, fuel) {
    // Map to keep track of visited nodes and paths to end with those conditions
    let visited = new Map();

    // Modulo to use
    let mod = 10 ** 9 + 7;

    // DFS function
    let dfs = (current, fuel) => {
        // Generate a key in the "2D" memo matrix
        let id = `${current},${fuel}`

        // If we haven't visited already...
        if (!visited.has(id)) {
            let paths = 0;
            // Count the paths; if we already finished, increment paths
            if (current === finish) paths++;
            // Go through all other positions...
            for (let i = 0; i < locations.length; i++) {
                if (i !== current) {
                    // Calculate remaining fuel
                    let remaining = fuel - Math.abs(locations[current] - locations[i]);
                    // If sufficient fuel, DFS further from current position
                    if (remaining >= 0) {
                        paths += dfs(i, remaining);
                    }
                }
            }
            visited.set(id, paths % mod)
        }

        // Finally, cache result
        return visited.get(id);
    }

    // Run DFS on starting node
    return dfs(start, fuel);
};
```

### Please upvote if this helped!
<br/>