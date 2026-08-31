# JavaScript Solution

**Author:** linfongi
**Votes:** 41
**Link:** [https://leetcode.com/problems/clone-graph/solutions/42459/](https://leetcode.com/problems/clone-graph/solutions/42459/)

---

    function cloneGraph(graph) {
      var map = {};
      return traverse(graph);
    
      function traverse(node) {
        if (!node) return node;
        if (!map[node.label]) {
          map[node.label] = new UndirectedGraphNode(node.label);
          map[node.label].neighbors = node.neighbors.map(traverse);
        }
        return map[node.label];
      }
    }