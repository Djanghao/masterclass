# C++ Recursive fully explained solution

**Author:** harsh_114
**Votes:** 50
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/586460/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/586460/)

---

```
//This is my first try to put code into discussion part hope you like it and if like please upvote :)

class Solution {
public:
    
    void solve(vector<string>& ans,string& cur,int n,int& k,vector<char>& v){
        //before base cases please refer lower part :)
        if(ans.size()==k){
            //if size of answer vector is equal to k that means I found kth string with n length
            return;
        }
        if(cur.size()==n){
            //length of cur is equal to n means cur is part of ans and after that no further recursive call required so I  have returned
            ans.push_back(cur);
            return;
        }
        //here I'm iterate over all three elements of v if possible, it is possible if cur's length is equal to zero otherwise I have to check if last element of cur shouldn't equal to v[i]
        for(int i=0;i<3;i++){
            if(cur.size()==0 || cur[cur.size()-1]!=v[i]){
                //if condition satisifed then I should append that character to cur
                cur+=v[i];
                //call solve() with new value of cur
                solve(ans,cur,n,k,v);
                //after calling we should remove that character and try for other character for same length of cur for example after calling for "ab" I should call for "ac" calls are obviously in lexicogrphic order now you can see base cases :)
                cur.pop_back();
            }
        }
    }
    
    string getHappyString(int n, int k) {
        string cur=""; //cur string with no characters
        vector<string> ans; //ans is vector of string which is going to store all string of length of cur string
        vector<char> v={'a','b','c'}; //vector of character in which characters 'a','b','c' are stored
        solve(ans,cur,n,k,v); //firs function call with empty string with empty vector of string ans and n,k now, please refer implementation of solve :)
        if(ans.size()==k){
            //if program reach here from base case 1 which is ans's size equals to k that means I should return last element of ans
            return ans.back();
        }
        else{
            //else I should return empty string
            return "";
        }
    }
};
```

