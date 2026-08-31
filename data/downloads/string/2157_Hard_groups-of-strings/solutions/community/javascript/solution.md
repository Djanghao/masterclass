# Easy Javascript Solution With Comments

**Author:** Alihaider0315
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/3912178/](https://leetcode.com/problems/groups-of-strings/solutions/3912178/)

---

Intuition
The intuition behind this solution is to use a Disjoint Set (DSU) data structure to group strings that are cyclic shifts of each other. By converting each string into a bitwise representation and using the DSU to track connected components, we can determine the number of distinct groups.

Approach
Create a DJSet (Disjoint Set) data structure that tracks groups. This structure maintains a parent array where negative values represent group sizes, and non-negative values indicate parent-child relationships.
Iterate through the input words array. For each word, calculate its bitwise representation and store it in the pre array.
Create a Map to track the bitwise representation and its corresponding index in the words array. Use this map to merge connected components in the DSU.
Iterate through the words array again:
For each word, iterate through all possible toggles (flipping a single bit) and check if the DSU already contains a word with that toggle. If so, merge the groups.
Next, iterate through all pairs of toggles and check if a bit is set in the first toggle and not set in the second toggle. If both conditions are met, check if the DSU contains a word with that combined toggle. If so, merge the groups.
After all iterations, the DSU will have groups of cyclically shifted words. The count of connected components represents the number of distinct groups.
Return an array with the count of groups and the smallest value in the parent array, which represents the size of the largest group.
Complexity
Time Complexity: O(n * m), where n is the number of words and m is the average length of a word. The most time-consuming step is the iteration over all words and their characters.
Space Complexity: O(n), where n is the number of words. The DSU and additional data structures consume space proportional to the number of words.

# Code
```
// Define a DJSet (Disjoint Set) data structure
function DJSet(n) {
    // parent[i] < 0: Group size where root is i (example: -parent[i] is the size)
    // parent[i] >= 0: i is not the root, and parent[i] is i's parent
    let parent = Array(n).fill(-1);

    // Methods of DJSet
    return {
        find,
        union,
        count,
        equiv,
        getParent
    };

    function find(x) {
        // Path compression: Update parent of x to its root while finding it
        return parent[x] < 0 ? x : (parent[x] = find(parent[x]));
    }

    function union(x, y) {
        x = find(x);
        y = find(y);
        
        if (x !== y) {
            // Union by rank: Attach the smaller group to the larger group
            if (parent[x] < parent[y]) {
                [x, y] = [y, x]; // Swap x and y
            }
            
            parent[x] += parent[y];
            parent[y] = x;
        }
        
        return x === y; // Returns whether x and y were in the same group
    }

    function count() {
        // Count the total number of connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }

    function equiv(x, y) {
        // Check if x and y are in the same group
        return find(x) === find(y);
    }

    function getParent() {
        // Get the parent array (useful for debugging)
        return parent;
    }
}

const groupStrings = (words) => {
    const n = words.length;
    const ds = new DJSet(n);
    const pre = Array(n).fill(0); // Store bitwise representations of words
    const m = new Map(); // Map to store bitwise representation and its index

    // Build the disjoint set and map based on bitwise representations
    for (let i = 0; i < n; i++) {
        for (const c of words[i]) {
            pre[i] |= 1 << (c.charCodeAt() - 97); // Convert character to 0-25
        }

        if (m.has(pre[i])) {
            ds.union(i, m.get(pre[i])); // Merge the groups
        }
        m.set(pre[i], i);
    }

    // Iterate through each word and check for possible group merges
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            const toggle = pre[i] ^ (1 << j);

            if (m.has(toggle)) {
                ds.union(i, m.get(toggle)); // Merge the groups
            }
        }

        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                const bitOfOneIJ = pre[i] & (1 << j);
                const bitOfOneIK = pre[i] & (1 << k);

                if (bitOfOneIJ && !bitOfOneIK) {
                    const toggle = pre[i] ^ (1 << j) ^ (1 << k);

                    if (m.has(toggle)) {
                        ds.union(i, m.get(toggle)); // Merge the groups
                    }
                }
            }
        }
    }

    // Return the total number of groups and the smallest value in the parent array
    return [ds.count(), -(Math.min(...ds.getParent()))];
};

```