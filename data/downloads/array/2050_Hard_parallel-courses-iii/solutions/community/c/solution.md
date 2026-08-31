# [C++] Topological Sort (Kahn's Algorithm, BFS)

**Author:** PhoenixDD
**Votes:** 39
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/1537481/](https://leetcode.com/problems/parallel-courses-iii/solutions/1537481/)

---

## Key observations

1. One may can notice that at each node/course we want to know the maximum time of it's parent node/previous course to be completed, this would be the starting time of this node/course.
1. We can only reach a node/course if all it's previous (pre-requisite) nodes/courses are completed. This essentially means we want to traverse the graph in topological order.

All we want to do now is topologically propogate the maximum time a parent node finishes in to it's child node and store the maximum time required to finish processing that child node. At the end we'll just need to find the maximum of these finish times to get our result.

## Solution
* We use Kahn's algorithm to traverse the graph topologically.
* We want to create and adjacency list to easily traverse the graph and start with the nodes that have `in-degree=0`.
* We will store the time taken to complete all nodes and a vector `cTime`.
* We will also store the time taken to reach/start processing the node `node` in the queue.

At each node we want to process it from the queue using the following rules.

1. Add `time[node]` to the time it took to reach the node, this will give us the completion time of that node. (The time we finish the course)
1. We would store this in `cTime` vector.
1. Next we go through all it's children and update their `cTime` as maximum of the current completion time and previous noted `cTime`. This is an intermediate value which actually stores the maximum time it took to reach this node.
1. We reduce in-degree of all children and if it's `0` we add it to our queue with it's start time as `cTime[child]`.

Once we process all nodes and the queue is empty `cTime` would store the completion time of each `node`.

All we need to do now is get the maximum of them which would mean all nodes have been processed byt hat time.

```c++
class Solution {
public:
    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {
        vector<vector<int>> adjList(n);
        vector<int> inDegree(n),cTime(n,0);
		
        for(auto &r:relations) {           // Create adjacency list and in degree count vectors.
            adjList[r[0]-1].push_back(r[1]-1);
			inDegree[r[1]-1]++;
		}
        queue<pair<int,int>> q;
		
        for(int i=0;i<n;i++)             // Get all nodes with in-degree=0 and store add them to the queue.
            if(!inDegree[i])
                q.push({i,0});

        while(!q.empty()) {
            auto [node,t]=q.front();     // Process node `node`.
            q.pop();
			
			// Completion time of the current node the time when the processing started `t`
			// (Max time at which prerequisutes completed) + the time taken to process it `time[node]`.
            int completionTime=t+time[node];
            cTime[node]=completionTime;   // Store the final completion time of the node `node`.
            
			for(int &n:adjList[node]) {
				// Update the intermediate completion time of the child node `n`.
				// This means that node `n` would start processing at least at `cTime[n]`.
                cTime[n]=max(cTime[n],completionTime);
				
                if(!--inDegree[n])        // Add the node with in-degree=0 to the queue.
                    q.push({n,cTime[n]});
            }
        }
		// Return the maximum time it took for a node/course to complete as our result.
        return *max_element(cTime.begin(),cTime.end());
    }
};
```

## Complexity
Time: `O(N+E)`. Where `N` is the number of nodes and `E` is the number of edges.
Space: `O(N+E)`. Where `N` is the number of nodes and `E` is the number of edges.