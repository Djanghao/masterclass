# [easy understanding][3 ways][c++]

**Author:** rajat_gupta_
**Votes:** 12
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/843049/](https://leetcode.com/problems/long-pressed-name/solutions/843049/)

---

```
//1.[ faster than 100.00%][Runtime: 0 ms]
class Solution {
public:
    bool isLongPressedName(string name, string typed) {
        if(name[0]!=typed[0]) return false;
        int i=0,j=0;
        while(i<typed.size() || j<name.size()){
            if(typed[i]==name[j]) j++;
            else if(typed[i]!=typed[i-1]) return false;
            i++;
        }
        return true;
    }
};
//2.[ faster than 100.00%][Runtime: 0ms]
class Solution {
public:
    bool isLongPressedName(string name, string typed) {
    if(name.size()>typed.size()) return false;
    
    if(name[0]!=typed[0]) return false;
    
    int i=1,j=1;
    while(i<name.size() && j<typed.size()){
        if(name[i]==typed[j])
            i++,j++;
        else if(typed[j]==typed[j-1])
            j++;
        else
            return false;
    }
    
    while(j<typed.size()){
        if(typed[j]!=typed[j-1]) return false;
        j++;
    }
    
    if(i==name.size())
        return true;
    else
        return false;
    }
};
//3.[Runtime: 4 ms]
class Solution {
public:
    bool isLongPressedName(string name, string typed) 
    {
        for(int i=0; i<typed.size(); i++){
            while((i+1 < typed.size()) && (typed[i] == typed[i+1]) && (name[i+1] != typed[i+1]))
                 typed.erase(i+1, 1);
        }
        
        if(name == typed)
            return true;
        return false;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
