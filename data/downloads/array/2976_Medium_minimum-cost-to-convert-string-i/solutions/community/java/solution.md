# Easy Explanation | Floyd-Warshall Algorithm | Java | C++ | Python | JavaScript | Go | Rust

**Author:** kartikdevsharma_
**Votes:** 94
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5539929/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5539929/)

---


# Intuition

We're given two strings, 'source' and 'target', both of equal length n $(1 \u2264 n \u2264 10^5)$. These strings consist of lowercase English letters. Our task is to transform 'source' into the 'target' using a series of character conversions. The conversions are defined by three arrays: 'original', 'changed', and 'cost', each has a length of m $(1 \u2264 m \u2264 2000)$. For each index i, we can change the character original[i] to changed[i] at a cost of cost[i] $(1 \u2264 cost[i] \u2264 10^6)$. The goal is to find the minimum total cost to perform this transformation, or return -1 if it's impossible.

If you have noticed then The large possible string length (up to $10^5$) immediately rules out any brute-force approaches that might try all possible combinations of transformations. The number of possible transformations (up to 2000) is also significant, suggesting that we need an efficient way to represent and process these transformations. And The fact that we're dealing with lowercase English letters (26 possibilities) is a quite usefull that I'll use in my solution.


At first I thought of using a depth-first search (DFS) since approach The idea was to explore all possible transformation paths, keeping track of the minimum cost encountered and For each mismatched character between 'source' and 'target', I could recursively try all possible transformations, adding the cost as we go. However, its limitations were: 

1. Time Complexity: With up to $10^5$ characters to potentially transform, and up to 2000 possible transformations for each, the number of paths to explore would be astronomical. This would lead to a time complexity that's exponential in nature, far exceeding the time limits for the problem.

2. Redundant Calculations: I'd end up recalculating the cost of the same transformations multiple times, especially for recurring characters in the strings.

3. Indirect Transformations: The DFS approach might struggle to efficiently handle cases where the optimal transformation is indirect $(e.g., 'a' -> 'b' -> 'c'$ being cheaper than a direct $'a' -> 'c'$).

After noticing the Graph Nature of the Problem I thought we can model this as a graph problem. Each lowercase letter can be considered a node in a graph, and each possible transformation represents a directed edge with a weight equal to the transformation cost. 
Now i started Considering Dijkstra's Algorithm: With the graph model in mind, Dijkstra's algorithm for finding the shortest path in a weighted graph seems like a natural fit. We could use it to find the minimum cost path from each character in 'source' to the corresponding character in 'target'. 

However, there's a catch. We'd need to run Dijkstra's algorithm 26 times (once for each lowercase letter as the source) to precompute all possible transformation costs. While this would work, it feels somewhat inefficient, especially considering that we need the shortest paths between all pairs of characters, This is where the Floyd-Warshall algorithm comes into play, offering an elegant solution to our dilemma. Floyd-Warshall is an all-pairs shortest path algorithm, meaning it can find the shortest paths between all pairs of nodes in a single run. This is perfect for our scenario, as we need to know the minimum cost to transform any character into any other character.

Floyd-Warshall can handle "indirect" transformations efficiently. For instance, if we need to transform 'a' to 'c', but there's no direct transformation (or the direct transformation is more expensive), Floyd-Warshall will automatically find the cheapest path, perhaps 'a' -> 'b' -> 'c', if that's the most efficient route.

In short, by recognizing the graph nature of the problem and applying the Floyd-Warshall algorithm, we can transform a potentially complex and time-consuming string manipulation problem into a series of efficient matrix operations followed by a simple linear scan of the input strings. This insight allows us to solve the problem efficiently, even with large input sizes, while handling all the nuances of the possible transformations.



## Approach

Our solution to this string transformation problem can be broken down into three main steps:

1. Building the Conversion Graph
2. Optimizing Conversion Paths using Floyd-Warshall
3. Computing the Total Conversion Cost


### Step 1: Building the Conversion Graph

The first crucial step is to construct a graph that represents all possible character transformations and their associated costs. This graph will be the foundation for our subsequent optimizations.

```
function buildConversionGraph(original, changed, cost):
    graph = new 2D array of size 26x26, initialized with INF (a very large number)
    
    for i from 0 to 25:
        graph[i][i] = 0  // It costs nothing to 'transform' a letter to itself
    
    for i from 0 to length of cost:
        from = original[i] - 'a'  // Convert character to 0-based index
        to = changed[i] - 'a'
        graph[from][to] = min(graph[from][to], cost[i])
    
    return graph
```



1. We use a $26x26$ 2D array to represent our graph. Why 26? Because there are 26 lowercase English letters, and each cell $graph[i][j]$ will represent the cost of transforming the i-th letter to the j-th letter.

2. We initialize all cells with INF $(infinity)$. This is crucial because:
   a) It represents the absence of a direct transformation path.
   b) It allows the Floyd-Warshall algorithm to work correctly by always choosing the smaller cost when comparing paths.

3. We set the diagonal elements $graph[i][i]$ to 0. This represents the fact that keeping a letter unchanged costs nothing.

4. We then iterate through the provided transformations (original, changed, cost arrays) and update our graph. The `min` function is used here because there might be multiple ways to transform one letter to another, and we always want the cheapest one like we might be told we can change 'a' to 'b' for 5 points, but later we're told we can do it for 3 points. we want to keep the cheaper option, so we use minimum of (graph[from][to], cost[i]).

5. By subtracting 'a' from the characters, we convert them to 0-based indices (e.g., 'a' becomes 0, 'b' becomes 1, etc.), which allows us to use them directly as array indices.

### Step 2: Optimizing Conversion Paths using Floyd-Warshall

Now that we have our initial graph, we apply the Floyd-Warshall algorithm to find the shortest (least costly) paths between all pairs of characters:

```
function optimizeConversionPaths(graph):
    for k from 0 to 25:
        for i from 0 to 25:
            for j from 0 to 25:
                if graph[i][k] < INF and graph[k][j] < INF:
                    graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
```



1. The Floyd-Warshall algorithm works by considering each vertex as an intermediate point in a path between two other vertices. It does this for all possible combinations of vertices.

2. The outer loop (k) represents the current intermediate vertex being considered.

3. The inner loops (i and j) represent the start and end vertices of a path we're trying to optimize.

4. The key operation is the comparison and update:
   $graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])$
   This checks if going from i to j through k is cheaper than the current known path from i to j.

5. The condition $graph[i][k]$ < INF and $graph[k][j]$ < $INF$ ensures that we only consider valid paths. If either segment of the path (i to k or k to j) is impossible (INF), we don't update graph[i][j].

6. After this process, `graph[i][j]` will contain the cost of the cheapest path from character i to character j, possibly through other characters.

7. This step is crucial for finding indirect transformations that might be cheaper than direct ones. For example, it might find that 'a' -> 'b' -> 'c' is cheaper than a direct 'a' -> 'c'.

### Step 3: Computing the Total Conversion Cost

With our fully optimized graph, we can now efficiently compute the total cost of transforming the source string to the target string:

```
function computeTotalConversionCost(source, target, graph):
    totalCost = 0
    for i from 0 to length of source:
        sourceChar = source[i] - 'a'
        targetChar = target[i] - 'a'
        if sourceChar != targetChar:
            if graph[sourceChar][targetChar] == INF:
                return -1  // Impossible transformation
            totalCost += graph[sourceChar][targetChar]
    return totalCost
```



1. We iterate through the characters of the source and target strings simultaneously.

2. For each position, we check if the characters are different. If they are the same, no transformation is needed, so we move to the next position.

3. If the characters differ, we look up the transformation cost in our optimized graph.

4. If the cost is INF, it means there's no way to transform the source character to the target character, so we immediately return -1 as the problem is unsolvable.

5. Otherwise, we add the transformation cost to our running total.

6. After processing all characters, if we haven't returned -1, we return the total cost, which is guaranteed to be the minimum possible cost due to our use of Floyd-Warshall.



The main function ties all these steps together:

```
function minimumCost(source, target, original, changed, cost):
    conversionGraph = buildConversionGraph(original, changed, cost)
    optimizeConversionPaths(conversionGraph)
    return computeTotalConversionCost(source, target, conversionGraph)
```

This approach is efficient  because: It precomputes all possible transformation costs, including indirect transformations, in a single pass using Floyd-Warshall. It reduces the problem of finding the optimal sequence of transformations to a series of simple lookups. It handles the case of impossible transformations gracefully. It works efficiently even for large input strings, as the main computational work is done on the 26x26 graph, regardless of the input size.

### Complexity 



**Time Complexity: $O(26\xB3 + n + m)$**


1. Building the Conversion Graph: O(m)
   - We iterate through the 'original', 'changed', and 'cost' arrays once.
   - m is the length of these arrays (which are all the same length).
   - For each element, we perform constant time operations (array access and comparison).
   - Therefore, this step takes O(m) time.

2. Optimizing Conversion Paths (Floyd-Warshall Algorithm): $O(26\xB3)$
   - This is the core of our algorithm and deserves special attention.
   - We have three nested loops, each iterating from 0 to 25 (representing a-z).
   - The total number of iterations is thus $26 * 26 * 26 = 17,576$.
   - Inside the innermost loop, we perform constant time operations.
   - While 17,576 is a large number, it's constant regardless of input size.
   - Therefore, we consider this step O(1) in terms of input size, but it's more accurately O(26\xB3).

3. Computing Total Conversion Cost: O(n)
   - We iterate through the 'source' and 'target' strings once.
   - n is the length of these strings (which are the same length).
   - For each character, we perform constant time operations (array access and addition).
   - Therefore, this step takes O(n) time.

Combining these steps, we get $O(m) + O(26\xB3) + O(n)$.

In Big O notation, we typically drop constants, but in this case, 26\xB3 is a significant factor. It's worth noting that for very small inputs (where n and m are less than 17,576), the Floyd-Warshall step will dominate the runtime. However, as n or m grow larger, they will eventually overtake 26\xB3.

**Space Complexity: O(1)**

The space complexity is constant, but let's break it down for a complete understanding:

1. Conversion Graph: O(26\xB2)
   - We use a 26x26 2D array to represent our graph.
   - This requires 26 * 26 = 676 integer elements.
   - Regardless of input size, this remains constant.

2. Other Variables:
   - We use a few additional variables (like loop counters and the total cost),
     but these are negligible compared to the graph.

Even though we're using 676 integers, which is a significant amount of memory, it's constant with respect to the input size. Whether our input strings are 10 characters or 10 million characters long, we always use the same amount of extra space.

In Big O notation, we express this as O(1) because the space usage doesn't grow with input size.

It's worth noting that while we consider this O(1) space, in practical implementations, this constant factor (676 integers) might be significant for very small inputs or in memory-constrained environments.

our solution trades a constant (but non-trivial) amount of time and space complexity to precompute all possible character transformations, which then allows for efficient lookup during the string comparison phase. This tradeoff is particularly beneficial for longer input strings or when there are many possible character transformations.



---

# Code
```Java []
class Solution {
    private static final int CHAR_COUNT = 26;
    private static final int INF = Integer.MAX_VALUE / 2;

    public long minimumCost(String source, String target, char[] original, char[] changed, int[] cost) {
        int[][] conversionGraph = buildConversionGraph(original, changed, cost);
        optimizeConversionPaths(conversionGraph);
        return computeTotalConversionCost(source, target, conversionGraph);
    }

    private int[][] buildConversionGraph(char[] original, char[] changed, int[] cost) {
        int[][] graph = new int[CHAR_COUNT][CHAR_COUNT];
        for (int[] row : graph) {
            Arrays.fill(row, INF);
        }
        for (int i = 0; i < CHAR_COUNT; i++) {
            graph[i][i] = 0;
        }
        for (int i = 0; i < cost.length; i++) {
            int from = original[i] - 'a';
            int to = changed[i] - 'a';
            graph[from][to] = Math.min(graph[from][to], cost[i]);
        }
        return graph;
    }

    private void optimizeConversionPaths(int[][] graph) {
        for (int k = 0; k < CHAR_COUNT; k++) {
            for (int i = 0; i < CHAR_COUNT; i++) {
                if (graph[i][k] < INF) {
                    for (int j = 0; j < CHAR_COUNT; j++) {
                        if (graph[k][j] < INF) {
                            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                        }
                    }
                }
            }
        }
    }

    private long computeTotalConversionCost(String source, String target, int[][] graph) {
        long totalCost = 0;
        for (int i = 0; i < source.length(); i++) {
            int sourceChar = source.charAt(i) - 'a';
            int targetChar = target.charAt(i) - 'a';
            if (sourceChar != targetChar) {
                if (graph[sourceChar][targetChar] == INF) {
                    return -1L;
                }
                totalCost += graph[sourceChar][targetChar];
            }
        }
        return totalCost;
    }
}
```
```C++ []
class Solution {
private:
    static constexpr int CHAR_COUNT = 26;
    static constexpr int INF = 1e9;

    std::vector<std::vector<int>> buildConversionGraph(const std::vector<char>& original, const std::vector<char>& changed, const std::vector<int>& cost) {
        std::vector<std::vector<int>> graph(CHAR_COUNT, std::vector<int>(CHAR_COUNT, INF));
        for (int i = 0; i < CHAR_COUNT; i++) {
            graph[i][i] = 0;
        }
        for (size_t i = 0; i < cost.size(); i++) {
            int from = original[i] - 'a';
            int to = changed[i] - 'a';
            graph[from][to] = std::min(graph[from][to], cost[i]);
        }
        return graph;
    }

    void optimizeConversionPaths(std::vector<std::vector<int>>& graph) {
        for (int k = 0; k < CHAR_COUNT; k++) {
            for (int i = 0; i < CHAR_COUNT; i++) {
                if (graph[i][k] < INF) {
                    for (int j = 0; j < CHAR_COUNT; j++) {
                        if (graph[k][j] < INF) {
                            graph[i][j] = std::min(graph[i][j], graph[i][k] + graph[k][j]);
                        }
                    }
                }
            }
        }
    }

    long long computeTotalConversionCost(const std::string& source, const std::string& target, const std::vector<std::vector<int>>& graph) {
        long long totalCost = 0;
        for (size_t i = 0; i < source.length(); i++) {
            int sourceChar = source[i] - 'a';
            int targetChar = target[i] - 'a';
            if (sourceChar != targetChar) {
                if (graph[sourceChar][targetChar] == INF) {
                    return -1;
                }
                totalCost += graph[sourceChar][targetChar];
            }
        }
        return totalCost;
    }

public:
    long long minimumCost(std::string source, std::string target, std::vector<char>& original, std::vector<char>& changed, std::vector<int>& cost) {
        auto conversionGraph = buildConversionGraph(original, changed, cost);
        optimizeConversionPaths(conversionGraph);
        return computeTotalConversionCost(source, target, conversionGraph);
    }
};

```
```Python []

class Solution:
    CHAR_COUNT = 26
    INF = float('inf')

    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        conversionGraph = self.buildConversionGraph(original, changed, cost)
        self.optimizeConversionPaths(conversionGraph)
        return self.computeTotalConversionCost(source, target, conversionGraph)

    def buildConversionGraph(self, original: List[str], changed: List[str], cost: List[int]) -> List[List[int]]:
        graph = [[self.INF] * self.CHAR_COUNT for _ in range(self.CHAR_COUNT)]
        for i in range(self.CHAR_COUNT):
            graph[i][i] = 0
        for i in range(len(cost)):
            fromChar = ord(original[i]) - ord('a')
            toChar = ord(changed[i]) - ord('a')
            graph[fromChar][toChar] = min(graph[fromChar][toChar], cost[i])
        return graph

    def optimizeConversionPaths(self, graph: List[List[int]]) -> None:
        for k in range(self.CHAR_COUNT):
            for i in range(self.CHAR_COUNT):
                if graph[i][k] < self.INF:
                    for j in range(self.CHAR_COUNT):
                        if graph[k][j] < self.INF:
                            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

    def computeTotalConversionCost(self, source: str, target: str, graph: List[List[int]]) -> int:
        totalCost = 0
        for i in range(len(source)):
            sourceChar = ord(source[i]) - ord('a')
            targetChar = ord(target[i]) - ord('a')
            if sourceChar != targetChar:
                if graph[sourceChar][targetChar] == self.INF:
                    return -1
                totalCost += graph[sourceChar][targetChar]
        return totalCost
```
```JavaScript []
/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const CHAR_COUNT = 26;
    const INF = Number.MAX_SAFE_INTEGER / 2;

    const buildConversionGraph = (original, changed, cost) => {
        const graph = Array(CHAR_COUNT).fill().map(() => Array(CHAR_COUNT).fill(INF));
        for (let i = 0; i < CHAR_COUNT; i++) {
            graph[i][i] = 0;
        }
        for (let i = 0; i < cost.length; i++) {
            const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
            const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
            graph[from][to] = Math.min(graph[from][to], cost[i]);
        }
        return graph;
    };

    const optimizeConversionPaths = (graph) => {
        for (let k = 0; k < CHAR_COUNT; k++) {
            for (let i = 0; i < CHAR_COUNT; i++) {
                if (graph[i][k] < INF) {
                    for (let j = 0; j < CHAR_COUNT; j++) {
                        if (graph[k][j] < INF) {
                            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                        }
                    }
                }
            }
        }
    };

    const computeTotalConversionCost = (source, target, graph) => {
        let totalCost = 0;
        for (let i = 0; i < source.length; i++) {
            const sourceChar = source.charCodeAt(i) - 'a'.charCodeAt(0);
            const targetChar = target.charCodeAt(i) - 'a'.charCodeAt(0);
            if (sourceChar !== targetChar) {
                if (graph[sourceChar][targetChar] === INF) {
                    return -1;
                }
                totalCost += graph[sourceChar][targetChar];
            }
        }
        return totalCost;
    };

    const conversionGraph = buildConversionGraph(original, changed, cost);
    optimizeConversionPaths(conversionGraph);
    return computeTotalConversionCost(source, target, conversionGraph);
};

```
```Go []

const CHAR_COUNT = 26
const INF = math.MaxInt32 / 2

func minimumCost(source string, target string, original []byte, changed []byte, cost []int) int64 {
    conversionGraph := buildConversionGraph(original, changed, cost)
    optimizeConversionPaths(conversionGraph)
    return computeTotalConversionCost(source, target, conversionGraph)
}

func buildConversionGraph(original []byte, changed []byte, cost []int) [][]int {
    graph := make([][]int, CHAR_COUNT)
    for i := range graph {
        graph[i] = make([]int, CHAR_COUNT)
        for j := range graph[i] {
            graph[i][j] = INF
        }
        graph[i][i] = 0
    }
    for i, c := range cost {
        from := int(original[i] - 'a')
        to := int(changed[i] - 'a')
        if c < graph[from][to] {
            graph[from][to] = c
        }
    }
    return graph
}

func optimizeConversionPaths(graph [][]int) {
    for k := 0; k < CHAR_COUNT; k++ {
        for i := 0; i < CHAR_COUNT; i++ {
            if graph[i][k] < INF {
                for j := 0; j < CHAR_COUNT; j++ {
                    if graph[k][j] < INF {
                        if graph[i][k]+graph[k][j] < graph[i][j] {
                            graph[i][j] = graph[i][k] + graph[k][j]
                        }
                    }
                }
            }
        }
    }
}

func computeTotalConversionCost(source string, target string, graph [][]int) int64 {
    var totalCost int64 = 0
    for i := 0; i < len(source); i++ {
        sourceChar := int(source[i] - 'a')
        targetChar := int(target[i] - 'a')
        if sourceChar != targetChar {
            if graph[sourceChar][targetChar] == INF {
                return -1
            }
            totalCost += int64(graph[sourceChar][targetChar])
        }
    }
    return totalCost
}

```
```Rust []

use std::cmp::min;
use std::i64;

const CHAR_COUNT: usize = 26;
const INF: i64 = i64::MAX / 2;

impl Solution {
    pub fn minimum_cost(
        source: String,
        target: String,
        original: Vec<char>,
        changed: Vec<char>,
        cost: Vec<i32>,
    ) -> i64 {
        let mut conversion_graph = Self::build_conversion_graph(&original, &changed, &cost);
        Self::optimize_conversion_paths(&mut conversion_graph);
        Self::compute_total_conversion_cost(&source, &target, &conversion_graph)
    }

    fn build_conversion_graph(
        original: &[char],
        changed: &[char],
        cost: &[i32],
    ) -> Vec<Vec<i64>> {
        let mut graph = vec![vec![INF; CHAR_COUNT]; CHAR_COUNT];
        for i in 0..CHAR_COUNT {
            graph[i][i] = 0;
        }
        for (i, &o) in original.iter().enumerate() {
            let from = (o as usize) - ('a' as usize);
            let to = (changed[i] as usize) - ('a' as usize);
            graph[from][to] = min(graph[from][to], cost[i] as i64);
        }
        graph
    }

    fn optimize_conversion_paths(graph: &mut Vec<Vec<i64>>) {
        for k in 0..CHAR_COUNT {
            for i in 0..CHAR_COUNT {
                if graph[i][k] < INF {
                    for j in 0..CHAR_COUNT {
                        if graph[k][j] < INF {
                            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);
                        }
                    }
                }
            }
        }
    }

    fn compute_total_conversion_cost(
        source: &str,
        target: &str,
        graph: &[Vec<i64>],
    ) -> i64 {
        if source.len() != target.len() {
            return -1;
        }
        let mut total_cost = 0;
        for (s, t) in source.chars().zip(target.chars()) {
            let source_char = (s as usize) - ('a' as usize);
            let target_char = (t as usize) - ('a' as usize);
            if source_char != target_char {
                if graph[source_char][target_char] == INF {
                    return -1;
                }
                total_cost += graph[source_char][target_char];
            }
        }
        total_cost
    }
}


```
---


**Example 1:**
>Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]

**Step 1: Build Conversion Graph**

    Initial graph (showing only relevant entries):
```
   a  b  c  d  e
a  0  2  \u221E  \u221E  \u221E
b  \u221E  0  5  \u221E  \u221E
c  \u221E  5  0  \u221E  1
d  \u221E  \u221E  \u221E  0 20
e  \u221E  2  \u221E  \u221E  0
```

**Step 2: Optimize Conversion Paths (Floyd-Warshall)**

    Optimized graph (showing only relevant entries):
```
   a  b  c  d  e
a  0  2  7  \u221E  8
b  \u221E  0  5  \u221E  6
c  \u221E  3  0  \u221E  1
d  \u221E  22 25  0 20
e  \u221E  2  7  \u221E  0
```

**Step 3: Compute Total Conversion Cost**

| Index | Source | Target | Transformation | Cost |
|-------|--------|--------|----------------|------|
| 0     | a      | a      | None           | 0    |
| 1     | b      | c      | b -> c         | 5    |
| 2     | c      | b      | c -> b         | 3    |
| 3     | d      | e      | d -> e         | 20   |

Total Cost: 0 + 5 + 3 + 20 = 28

**Output: 28** 

---
**Example 2:**
>Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]

**Step 1: Build Conversion Graph**

    Initial graph (showing only relevant entries):
```
   a  b  c
a  0  \u221E  1
b  \u221E  0  \u221E
c  \u221E  2  0
```

**Step 2: Optimize Conversion Paths (Floyd-Warshall)**

    Optimized graph (showing only relevant entries):
```
   a  b  c
a  0  3  1
b  \u221E  0  \u221E
c  \u221E  2  0
```

**Step 3: Compute Total Conversion Cost**

| Index | Source | Target | Transformation | Cost |
|-------|--------|--------|----------------|------|
| 0     | a      | b      | a -> c -> b    | 3    |
| 1     | a      | b      | a -> c -> b    | 3    |
| 2     | a      | b      | a -> c -> b    | 3    |
| 3     | a      | b      | a -> c -> b    | 3    |

Total Cost: 3 + 3 + 3 + 3 = 12

**Output: 12**

**Example 3:**
>Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]

**Step 1: Build Conversion Graph**

    Initial graph (showing only relevant entries):
```
   a  b  c  d  e
a  0  \u221E  \u221E  \u221E 10000
b  \u221E  0  \u221E  \u221E  \u221E
c  \u221E  \u221E  0  \u221E  \u221E
d  \u221E  \u221E  \u221E  0  \u221E
e  \u221E  \u221E  \u221E  \u221E  0
```

**Step 2: Optimize Conversion Paths (Floyd-Warshall)**

    Optimized graph (no changes, as there are no intermediate paths):
```
   a  b  c  d  e
a  0  \u221E  \u221E  \u221E 10000
b  \u221E  0  \u221E  \u221E  \u221E
c  \u221E  \u221E  0  \u221E  \u221E
d  \u221E  \u221E  \u221E  0  \u221E
e  \u221E  \u221E  \u221E  \u221E  0
```

**Step 3: Compute Total Conversion Cost**

| Index | Source | Target | Transformation | Cost |
|-------|--------|--------|----------------|------|
| 0     | a      | a      | None           | 0    |
| 1     | b      | b      | None           | 0    |
| 2     | c      | c      | None           | 0    |
| 3     | d      | e      | Impossible     | \u221E    |

Since there's no path from 'd' to 'e', the transformation is impossible.

**Output: -1**


---
## Proof, Sort of
### 1. **Graph Construction (Building the Conversion Graph)**

### **Problem Restatement**
Given:
- Two strings `source` and `target` of length `n`, consisting of lowercase English letters.
- Three arrays: `original`, `changed`, and `cost`, where `original[i]` can be converted to `changed[i]` at a cost of `cost[i]`.

The task is to find the minimum cost to transform `source` into `target` using any number of the provided operations. If it is impossible to do so, return `-1`.

### **Key Concepts and Definitions**
- **Graph Representation**: We can represent the problem as a graph where each node corresponds to a character ('a' to 'z'). There is an edge from node `i` to node `j` if there is a direct conversion available from the character `i` to `j` with some cost.

- **Distance Matrix**: We'll use a matrix `d` where `d[i][j]` represents the minimum cost to convert character `i` to character `j`. Initially, `d[i][j]` is set to infinity (`INF`) if no direct conversion is given, and `d[i][i]` is set to `0` (since converting a character to itself costs nothing).
#### Explanation:
You create a graph where each character in the alphabet (26 lowercase English letters) is a node. An edge from node `u` to node `v` exists if there's a direct conversion possible from character `u` to character `v` with some cost.

Let `G` be a graph where:
- Each vertex represents a character from 'a' to 'z'.
- There is a directed edge from vertex `i` to vertex `j` if it's possible to convert character `i` to character `j` at some cost.

Mathematically:
- The adjacency matrix `graph[i][j]` represents the minimum cost to convert character `i` to character `j`.
- If there are multiple edges between two vertices (e.g., multiple ways to convert `i` to `j`), you keep the one with the minimum cost.

#### Initialization:
You initialize the matrix such that:
- `graph[i][i] = 0` (since converting a character to itself has no cost).
- `graph[i][j]` is initialized to infinity (or a very large value) to indicate that no direct conversion is possible initially.
  
For every valid conversion pair `(original[k], changed[k])` with a corresponding cost `cost[k]`, you update the matrix:

${graph}[original[k] - 'a'][changed[k] - 'a'] = \\min(\	ext{graph}[original[k] - 'a'][changed[k] - 'a'], cost[k])$

This initialization sets up the direct transformations between characters with the minimum cost among possibly multiple transformations.

### 2. **Optimizing Conversion Paths (Floyd-Warshall Algorithm)**

#### Explanation:
You apply the Floyd-Warshall algorithm to find the shortest paths between all pairs of vertices in the graph. This algorithm runs in \\(O(n^3)\\) time, where `n` is the number of vertices (in this case, `n = 26`).

For every pair of vertices `(i, j)`, you check if a shorter path exists through an intermediate vertex `k`:

${graph}[i][j] = \\min(\	ext{graph}[i][j], \	ext{graph}[i][k] + \	ext{graph}[k][j])$


#### **Proof of Correctness:**
- **Base Case (No intermediate characters):** Initially, `d[i][j]` is either the direct cost from `i` to `j` or `INF` if no direct conversion exists. This forms the base of our induction.
  
- **Inductive Step (Considering intermediate characters):** Assume that for all pairs `(i, j)` and all intermediates `k < m`, the matrix `d[i][j]` correctly represents the minimum conversion cost. Now, consider introducing the character `m` as an intermediate. The value `d[i][j]` is updated to consider paths that go through `m`. By the properties of the Floyd-Warshall algorithm, if a shorter path exists via `m`, it will be found; otherwise, the current shortest path remains.

- **Conclusion:** After considering all possible intermediate characters, `d[i][j]` will contain the minimum cost to convert character `i` to character `j` using any combination of the given transformations.

### 3. **Computing the Total Conversion Cost**

#### Explanation:
After constructing the optimized conversion graph, you can calculate the total cost to convert the `source` string to the `target` string.

For each character `i` in the `source` string:
- Let `s = source[i]` and `t = target[i]`.
- If `s == t`, no conversion is needed, and the cost is `0`.
- If `s != t`, the cost to convert `s` to `t` is given by `graph[s][t]`.

If `graph[s][t]` equals infinity (or the initial large value), it means it's impossible to convert `s` to `t` through any sequence of allowed conversions, and hence you return `-1`.

#### Mathematical Formulation:
The total cost $C$ to convert the entire string is:

${Total Cost} = \\sum_{i=0}^{n-1} d[\	ext{source}[i] - 'a'][\	ext{target}[i] - 'a']$

If for any `i`,  $d[{source}[i] - 'a' ][{target}[i] - 'a']$ is `INF`, return `-1`.


### 4. **Complexity Analysis**

- **Time Complexity:**
  - Building the graph takes $O(k)$ where $k$ is the length of the `cost` array.
  - The Floyd-Warshall algorithm takes $O(26^3)$, which is a constant operation since 26 is a fixed number.
  - Computing the total conversion cost takes $O(n)$, where `n` is the length of the `source` string.

- **Space Complexity:**
  - The space complexity is $O(26^2)$ for the graph, which is again constant since the alphabet size is fixed.


