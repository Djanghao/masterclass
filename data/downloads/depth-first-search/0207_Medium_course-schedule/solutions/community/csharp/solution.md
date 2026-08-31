# C# | Kahn's Algorithm | Topological Sort | Detailed approach + Comments | Runtime 108ms beats 91%

**Author:** anaken
**Votes:** 10
**Link:** [https://leetcode.com/problems/course-schedule/solutions/3614546/](https://leetcode.com/problems/course-schedule/solutions/3614546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This well-known algorithm for topological sort is called Kahn's algorithm. The algorithm is named after its inventor, Arthur B. Kahn.

Kahn's algorithm is used to perform a topological sort on a directed acyclic graph (DAG). A topological sort is an ordering of the vertices in a DAG such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.

Here's a high-level overview of Kahn's algorithm:

1. Initialize an empty list, `result`, to store the sorted vertices.
2. Compute the in-degree (number of incoming edges) for each vertex in the graph and store it in a data structure such as an array or a dictionary.
3. Create a queue and enqueue all the vertices with an in-degree of 0.
4. While the queue is not empty:
   - Dequeue a vertex, `v`, from the queue.
   - Add `v` to the `result` list.
   - For each neighbor, `n`, of `v`:
     - Decrement the in-degree of `n` by 1.
     - If the in-degree of `n` becomes 0, enqueue `n`.
5. If the `result` list contains all the vertices in the graph, return it as the topological order; otherwise, the graph has a cycle, and a topological sort is not possible.

Kahn's algorithm works by iteratively removing vertices with no incoming edges, which are guaranteed to be in the topological order. The process continues until all vertices have been processed or a cycle is detected.

It's worth noting that there are other algorithms for performing topological sorting, such as depth-first search (DFS) and Tarjan's algorithm, but Kahn's algorithm is one of the most commonly used and easiest to understand.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## If you found my solution and explanation helpful, please consider upvoting it. Your upvote will help rank it higher among other solutions, making it easier for people seeking assistance to find. Feel free to ask any follow-up questions in the comment section. Thank you for reading!**

# Code
```
public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) 
    {
        // Initializing the adjency List with the length set as the total number of courses.
        List<int>[] adjencyList = new List<int>[numCourses];

        for(int i = 0 ; i < numCourses ; i++)
        {
            adjencyList[i] = new List<int>();
        }

        for(int i = 0 ;  i < prerequisites.Length ; i++)
        {
           // Adding the edge to the graph
           // Its a directed graph so edges goes from course 1 to course 0 as
           // in the problem statement its mentioned 
           //"For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1."
           adjencyList[prerequisites[i][1]].Add(prerequisites[i][0]);
        }

        int[] indegree = new int[numCourses];

        for(int i = 0 ; i < numCourses ; i++)
        {
            // Calculating indegree's for all nodes for the next step.
            foreach(int j in adjencyList[i])
            {
              indegree[j]++;
            }
        }

        Queue<int> queue = new Queue<int>();
     
        for(int i = 0 ; i < indegree.Length ; i++)
        {
                        // Adding nodes with indegree 0 as they will be the starting nodes with no edges to them.
            if(indegree[i] == 0)
            {
               Console.WriteLine($"{i} is added to the queue for start nodes");
               queue.Enqueue(i);
            }
        }

        int nodeCount = queue.Count;
        while(queue.Count != 0)
        {
            int temp = queue.Dequeue();
            foreach(int i in adjencyList[temp])
            {
                // Adding the next childs or the dependent courses to the queue
                if(--indegree[i] == 0)
                {
                    queue.Enqueue(i);
                    nodeCount++;
                    Console.WriteLine($"{i} is added to the queue for further nodes");
                }
            }
        }

        if(nodeCount == numCourses)
        {
            return true;
        }
        return false;
    }
}
```