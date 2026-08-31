# JavaScript Code || with comments

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3040070/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3040070/)

---

# Code
```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const countSubTrees = (n, edges, labels) => {

    const adjList = createAdjacencyList(n, edges);
    // Create an array to store the count of each label
    const ans = Array(n).fill(0);

    dfs(0, -1, adjList, labels, ans);

    return ans;
};

const dfs = (curNode, prevNode, adjList, labels, ans) => {
    // Create an array to keep track of the count of each label
    const count = Array(26).fill(0);

    // Visit each child of the current node
    for(const child of adjList[curNode]){
        if(child !== prevNode){
            // Recursively visit the child and update the count array
            const childCount = dfs(child, curNode, adjList, labels, ans);
            for(let i=0; i<26; i++){
                count[i] += childCount[i];
            }
        }
    }

    // Increment the count of the label for the current node
    const labelIndex = labels.charCodeAt(curNode) - 'a'.charCodeAt(0);
    ans[curNode] = ++count[labelIndex];

    return count; 
}

const createAdjacencyList = (n, edges) => {
    const adjList = Array(n).fill().map(() => []);

    for(const edge of edges){
        const [node1, node2] = edge;
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    }
    return adjList;
}

```

                                    ***Please UpVote***


