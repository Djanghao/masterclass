# Easy solution but lengthy.

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/855042/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/855042/)

---

```
class Solution {
public:
    string reorderSpaces(string s) {
        if(s.size() < 2){
            return s;
        }
        int i = 0; 
        int j = s.size();
        vector<string> v;
        string str = "";
        for(int k = 0; k<j; k++){
            if(s[k] == ' '){
                i++;
            }
            
            if(s[k] != ' '){
                str += s[k];
            }
            
            else if (str.size() > 0 && s[k] == ' '){
                v.push_back(str);
                str = "";
            } 

        }
        if(str.size() > 0){
             v.push_back(str);
        }
        string ans = "";
        int totalS = 0;
        if(v.size() > 1)
            totalS = i / (v.size()-1);
        else
            totalS = i / v.size();
        
        int k = totalS;
        
        for(string d : v){
            ans += d;
            while(k>0){
                ans += ' ';
                k--;
            }
            if(k == 0){
                k = totalS;
            }
        }
        
        int b = ans.size();
        int x = 0;
        for(int i = b-1; i>=0 ; i--){
            if(ans[i] == ' '){
                x++;
            }else{
                break;
            }
        }
        
        string ans1 = ans.substr(0, ans.size() - x);
        
        while(s.size() != ans1.size()){
             ans1  +=  " ";
        }
        
        return ans1;
    }
};
```