# Video solution | Intuition and Approach explained in detail | C++ | Backtracking

**Author:** _code_concepts_
**Votes:** 14
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5090568/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5090568/)

---

Hello every one i have created a video solution for this problem and solved this video by developing intutition for backtracking (its in hindi), i am pretty sure you will never have to look for solution for this video ever again after watching this.


This video is the part of my playlist "Master backtracking".
Video Link: https://youtu.be/FoJGFhHuCog

# Code
```
class Solution {
public:
    void helper(vector<string> &ans, int n,int k, string &temp,vector<char> &inp){
        if(ans.size()==k){
            return;
        }
        if(temp.size()==n){
            ans.push_back(temp);
            return;
        }
        for(int i=0;i<3;i++){
            if(temp.size()==0 || temp.back()!=inp[i]){
                temp.push_back(inp[i]);
                helper(ans,n,k,temp,inp);
                temp.pop_back();
            }
        }
        return;

    }
    string getHappyString(int n, int k) {
        string temp="";
        vector<char> inp={'a','b','c'};
        vector<string> ans;
        helper(ans,n,k,temp,inp);
        if(ans.size()==k){
            return ans.back();
        }
        return "";
    }
};
```