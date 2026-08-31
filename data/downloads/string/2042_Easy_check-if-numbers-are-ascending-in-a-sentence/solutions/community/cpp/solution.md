# simple and easy understanding c++ code

**Author:** sampathkumar718
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5957624/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5957624/)

---


```cpp []
class Solution {
public:
    bool areNumbersAscending(string s) {
        int n=s.length();
        istringstream a(s);
        string b;
        int d=0;
        while(a>>b){
            if(isdigit(b[0])){
                int c=stoi(b);
                if(d>=c){
                    return false;
                }
                d=c;
            }
        }
        return true;
        
    }
};
```