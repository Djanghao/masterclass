# Easy to understand DFS + Caching

**Author:** samsonong
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/5283465/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/5283465/)

---

# Intuition

Breaking the problem down, it is essentially `for a given row, check if you can build the next row`. Repeating that until you either ran out of possibilities and/or reached the peak.

Building this as it is, however, will be very inefficient as you potentially will be looking up `pair` in `allowed` multiple times.

One quick hack to solve this is to store a copy of previously-found results somewhere for you to quickly retrieve.

# Code
```
function pyramidTransition(bottom: string, allowed: string[]): boolean {
    // Cache to hold all apex of allowed pairs.
    // Eg.  Allowed pairs: <"AB", ["C", "D"]>
    //      Illegal pairs: <"AB", []>
    const cache = new Map<string, string[]>();

    // Recursive dfs let's go!
    return dfs(bottom);

    function dfs(currentRow: string): boolean {
        // This means you've reached Mt. Everest. Happy case! :D
        if (currentRow.length === 1) return true;

        let possibleNextRows: string[] = [];
        for (let i = 1; i < currentRow.length; i++) {
            const pair = currentRow.slice(i - 1, i + 1);
            const matchingPairs: string[] = [];

            // Use cache if alrdy indexed, else, do matching and cache it
            const cachedMatchingPairs = cache.get(pair);
            if (cachedMatchingPairs) {
                matchingPairs.push(...cachedMatchingPairs);
            } else {
                matchingPairs.push(...allowed.filter((pattern) => pattern.startsWith(pair)).map((matchingPattern) => matchingPattern.slice(-1)));
                cache.set(pair, matchingPairs);
            }

            // No matching pair = cannot build upwards. Return false
            if (matchingPairs.length <= 0) return false;

            // 4. Then calculate & update possibleNextRows

            // If possibleNextRows is empty, initiate with matchingPairs
            if (possibleNextRows.length <= 0) {
                possibleNextRows = matchingPairs;
                continue;
            }
            // Else, calculate and store all permutations
            const updatedPossibleNextRows: string[] = [];
            for (const possibleNextRow of possibleNextRows) {
                for (const matchingPair of matchingPairs) {
                    updatedPossibleNextRows.push(possibleNextRow.concat(matchingPair));
                }
            }
            possibleNextRows = updatedPossibleNextRows;
        }

        // Call dfs() for all possibleNextRows. When any one of them returns true, return true
        for (const rows of possibleNextRows) {
            const result = dfs(rows);
            if (result === true) return true;
        }

        // Else, it's a sad case :(
        return false;
    }
};

```