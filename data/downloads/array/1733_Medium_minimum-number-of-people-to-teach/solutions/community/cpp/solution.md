# c++ easy solution using hashmap

**Author:** samiksha_1405
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1032766/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1032766/)

---

```
class Solution {
public:
    bool intersection(vector<int>a,vector<int>b){
       for(int i=0;i<a.size();i++){
           for(int j=0;j<b.size();j++){
              
               if(a[i]==b[j])return true;
           }
       
       }
        return false;
    }
    
    int minimumTeachings(int n, vector<vector<int>>& languages, vector<vector<int>>& friendships) {
        unordered_map<int,vector<int>>ump;
        int l=languages.size();
        int f=friendships.size();
        set<int>s;
        for(int i=0;i<f;i++){
            
            if(!intersection(languages[friendships[i][0]-1],languages[friendships[i][1]-1])){
                
                s.insert(friendships[i][0]);
                s.insert(friendships[i][1]);
            }
        }
        
       
        for(int j=0;j<l;j++){
            if(s.find(j+1)==s.end()) continue;
            for(int k=0;k<languages[j].size();k++){
                 ump[languages[j][k]].push_back(j+1);
            }
        }
        
        int ans=0;
        for(int i=1;i<=ump.size();i++){
           if(ans<ump[i].size())ans=ump[i].size();
        }
          
        return s.size()-ans;
        
        
    }
};
```