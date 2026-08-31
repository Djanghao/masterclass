# Beats 100% | C++ Solution Using For Loop Only | Super Fast | Easy to understand

**Author:** abhi_9v
**Votes:** 23
**Link:** [https://leetcode.com/problems/valid-number/solutions/3310814/](https://leetcode.com/problems/valid-number/solutions/3310814/)

---

# Intuition
We will iterate over the string and check the basic requirements.
And based upon that will return true of false.
# Approach
What we need to iterate and check:
- Iterate over sign
- If it is at the end return false
- Iterate over the digits
- If we reach the end of the string return true
- Iterate dot and the check the valid number condition
- Check digits after dot
- Iterate decimals until we reach the last index or e
- If we reach the end of the string return true
- Iterate over the sign
- Iterate over the digits

# Complexity
- Time complexity:
O(N) 

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    bool isNumber(string s) {
        int i=0, n=s.size();

        // iterate over sign
        if(s[i]=='+' || s[i]=='-') i++;

        // checking ending condition
        if(i>=n) return false;
        
        bool beforeInt = false;

        // iterating digits
        while(s[i]>='0' && s[i]<='9' && i<n){
            i++;
            beforeInt = true;
        }

        // checking ending condition
        if(i>=n) return true;

        // Passing dot
        bool dot = false;
        if(s[i] == '.') {i++; dot = true;}

        // check dot ending condition
        if(i>=n)
            if(dot==true && beforeInt==false) return false;
            else return true;
        
        // bool afterInt = false;

        // check digit after dot
        if(dot) 
        if(beforeInt) {if((s[i]<'0' || s[i]>'9') && (s[i]!='e' && s[i]!='E') ) return false; }
        else {if(s[i]<'0' || s[i]>'9') return false; }

        // iterate decimals until we reach last indext or e
        while(i<n && s[i]!='e' && s[i]!='E'){
            if(s[i]<'0' || s[i]>'9') return false;
            i++;
        }
        if(!dot)
        if((s[i]=='e' || s[i]=='E') && beforeInt==false) return false;
        // checking ending condition
        if(i>=n) return true;
        
        i++; // next ot e
        
        // iterate sign
        if(s[i]=='+' || s[i]=='-') i++;

        // checking ending condition
        if(i>=n) return false;

        bool lastInt = false;
        // iterate over digits
        while(s[i]>='0' && s[i]<='9' && i<n){
            i++;
            lastInt = true;
        }

        if(!lastInt) return false;

        if(i>=n) return true;
        return false;
    }
};
```