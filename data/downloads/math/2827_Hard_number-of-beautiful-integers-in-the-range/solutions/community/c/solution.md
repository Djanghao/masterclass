# [C++] || DIGIT DP || All similar problems|| In-Depth Explanation

**Author:** Pathak_Ankit
**Votes:** 39
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932163/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932163/)

---

The given code is an implementation of a dynamic programming solution using the concept of digit DP to solve the problem of finding the number of beautiful integers in a given range [low, high] that satisfy the specified conditions. Let's break down the code and explain how it works:

1. **Function Signature**:
   - `ll dp[20][2][2][20][20][50];` declares a multidimensional array `dp` to store the dynamic programming results. The dimensions represent different aspects of the problem.
   - `int k;` stores the value of k, which is the divisor for the beautiful integers.

2. **solve Function**:
   This function is a recursive function that computes the number of beautiful integers that meet the conditions for a given string of digits.

   - `solve(string &s, int n, bool tight, bool isleading, int cnteven, int cntodd, int rem)`:
     - `s`: The string of digits.
     - `n`: The current position in the string (decreases from the string's end).
     - `tight`: A flag indicating whether the current digit should be limited to be less than or equal to the corresponding digit in the original number.
     - `isleading`: A flag indicating whether the current position is leading (leftmost).
     - `cnteven`: Count of even digits encountered so far.
     - `cntodd`: Count of odd digits encountered so far.
     - `rem`: The remainder when the number formed so far is divided by `k`.

   Inside the function:
   - Base case: When `n` reaches 0, it checks if `cnteven` is equal to `cntodd` and `rem` is zero. If both conditions are met, it returns 1 (a beautiful number); otherwise, it returns 0.

   - Memoization: It uses a memoization array `dp` to store previously computed results to avoid recomputation.

   - It iterates through each digit from 0 to the current digit `lim` based on the `tight` flag.
     - If it's a leading zero and `isleading` is true, it continues recursively with a 0, indicating that leading zeros are not allowed.
     - For other digits:
       - If the digit is even, it increments `cnteven`, updates the remainder, and continues the recursion with `dig%2==0`.
       - If the digit is odd, it increments `cntodd`, updates the remainder, and continues the recursion with `dig%2==1`.

   The function returns the sum of beautiful integers satisfying the conditions.

3. **numberOfBeautifulIntegers Function**:
   This function computes the number of beautiful integers within a given range `[low, high]`.

   - `numberOfBeautifulIntegers(int low, int high, int K)`:
     - `low` and `high` are the lower and upper bounds of the range.
     - `K` is the divisor `k`.

   Inside the function:
   - It decrements `low` by 1 and converts it to a string, then computes the number of beautiful integers less than `low` using the `solve` function.
   - It converts `high` to a string and computes the number of beautiful integers less than or equal to `high` using the `solve` function.
   - The difference between the two results gives the count of beautiful integers in the range `[low, high]`.

In summary, this code uses dynamic programming and recursion to efficiently count the beautiful integers within a given range that satisfy the specified conditions. It uses memoization to avoid redundant calculations and explores different combinations of even and odd digits to find valid solutions.
```
class Solution {
public:
    #define ll long long
    ll dp[20][2][2][20][20][50];
    int k;
    ll solve(string &s,int n,bool tight,bool isleading,int cnteven,int cntodd,int rem)
    {
        if(n==0)
        {
            if(cnteven==cntodd && rem==0)
            {
                return 1;
            }
            else return 0;
        }
        if(dp[n][tight][isleading][cnteven][cntodd][rem]!=-1) return dp[n][tight][isleading][cnteven][cntodd][rem];
        int lim=tight?s[s.size()-n]-'0':9;
        ll ans=0;
        for(int dig=0;dig<=lim;dig++)
        {
            if(isleading && dig==0)
            {
                ans+=solve(s,n-1,0,isleading&(dig==0),0,0,0);
            }
            else
            {
                if(dig%2==0)
                {
                    ans+=solve(s,n-1,tight&(dig==lim),0,cnteven+1,cntodd,(rem*10+dig)%k);
                }
                else
                {
                    ans+=solve(s,n-1,tight&(dig==lim),0,cnteven,cntodd+1,(rem*10+dig)%k);
                }
            }
        }
        return dp[n][tight][isleading][cnteven][cntodd][rem]=ans;
    }
    int numberOfBeautifulIntegers(int low, int high, int K) {
        k=K;
        memset(dp,-1,sizeof(dp));
        low--;
        string lower=to_string(low);
        ll ansleft=solve(lower,lower.size(),1,1,0,0,0);
        memset(dp,-1,sizeof(dp));
        string higher=to_string(high);
        ll ansright=solve(higher,higher.size(),1,1,0,0,0);
        return ansright-ansleft;
    }
};
```
Similar problems:
https://leetcode.com/problems/numbers-with-repeated-digits/
https://leetcode.com/problems/numbers-at-most-n-given-digit-set/
https://leetcode.com/problems/count-of-integers/
https://leetcode.com/problems/count-stepping-numbers-in-range/
https://leetcode.com/problems/count-special-integers/