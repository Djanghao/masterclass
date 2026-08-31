# [3 approaches][faster than 100%][easy understanding][c++]

**Author:** rajat_gupta_
**Votes:** 22
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/842716/](https://leetcode.com/problems/reverse-only-letters/solutions/842716/)

---

```
//1.[faster than 100.00%][stack][Runtime: 0 ms]
class Solution {
public:
    string reverseOnlyLetters(string s) {
        stack<char>letters;
        for (char c: s)
            if (isalpha(c))  letters.push(c);

        string ans;
        for (char c: s) {
            if (isalpha(c)){
                ans+=(letters.top());
                letters.pop();
            }else
                ans+=c;
        }
        return ans;
    }
};
//2.[faster than 100.00%][2 pointer][Runtime: 0 ms]
class Solution {
public:
    string reverseOnlyLetters(string s) {
        int left=0,right=s.length()-1;
        while(left<right){
            if(isalpha(s[left]) && isalpha(s[right])){
                swap(s[left],s[right]);
                left++;
                right--;
            }else if(!isalpha(s[left]) && !isalpha(s[right])){
                left++;
                right--;
            }else if(!isalpha(s[left])){
                left++;
            }else 
                right--;
        }
        return s;
    }
};
//3.[Runtime: 4 ms]
class Solution {
public:
    string reverseOnlyLetters(string s) {
        vector<char> res;
        map<int,char> m; 
        for(int i=0;i<s.size();i++){
            if(!isalpha(s[i])) m[i]=s[i];
            else res.push_back(s[i]);
        }
        reverse(res.begin(),res.end());
        for(auto i:m){
            res.insert(res.begin() +i.first, i.second);
        }
        string str(res.begin(), res.end());
        return str;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
