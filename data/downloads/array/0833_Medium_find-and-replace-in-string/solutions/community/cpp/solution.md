# C++ || Clean and Concise || Map/HashMap

**Author:** jk20
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/1682737/](https://leetcode.com/problems/find-and-replace-in-string/solutions/1682737/)

---

**Uncomment the HashMap Iteration to see how strings are stored in hashmap.**
```
class Solution {
public:
    string findReplaceString(string s, vector<int>& indices, vector<string>& sources, vector<string>& targets) {
        
        
       map<int,pair<string,string>>hash;
        
        int n=indices.size();
        int i;
        for(i=0;i<n;i++)
        {
            int start_idx=indices[i];
            string have=sources[i];
            string convert=targets[i];
            
            if(s.substr(start_idx,have.size())==have)
            hash[start_idx]={have,convert};
        }
        int start=0;
        string res="";
        
        // for(auto it:hash)
        // {
        //     cout<<it.first<<" "<<it.second.first<<" "<<it.second.second<<endl;
        // }
        while(start<s.size())
        {
            if(hash.find(start)!=hash.end())
            {
                    res+=hash[start].second;
                start+=hash[start].first.size();
            
            }
            else
            {
                 res+=s[start];
                start++;
               
            }
        }
        
        return res;
    }
};
```

**Please upvote if you found the code helpful.**