# BEATS 99% in time and 78% in space C# solution. DFS and BFS solution. Well commented.

**Author:** Aadityakiran_S
**Votes:** 5
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/4016679/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/4016679/)

---

# General intuition
The logic is the same as that from the editorial solution. I just thought I'd made this C# code much more readable and easy to understand. 

We're basically doing a traversal. Since **all roads** need to **lead from other cities to 0**, if we traverse using an original edge away from zero, that edge should be removed => all original edges should have a weight of 1 and fake edges (edges in reverse that we add for the express purpose of traversing the tree) should have a weight of 0.

# Approach 1: DFS
Nothing fancy, just regular DFS. No need for any seen data stracture since it's a tree anyway.

# Algorithm
- Use an adjList to store the graph. Put `ai -> bi` as the original road and give it a weight of 1. 
- Put `bi -> ai` also in the list with a weight of 0.
- DFS from 0 and at every step keep incrementing count using sign.
- No need for any seen/cache data structure to prevent looping. Since it's given that the input is a tree like structure, only need to make sure we don't loop between parent and child => just skip over DFS when we encounter parent in the connection list of child.

# Complexity
- Time complexity: `O(n)` since we visit each node once to explore it

- Space complexity: `O(h)` at max height of the tree will be in the stack at any one time.

# Code
```
public class Solution {
    public int MinReorder(int n, int[][] roads) {
        //graph is defined as an adjList with sign to denote if original (1) or fake (0) road
        // and connection to denote which city that road leads to
        List<List<(int sign, int conn)>> adj = new(); int count = 0;

        //Initialization
        for(int i = 0; i < n; i++){ adj.Add(new List<(int sign, int conn)>()); }

        //Populating
        foreach(int[] road in roads){
            adj[road[0]].Add((1, road[1])); //Adding original road
            adj[road[1]].Add((0, road[0])); //Adding fake road
        }

        DFS(0, -1); //DFS from 0. 

        return count;

        void DFS(int curr, int par){            
            foreach((int sign, int conn) nei in adj[curr]){
                if(nei.conn == par) continue; //Don't want to go in a loop => skip parent in child

                count += nei.sign; //Keep adding sign
                DFS(nei.conn, curr); //Do DFS on child using curr as parent
            }
        }
    }
}
```

# Approach 2: BFS
Simple, bare-bones BFS traversal. Simply count the number of nodes going away from the 0 (original nodes) each time we explore. That's it.

# Algorithm
- Use an adjList to store the graph. Put `ai -> bi` as the original road and give it a weight of 1. 
- Put `bi -> ai` also in the list with a weight of 0.
- The queue in the BFS traversal should have the current and the parent node so that we can know what the parent is of the current node to prevent looping.

# Complexity
- Time complexity: `O(n)` since we visit each node once to explore it

- Space complexity: `O(w)` at max width of the tree will be in the queue at any one time.

# Code
```
public class Solution {
    public int MinReorder(int n, int[][] roads) {
        List<List<(int sign, int conn)>> adj = new(); int count = 0;

        for(int i = 0; i < n; i++){ adj.Add(new List<(int sign, int conn)>()); }
        foreach(int[] pair in roads){
            adj[pair[0]].Add((1, pair[1])); //Original road is given a weight of 1
            adj[pair[1]].Add((0, pair[0])); //Fake/Aritifical road is given a weight of 0
        }

        //Doing BFS
        //Need to keep track of parent to prevent infinite loop
        Queue<(int node, int par)> queue = new(); queue.Enqueue((0, -1));
        while(queue.Count > 0){
            int size = queue.Count;
            for(int i = 0; i < size; i++){
                (int curr, int par) = queue.Dequeue();
                foreach(var entry in adj[curr]){
                    if(entry.conn == par) continue; //Skipping parent
                    
                    count += entry.sign; //Keeping count of all roads leading away from 0
                    queue.Enqueue((entry.conn, curr)); //Adding in queue for further processing
                }
            }
        }

        return count;
    }
}
```
# Approach 3: DFS and BFS variation
This is a variation that BingChat gave me to this question. It involves setting the value of the real edge as +ve and the fake edge as -ve rather than attach another flag to it. Pretty compact. Same complexities. 

```
public class Solution {
    public int MinReorder(int n, int[][] roads) {
        //Adjacency List declaration
        List<int>[] adj = new List<int>[n];
        for(int i = 0 ; i < n; i++){ adj[i] = new List<int>(); }

        //Original and fake roads should be differentiated.
        // Put +ve for original road and -ve for fake road
        foreach(int[] road in roads){ 
            adj[road[0]].Add(road[1]); adj[road[1]].Add(-road[0]); 
        }

        //Perform BFS
        Queue<(int curr, int par)> queue = new(); queue.Enqueue((0, -1));
        int count = 0;
        while(queue.Count > 0){
            int size = queue.Count;
            for(int i = 0; i < size; i++){
                (int curr, int par) = queue.Dequeue();

                foreach(int entry in adj[curr]){
                    if(Math.Abs(entry) == par) continue;

                    if(entry > 0) { count++; }
                    queue.Enqueue((Math.Abs(entry), curr));
                }
            }
        }

        return count; //Comment from line 13-30 and you can get the DFS approach

        return DFS(0, -1); //Start DFS from 0 to count roads leading away from zero

        int DFS(int curr, int par){
            int count  = 0; //Keep count of how many nodes from this node need to be changed
            foreach(int nei in adj[curr]){
                if(Math.Abs(nei) == par) continue; //Skip over parent to prevent self loop

                if(nei > 0){ count++; } //If edge is original => add count
                count += DFS(Math.Abs(nei), curr); //Incrementing node count
            }
            return count;
        }
    }
}
```