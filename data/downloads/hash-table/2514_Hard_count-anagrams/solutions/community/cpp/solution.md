# C++ Solution, Math with Explanation [Each step in detail]

**Author:** devanshu171
**Votes:** 62
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2947111/](https://leetcode.com/problems/count-anagrams/solutions/2947111/)

---

# Explanation
1. The basic idea is to multiply the number of ways to write each word.
2. The number of ways to write a word of size n is `n factorial` i.e\xA0`n!`.
3. For example *"abc" ->"abc","acb","bac","bca","cab","cba".* total 6 ways = 3!.
3. Here we want total ***unique count***, so words like "aa" can be written in only `1` way. So we divide our ways by the factorial of all repeating characters' frequencies.
4. So we create a frequency array of word freq[].
4. Now our formula is as follows:` ways = n! / ( freq[i]! * freq[i+1]! *...freq[n-1]! )`.
5. So our overall answer is `ways[i] * ways[i+1] *...ways[n]`.
6. But the problem here is that our answer can be a large number, so we have to return `modulo 1e9+7`.
7. Well, that's not a big problem as we can just use `cnt % mod` for our answer, but here we have to use modulo for every computation as numbers can be very large. In our formula:` a= n!`, `b = (freq[i]! * freq[i+1]!... freq[n-1]!` is  `(a / b)%mod`.
8. But ` (a / b) % mod != (a% mod) / (b% mod)`. So here we use `Modular Multiplicative Inverse`,\xA0i.e `(A / B) % mod =\xA0A * ( B ^ -1 ) % mod`. Now `( B ^ -1 ) % mod` we can get by\xA0`Fermat's little theorem`, whose end conclusion is\xA0`(b ^ -1) % mod = b ^ (mod -2)`\xA0if mod is `prime`.
9. now mod is 1e9+7. We can't get` b ^ (mod -2)` using for loop which is `O(n)`. for this we can use ***Binary Exponentiation***  which allows us to calculate \u200A`a ^ n` in `O(log(n))`.


### Read about   [*Modular Multiplicative Inverse*](https://cp-algorithms.com/algebra/module-inverse.html) and [*Binary Exponentiation*](https://cp-algorithms.com/algebra/binary-exp.html)


# *C++ Code*
```
class Solution {
public:
int mod=1e9+7;
int fact[100002];

int modmul(int a,int b){
    return((long long)(a%mod)*(b%mod))%mod;
}

int binExpo(int a,int b){
    if(!b)return 1;
    int res=binExpo(a,b/2);
    if(b&1){
        return modmul(a,modmul(res,res));
    }else{
        return modmul(res,res);
    }
}

int modmulinv(int a){
    return binExpo(a,mod-2);
}

void getfact() {
    fact[0]=1;
    for(int i=1;i<=100001;i++){
        fact[i]=modmul(fact[i-1],i);
    }
}

int ways(string str) {
   int freq[26] = {0};
   for(int i = 0; i<str.size(); i++) {
      freq[str[i] - 'a']++;
   }
   int totalWays = fact[str.size()];
   int factR=1; 
   for(int i = 0; i<26; i++) {
         factR=modmul(factR,fact[freq[i]]);
   }
   return modmul(totalWays,modmulinv(factR));
}
 
    int countAnagrams(string s) {
        getfact();
        istringstream ss(s);
        string word; 
         int ans=1;
        while (ss >> word)
        {
            ans=modmul(ans,ways(word));
        }
        return ans;
    }
  
};
```