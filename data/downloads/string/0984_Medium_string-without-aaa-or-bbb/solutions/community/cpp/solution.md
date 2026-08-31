# C++ || Easy to understand || 100% fast✔

**Author:** NitinSingh77
**Votes:** 8
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3316390/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3316390/)

---



# Code
```
class Solution {
public:
    string strWithout3a3b(int a, int b) {
       string ans="";  //String to store the answer
        int counta=0,countb=0; // Counter to check that a and b should not be greater than two;
        int total=a+b;         //No of times the loop will run;
        for(int i=0;i<total;i++)
        {
            if((b>=a && countb<2) || (counta==2 && b>0)) //If b is greater than a and count of b is less than 2 || if count of a ==2 and b is greater than 2 add 'a';
            {
                ans+='b';
                b--;    // decrement given count of b;

                countb++; //increment count of b;

                counta=0; // make the count of a to 0 , if we don't do that then the length of the string will remain 3 because counta<2 || countb<2 condition will never become true after the string size becomes three that's why we are making counta=0 and countb=0 in every condition;
            }
            else if((a>=b && counta<2) || (countb==2 && a>0))
            {
                ans+='a';
                a--;
                counta++;
                countb=0;
            }
        }
        return ans; // Return the answer;
    }
};
```