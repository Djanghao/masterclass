# ✅ 97.18% 2-Approaches Topological Sorting

**Author:** vanAmsen
**Votes:** 29
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3933793/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3933793/)

---

# Problem Understanding

In the "Sort Items by Groups Respecting Dependencies" problem, we are given `n` items each belonging to one of `m` groups or to no group at all. Each item might have dependencies, which are other items that need to come before it in a sorted order. The task is to return a sorted list of items such that items from the same group are adjacent and the dependencies between items are respected.

For instance, given `n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]`, the output should be `[6,3,4,1,5,2,0,7]`.

**Input**: `n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]`
**Output**: `[6,3,4,1,5,2,0,7]`

---

# Live Coding
https://youtu.be/5aG9GUpBOMI

# Performance Comparison:

| Version | Language | Runtime (ms) | Runtime Beat (%) | Memory (MB) | Memory Beat (%) |
|---------|----------|--------------|------------------|-------------|-----------------|
| Kahn's Approach | Python  | 345 ms       | 97.18%           | 33.1 MB     | 96.61%           |
| Two-tier      | Python   | 373 ms       | 81.36%           | 57.8 MB     | 5.8%            |

The table clearly shows the improvement in performance using the 2nd Kahn Approach.

---

# Approach: Topological Sorting

To solve the "Sort Items by Groups Respecting Dependencies" problem, we leverage topological sorting. The challenge requires a two-tier topological sort: first on the groups and then on the items within each group.

## Key Data Structures:
- **Deque**: Efficiently handles nodes without predecessors (in-degree of 0) during the topological sort.
- **DefaultDict**: Manages relationships, mapping items to groups, and tracking predecessors and successors.

## Enhanced Breakdown:

1. **Initialization**:
   - **`group_to_items`**: A defaultdict mapping groups to their respective items.
   - **`new_group`**: A counter initialized to `m` to assign unique group numbers to ungrouped items.
   - **`intra_pred`, `intra_succ`, `inter_pred`, `inter_succ`**: Defaultdicts to manage intra-group and inter-group dependencies.

2. **Assigning Groups and Mapping Items**:
   - Iterate over all items.
   - If an item doesn't belong to any group (`group[item] == -1`), assign it a new unique group.
   - Map the item to its respective group in `group_to_items`.

3. **Constructing Dependency Relationships**:
   - Iterate over all items.
   - For each item, check its `beforeItems` dependencies.
   - If a dependency belongs to the same group, it's an intra-group dependency. Update `intra_pred` and `intra_succ`.
   - If a dependency belongs to a different group, it's an inter-group dependency. Update `inter_pred` and `inter_succ`.

4. **Topological Sort**:
   - **On Groups**:
     - Using `group_to_items`, perform a topological sort on the groups based on inter-group dependencies.
     - If the sort fails (due to a cycle or any other reason), return an empty list.
   - **On Items within Groups**:
     - For each sorted group, perform a topological sort on its items based on intra-group dependencies.
     - If the sort fails for any group, return an empty list.
     - If successful, append the sorted items of the group to the `items_order` list.

5. **Return Result**:
   - After processing all groups and their items, return the `items_order` list.

This approach ensures that the topological sort respects both the group-level and item-level dependencies, providing a solution that aligns with the problem's requirements.

---

# Complexity:

**Time Complexity:**
- **Adjacency List Construction**: $$ O(n^2) $$ due to potential item dependencies in `beforeItems`.
- **Topological Sort (Items)**: $$ O(n^2) $$ as every vertex and edge might be visited/processed.
- **Topological Sort (Groups)**: $$ O(n^2) $$ as there can be up to $$ n $$ groups.
- **Overall**: $$ O(n^2) $$.

**Space Complexity:**
- **Adjacency Lists**: $$ O(n^2) $$ in the worst case for items and groups.
- **In-degree Storage**: $$ O(n) $$ for items and groups.
- **Stack in Topological Sort**: $$ O(n) $$ for items or groups.
- **Overall**: Dominated by adjacency lists, so $$ O(n^2) $$.

---

# Code - Two-tier
``` Python []
class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        
        def topologicalSort(nodes, pred, succ):
            order, no_pred = [], deque(node for node in nodes if not pred[node])
            while no_pred:
                node = no_pred.popleft()
                order.append(node)
                for s in succ[node]:
                    pred[s].discard(node)
                    if not pred[s]:
                        no_pred.append(s)
            return order if len(order) == len(nodes) else []
        
        group_to_items, new_group = defaultdict(set), m
        for item in range(n):
            if group[item] == -1: group[item] = new_group; new_group += 1
            group_to_items[group[item]].add(item)
        
        intra_pred, intra_succ, inter_pred, inter_succ = defaultdict(set), defaultdict(set), defaultdict(set), defaultdict(set)
        for item in range(n):
            for before in beforeItems[item]:
                if group[item] == group[before]:
                    intra_pred[item].add(before)
                    intra_succ[before].add(item)
                else:
                    inter_pred[group[item]].add(group[before])
                    inter_succ[group[before]].add(group[item])
        
        groups_order = topologicalSort(list(group_to_items.keys()), inter_pred, inter_succ)
        if not groups_order: return []
        
        items_order = []
        for grp in groups_order:
            order = topologicalSort(group_to_items[grp], intra_pred, intra_succ)
            if not order: return []
            items_order.extend(order)
        
        return items_order

```

# Approach: Topological Sorting using Kahn's Algorithm

To solve the "Sort Items by Groups Respecting Dependencies" problem, we utilize Kahn's topological sorting algorithm. The challenge requires a two-tier topological sort: first on the groups and then on the items within each group. 

For more insights on Kahn's algorithm, refer to the [Wikipedia page on Topological Sorting](https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm).

## Implementation:

### `topologicalSort` function:

This function is an implementation of Kahn's algorithm. It sorts the nodes of a graph based on their dependencies.

**Parameters**:
- `successors`: An adjacency list representing nodes' relationships.
- `predecessors_count`: A list where each entry indicates the number of predecessors (or incoming edges) for the respective node.
- `num_nodes`: Total number of nodes to be sorted.

**Workflow**:
1. Initialize the `order` list to store the sorted nodes.
2. Identify nodes with no incoming edges (no predecessors) and add them to a deque.
3. While the deque is not empty:
   - Dequeue a node and append it to the `order` list.
   - For every successor of the current node, decrement its predecessor count.
   - If a successor node has no remaining predecessors, enqueue it.
4. Return the `order` list if all nodes are sorted; otherwise, return an empty list indicating the presence of a cycle.

### `sortItems` function:

This function sorts items based on their group dependencies and intra-group dependencies.

**Parameters**:
- `n`: Number of items.
- `m`: Number of groups.
- `group`: A list indicating the group of each item.
- `beforeItems`: A list of dependencies for each item.

**Workflow**:
1. Assign items with no group to their unique groups.
2. Create adjacency lists for items and groups (`successors_item` and `successors_group`).
3. Populate the adjacency lists and update the predecessor counts based on the dependencies provided in `beforeItems`.
4. Call `topologicalSort` for groups and items to get their respective orders (`groups_order` and `items_order`).
5. If either of the orders is empty (indicating a cycle), return an empty list.
6. Arrange items based on the sorted order of their groups.
7. Return the final sorted order of items.

---

**Time Complexity**:
The overall time complexity of the implementation is $$O(|V| + |E|)$$, where $$|V|$$ is the number of vertices (or nodes) and $$|E|$$ is the number of edges (or relationships). This accounts for the linear time complexity of Kahn's algorithm, which is applied separately for both items and groups.

**Space Complexity**:
The space complexity is dominated by the adjacency lists and predecessor counts, resulting in a complexity of $$O(|V| + |E|)$$.

# Code - Kahn's
``` Python []
class Solution:
    def topologicalSort(self, successors: List[List[int]], predecessors_count: List[int], num_nodes: int) -> List[int]:
        order = []
        nodes_with_no_predecessors = deque(node for node in range(num_nodes) if not predecessors_count[node])
        
        while nodes_with_no_predecessors:
            node = nodes_with_no_predecessors.popleft()
            order.append(node)
            for successor in successors[node]:
                predecessors_count[successor] -= 1
                if not predecessors_count[successor]:
                    nodes_with_no_predecessors.append(successor)
        
        return order if len(order) == num_nodes else []

    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        for item in range(n):
            if group[item] == -1: 
                group[item] = m
                m += 1
        
        successors_group, successors_item = [[] for _ in range(m)], [[] for _ in range(n)]
        predecessors_count_group, predecessors_count_item = [0] * m, [0] * n
        
        for item in range(n):
            current_group = group[item]
            for before in beforeItems[item]:
                before_group = group[before]
                if current_group == before_group:
                    successors_item[before].append(item)
                    predecessors_count_item[item] += 1
                else:
                    successors_group[before_group].append(current_group)
                    predecessors_count_group[current_group] += 1
        
        groups_order = self.topologicalSort(successors_group, predecessors_count_group, m)
        items_order = self.topologicalSort(successors_item, predecessors_count_item, n)
        
        if not groups_order or not items_order:
            return []
        
        items_grouped = [[] for _ in range(m)]
        for item in items_order:
            items_grouped[group[item]].append(item)
        
        result = []
        for grp in groups_order:
            result.extend(items_grouped[grp])
        
        return result

```

This problem beautifully showcases the power of topological sorting in organizing items based on dependencies. Mastering such foundational algorithms can greatly simplify complex tasks! \uD83D\uDCA1\uD83C\uDF20\uD83D\uDC69\u200D\uD83D\uDCBB\uD83D\uDC68\u200D\uD83D\uDCBB
