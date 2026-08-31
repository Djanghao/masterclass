# easy understand for beginners | beats 100% | Easy C++ solution

**Author:** vinaykumar333j
**Votes:** 10
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/6051786/](https://leetcode.com/problems/thousand-separator/solutions/6051786/)

---

if you sitll doubt contact my website in there explianed in detail link is given below:
https://vinayhac.blogspot.com/
**CODE:**
```
class Solution {
public:
    string thousandSeparator(int n) {
        if(n==0){
            return "0";
        }
        string str="";
        int count=0;
        while(n>0){
            if(count%3==0&&count!=0){
            str+='.';
            str+=n%10+'0';
            }
            else{
                str+=n%10+'0';
            }
            n=n/10;
            count++;
        }
        reverse(str.begin(),str.end());
        return str;
    }
};
```
