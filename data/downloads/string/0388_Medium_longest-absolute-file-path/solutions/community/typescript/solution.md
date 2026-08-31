# Typescript Solution with Explanation: It's a graph!

**Author:** michaeleliot
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5370272/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5370272/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The file directory is essentially a tree, and we are parsing the tree via depth first search. This means we will use a stack. 

# Approach
<!-- Describe your approach to solving the problem. -->
My original approach used push/pop for the stack. However, there were a few good solutions that used slice and array setting instead. Essentially, cut the input via \
, with each value in the array being our nodes. Then, just parse each value via dfs to see what layer it is (how many \	) and if its a file (if it contains a .). Continue until all nodes parsed.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function lengthLongestPath(input: string): number {
    // DFS
    // Split the string by \
. Each element is essentially an indication of the level (number of \	) and then the string name
    // If the string name contains a . assume it's a a file and declare it an end state. Set return to the max of the length of the entire string
    // Keep track of the array of string values for the current depth. When you see a depth less than the current length, pop off until you are at the right depth

    let flatGraph = input.split("\
")
    let max = 0
    let workingDirectory = []
    for (let path of flatGraph) {
        const level = path.split("\	").length - 1
        workingDirectory = workingDirectory.slice(0, level + 1)
        let name = path.slice(level)
        workingDirectory[level] = name
        if (name.includes(".")) {
            max = Math.max(max, workingDirectory.join("/").length)
        }
    }

    return max

};
```