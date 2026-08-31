# C++ || Hash Table || 81.35% faster || Easy to understand

**Author:** aadesh_nikhade
**Votes:** 5
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/2464101/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/2464101/)

---

string evaluate(string s, vector<vector<string>>& knowledge) {
        unordered_map<string,string>mp;
        int n=knowledge.size();
        for(int i=0;i<n;i++){
            mp.insert({knowledge[i][0],knowledge[i][1]});
        }
        string  ans;
        
        for(int i=0;i<s.length();i++){
            if(s[i]=='('){
                i++;
                string sas;
                while(s[i]!=')'){
                    sas.push_back(s[i]);
                    i++;
                }
                
                if(mp.count(sas)){
                    ans+=mp[sas];
                }
                else ans.push_back('?');
                
            }
            else {
                ans.push_back(s[i]);
            }
        }
        return ans;
    }