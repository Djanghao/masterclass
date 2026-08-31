# C#| DFS| Easy solution

**Author:** shwetaja
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4816632/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4816632/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
In this problem, we want to find out the number of server pairs that are connectable through every server i.

We will make every node of the graph as server c and we need to find server 'a' and server 'b' that are connectable through c.

The 1st condition for two servers a and b to be connectable through a server 'c' is that:
The path from 'c' to 'b' and the path from 'c' to 'a' 
do not share any edges.
What this means is that server 'a' and server 'b' should be on different branches of server 'c'.
Neighbours of server 'c' are called as its branches.
So, what we will do is we will take each node as  server 'c' and then explore its neighbours.
For each neighbour we will run a DFS and find out the eligible servers.Eligible servers are those whose distance from server 'c' is divisible by signal speed.We will store the count of those servers in currCount.
After 1st neighbour is explored in this way and we
have calculated the currCount for that neighbour,
we will go to the next neighbour of server 'c'.
Before going to the next neighbour,we will calculate
the ans using the formula:
ans+= prevCount*currCount

What is prevCount here?
prevCount stores total of all the eligible servers
found till now on different neighbours of server 'C'
prevCount=prevCount+currCount

How formula ans=prevCount*currCount works?
Now, as we know currCount denotes no of eligible
servers on current branch of server 'c' and prevCount denotes no of eligible servers on previously explored branches of server 'c',
every server in currCount will make pair with every
server in prevCount.That's why we are doing multiplication
to get the total no of pairs of server 'a' and 'b'.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    int currCnt=0;
    int prevCnt=0;
    int ss=0;
    int ans=0;
    
    public void DFS(List<List<(int,int)>> adj,HashSet<int> visited,int source,int start,int dist)
    {
        
        for(int i=0;i<adj[start].Count;i++)
        {
            int nei=adj[start][i].Item1;
            
            if(visited.Contains(nei))
            {
                continue;
            }
            visited.Add(nei);
            dist+=adj[start][i].Item2;
          
            if(dist%ss==0)
            {
                currCnt++;
            }
            DFS(adj,visited,source,nei,dist);
            dist-=adj[start][i].Item2;
            if(start==source)
            {
                ans+=(prevCnt*currCnt);
                prevCnt=prevCnt+currCnt;
                currCnt=0;
            }
        }
    }
    public int[] CountPairsOfConnectableServers(int[][] edges, int signalSpeed) 
    {
        List<List<(int,int)>> adj=new List<List<(int,int)>>();
        int n=edges.Length+1;
        ss=signalSpeed;
        int[] result=new int[n];
        HashSet<int> visited=new HashSet<int>();
        
        for(int i=0;i<n;i++)
        {
            adj.Add(new List<(int,int)>{});
        }
        
        //Create adj List
        for(int i=0;i<edges.Length;i++)
        {
            int u=edges[i][0];
            int v=edges[i][1];
            int wt=edges[i][2];
            adj[u].Add((v,wt));
            adj[v].Add((u,wt));
        }
        
        for(int i=0;i<n;i++)
        {
            visited.Add(i);
            DFS(adj,visited,i,i,0);
            result[i]=ans;
            ans=0;
            prevCnt=0;
            currCnt=0;
            visited.Clear();
        }
        
        return result;
    }
}
```