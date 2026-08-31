# Iterative stack DP with comments

**Author:** kirsar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3432789/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3432789/)

---

# Intuition
It looked like House Robber problems family, so we need to find a way to build dp

# Approach
1. First traverse all trips to know possible inputs of each node into final cost
2. Don't forget to consider odd cases of disconnected subgraphs or disconnected nodes and trips with same start and end
3. Selected any node as root and traverse tree with stack. 
- If node with children met for the first time, leave the node on stack and put children of stack. 
- If node with children met for the second time or node doesn't have children - calculate dp for it, since children are already processed
4. For each node we have 2 dp values:
- if node is *not taken* into discount (full price, dp[i][0]), then we are free to select min value from child *both cases* - when child is taken into discount and when it's not   
- if node is *taken* into discount (half price, dp[i][1]), then we can only use child value for child *non-taken* case


# Complexity
- Time complexity:
O(Max(edges, trips))

# Code
```
function minimumTotalPrice(n: number, edges: number[][], prices: number[], trips: number[][]): number {
  const graph = new Map<number, number[]>();
  
  // consider disconnected nodes
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [start, end] of edges) {
    graph.get(start).push(end);
    graph.get(end).push(start);
  }

  const stops = Array(n).fill(0)
  for (let i = 0; i < trips.length; i++) {
    const [start, end] = trips[i];
    const path = start === end ? [start] : traverse(start, end, graph);
    for (let stop of path) {
      stops[stop]++;
    }
  }

  const dp = Array.from({ length: n }, () => Array(2).fill(0));
  const visited = new Set<number>();
  
  let res = 0;
  // consider disconnected graph - try to start from each non-visited node
  for(let i=0; i<n; i++) {
    if (!visited.has(i)) {
      const stack: [number, number][] = [[i, Number.MAX_VALUE]];
      while(stack.length > 0) {
        const [curr, parent] = stack[stack.length - 1]; // peek
        const connections = graph.get(curr);
        
        // not visited yet and has connection other then parent (leaf node)
        if (!visited.has(curr) && (connections.length > 1 || connections[0] !== parent)) {
          for(let connection of connections) {
            if (connection !== parent) {
              stack.push([connection, curr]);
            }
          }
        } else {
          // remove from stack once visited for the second time or is leaf
          stack.pop();
          
          let noTake = 0; // children cost if node is not taken into discount
          let take = 0; // chilren cost if node is taken into discount
          
          for(let connection of connections) {
            take += dp[connection][0]; // only non-taken child case    
            noTake += Math.min(dp[connection][0], dp[connection][1]); 
          }

          dp[curr][0] = prices[curr] * stops[curr] + noTake;
          dp[curr][1] = prices[curr] * stops[curr] / 2 + take;
        }

        visited.add(curr);
       }

      res += Math.min(dp[i][0], dp[i][1]);
    }
  }

  return res;
}

function traverse(start: number, end: number, graph: Map<number, number[]>): number[] {
  let queue: [number, number[]][] = [[start, [start]]];

  const visited = new Set<number>();

  while (queue.length > 0) {
    const [curr, currPath] = queue.shift();
    visited.add(curr);

    if (curr === end) {
      return currPath;
    }

    for (let node of graph.get(curr)) {
      if (!visited.has(node)) {
        queue.push([node, [...currPath, node]]);
      }
    }
  }

  throw Error('Invalid graph');
}
```