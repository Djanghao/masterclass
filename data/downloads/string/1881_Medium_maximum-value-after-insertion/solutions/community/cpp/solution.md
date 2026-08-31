# c++

**Author:** rajat_gupta_
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/1240056/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/1240056/)

---

```
class Solution {
public:
    string maxValue(string n, int x) {
        if(isdigit(n[0])){
            for(int i=0;i<n.size();i++)
                if(n[i]-'0' < x){
                    n.insert(i,to_string(x));
                    return n;
                }
        }else{
            for(int i=1;i<n.size();i++)
                if(n[i]-'0' > x){
                    n.insert(i,to_string(x));
                    return n;
                }
        }
        n.insert(n.size(),to_string(x));
        return n;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
