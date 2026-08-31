# Memory beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/5918808/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/5918808/)

---

# Intuition
Involves counting pairs of nodes in a graph based on how many edges connect to them. The goal is to determine how many pairs have a combined degree (the number of edges connected to each node) that exceeds certain query values.

# Approach
First, calculate the degree of each node and store pairs of nodes with their degrees, then for each query, use a two-pointer technique on the sorted degrees to find pairs where the combined degree exceeds the query, adjusting the count based on shared edges between pairs.

# Complexity
- Time complexity:
O(n + m + q), where n is the number of nodes, m is the number of edges, and q is the number of queries; this includes the time to calculate degrees, sort them, and process each query.

- Space complexity:
O(n) for storing the degree counts and edge pairs; additional space may be needed for the memoization of query results.

# Code
```typescript []
type Edge = [number, number];

const countPairs = (n: number, edges: Edge[], queries: number[]): number[] => {
    const degree = Array(n + 1).fill(0);
    const edgesMap: Map<string, number> = new Map();
    const answer: number[] = [];

    // Calculate the degree of each node and fill edges map
    edges.forEach(([u, v]) => {
        degree[u]++;
        degree[v]++;
        const key = `${Math.min(u, v)}-${Math.max(u, v)}`;
        edgesMap.set(key, (edgesMap.get(key) || 0) + 1);
    });

    // Prepare sorted degree array
    const sortedDegree = degree.slice(1).sort((a, b) => a - b);
    const countMemo = new Map<number, number>();

    queries.forEach((query) => {
        if (!countMemo.has(query)) {
            countMemo.set(query, calculateCount(query, sortedDegree, edgesMap, degree));
        }
        answer.push(countMemo.get(query)!);
    });

    return answer;
};

const calculateCount = (num: number, sortedDegree: number[], edgesMap: Map<string, number>, degree: number[]): number => {
    let low = 0;
    let high = sortedDegree.length - 1;
    let cnt = 0;

    // Count pairs based on degree sums
    while (low < high) {
        const sum = sortedDegree[low] + sortedDegree[high];
        if (sum > num) {
            cnt += (high - low);
            high--;
        } else {
            low++;
        }
    }

    // Adjust count based on edges
    edgesMap.forEach((val, key) => {
        const [u, v] = key.split('-').map(Number);
        if (degree[u] + degree[v] > num) {
            const newSum = degree[u] + degree[v] - val;
            if (newSum <= num) cnt--;
        }
    });

    return cnt;
};


```