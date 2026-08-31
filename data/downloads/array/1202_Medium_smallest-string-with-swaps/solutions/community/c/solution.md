# Simple C++ Solution || Full Concept Explained With Code

**Author:** ritesh_inf
**Votes:** 23
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/1199922/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/1199922/)

---

**We just need to group all pairs using DSU. And after grouping them together we will have connected componend (pairs) together. Which means we have to sort each connected component because we need smallest lexical string. **

***Suppose The Input Is ***
s = "dcab", pairs = [[0,3],[1,2]]

Then 0---3 is forming one group let's say 0 
1--2 is forming one group let's say 1 

**So,  we have two connected component**
index->      0  1 2 3
 Now         "d c a b"   sort the connected component i.e indexes sort(0,3) and (1,2) 
                 "b c a d"   (0,3 sorted)
				 "b a c d"   (1,3 sorted)
				 
				 "b a c d"   (answer)

***Suppose The Input Is 
s = "dcab", pairs = [[0,3],[1,2],[0,2]]	***

Then 0---3 is forming one group let's say 0 
1--2 is forming one group let's say 1
again 0--2 is forming group since 0 and 2 was already in group , hence everyone is under same group (DSU)
**0-1-2-3 is under same group . Hence we have only 1 connected component **. 

**So,  we have one connected component**
index->      0  1 2 3
 Now         "d c a b"   sort the connected component i.e sort indexes (0,1,2,3)
                  "a b c d"  sorted (0,1,2,3)
				  				  
				  "a b c d" (answer)
				 
			   
```
class Solution {
    vector<int>parent; 
public:
    
    int findParent(int n){
        if(parent[n]==n){
            return n; 
        }
        return parent[n] = findParent(parent[n]); 
    }
    
    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
        
        parent.resize(s.length());
        map<int , set<int>>obj;
        set<int>idx;
        string ans=s;
        
        
        for(int i=0; i<parent.size(); i++){
            parent[i]=i;
        }
        
        for(int i=0; i<pairs.size(); i++){
            int u = pairs[i][0];
            int v = pairs[i][1];
            int fx = findParent(u);
            int fy = findParent(v);
            
            if(fx!=fy){
                parent[fy]=fx; 
            }
                 
        }
        for(int i=0; i<pairs.size(); i++){
            
            int u = pairs[i][0];
            int v = pairs[i][1];
            
            int fx = findParent(u);
            obj[fx].insert(u);
            obj[fx].insert(v);
              
        }
        
        for(auto it = obj.begin(); it!=obj.end(); it++){
            
            idx = it->second;
            vector<pair<char,int>>t; 
            auto index=idx.begin(); 
            
            for(index=idx.begin(); index!=idx.end(); index++){
                 
                 int pos = *index;
                 char ch = s[pos]; 
                 t.push_back({ch,pos}); 
            }
            
            sort(t.begin() , t.end()); 
            index=idx.begin(); 
            
            for(int i=0; i<t.size(); i++){ 
                 
                ans[*index] = t[i].first;
                index++; 
            } 
        
        }
       
        return ans;
    }
};
```
                     
					                            "Do Upvote If You Liked The Solution"