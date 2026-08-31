# the best solution

**Author:** abody_ali2
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5707832/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5707832/)

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
    static void dfs(int node , List<List<int>>graph , bool [] visit ,HashSet<int>path   ){
        visit[node]=true; 
        path.Add(node);
       
        foreach(var v in graph[node]){
            path.Add(v);
              if(!visit[v] ){
                dfs(v , graph ,visit , path );
            }
           
        }
        
        
       
    }
    public int CountCompleteComponents(int n, int[][] e) {
        List<List<int>> graph=new List<List<int>>(); 
        for(int i =0  ; i<n ; i++) graph.Add(new List<int>()); 
        for(int i = 0 ;i<e.Length;  i++){
            graph[e[i][0]].Add(e[i][1]); 
            graph[e[i][1]].Add(e[i][0]); 
        }
        bool [] vist =new bool [n]; 
        int ans=0 ;  
     
        for(int i = 0 ; i<n ; i++){
             
            if(!vist[i]){
                   HashSet<int>path=new HashSet<int>(); 
               dfs(i ,graph , vist ,path  ) ; 
               bool result=true ;
                
               foreach(var k in path){
                if(graph[k].Count !=path.Count-1){
                    result=false ; 
                    break ;
                }
               }
               if(result) ans++; 
               
            }
            
            
            

        }
        
        return ans; 
        
    }
}
```