# Beats 100% C# submissions - Kruskal's algorithm

**Author:** phumney89
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/3492064/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/3492064/)

---

# Intuition
As per the solution explantions in the discussion section.

# Approach
Add an imaginary node 0 to calculate the cost of using wells.
Find the minimum spanning tree.

# Complexity
- Time complexity: (Please correct if I'm wrong)
O(w+p), where w = no. of wells, p = no.of pipes 

- Space complexity: (Please correct if I'm wrong)
O(w+p), where w = no. of wells, p = no.of pipes

# Code
```
public class Solution {
    public int MinCostToSupplyWater(int n, int[] wells, int[][] pipes) {
        
        PriorityQueue<int[],int> pq = new();

        //pipes
        foreach(int[] pipe in pipes){
            pq.Enqueue(new int[]{pipe[0], pipe[1]}, pipe[2]);
        }
        //wells
        for(int i = 0 ; i < wells.Length; i++){
            pq.Enqueue(new int[]{0, i+1}, wells[i]);
        }

        int totalCost = 0, count=n+1;;
        UnionFind uf = new UnionFind(n+1);
        while(pq.Count>0){
            pq.TryDequeue(out int[] point, out int cost);
            if(!uf.IsConnected(point[0], point[1])){
                uf.Union(point[0], point[1]);
                totalCost += cost;
                count--;
                if(count==0)
                    break;
            }
        }

        return totalCost;
    }
}

public class UnionFind{
    int[] root;
    int[] rank;
    public UnionFind(int size){
        root = new int[size];
        rank = new int[size];
        for(int i = 0; i < size ; i++){
            root[i] = i;
            rank[i] = 1;
        }
    }
    
    int Find(int x){
        if(x==root[x])
            return x;
        return root[x] = Find(root[x]);
    }
    
    public void Union(int x, int y){
        int rootX = Find(x);
        int rootY = Find(y);
        if(rootX!=rootY){
            if(rank[rootX]>rank[rootY])
                root[rootY] = rootX;
            else if(rank[rootY]>rank[rootX])
                root[rootX] = rootY;
            else{
                root[rootY] = rootX;
                rank[rootX] +=1;
            }
        }
    }
    public bool IsConnected(int x, int y){
        return Find(x)==Find(y);
    }
}
```