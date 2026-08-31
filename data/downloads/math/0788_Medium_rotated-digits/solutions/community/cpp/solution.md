# C++||Faster than 100%||Easy Approach

**Author:** OindrillaBose
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/747637/](https://leetcode.com/problems/rotated-digits/solutions/747637/)

---

```
class Solution {
public:
    int rotatedDigits(int N) {
        int c=0;
       for(int i=1;i<=N;i++)
       {
           if(check(i)==0)
               continue;
           else
               c++;
       }
        return c;
        
    }
    int check(int num)
    {
        int count=0;
        while(num>0)
        {
            int a=num%10;
            if(a==3||a==7||a==4)
                return 0;
            if(a==5||a==2||a==6||a==9)
                count++;
            num/=10;
        }
        return count;
    }
};
```