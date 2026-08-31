# Simple DFS

**Author:** codeanzh
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2198534/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2198534/)

---

**Approach**

Math and a lil bit DP
a xor a = 0
0 xor a = a

**Remove any two edge pair and find the xors of the rest three group of nodes from the tree after removing these edges and then find the min of the required expression**

* DFS on the tree and recurcively store the xor of the node below or at this node as child_xor
* Add the parent child pair in this dfs
* now make two loops for removing every two edge permutation and find the three xors of subsection
* If you remove an edge the tree will devide in two parts, you can find the seperate xors by the properties of xor that is, a xor a = 0 and 0 xor a = a .
* Suppose a is a node which is a ansestor of b ans a1, a2, a3, .. an is the nodes between a and b and b have childs b1, b2, b3, .. bn, you can find the xor of childs of a after removing b as child_xor[a] xor child_xor[b].
* Explaination of above step child_xor[a] = a ^ a1 ^ a2 ^ .... a^n ^ b ^ b1 ^ b2 ^ ... ^ bn, chid_xor[b] = b ^ b1 ^ b2 ^ ... ^ bn. So now child_xor[a] xor child_xor[b] = (a ^ a1 ^ a2 ^ .... a^n ^ b ^ b1 ^ b2 ^ ... ^ bn) ^ (b ^ b1 ^ b2 ^ ... ^ bn), now all the same xors will be 0 and 0 xor any number is any number therefor child_xor[a] xor child_xor[b] = a ^ a1 ^ a2 ^ .... a^n, this is xors of all the node except b and its childrens.
* To find if a node is a child of node b I've also maintained a boolian 2D array name childs to store that a is a child of b

**Time and Space complexity**

* Time Compexity is O(E^2), V is number of vertex or node and E is number of edges which will be V - 1 so Over all complexity will be O(V^2) = O(n^2) and also DFS will have a complexity of O(V^2 + E) due to parent traversal! still Overall complexity will be O(V^2) = O(n^2)
* Space Complexity O(n^2) for parent child boolean array, O(n) for storing child_xors and O(n) for DFS call stack so Overall complexity will be O(n^2)

**C++ Code**

```
class Solution {
    vector<bool> visited;
    vector<vector<int>> pc, adj; // pc is the parent child edge in our dfs
    vector<vector<bool>> childs; // 2D array to store that i is a parent of j
    vector<int> child_xor, nums, par; // child_xor to store result of xors of a child node and par is a gloable array to track the parents of a node in dfs
    
    int dfs(int i) {
        int ans = nums[i];
        visited[i] = true;
		
		for (int p: par) childs[p][i] = true; // Defining this node as the child of all its parents
		
        par.push_back(i);
        
        for (int child: adj[i])
            if (!visited[child]) {
                pc.push_back({i, child});
                ans ^= dfs(child); // Recurcively calculating xors
            }
        
        par.pop_back();
        
        return child_xor[i] = ans;
    }
public:
    int minimumScore(vector<int>& nums, vector<vector<int>>& edges) {
		// Initialising gloable variables
        int n = nums.size(), ans = INT_MAX;
        visited = vector<bool>(n);
        pc = vector<vector<int>>();
        adj = vector<vector<int>>(n);
        child_xor = vector<int>(n, 0);
        childs = vector<vector<bool>>(n, vector<bool>(n, false));
        this->nums = nums;
		par = vector<int>();
		
		// Creating an adjacency matrix
        for (vector<int> &edge: edges) adj[edge[0]].push_back(edge[1]), adj[edge[1]].push_back(edge[0]);
		
        dfs(0);
        
        for (int i = 0; i < pc.size(); i++)
            for (int j = i + 1; j < pc.size(); j++) { // removing an edge i and j
                int a = pc[i][1], b = pc[j][1]; // node that will come below when you delete an edge i and j
                int xa = child_xor[a], xb = child_xor[b], xc = child_xor[0];
                
                if (childs[a][b])
                    xc ^= xa, xa ^= xb;
                else
                    xc ^= xa, xc ^= xb;
                
                ans = min(max(xa, max(xb, xc)) - min(xa, min(xb, xc)), ans);
            }
        
        return ans;
    }
};
```

**Python Code**

```
class Solution:
    def minimumScore(self, nums: List[int], edges: List[List[int]]) -> int:
        n = len(nums)
        visited = [False for _ in range(n)]
        pc = [] # Store the parent child edge node in our dfs
        adj = [[] for _ in range(n)]
        
        for edge in edges:
            adj[edge[0]].append(edge[1])
            adj[edge[1]].append(edge[0])
        
        childs = [[False for _ in range(n)] for _ in range(n)] # To store if node a contains b as on of its child tree
        child_xor = [0 for _ in range(n)] # To store the xor of node a and all its child tree
        par = [] to store parents of a node a while doing DFS
        
        def dfs(i: int) -> int:
            ans = nums[i]
            visited[i] = True
            
            for p in par: childs[p][i] = True
                
            par.append(i)
            
            for child in adj[i]:
                if (not visited[child]):
                    pc.append([i, child])
                    ans ^= dfs(child)
            
            par.pop()
            child_xor[i] = ans
            
            return ans
        
        dfs(0)
        
        ans = 1000000000
        
        for i in range(len(pc)):
            for j in range(i + 1, len(pc)):
                (a, b) = (pc[i][1], pc[j][1])
				(xa, xb, xc) = (child_xor[a], child_xor[b], child_xor[0])
                
                if childs[a][b]: # here a is an ancestor of b or a has b in its child tree
                    xc ^= xa
                    xa ^= xb
                else:
                    xc ^= xa
                    xc ^= xb
                
                ans = min(max(xa, xb, xc) - min(xa, xb, xc), ans)
        
        return ans
```