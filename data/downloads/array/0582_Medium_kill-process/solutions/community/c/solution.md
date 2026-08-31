# Very simple code using C++, HashMap and DFS

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/kill-process/solutions/1537268/](https://leetcode.com/problems/kill-process/solutions/1537268/)

---

class Solution {
public:
    vector<int> killProcess(vector<int>& pid, vector<int>& ppid, int kill) {
        
        map<int,vector<int>> parchild;
        
        for(int i = 0; i < ppid.size(); i++){
            parchild[ppid[i]].push_back(pid[i]);
        }
        vector<int> res{kill};
        vector<int> ans = getChildrenDFS(kill, parchild);
        res.insert(res.end(),ans.begin(),ans.end());
        return res;
    }
    
    vector<int> getChildrenDFS(int kill, map<int, vector<int>>& mp){
        
        vector <int > ans;
    
        for(auto i : mp[kill]){
            ans.push_back(i);
            vector <int> a = getChildrenDFS(i,mp);
            ans.insert(ans.end(),a.begin(),a.end());
        }
     return ans;   
    }
};