# [C++] Easy Understood Solution

**Author:** survivor2139
**Votes:** 8
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/742444/](https://leetcode.com/problems/subdomain-visit-count/solutions/742444/)

---

```
class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        unordered_map<string, int> map;
        int num=0;
        for(int i=0;i<cpdomains.size();i++){
            for(int j=0;j<cpdomains[i].size();j++){
                if(cpdomains[i][j]==' '){
                    num=stoi(cpdomains[i].substr(0,j));
                    map[cpdomains[i].substr(j+1,cpdomains[i].size())]+=num;
                }
                if(cpdomains[i][j]=='.'){
                    map[cpdomains[i].substr(j+1,cpdomains[i].size())]+=num;
                }
            }
        }
        vector<string> ans;
        for(auto& i:map){
            ans.push_back(to_string(i.second) +" "+i.first);
        }
        return ans;
    }
};
```