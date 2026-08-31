# C# Very fast solution, the code is commented to explain the approach

**Author:** sfGISyFVBO
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/6076344/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/6076344/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool IsPossible(int n, IList<IList<int>> edges) {

        var even = new MakeEven();
        return even.IsPossible(n,edges);
    }
}

public class MakeEven {
    
    private Dictionary<int, HashSet<int>> Edges {get;} = new();

    private HashSet<int> OddNodes {get;}= new();
    
    private int MaxNodeId {get; set;}
    
    private void AddEdge(int a, int b) {
        if (!Edges.ContainsKey(a)) Edges.Add(a, new HashSet<int>());
        if (!Edges.ContainsKey(b)) Edges.Add(b, new HashSet<int>());
        Edges[a].Add(b);
        Edges[b].Add(a);
        UpdateOddList(a);
        UpdateOddList(b);
    }
    
    private void RemoveEdge(int a, int b) {
        Edges[a].Remove(b);
        Edges[b].Remove(a);
        UpdateOddList(a);
        UpdateOddList(b);
    }
    
    private void UpdateOddList(int node){
        //we don't need to track the exact number edges of each node
        //during the process of adding or removing edges of a node we simply
        //remove it from this Set if it exists ou add to the set it does not exist
        if (OddNodes.Contains(node)) OddNodes.Remove(node);
        else OddNodes.Add(node);
    }
    
    public bool IsPossible(int n, IList<IList<int>> edges) {
        
        MaxNodeId = n;

        //the AddEdge method builds the graph and also tracks the Odd nodes;
        //take a look at the comments in UpdateOddList method
        for (var x = 0; x< edges.Count; x++)
        {
            var a = edges[x][0];
            var b = edges[x][1];
            AddEdge(a,b);
        }
        
        /*
        foreach (var oNode in OddNodes.ToList())
        {
            Console.Write($"Odd: {oNode} --> ");
            foreach(var edge in Edges[oNode])
            {
                Console.Write($"{edge}  ");
            }
            Console.WriteLine();
        }
        */
        
        if (OddNodes.Count == 0) return true;

        //since we have a maximum of 2 edges to add, 
        //it is not possible to solve the problem if we find more than 4 odd nodes
        //without this line you will exceede the time limit
        if (OddNodes.Count > 4) return false;
        
        //lets try to fix, ONLY the OddNodes
        foreach(var oddNode in OddNodes.ToList())
        {
            if (DSF(oddNode, 1)) return true; 
        }

        return false;
    }

    private bool DSF(int node, int level)
    {
        if (level>2) return false;
        
        //we try to connect two odd nodes
        //that way we fix 2 nodes with a single edge
        var candidates = OddNodes.ToList();

        //but we need an extra option to be able to deal with this scenario
        //n: 3, edges: [1, 2]
        //to solve this we need to create [1,3] and [2,3] edges
        for (var n = 1; n <= MaxNodeId; n++)
        {
            if (n == node) continue;
            if (Edges[node].Contains(n)) continue;
            candidates.Add(n);
            break;
        }

        /*
        Console.Write($"Level: {level}, Node: {node} => Canditates: ");
        foreach(var c in candidates){
            Console.Write($" {c} ");
        }
        Console.WriteLine();
        */
        
        foreach (var candidate in candidates) {
            //the node cannot connect to itself
            if (candidate == node) continue;
            //the node and candidate cannot have a previous connection 
            if (Edges[node].Contains(candidate)) continue;
            
            //lets create the new edge;
            //the AddEdge also updates the OddNodes set
            AddEdge(candidate, node);
            
            if (OddNodes.Count() == 0) return true;
            
            //we try to fix the remaining OddNodes
            foreach (var remainingOddNode in OddNodes.ToList())
            {
                if (DSF(remainingOddNode, level+1)) return true;
            }
            
            RemoveEdge(candidate, node);
        }
        return false;
    }
    
}
```