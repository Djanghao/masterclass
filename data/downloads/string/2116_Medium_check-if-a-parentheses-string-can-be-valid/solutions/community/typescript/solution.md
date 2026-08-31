# Beats 100% typescript solution

**Author:** hr665102
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4796138/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4796138/)

---



# Code
```
function canBeValid(s: string, locked: string): boolean {
    if(s.length% 2)return false;
    var bal : number = 0;
    for(let i =0;i<s.length;i++){
        locked[i]=='0' || s[i]=='(' ? bal++: bal--;
        if(bal<0)return false;
    }
    bal=0;
    for(let i =s.length-1;i>=0;i--){
        locked[i]=='0' || s[i]==')' ? bal++: bal--;
        if(bal<0)return false;
    }
    return true;
};
```