# [Dart] minimum spanning tree Solution

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389086/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389086/)

---

# Intuition
The solution prioritizes type 3 edges, which are accessible to both Alice and Bob, in building the Minimum Spanning Tree (MST) to establish the essential minimum paths.

# Approach
1.  The solution uses a Minimum Spanning Tree (MST) approach with Union-Find data structure.  
2. Edges are sorted to prioritize type 3 edges (usable by both Alice and Bob).
3. The algorithm processes edges in the following order:
    1. Type 3 edges (for both Alice and Bob)
    2. Type 2 edges (for Bob only)
    3. Type 1 edges (for Alice only)

4. For each edge:
    1. If it connects two different components (for the respective user(s)), it's added to the necessary edges set.
    2. Union-Find is used to efficiently check and merge components.
5. After processing all edges, the algorithm checks if all nodes are connected for both Alice and Bob.
6. The number of removable edges is calculated as the total number of edges minus the necessary edges.

# Complexity
- Time complexity:
O(E log E + \u03B1(N)), where E is the number of edges and N is the number of nodes.

- Space complexity:
O(max(E, N))

# Code
```
class Solution {
  int maxNumEdgesToRemove(int n, List<List<int>> edges) {
    final necessary = <int>{}; // necessary edges
    final alice = List.generate(n + 1, (i) => i); // alice parent
    final bob = List.generate(n + 1, (i) => i); // bob parent
    
    //prioritize sorting for type3 
    edges.sort((a, b) => b[0].compareTo(a[0]));

    for (int i = 0; i < edges.length; i++){
      final e = edges[i];
      // both
      if (e[0] == 3){
        final a1 = find(alice, e[1]);
        final a2 = find(alice, e[2]);
        final b1 = find(bob, e[1]);
        final b2 = find(bob, e[2]);
        if (a1 != a2 || b1 != b2){
          union(a1, a2, alice);
          union(b1, b2, bob);
          necessary.add(i);
        }
        continue;
      }
      //bob
      if (e[0] == 2){
        final b1 = find(bob, e[1]);
        final b2 = find(bob, e[2]);
        if (b1 != b2){
          union(b1, b2, bob);
          necessary.add(i);
        }
        continue;
      }
      //alice
      final a1 = find(alice, e[1]);
      final a2 = find(alice, e[2]);
      if (a1 != a2){
        union(a1, a2, alice);
        necessary.add(i);
      }
    }
    // if anyone of alice parent and bob parent is not linked to 1, cannot fully traverse the graph.
    if (alice.any((a) => find(alice,a) > 1) || bob.any((b) => find(bob,b) > 1)){
      return -1;
    }
    // all edges - necessary = edges can be removed
    return edges.length - necessary.length;
  }

  // union find functions for MST
  void union(int a, int b, List<int> parent){
    a = find(parent, a);
    b = find(parent, b);
    if (a < b){
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  }
  int find(List<int> parent, int a){
    if (parent[a] != a){
      parent[a] = find(parent, parent[a]);
    }
    return parent[a];
  }
}
```