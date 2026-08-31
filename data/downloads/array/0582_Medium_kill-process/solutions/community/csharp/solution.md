# C# - [Made Simple] Graph BFS

**Author:** TheSnappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/kill-process/solutions/3842433/](https://leetcode.com/problems/kill-process/solutions/3842433/)

---

# Intuition and Approach
- Create an adjacency list from the given two lists `ppid` and `pid`
- Iterate from the `kill` value through its entire subtree

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
public class Solution {
    
    Dictionary<int, List<int>> adjList;
    
    public IList<int> KillProcess(IList<int> pid, IList<int> ppid, int kill) {
        this.adjList = new Dictionary<int, List<int>>();

        for (int idx = 0; idx < pid.Count; idx++){
            var parent = ppid[idx];
            var node = pid[idx];

            if (!this.adjList.ContainsKey(parent)){
                this.adjList[parent] = new List<int>();
            }
            this.adjList[parent].Add(node);
        }

        var returnList = new List<int>();
       
        var queue = new Queue<int>();
        queue.Enqueue(kill);

        while (queue.Count > 0){
            var cur = queue.Dequeue();
            returnList.Add(cur);

            if (!this.adjList.ContainsKey(cur)){
                continue;
            }

            foreach (var node in this.adjList[cur]){
                queue.Enqueue(node);
            }
        }
        
        return returnList;
    }
}
```