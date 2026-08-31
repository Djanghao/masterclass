# Simple - Intuitive Explanation - Beats 99% in theory as well as compute 😉[PYTHON]

**Author:** rrqq
**Votes:** 92
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/465923/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/465923/)

---

# **Points to remember**
1. About the **START**:
	* It's a continuous graph - there is a START vertex - we chose this and every other vertex can be visited/discovered by just doing Depth First Traversal from START
	* With respect to START every vertex will be visited/discovered/explored in the process of DFTraversal - If the graph was a straight line with no back-paths/bypass/shortcuts/cycle each node would be discovered linearly in time for e.g. if graph looked like **A**-B-C-D  where we chose A to be the start 0-1-2-3 will be the respective discovery time.

2. About **any other NODE** in the graph:
	* For any node let's call all its **neighbors (except parent)** its **children** and this current node to be the **parent**.
	* Every **parent** expects it's children  to be **discovered later than themselves** as the parent blindly expects that the only connection with the child is of his. This parent is the only one to guide this child - That's what every parent expects and they do their best.
	* If the **expectaion meets the reality** can we say that there is no cycle (no bypass or back path from **uncle/aunt** or any **grandparent** to the child node)? 
	* **If** expectation meets reality then its a **critical edge** - No one except the parent is there to guide this child - sure it's critical.
	* **Else** there exists other connections may be from an uncle or aunt or may be from a grandparent and that makes the connection between the parent and child not so critical.

3. About **low** a.k.a **low-links** or think of them **as the distance of a single node or a cycle from START** (if there is a cycle, all nodes in the cycle will have the same low value as the node which is the entry point of the cycle - entry point w.r.t the start node)

	* **low** or **rank** are nothing but the distance from the start - a cycle is grouped and represented by all nodes in that cycle having the same low value.
	* Again assume if the graph is linear - a single line of nodes - the low/rank of every node will just be the discovery time of that node e.g. A-B-C-D if **A is the start** 0-1-2-3 will be the lows.
	* JUST FOR ILLUSTRATION  - But if there is a bypass/back path or a shortcut A-**B**-C-D-**B** (here **B** is same node - I just cant draw a loop here - Please imagine \uD83D\uDE1D) then the lows would be 0-1-1-1-1 as B-C-D-B is a cycle and is grouped by all of the individual nodes having same low as the exepcted (as well as actual - it's same for **B**) dicovery time of **B** from the start. 
	
# **Critical Key**
The intuition is in points 2 and 3 and **use of backpropagation (return) of the low[node]** to tell the parent that what it **expects** is either right or wrong. The parent can then make the decision to add the edge (parent, child) as critical or not.

1. If **expectaion meets the reality** or **actual_discovery_time_of_child >= expected_discovery_time_of_child** then the edge is critical as **no uncle or aunt or grandparent** are able to reach the child faster then the current parent.
2. Else there is a backpath or other parent/uncle/grandparent is also conencted to the child.


```python

class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        
        # node is index, neighbors are in the list
        graph = [[] for i in range(n)]
        
        # build graph
        for n1, n2 in connections:
            graph[n1].append(n2)
            graph[n2].append(n1)
        
        # min_discovery_time of nodes at respective indices from start node
        # 1. default to max which is the depth of continuous graph
        lows = [n] * n
        
        # critical edges 
        critical = []
        
        # args: node, node discovery_time in dfs, parent of this node
        def dfs(node, discovery_time, parent):
            
            # if the low is not yet discovered for this node
            if lows[node] == n:
                
                # 2. default it to the depth or discovery time of this node
                lows[node] = discovery_time
                
                # iterate over neighbors
                for neighbor in graph[node]:
                    
                    # all neighbors except parent
                    if neighbor != parent:
                        
                        expected_discovery_time_of_child = discovery_time + 1
                        actual_discovery_time_of_child = dfs(neighbor, expected_discovery_time_of_child, node)
                        
                        # nothing wrong - parent got what was expected => no back path
                        # this step is skipped if there is a back path
                        if actual_discovery_time_of_child >= expected_discovery_time_of_child:
                            critical.append((node, neighbor))
                        
                        # low will be equal to discovery time of this node or discovery time of child
                        # whichever one is minm
                        # if its discovery time of child - then there is a backpath
                        lows[node] = min(lows[node], actual_discovery_time_of_child)
                        

            # return low of this node discovered previously or during this call 
            return lows[node]
        
        dfs(n-1, 0, -1)
        
        return critical     
```


Let me know if there's any typo/mistake or any thing is missing!!

Love \u2764\uFE0F and **UPVOTE** for everyone to read - \u270C\uFE0FI'll add more explanations if you guys find this simple enough..