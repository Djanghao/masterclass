# Detailed Video Solution | Java C++ Python

**Author:** jeevankumar159
**Votes:** 47
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3934487/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3934487/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/7pMcYX0LhPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Code
```Java []
class Solution {
    public int[] sortItems(int n, int m, int[] group, List<List<Integer>> beforeItems) {
        int groupId = m;
        for (int i = 0; i < n; i++) {
            if (group[i] == -1) {
                group[i] = groupId++;
            }
        }
        Map<Integer, List<Integer>> itemGraph = new HashMap<>();
        int[] itemIndegree = new int[n];
        for (int i = 0; i < n; ++i) {
            itemGraph.put(i, new ArrayList<>());
        }
        
        Map<Integer, List<Integer>> groupGraph = new HashMap<>();
        int[] groupIndegree = new int[groupId];
        for (int i = 0; i < groupId; ++i) {
            groupGraph.put(i, new ArrayList<>());
        }
        
        for (int i = 0; i < n; i++) {
            for (int prev : beforeItems.get(i)) {
                itemGraph.get(prev).add(i);
                itemIndegree[i]++;
                if (group[i] != group[prev]) {
                    groupGraph.get(group[prev]).add(group[i]);
                    groupIndegree[group[i]]++;
                }
            }
        }
        List<Integer> itemOrder = topologicalSort(itemGraph, itemIndegree);
        List<Integer> groupOrder = topologicalSort(groupGraph, groupIndegree);
        
        if (itemOrder.isEmpty() || groupOrder.isEmpty()) {
            return new int[0];
        }
        Map<Integer, List<Integer>> orderedGroups = new HashMap<>();
        for (Integer item : itemOrder) {
            orderedGroups.computeIfAbsent(group[item], k -> new ArrayList<>()).add(item);
        }
        
        List<Integer> answerList = new ArrayList<>();
        for (int groupIndex : groupOrder) {
            answerList.addAll(orderedGroups.getOrDefault(groupIndex, new ArrayList<>()));
        }
        
        return answerList.stream().mapToInt(Integer::intValue).toArray();
    }
    
    private List<Integer> topologicalSort(Map<Integer, List<Integer>> graph, int[] indegree) {
        List<Integer> visited = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        for (int i = 0;i<indegree.length;i++) {
            if (indegree[i] == 0) {
                stack.add(i);
            }
        }
        
        while (!stack.isEmpty()) {
            Integer curr = stack.pop();
            visited.add(curr);
            
            for (Integer n : graph.get(curr)) {
                indegree[n]--;
                if (indegree[n] == 0) {
                    stack.add(n);
                }
            }
        }

        return visited.size() == graph.size() ? visited : new ArrayList<>();
    }
}
```
```c++ []
class Solution {
public:
    vector<int> sortItems(int n, int m, vector<int>& group, vector<vector<int>>& beforeItems) {
        int groupId = m;
        for (int i = 0; i < n; i++) {
            if (group[i] == -1) {
                group[i] = groupId++;
            }
        }
        unordered_map<int, vector<int>> itemGraph;
        vector<int> itemIndegree(n, 0);
        for (int i = 0; i < n; ++i) {
            itemGraph[i] = vector<int>();
        }
        
        unordered_map<int, vector<int>> groupGraph;
        vector<int> groupIndegree(groupId, 0);
        for (int i = 0; i < groupId; ++i) {
            groupGraph[i] = vector<int>();
        }
        
        for (int i = 0; i < n; i++) {
            for (int prev : beforeItems[i]) {
                itemGraph[prev].push_back(i);
                itemIndegree[i]++;
                if (group[i] != group[prev]) {
                    groupGraph[group[prev]].push_back(group[i]);
                    groupIndegree[group[i]]++;
                }
            }
        }
        vector<int> itemOrder = topologicalSort(itemGraph, itemIndegree);
        vector<int> groupOrder = topologicalSort(groupGraph, groupIndegree);
        
        if (itemOrder.empty() || groupOrder.empty()) {
            return vector<int>();
        }
        unordered_map<int, vector<int>> orderedGroups;
        for (int item : itemOrder) {
            orderedGroups[group[item]].push_back(item);
        }
        
        vector<int> answerList;
        for (int groupIndex : groupOrder) {
            answerList.insert(answerList.end(), orderedGroups[groupIndex].begin(), orderedGroups[groupIndex].end());
        }
        
        return answerList;
    }
    
    vector<int> topologicalSort(unordered_map<int, vector<int>>& graph, vector<int>& indegree) {
        vector<int> visited;
        stack<int> stk;
        for (int i = 0; i < indegree.size(); i++) {
            if (indegree[i] == 0) {
                stk.push(i);
            }
        }
        
        while (!stk.empty()) {
            int curr = stk.top();
            stk.pop();
            visited.push_back(curr);
            
            for (int n : graph[curr]) {
                indegree[n]--;
                if (indegree[n] == 0) {
                    stk.push(n);
                }
            }
        }

        return visited.size() == graph.size() ? visited : vector<int>();
    }
};

```
```python []
class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        groupId = m
        for i in range(n):
            if group[i] == -1:
                group[i] = groupId
                groupId += 1
        
        itemGraph = defaultdict(list)
        itemIndegree = [0] * n
        groupGraph = defaultdict(list)  # Initialize groupGraph
        groupIndegree = [0] * groupId
        
        for i in range(n):
            for prev in beforeItems[i]:
                itemGraph[prev].append(i)
                itemIndegree[i] += 1
                if group[i] != group[prev]:
                    groupGraph[group[prev]].append(group[i])
                    groupIndegree[group[i]] += 1
        
        itemOrder = self.topologicalSort(itemGraph, itemIndegree)
        groupOrder = self.topologicalSort(groupGraph, groupIndegree)
        
        if not itemOrder or not groupOrder:
            return []
        
        orderedGroups = defaultdict(list)
        for item in itemOrder:
            orderedGroups[group[item]].append(item)
        
        answerList = []
        for groupIndex in groupOrder:
            answerList.extend(orderedGroups[groupIndex])
        
        return answerList
    
    def topologicalSort(self, graph: Dict[int, List[int]], indegree: List[int]) -> List[int]:
        visited = []
        stk = []
        for i in range(len(indegree)):
            if indegree[i] == 0:
                stk.append(i)
        
        while stk:
            curr = stk.pop()
            visited.append(curr)
            
            for n in graph[curr]:
                indegree[n] -= 1
                if indegree[n] == 0:
                    stk.append(n)
        
        return visited if len(visited) == len(graph) else []

```
