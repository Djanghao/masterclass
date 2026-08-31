# 🔥🔥🔥🔥🔥Easy Solution | JS | TS | Java | C++ | Python  🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 9
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3933737/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3933737/)

---

---
![header_.png](./images/0.png)

---
**Intuition:**
To solve this problem, we need to perform a topological sort considering the constraints from both the `group` and `beforeItems` arrays. The items within the same group should be adjacent in the sorted list, and the ordering of items given in the `beforeItems` array should be respected.

**Approach:**
1. First, we'll construct a directed graph where nodes represent items and directed edges represent the "before" relationships given in the `beforeItems` array. We'll also keep track of the in-degrees (number of incoming edges) for each node.

2. We'll create a separate graph for groups, where nodes represent groups and directed edges represent the "before" relationships between groups based on the items' relationships.

3. Next, we'll find the topological order of the groups using a modified version of Kahn's algorithm. While finding the topological order of groups, we'll also consider the constraints from the `group` array.

4. For each group in the topological order:
   - Find the items within that group and sort them based on the constraints given in the `beforeItems` array. This can be done using a priority queue.
   - Append the sorted items to the final sorted list.

5. If at any point, while constructing the topological order or sorting the items within a group, we encounter a cycle or any invalid ordering, we'll return an empty list as there's no valid solution.

**Complexity:**
- Constructing the graph takes O(n + m) time, where n is the number of items and m is the number of groups.
- Constructing the topological order of groups takes O(n + m) time.
- Sorting the items within each group takes O(n log n) time in total.
- Overall, the time complexity is O(n log n).

The space complexity is O(n + m) for storing the graphs and related data structures.

Remember that this is a complex problem with multiple steps involved, so make sure to understand each step before implementing it in code.

# Code

```javascript []
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const initializeGraphSet = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push(new Set()); } return G; };

const sortItems = (n, m, group, beforeItems) => {
    for (let i = 0; i < n; i++) {
        if (group[i] == -1) {
            group[i] = m++;
        }
    }
    let gg = initializeGraphSet(m); // graph group
    let gi = initializeGraphSet(n); // graph item
    let indegreeGG = Array(m).fill(0);
    let indegreeGI = Array(n).fill(0);
    let res = [];
    for (let i = 0; i < n; i++) {
        let to = group[i];
        for (const x of beforeItems[i]) {
            let from = group[x];
            if (from != to && !gg[from].has(to)) {
                gg[from].add(to);
                indegreeGG[to]++;
            }
            if (!gi[x].has(i)) {
                gi[x].add(i);
                indegreeGI[i]++;
            }
        }
    }
    let ggOrder = topologicalSort(gg, indegreeGG);
    let giOrder = topologicalSort(gi, indegreeGI);
    if (ggOrder.length == 0 || giOrder.length == 0) return [];
    let group2Item = initializeGraph(m);
    for (const item of giOrder) group2Item[group[item]].push(item);
    for (const group_id of ggOrder) {
        for (const item of group2Item[group_id]) {
            res.push(item);
        }
    }
    return res;
};

const topologicalSort = (g, indegree) => {
    let res = [], q = [], len = indegree.length;
    for (let i = 0; i < len; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            if (--indegree[child] == 0) q.push(child);
        }
    }
    for (let i = 0; i < len; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
};
```
```Typescript []
/*
The idea is to combine nodes and groups.

We add group nodes and make beetween group relations.
*/

function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    // create empty graph for nodes and groups (n + m);
    const graph = new Map<number, Set<number>>();
    for (let i = 0; i < n + m; i++) {
        graph.set(i, new Set());
    }

    const indegrees = new Array(n + m).fill(0);
    for (let i = 0; i < beforeItems.length; i++) {
        const items = beforeItems[i];
        const currGroup = n + group[i]; // group index started with offset;

        // Relation between group and current node 
        if (group[i] !== -1) {
            graph.get(currGroup).add(i);
            indegrees[i]++;
        }

        // two types of relation 1) between nodes inside of the group 2) between the groups
        for (const item of items) {
            const itemGroup = n + group[item];
            if (currGroup === itemGroup || group[i] === -1 || group[item] === -1) {
                graph.get(item).add(i);
                indegrees[i]++;
            } else {
                if (!graph.get(itemGroup).has(currGroup)) {
                    graph.get(itemGroup).add(currGroup);
                    indegrees[currGroup]++;
                }
            }
        }
    }

    // Typical topological sort
    const zeroInDegree = [];
    for (let i = 0; i < indegrees.length; i++) {
        if (!indegrees[i]) {
            zeroInDegree.push(i)
        }
    }

    const map = new Map<number, number[]>();
    // keep groups order
    const pushToMap = (item: number ) => {
        if (group[item] === -1) {
            map.set(item + n, [item])
            return;
        } 
        if (map.has(group[item])) {
            map.get(group[item]).push(item); 
        } else {
            map.set(group[item], [item]);
        }
    }

    let count = 0;
    while (zeroInDegree.length) {
        const curr = zeroInDegree.shift();
        if (curr < n) {
            count++;
            pushToMap(curr);
        }
   
        for (const neighbor of graph.get(curr)) {
            indegrees[neighbor]--;
            if (!indegrees[neighbor]) {
                zeroInDegree.push(neighbor);
            }
        }
    }

    // Hadle cases with cycles
    if (count !== n) {
        return [];
    }

    return [].concat(...map.values());
};
```
```Java []
class Solution {
    public int[] sortItems(int n, int m, int[] grp, List<List<Integer>> beforeItems) {
        int[] ans = new int[n];
        
        // Create data structures to store relationships between items and groups
        Map<Integer, Map<Integer, Set<Integer>>> itemMap = new HashMap<>();
        Map<Integer, Set<Integer>> grpMap = new HashMap<>();
        
        // Assign unique group IDs to items with no group
        for (int i = 0; i < n; i++) {
            if (grp[i] == -1) {
                grp[i] = m++;
            }
        }
        
        // Initialize the maps for groups and items
        for (int i = 0; i < m; i++) {
            grpMap.put(i, new HashSet<>());
            itemMap.put(i, new HashMap<>());
        }
        
        // Initialize intra-group relationships
        for (int i = 0; i < n; i++) {
            itemMap.get(grp[i]).put(i, new HashSet<>());
        }
        
        // Populate relationships between items based on beforeItems
        for (int i = 0; i < beforeItems.size(); i++) {
            for (int item : beforeItems.get(i)) {
                if (grp[i] == grp[item]) {
                    // Within the same group, add relationship to intra-group map
                    itemMap.get(grp[i]).get(item).add(i);
                } else {
                    // Between different groups, add relationship to inter-group map
                    grpMap.get(grp[item]).add(grp[i]);
                }
            }
        }
        
        int j = 0;
        // Perform topological sorting on groups and items within each group
        for (int g : topSort(grpMap)) {
            for (int item : topSort(itemMap.get(g))) {
                ans[j++] = item;
            }
        }
        
        // Return the sorted items or an empty array if sorting is not possible
        return j < ans.length ? new int[]{} : ans;
    }

    // Topological sorting function
    private int[] topSort(Map<Integer, Set<Integer>> map) {
        Map<Integer, Integer> indg = new HashMap<>();
        
        // Calculate in-degrees of nodes
        for (Set<Integer> values : map.values()) {
            for (int m : values) {
                indg.merge(m, 1, Integer::sum);
            }
        }
        
        Queue<Integer> queue = new ArrayDeque<>();
        
        // Initialize the queue with nodes having in-degree 0
        for (int key : map.keySet()) {
            if (!indg.containsKey(key)) {
                queue.offer(key);
            }
        }
        
        int j = 0;
        int[] ans = new int[map.size()];
        
        // Perform topological sorting
        while (!queue.isEmpty()) {
            int cur = queue.poll();
            ans[j++] = cur;
            
            // Update in-degrees and enqueue nodes with in-degree 0
            for (int next : map.get(cur)) {
                if (indg.merge(next, -1, Integer::sum) == 0) {
                    queue.offer(next);
                }
            }
        }
        
        // Return the sorted array or an empty array if sorting is not possible
        return j == ans.length ? ans : new int[]{};
    }
}
```
```Python3 []
class Solution:
    def has_cycle(self, graph, cur_node, visited, result):
        if visited[cur_node] == 1:
            return False
        if visited[cur_node] == 2:
            return True
        visited[cur_node] = 2
        for next_node in graph[cur_node]:
            if self.has_cycle(graph, next_node, visited, result):
                return True
        visited[cur_node] = 1
        result.append(cur_node)
        return False

    def sortItems(self, n: int, m: int, group: List[int],
                  beforeItems: List[List[int]]) -> List[int]:
        # Map between group_id and item_ids
        group_items_map = defaultdict(list)
        # Visited for items in each group. Will be used later
        visited_item = defaultdict(dict)
        for i in range(n):
            # Assign no-group items to a new group
            if group[i] == -1:
                group[i] = m
                m += 1
            group_items_map[group[i]].append(i)
            visited_item[group[i]][i] = 0

        # key - group_id : value - next_groups
        graph_group = defaultdict(set)
        # key - group_id : value - {key - item_id : value: next_items}
        graph_item = {i: defaultdict(list) for i in range(m)}

        # Create graph for items and groups
        for item_after, before_items in enumerate(beforeItems):
            for item_before in before_items:
                group_before = group[item_before]
                group_after = group[item_after]

                # If two items belong to different groups,
                #   add a dependency between groups
                # Otherwise, add a dependency between items in the same group
                if group_before != group_after:
                    graph_group[group_before].add(group_after)
                else:
                    graph_item[group_before][item_before].append(item_after)

        # Use DFS to find group order
        visited_group = [0] * m
        group_order = []
        for group_id in range(m):
            if self.has_cycle(graph_group, group_id,
                              visited_group, group_order):
                return []

        # Use DFS to find item order in each group
        full_item_order = []
        for group_id in group_order:
            for item_id in group_items_map[group_id]:
                if self.has_cycle(graph_item[group_id], item_id,
                                  visited_item[group_id], full_item_order):
                    return []
        return full_item_order[::-1]
```
```C++ []
class Solution {
public:
    // Topological Sort
    vector<int> topologicalSort(vector<unordered_set<int> >& graph, vector<int>& indegree) {
        vector<int> order;
        int processed = 0, n = graph.size();
        
        queue<int> q;
        // Add 0 indegree nodes
        for(int node = 0; node < n; node++) 
            if(indegree[node] == 0)
                q.emplace(node);
        
        while(!q.empty()) {
            auto node = q.front();
            q.pop();
            
            // process the node
            ++processed;
            order.emplace_back(node);
            
            // Remove its dependence
            for(auto neighbor: graph[node]) {
                --indegree[neighbor];
                if(indegree[neighbor] == 0)
                    q.emplace(neighbor);
            }
        }
        
        return processed < n ? vector<int>{} : order;
    }
    
    vector<int> sortItems(int n, int m, vector<int>& group, vector<vector<int>>& beforeItems) {
        // Each node without a group will be self contained in a new group with only itself
        // Set the new group id for each isolated node
        for(int node = 0; node < n; node++)
            if(group[node] == -1)
                group[node] = m++;
        
        // We create two graphs, one for the groups and another for the actual nodes
        vector<unordered_set<int> > group_graph(m), node_graph(n);
        // Stores the indegree for: Amongst Groups and nodes respectively
        vector<int> group_indegree(m, 0), node_indegree(n, 0);
        
        // Create cyclic graph for group and individual nodes
        for(auto node = 0; node < n; node++) {
            // Group to which the current node belongs
            int dst_group = group[node];
            // Source Groups on which the current node has a dependency
            for(auto src_node: beforeItems[node]) {
                int src_group = group[src_node];
                // check if the dependency is inter group or intra group
                // It is inter group dependency, make sure that the same dst_group was not seen
                // before, otherwise indegree will get additional 1, same logic for the node_graph
                if(dst_group != src_group && !group_graph[src_group].count(dst_group)) {
                    group_graph[src_group].emplace(dst_group);
                    ++group_indegree[dst_group];
                }
                
                // Add the dependency amongst the nodes
                if(!node_graph[src_node].count(node)) {
                    node_graph[src_node].emplace(node);
                    ++node_indegree[node];
                }
            }
        }
        
        // Perform topological sort at a node level 
        vector<int> ordered_nodes = topologicalSort(node_graph, node_indegree);
        // Perform topological sort at a group level
        vector<int> ordered_groups = topologicalSort(group_graph, group_indegree);
        // Overall order of nodes
        vector<int> order;
        
        // For each group, put the ordered nodes after topological sort
        vector<vector<int> > group_ordered_nodes(m);
        for(auto node: ordered_nodes)
            group_ordered_nodes[group[node]].emplace_back(node);
        
        // Now that within each group, all the nodes are ordered.
        // Using the topological sort info about the groups, just put the nodes in that order
        for(auto group: ordered_groups) 
            for(auto node: group_ordered_nodes[group])
                order.emplace_back(node);
        
        return order;
    }
};
```
---
![download.jpg](./images/1.jpeg)

---

```