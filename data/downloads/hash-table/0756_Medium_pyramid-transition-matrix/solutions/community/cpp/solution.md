# DFS SOlution c++

**Author:** peeyushbh1998
**Votes:** 7
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/640226/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/640226/)

---

Start from initial bottom and make another upper level bottom by trying all posssible cases for triplets...In this way if you reach at the top where bottom size==1 then return true cause you have reach to top ... SO its possible otherwise return false;
```
class Solution {
    unordered_map<string,vector<char> > m;
public:
    bool dfs(string bot,int i,string tem){
        if(bot.size()==1) return true;
        if(i==bot.size()-1) {
            string st;
            return dfs(tem,0,st);
        }
        for(auto v:m[bot.substr(i,2)]){
            tem.push_back(v);
            if(dfs(bot,i+1,tem)){
                return true;
            }
            tem.pop_back();
        }
        return false;
    }
    bool pyramidTransition(string bottom, vector<string>& allowed) {
        for(auto a:allowed){
            m[a.substr(0,2)].push_back(a[2]);
        }
        string te;
        return dfs(bottom,0,te);
    }
};
```