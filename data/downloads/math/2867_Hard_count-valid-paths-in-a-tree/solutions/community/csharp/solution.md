# C# Union-Find + Math Theory

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083005/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083005/)

---

# Code
```
public class Solution {
    Dictionary<int, int> map = new();
    const int N = (int)1e5 + 10, M = N * 2;
    int[] h = new int[N], e = new int[M], ne = new int[M];
    int[] cr = new int[N], node = new int[N];
    int idx = 0;
    
    public long CountPaths(int n, int[][] edges) {
        Sieve(n + 1);
        for(int i = 0; i <= n + 1; i++){
            h[i] = -1;
            cr[i] = 1;
            node[i] = i;
        }
        for(int i = 0; i < edges.Length; i++){
            int u = edges[i][0], v = edges[i][1];
            Build(u, v);
            Build(v, u);
        }
     
        Dfs(2, 2);
        long owo = 0;
        foreach(var kvp in map){
            int u = kvp.Key;
            if(u > n) break;
            long qaq = 0, uwu = 0;
            for(int i = h[u]; i != -1; i = ne[i]){
                if(map.ContainsKey(e[i])) continue;
                else{
                    qaq = uwu * cr[node[e[i]]];
                    uwu += cr[node[e[i]]];
                    owo += qaq;
                }
            }
            owo += uwu;
        }
        return owo;
    }
    
    public void Dfs(int u, int fa){
        for(int i = h[u]; i != -1; i = ne[i]){
            int j = e[i];
            if(j == fa) continue;
            if(!map.ContainsKey(u) && !map.ContainsKey(j)){
                cr[Find(u)] += cr[Find(j)];
                node[Find(j)] = Find(u); 
            }
            Dfs(j, u);
        }
    }
    
    public int Find(int x){
        return x == node[x] ? x : node[x] = Find(node[x]);
    }
    
    public void Build(int u, int v){
        e[idx] = v; ne[idx] = h[u]; h[u] = idx++;
    }
    
    public void Sieve(int n){
        int[] p = new int[n + 1];
        List<int> primes = new();
        for(int i = 2; i < n; i++){
            if((p[i] & 1) == 0){
                p[i]++;
                map[i] = 1;
                primes.Add(i);
            }
            foreach(var pr in primes){
                if(pr * i > n) break;
                p[pr * i]++;
                if(i % pr == 0) break;
            }
        }
    }
}
```