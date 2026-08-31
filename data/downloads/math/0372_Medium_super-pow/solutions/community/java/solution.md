# ✅ Java | Binary Exponentiation + Euler Totient Function (ETF) with Explanation

**Author:** kalinga
**Votes:** 17
**Link:** [https://leetcode.com/problems/super-pow/solutions/2412552/](https://leetcode.com/problems/super-pow/solutions/2412552/)

---

**Runtime: 2 ms, faster than 94.43% of Java online submissions for Super Pow.
Memory Usage: 45.1 MB, less than 83.62% of Java online submissions for Super Pow.**
```
class Solution {
    public int superPow(int a, int[] b) {
        int num=0;
        for(int i:b){
            num=(num*10+i)%1140;
        }
        return binexpo(a,num,1337);
    }
    public int binexpo(int a, int b, int m){
        a%=m;
        int res=1;
        while(b>0){
            if((b&1)==1)
                res=(res*a)%m;
            a=(a*a)%m;
            b>>=1;
        }
        return res;
    }
}
```
**Euler theorem = (a^(b%\u03A6(m)))%m. Basically in Euler Totient Function we count the number less than m (here it's 1337) which are coprime with m i.e gcd(m,{1,2,....,m-1})=1. So to count the number of coprimes we need to use a formula i.e \u03A6(m)=m*\u220F (1-(1/p)) where m is 1337 here, p is all the distinct prime factors of m (here it is 7 and 191 for 1337). So \u03A6(m)=1337*(1-(1/7))*(1-(1/191)) which is equal to 1140 so now its (a^(b%1140))%m so, we will take the elements of array and convert it into number by continuosly doing mod 1140. After that use modular binary exponentiation to calculate the result.If you don't know what is binary exponentiation then go to this famous website and study about it or you can check about it on youtube as well. Link of the website :- https://cp-algorithms.com/algebra/binary-exp.html.**

**IF YOU LIKED THE APPROACH PLEASE UPVOTE \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F**