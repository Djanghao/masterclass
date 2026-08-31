# C++ || EASY EXPLANATION || DFS ||

**Author:** Abhay_Rautela
**Votes:** 724
**Link:** [https://leetcode.com/problems/clone-graph/solutions/1792834/](https://leetcode.com/problems/clone-graph/solutions/1792834/)

---


                               'I\u2019ve got nothing to say but it\u2019s okay, good morning, good morning\uD83D\uDE01\uD83D\uDE01'
							   
### OBSERVATIONS
```
1. Cloned Graph has all nodes as newnodes and don't have node as reference to given original graph.
2. Graph has no practical edges, i.e no pointers for edges.
         (2,3)            (1,3)<---adj list
		  (1)-------------(2)
		    |              |
			|              |
			|              |
		  (4)-------------(3)
		  (1,3)          (2,4)
If i say '1' is my starting point and how should i jump to '2' for that i have to iterate through this adjacency list.
```
### ALGORITHM TO USE
```
We need to traverse all node of original graph and as soon as we reach a node, we will make a copy node.
And recur for rest of the graph.
This is a typical recursion type problem implemented on Graph.
For 'Recursion' we use basically 'DFS' or 'BFS'.
I am using DFS
```
### KEY POINTS
```
1. We use HashMap to solve it and using DFS.
2. Initially our hash map will be empty and we try to map the old node with the new node or the copy node.
3. We start with any entry point.
4. I am using '1' as my entry point.

Now lets see how its going i am starting with 1 and whenever i visited a new node i coloned it and put in there.
We are using DFS so algorithm is like 'it starts at the root node (select some arbitrary node as root node in the case of a graph) and explores as far as possible along each branch before backtracking.
So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacentunmarked node and continue this loop until there is no unmarked adjacent node. 
Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path.'
So we are using HashMap to put all the visited node or old node there with clone one to.
 _________
| HashMap |
 ----------
|Old|Clone| 
| 1  | 1 |
|  2 | 2 |
|  3 | 3 |                                                     
|  4 | 4 |                                                                                                            
---------

Now i started with 1 so i cloned it and from 1 can go to 2 and 4 so i go 2 and when i visited 2 i cloned 2 and now fro  i have two choices either go to previous one that is 1 or discover 3 i.e new node
so accordingly to dfs i go to 3 and from 3 i can go to 4 i go there and cloned it. Now if we see fro each node we have viisted to a new node but what about 4. So here half part of Dfs is completed,
and now its time for recursive call to go back and now from here we check from current node i can go where and where.
And follow the same rules over there.

BUT BEFORE STARTING ANY CLONING WE HAVE TO CHECK THAT IF WE HAVE CLONED THAT NODE ALREADY THERE OR NOT. IF NOT THAN ONLY WE CLONED IT. 

Thats the only reason we are using hash map so that we don't need to clone again and again.
For every uncloned node we make a clone and iterate over the neighbors of original node using dfs traversal or bfs traversal.
```

## CODE
```
                                          'IF YOU LIKE IT THEN PLS UpVote\uD83D\uDE0E\uD83D\uDE0E\uD83D\uDE0E'
class Solution {
    public:
    Node* dfs(Node* cur,unordered_map<Node*,Node*>& mp)
    {
        vector<Node*> neighbour;
        Node* clone=new Node(cur->val);
        mp[cur]=clone;
            for(auto it:cur->neighbors)
            {
                if(mp.find(it)!=mp.end())   //already clone and stored in map
                {
                    neighbour.push_back(mp[it]);    //directly push back the clone node from map to neigh
                }
                else
                    neighbour.push_back(dfs(it,mp));
            }
            clone->neighbors=neighbour;
            return clone;
    }
    Node* cloneGraph(Node* node) {
        unordered_map<Node*,Node*> mp;
        if(node==NULL)
            return NULL;
        if(node->neighbors.size()==0)   //if only one node present no neighbors
        {
            Node* clone= new Node(node->val);
            return clone; 
        }
        return dfs(node,mp);
    }
};
```