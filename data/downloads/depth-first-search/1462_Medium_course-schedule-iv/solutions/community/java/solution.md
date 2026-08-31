# Transitive closure - Floyd Warshall with detailed explaination - python ,c++, java

**Author:** sankethbk7777
**Votes:** 58
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/660578/](https://leetcode.com/problems/course-schedule-iv/solutions/660578/)

---

Brute force :
    for each i th query 
        start dfs from queries[i][0]
        if you reach queries[i][1] return True 
        else False
        


Since there can be 10^4 queries, we cannot do dfs every time for each query to
find if there is a path between queries[i][0] and queries[i][1]

We must answer each query in O(1) time 

What is transitive closure of a graph 

It is a matrix m in which 
m[i][j] is True if there j is reachable from i (can be a more than 1 edge path)
m[i][j] is False if j cannot be reached from i


Once we get the matrix of transitive closure, each query can be answered in O(1) time 
eg: query = (x,y) , answer will be m[x][y] 

To compute the matrix of transitive closure we use Floyd Warshall's algorithm which takes O(n^3) time and O(n^2) space.

Python3 

```
class Solution:
    def checkIfPrerequisite(self, n: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
    
        def floydWarshall(reachable):
            for k in range(n):
                for i in range(n):
                    for j in range(n):
                        reachable[i][j] = reachable[i][j] or (reachable[i][k] and reachable[k][j])
            
            return reachable
            
        
        adjMatrix =  [[ 0 for i in range(n)] for j in range(n)]
        for i in prerequisites:
            adjMatrix[i[0]][i[1]] = 1
        
        #print(adjMatrix)
        ans = []
        floydWarshall(adjMatrix)
        #print(adjMatrix)
        for i in queries:
            ans.append(bool(adjMatrix[i[0]][i[1]]))
        
        return ans
```

C++
```
class Solution {
public:
    vector<bool> checkIfPrerequisite(int n, vector<vector<int>>& prerequisites, vector<vector<int>>& queries) {
        
        vector<vector<int>> adjMatrix(n, vector<int>(n));
        for (int i = 0; i < prerequisites.size(); ++i){
            adjMatrix[prerequisites[i][0]][prerequisites[i][1]] = 1;
        }
        
        FloydWarshall(n, adjMatrix);
        vector<bool> ans;
        
        for (int i = 0; i < queries.size(); ++i){
            ans.push_back(adjMatrix[queries[i][0]][queries[i][1]]);
        }
        
        return ans;
        
    }
    
    void FloydWarshall(int n, vector<vector<int>>& m){
        
        for (int k = 0; k < n ; ++k){
            for (int i = 0; i < n ; ++i){
                for (int j = 0; j < n ; ++j){
                    m[i][j] = m[i][j] or (m[i][k] and m[k][j]);
                }
            }
        }
    }
};
```

Java

```

class Solution {
    public List<Boolean> checkIfPrerequisite(int n, int[][] prerequisites, int[][] queries) {
        
        boolean adjMatrix[][] = new boolean[n][n];
        
        for (int[] i : prerequisites){
            adjMatrix[i[0]][i[1]] = true;
        }
        
        for (int k = 0; k < n; ++k){
            for (int i = 0; i < n ; ++i){
                for (int j = 0; j < n ; ++j){
                    adjMatrix[i][j] = adjMatrix[i][j] || (adjMatrix[i][k] && adjMatrix[k][j]);
                }
            }
        }
        
        List<Boolean> ans = new ArrayList<Boolean>();
        
        for (int i = 0; i < queries.length; ++i){
            ans.add(adjMatrix[queries[i][0]][queries[i][1]]);
        }
        
        return ans;
        
        
    }
}

```

