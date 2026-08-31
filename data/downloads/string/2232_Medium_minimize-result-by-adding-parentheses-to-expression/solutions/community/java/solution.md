# [C++] [JAVA] | 0 ms | Easy To Understand

**Author:** IAmCoderrr
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931124/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931124/)

---

Suppose we have expression  "247+38"
for this we try to produce every possible string

like 
1. (247+3)8
1. (247+38)
1. 2(47+3)8
1. 2(47+38)
1. 24(7+3)8
1. 24(7+38)

after generating every possible string ,
it get converted into 4 differnt numbers

* a-> before the '('
* b-> after '(' before '+'
* c-> after '+' before ')'
* d-> after ')'

then we know our ans will be a*(b+c)*d

but we know there is one **edge case **
(247+38)  in this a=d=0 , then we have to update a and d value to 1

**Please Upvote the Post**

**JAVA SOLUTION **

```
public String minimizeResult(String str) {
        int n=str.length();
        int idx=0;
        while(idx<n && str.charAt(idx)!='+') idx++;
        idx++;
        int ans=1000000000;
        String res="";
        for(int i=0;i<idx-1;i++){
            for(int j=idx;j<n;j++){
                StringBuilder sb=new StringBuilder(str);
                sb.insert(j+1,')');
                sb.insert(i,'(');
                
                int a=0,b=0,c=0,d=0,k=0;
                for(;sb.charAt(k)!='(';k++){
                    a=a*10+(sb.charAt(k)-'0');
                }
                k++;
                for(;sb.charAt(k)!='+';k++){
                    b=b*10+(sb.charAt(k)-'0');
                }
                k++;
                for(;sb.charAt(k)!=')';k++){
                    c=c*10+(sb.charAt(k)-'0');
                }
                k++;
                for(;k<sb.length();k++){
                    d=d*10+(sb.charAt(k)-'0');
                }
                b=b+c;
                if(a==0) a=1;
                if(d==0) d=1;
                
                int abc=a*b*d;
                if(abc<ans){
                    res=sb.toString();
                    ans=abc;
                }
            }
        }
        return res;
    }
```

**C++ SOLUTION**
```

string minimizeResult(string str) {
        int n=str.length();
        int idx=0;
        while(idx<n && str[idx]!='+') idx++;
        idx++;
        int ans=1000000000;
        string res="";
        for(int i=0;i<idx-1;i++){
            for(int j=idx;j<n;j++){
                string sb=str.substr(0,i) + "(" + str.substr(i,j+1-i) + ")" +str.substr(j+1,n);
                
                int a=0,b=0,c=0,d=0,k=0;
                for(;sb[k]!='(';k++){
                    a=a*10+(sb[k]-'0');
                }
                k++;
                for(;sb[k]!='+';k++){
                    b=b*10+(sb[k]-'0');
                }
                k++;
                for(;sb[k]!=')';k++){
                    c=c*10+(sb[k]-'0');
                }
                k++;
                for(;k<sb.length();k++){
                    d=d*10+(sb[k]-'0');
                }
                b=b+c;
                if(a==0) a=1;
                if(d==0) d=1;
                
                int abc=a*b*d;
                if(abc<ans){
                    res=sb;
                    ans=abc;
                }
            }
        }
        return res;
    }
