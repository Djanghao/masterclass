# [C++] || Easy to understand with comments || Topological Sort || BFS

**Author:** aayush21
**Votes:** 24
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/1192284/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/1192284/)

---

```
class Solution {
public:
    bool validateBinaryTreeNodes(int n, vector<int>& leftChild, vector<int>& rightChild) { 
        
        // CREATE A GRAPH
       
        vector<vector<int>> graph(n); 
        
        //NUMBER OF EDGES IN GRAPH
        int edge = 0; 
        
        for(int i = 0; i < n; i++) {   
            if(leftChild[i] != -1) {
                graph[i].push_back(leftChild[i]);   
                ++edge;
            } 
            if(rightChild[i] != -1) { 
                graph[i].push_back(rightChild[i]); 
                ++edge;
            } 
        }
        
        //CHECK FOR SELF LOOPS AND CYCLES
        queue<int> q; 
        vector<bool> visited(n, false); 
        vector<int> indegree(n, 0); 
        int ctr = 0; 
        
        for(int i = 0; i < graph.size(); i++) { 
            for(int j = 0; j < graph[i].size(); j++) { 
                indegree[graph[i][j]]++;
            }
        } 
        
        for(int i = 0; i < indegree.size(); i++) {  
            
            //NODE SHOULD HAVE EITHER ZERO OR ONE AS INDEGREE 
            
            if(indegree[i] > 1) { 
                return false;
            }
            if(indegree[i] == 0) { 
                q.push(i); 
                ctr++;
            }
        } 
        
        while(!q.empty()) { 
            int front = q.front(); 
            visited[front] = true; 
            q.pop(); 
            
            for(int i : graph[front]) { 
                
                indegree[i]--;
                
                if(!visited[i] && indegree[i] == 0) { 
                    q.push(i); 
                    ctr++;
                }
            }
        } 
        
        //IF CYCLES ARE PRESENT OR EDGES ARE NOT EQUAL TO N-1 RETURN FALSE 
        
        if(ctr != n || edge != n-1) { 
            return false;
        }  
        
        //ELSE RETURN TRUE 
        
        return true;
    }
};
```