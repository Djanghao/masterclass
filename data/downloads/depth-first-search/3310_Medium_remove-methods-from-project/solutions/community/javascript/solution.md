# BFS twice || linear time

**Author:** xkatianx
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5877136/](https://leetcode.com/problems/remove-methods-from-project/solutions/5877136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BFS on digraph to get suspicious nodes.
BFS on graph to also get "outside" nodes.

# Complexity
- Time complexity: $O(m + n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(m + n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function remainingMethods(n: number, k: number, invocations: [number, number][]): number[] {
    const digraph = DiGraph.fromList(invocations)
    invocations = invocations.map(([a, b]) => [[a, b], [b, a]]).flat() as [number, number][]
    const graph = DiGraph.fromList(invocations)

    const nodes = new Set(Array(n).keys())
    const suspicious = digraph.bfs(k)
    const toRemove = graph.bfs(k)

    if (toRemove.size === suspicious.size) 
        toRemove.forEach(n => nodes.delete(n))
    return Array.from(nodes)
}

class DiGraph {
  private nodes: Set<number> = new Set();
  private linkedList: Map<number, Set<number>> = new Map();

  static fromList(edges: [number, number][]) {
    const graph = new DiGraph();
    edges.forEach(([from, to]) => {
      graph.addEdge(from, to);
    });
    return graph;
  }

  addNode(node: number) {
    this.nodes.add(node);
  }

  addEdge(from: number, to: number) {
    this.addNode(from);
    this.addNode(to);
    if (!this.linkedList.has(from)) this.linkedList.set(from, new Set());
    this.getNeighbors(from)!.add(to);
  }

  getNeighbors(node: number) {
    return this.linkedList.get(node);
  }

  bfs(root: number) {
    const seen = new Set<number>([root]);
    let queue: number[] = [root];
    while (queue.length > 0) {
      let tmp: number[] = [];
      queue.forEach((a) => {
        this.getNeighbors(a)?.forEach((b) => {
          if (seen.has(b)) return;
          seen.add(b);
          tmp.push(b);
        });
      });
      queue = tmp;
    }
    return seen;
  }
}

```