# C++ | 100% | 100%

**Author:** tushleo96
**Votes:** 10
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/533397/](https://leetcode.com/problems/complex-number-multiplication/solutions/533397/)

---

```
class Solution {
public:
    int real(string str){
        int i = 0 ;
        string real = "" ;
        
        while(str[i]!='+'){
            real += str[i] ;
            i++ ;
        }
        return stoi(real) ;
    }
    
    int complex(string str){
        int i = 0 ;
        string complex = "" ;
        
        while(str[i]!='+'){
            i++ ;
        }
        
        i++ ;
        
        while(str[i]!='i'){
            complex += str[i] ;
            i++ ;
        }
        
        return stoi(complex) ;
    }
    
    string complexNumberMultiply(string a, string b) {
        string res = "" ;
        int a1 = real(a) ;
        int a2 = real(b) ;
        int b1 = complex(a) ;
        int b2 = complex(b) ;
        
        res = res + to_string(a1*a2-b1*b2)+'+'+to_string(a1*b2+a2*b1)+'i' ;
        
        return res ;
    }
};
```