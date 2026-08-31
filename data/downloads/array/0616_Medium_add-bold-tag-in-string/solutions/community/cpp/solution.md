# Easy to understand and 100 % faster and 100% less memory C++ code

**Author:** ArjavNaik
**Votes:** 6
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/527456/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/527456/)

---


    string addBoldTag(string s, vector<string>& dict) {
        
        if (dict.empty() || s.empty()) return s;
        
        vector<int> mask(s.size(),0);
        string ans;
        
        for(string word : dict){
            int sz = word.size();
            auto f = s.find(word);
            while(f != std::string::npos){
                for(auto i = f; i < f+sz && i < mask.size(); i++){
                    mask[i] = 1;
                }
                f = s.find(word, f+1);
            }
        }
        
        for(int j = 0; j < mask.size(); j++){
            
            if(mask[j] == 1 && (j == 0)){
                ans += "<b>";
                ans += s[j];
            }
            else if(mask[j] == 1 && (j != 0) && mask[j-1] == 0){
                ans += "<b>";
                ans += s[j];
            }
            else if(mask[j] == 1 && (j == mask.size()-1)){
                ans += s[j];
                ans += "</b>";
            }
            else if(mask[j] == 0 && (j != 0) && mask[j-1] == 1){
                ans += "</b>";
                ans += s[j];
            }
            else{
                ans += s[j];
            }
            
        }
        
        return ans;
    }