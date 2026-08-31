# C++ | Easy to understand | MATH

**Author:** Rajanraj
**Votes:** 6
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/2018872/](https://leetcode.com/problems/prime-palindrome/solutions/2018872/)

---

class Solution {
public:
    
    bool isprime(int n)
    {
        if(n==1)
            return false;
        for(int i=2;i*i<=n;i++)
            if(n%i==0)
                return false;
        return true;
    }
    bool ispalindrom(int n)
    {
        int n1=n;
        int n2=0;
        while(n1>0){
            int a=n1%10;
            n2=n2*10+a;
            n1/=10;
        }
        if(n2==n)
            return true;
        return false;
    }
    int smallestno(int n)
    {
        if(ispalindrom(n))
            if(isprime(n))
                return n;
        return smallestno(n+1);
    }

    int primePalindrome(int n) {
        
        if (1e7 <= n && n <= 1e8)
            return 100030001;
        int a=smallestno(n);
        return a;
        
    }
};