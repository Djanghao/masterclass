# Intuition Explained || Union-Find || C++ Clean Code

**Author:** i_QUaSaR
**Votes:** 9
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/1526583/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/1526583/)

---

**Intuition:** 

* First idea that strikes if connect all possible pair of cities from 1 to n, if `gcd(i, j)` greater than `threshold` given. But, this approach will give TLE as it take around `O(N^2)` time. 

* So more efficient idea here is for every city with value greater than `threshold` , we connect it with other cities that are its multiple in range less than n.
    
		Ex : Threshold = 2, n = 20 => start city = {3, 4, 5, ..... n}
		
		city : 3 -- 3*m , where m = 1,2,3 .... such that 3*m <= 20
		city : 4 -- 4*m , where m = 1,2,3 .... such that 4*m <= 20
		. 
		.
		.
		.
		. 
		
		In general, connect city i with its multiple 
		-> i.e (i -- i*m) , j = 1,2,3.... such that i*m <= n

* Now, that we have built the DSU with all possible connections made, we just need to find if pair of cities given in query belong to same component or not. In this way we can surely say that there is direct/indirect path between pair of cities given in query.
    
		i.e. parent(i) == parent(j), where queries[k] = {i, j}, and k = 0,1,.... queries.size()

# Code: 

```
// DSU Class Template
class DSU {
    vector<int> parent, size;
public: 
    
    DSU(int n) {
        for(int i=0; i<=n; i++) {
            parent.push_back(i);
            size.push_back(1);
        }
    }
    
    int findParent(int num) {
        if(parent[num] == num) return num;
        return parent[num] = findParent(parent[num]);
    }
    
    void unionBySize(int u, int v) {
        int parU = findParent(u);
        int parV = findParent(v);
        
        if(parU == parV) return;
        
        if(size[parU] < size[parV]) {
            parent[parU] = parV;
            size[parV] += size[parU];
        }
        else {
            parent[parV] = parU;
            size[parU] += size[parV];
        }
    }
};

class Solution {
public:
    vector<bool> areConnected(int n, int threshold, vector<vector<int>>& queries) {
        
        DSU dsu(n);
        
		// Make connections with its multiple
        for(int i=threshold+1; i<=n; i++) {
            int j = 1;
            while(i*j <= n) {
                dsu.unionBySize(i, i*j);
                j++;
            }
        }
        
        vector<bool> res;
        for(auto& query : queries) {
            int u = query[0];
            int v = query[1];
            
			// Check if both cities belong to same component or not
            if(dsu.findParent(u) == dsu.findParent(v)) res.push_back(true);
            else res.push_back(false);
        }
        
        return res;
    }
};
```

***If you find this solution helpful, please give it a like :)***