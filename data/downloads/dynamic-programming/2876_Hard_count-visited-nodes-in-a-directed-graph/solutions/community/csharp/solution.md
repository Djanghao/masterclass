# DFS

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4143619/](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4143619/)

---


# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
public class Solution {
    public int[] CountVisitedNodes(IList<int> edges) {
        int n = edges.Count;
        int[] V = new int[n];
        for(int i=0;i<n;i++)
        {
            if(V[i]!=0)
                continue;            
            Traverse(edges, i, V);
        }
        return V;
    }
    
    private void Traverse(IList<int> edges, int start, int[] V)
    {
        HashSet<int> H = new ();
        H.Add(start);
        int next = edges[start];
        
        while(!H.Contains(next) && V[next]==0)
        {
            H.Add(next);
            next = edges[next];
        }
        if(V[next] != 0)
        {
            int end = next;
            V[start] = V[next] + H.Count;
            int prev = start;
            next =  edges[start];
            while(next != end)
            {
                V[next] = V[prev]-1;
                prev = next;
                next = edges[next];
            }
            
        }
        else       
          TraverseWithCircle(edges,  start,  V, H, next);
    }
    private void TraverseWithCircle(IList<int> edges, int start, int[] V, HashSet<int> H, int end)
    {
        V[start] = H.Count;
        int next = edges[start];
        bool circle = (start==end);
        int prev = start;
        while(circle==false && next != end)
        {
            V[next] = V[prev]-1;
            prev = next;
            next = edges[next];
        }
        
        V[next] =circle?  V[prev]: V[prev]-1;        
        prev = next;
        next = edges[next];
        while(next!=end)
        {
            V[next] = V[prev];
            prev = next;
            next = edges[next];
        }
        
    }
}
```