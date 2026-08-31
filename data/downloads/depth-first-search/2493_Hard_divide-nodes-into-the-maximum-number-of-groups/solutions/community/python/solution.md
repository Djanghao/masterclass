# Imaginary Thread, Most Optimised Python(BFS)

**Author:** manvendra_yadav
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/3055877/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/3055877/)

---

# Intuition
Let all nodes be tied along a thread and placed on a pice of paper, now if we hold a node upwards untill there is some tension in the thread, now all the nodes will be vertically sequential. Here the longest thread will be our answer

# Complexity
- Time complexity:
O(N^2)

- Space complexity:
(N)

# Code
```
class Solution(object):
    def magnificentSets(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: int
        """
        graph = collections.defaultdict(list)

        for edge in edges:
            graph[edge[0]].append(edge[1])
            graph[edge[1]].append(edge[0])
        
        group_count_to_component_map = {}     
        node_to_component_map = {}

        for node in range(1, n+1):
            level = 1
            queue = [node]
            #let component index be same as the node
            component_idx = node

            #since we need to get the group size for all nodes in the component so a fresh node_to_component_idx_map is required if 
            #the node is already part of the compoent and later on for swapping back a temp pointer is stored
            temp_map = node_to_component_map

            if node in node_to_component_map:
                new_component = False
                component_idx = node_to_component_map[node]
                #this is done to calculate the size again
                node_to_component_map = {node:component_idx}
            else:
                node_to_component_map[node] = component_idx
                new_component = True
            
            while queue:
                current_breadth = set()

                for _ in range(len(queue)):
                    current_breadth.add(queue.pop(0))
                
                next_group = []

                for node in current_breadth:
                    for ngb in graph[node]:
                        if ngb in current_breadth:
                            return -1

                        if ngb not in node_to_component_map:
                            node_to_component_map[ngb] = component_idx
                            next_group.append(ngb)
                
                if next_group:
                    level += 1
                
                queue = next_group
            
            node_to_component_map = temp_map

            if new_component:
               group_count_to_component_map[component_idx] = level
            else:
                if level > group_count_to_component_map[component_idx]:
                    group_count_to_component_map[component_idx] = level
        
        count = 0

        for component, g_size in group_count_to_component_map.items():
            count += g_size
        
        return count







```