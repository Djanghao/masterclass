# No Prefix array very intuitive and Naïve solution by optimizing step by step using 3 different ways

**Author:** tm67
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/3007000/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/3007000/)

---

# Code
```
class Solution {
public: 
    Approach 1 TLE Very basic solution using set and recursion 
     set<string>res;
     void helper(string s,string temp,int i){
         if(i==s.length()) {
             res.insert(temp);
             return;
         }
         // ntake 
         res.insert(temp);
         string t="";
         t+=s[i];
         helper(s,t,i+1);
         //take
         helper(s,temp+s[i],i+1);
     }
     string lastSubstring(string s) {
         helper(s,"",0);
         for(auto it=res.begin();it!=res.end();it++) cout<<*it<<" ";
         auto it=res.end();
         it--;

         return *it;
     }



     Approach 2 Memory Limit Exceeded :very basic and intuitive approach of comparing each substring(suffix) of s ending with the last character of s. 
     string lastSubstring(string s) {
         string temp="";
         for(int i=0;i<s.length();i++){
             temp=max(temp,s.substr(i));
         }
         return temp;
     }
    

     Approach 3 Optimized way of searching 
    string helper(string s){
        // max stores the maximium character in the string 
        // maxIndex stores the starting index of the largest substring starting with the max character


        char max = s[0];
        int length = s.size(), maxIndex = 0;
        for(int i = 1 ; i < length; ++i){
            if ( s[i] > max ){
                maxIndex = i;
                max = s[i];
            }
            else if (s[i] == max){
                int j = 1;
                while (s[i + j] == s[maxIndex + j] && maxIndex + j < i ) j++;
                if (s[i + j] > s[maxIndex + j]) maxIndex = i;
                i = i + j-1;
            }
        }
        return s.substr(maxIndex,length - maxIndex + 1);

    }
    string lastSubstring(string s) {
        while(true){
            string res=helper(s);
            if(helper(res)==res) return res;
            else s=res;
        }
        return " ";
    }
};
```