# Straight forward DSU approach with explanation and comments

**Author:** _AUGustus_
**Votes:** 12
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/1644701/](https://leetcode.com/problems/accounts-merge/solutions/1644701/)

---

**Intuition** :  As we can observe this a question where some merging is involved ,so the first thought that comes to our mind is Union find approach by making sets or classes of users. So we'll try to put all users with same name and who have any email matching into one class. If you are not comfortable with DSU ,then try to learn it by doing other simpler questions such as [Reduntant connection](htthttps://leetcode.com/problems/redundant-connection/p://).

```
class Solution {
public:
    // standard union find methods
    
    int find(int node,vector<int>&parent) {
        while(parent[node] != node) {
            node = parent[node];
        }
        
        return node;
    }
    
    void unify(int i, int j,vector<int>&parent) {
        int iRoot = find(i,parent);
        int jRoot = find(j,parent);
        
        if(iRoot != jRoot) {
            parent[jRoot] = iRoot;
        }
        
    }
    vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
        int n=accounts.size();
        vector<int>parent(n);
        for(int i=0;i<n;i++)
            parent[i]=i;
        map<string,int>mp; // map which will store the string and their IDs
        
        //iterate through all the strings and put it int the map if it is not seen till now else merge that ID with the already seen ID.
        for(int i=0;i<n;i++)
        {
           for(int j=1;j<accounts[i].size();j++)
           {
               if(mp.find(accounts[i][j])==mp.end())
               {
                   mp[accounts[i][j]]=i;
               }
               else
               {
                   unify(mp[accounts[i][j]],i,parent);
               }
           }
        }
        
       // finding the total number of unique users or total classes that we have in total, after merging
      int cnt=0;
        for(int i=0;i<n;i++)
        {
               
            if(parent[i]==i)
                cnt++;
        }
        
          vector<vector<string>>ans(cnt,vector<string>());
        
        // now putting them into our final answer by using a map which will maintain the IDs
        int newidx=0;
        map<int,int>mp1;
        for(auto &e:mp)  // iterate through this map as it contains all unique strings only
        {
            string mail=e.first;
            int index=e.second;
            int grouphead=find(index,parent); // find class or grouphead of that index
            if(mp1.find(grouphead)==mp1.end())
            {
              
                mp1[grouphead]=newidx;
                ans[newidx].push_back(accounts[grouphead][0]);  // putting the name at first index
                ans[newidx].push_back(mail);
                newidx++;
            }
            else
            {
                int putindex=mp1[grouphead];
                ans[putindex].push_back(mail);
            }
            
        }
        // sorting the emails
        for(int i=0;i<ans.size();i++)
        {
            sort(ans[i].begin()+1,ans[i].end());
        }
      return ans;
    }
};
```

