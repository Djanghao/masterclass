# Cpp easy solution || brute force working

**Author:** Sanket_Jadhav
**Votes:** 3
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/2457513/](https://leetcode.com/problems/stamping-the-sequence/solutions/2457513/)

---

```
class Solution {
public:
    
    bool isequal(int i,string s,string t){
        
        for(int j=0;j<s.size();j++){
            if(t[j+i]!='?' && t[j+i]!=s[j])return false;
        }
        return true;
    }
    
    int replace(int i,string &t,int n){
        int ct=0;
        for(int j=0;j<n;j++){
            if(t[i+j]!='?'){
                t[i+j]='?';
                ct++;
            }
        }
        
        return ct;
    }
    
    vector<int> movesToStamp(string stamp, string target) {
        int n=stamp.size(),m=target.size();
        vector<int>ans,vis(m);
        
        int count=0;
        
        while(count!=m){
            bool flag=true;
            
            for(int i=0;i<=m-n;i++){
                if(!vis[i] && isequal(i,stamp,target)){
                    ans.push_back(i);
                    count+=replace(i,target,n);
                    vis[i]=1;
                    flag=false;
                }
                
                if(count==m)break;
            }
            
            if(flag)return {};
        }
        
        reverse(ans.begin(),ans.end());
        return ans;
        
    }
};