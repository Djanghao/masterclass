# [EASY UNDERSTANDING][C++]

**Author:** rajat_gupta_
**Votes:** 8
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/956713/](https://leetcode.com/problems/implement-magic-dictionary/solutions/956713/)

---

```
class MagicDictionary {
public:

    unordered_set<string> set;
	
    MagicDictionary(){
    }
    
    void buildDict(vector<string> dictionary){
        for(string str: dictionary)
            set.insert(str);
    }
    
    bool search(string searchWord){
        for(string s: set){
            if(s.size()==searchWord.size()){
                int cnt=0;
                for(int i=0;i<s.size();i++){
                    if(s[i]!=searchWord[i]) cnt++;
                }
                if(cnt==1) return true;
            }
        }
        return false;
    }
	
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
