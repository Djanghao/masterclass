# Add two string side by side || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 64
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836244/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836244/)

---

# Approach
- We can optimize the addition only if
    - One string's back side sub-string is common with another string's front side sub-string
    - One string is already a substring of another string

- If non of the above case satisfy then simply add both string.
- Now we have to do this with all possible cases like merge a & b, b & a. Then merge the result with c. Similarly we can check for merging b & c first with both possible cases ( b & c, c & b) and then merge the result with a. And finally one more time with merging a & c first and then merging the result with the b. Keep tracking the min length string possible for all above cases and return it as answer.

# Code
```
class Solution {
public:
    string getMinString(string a, string b) {    //compare two string with min size or if equal then return lexicographically smaller string 
        return (a.size() < b.size() || (a.size() == b.size() && a < b) )?a : b;
    }
    
    string addTwoStrings(string &a, string &b){    //try to add b at the end of a with optimal way
        if(b.find(a) != string::npos) return b; 
        for(int i = 0; i < a.size(); ++i){
            string t1 = a.substr(i), t2 = b.substr(0,  t1.size());
            if(t1 == t2) return a + b.substr(t1.size());
        }
        return a+b;
    }
    
    string solve(string& a, string& b, string& c) {    //merge a,b first and then merge with c in sequence
        string t1 = addTwoStrings(a, b), t2 = addTwoStrings(b, a);
        string res1 = getMinString(addTwoStrings(t1, c), addTwoStrings(c, t1));
        string res2 = getMinString( addTwoStrings(t2, c), addTwoStrings(c, t2));
        return getMinString(res1, res2);
    }
    
    string minimumString(string a, string b, string c) { 
        string res = getMinString( solve(a, b, c), solve(b, c, a));
        return getMinString( res , solve(c,a,b));
    }
};
```

### Note : Above solution can be further optimised, check out [this comment for detials.](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836244/add-two-string-side-by-side-very-simple-and-easy-to-understand-solution/comments/1994215)

----

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

