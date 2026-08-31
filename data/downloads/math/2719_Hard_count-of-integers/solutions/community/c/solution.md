# 🔥 Digit DP || Learning Resource || Similar Problem || Explanation 🔥

**Author:** piyushjaiswal380
**Votes:** 30
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/3717364/](https://leetcode.com/problems/count-of-integers/solutions/3717364/)

---

First of All who do not understand how to approach this, they must know that this is **CLASSIC DIGIT DP PROBLEM**

**Solution Explanation** : 

* As Question say find number of integer from ***[num1,num2]*** whose digit sum is between ***minsum*** and ***maxsum***

* One way to do this is find numbers from [0,num1] whose digit sum is between ***minsum*** and ***maxsum*** and then find numbers from [0,num2] whose digit sum is between ***minsum*** and ***maxsum*** and subtract them.

* Let A = numbers from **[0,num1]** (including num1) having digit sum between ***minsum*** and ***maxsum*** 
* Let B = numbers from **[0,num2]** (including num2) having digit sum between ***minsum*** and ***maxsum*** 
* Answer is **B - A + check(num1)**. where check function checks if num1 has digit sum  between ***minsum*** and ***maxsum***  because num1 counted twice.

Till Now, we understand the code inside the **count** Function and **check** function given below, 

Now Try to understand the code inside the **rec** function.

# **Explaining  the rec function**

Suppose we passed this in rec function("123",0,0,false). 

Here **"123"** denote upper limit that up to which we can create number for example "000","001" ........"123",**next 0 is 0th index of "123"**, **another 0 is the inital digit sum** and **false indicate that the prefix number we form is smaller than current prefix index**, for example we form number **"11"**, now we set false to true and it indicate at 2nd index we can use numbers from 1 to 9 to create index **"111","112","113"....** and if we form number **12** we can set true to false and it indicate at 2nd index we can only **use 1, 2 , 3 to form 121, 122, 123**  **if we use 4-9 it make digit 124, 125 .... which is greater then 123**




1.First If condition in rec function show if for "123" our ind reach 3 it means we reach at the end and here we check if digit sum is in range if it is we return 1 otherwise 0

2.First recursive call help us to form numbers like "000","001"....


3.Third if condition if(smaller) indicate if number we form is of something like this "01", "11" because if we form number something like this till 1st index we can use all numbers from 1 to 9 at 2nd index, thats what we are doing in 2nd recursive call in if condition
It helps in forming number like "010","011","012"...."111","112"....etc


4.Else condition indicate the number we already form is something like "1" hence at 1st index we can not use all digit from 1 to 9 if we use number become greater than 123, so we are findin the diff upto which we can use for 12. we can use 1, 2  on the next index and if we use 1  in the 1st index. our number become something like "11" and now we can use any numbers from 1 to 9 in 2nd index and if we use 2 our number beome "12" and we can use only 1,2,3 on 2nd index , This is what last two recursion calls are.






Tough part of the question is to write function which give the numbers from **[0,num1]**(including num1) **having digit sum between minsum and maxsum**

I can not explain the big concept in just few lines


I think this video explain digit DP in best way. Watch this "[A Code Daily Digit DP](https://www.youtube.com/watch?v=pSW4mt0JMOM&t=1273s)" on youtube, I can not paste the link (LC may delete this post) and solve this [problem](https://codeforces.com/problemset/problem/1036/C) and then came here to write recursive function and I am sure you can write. Give some time to this topic don't try to copy paste the solution

If after watching the video and solving above given codeforces problem If you have any doubt regarding this question I will explain in comments


```
class Solution {
public:

    int mn, mx;    
    int dp[23][500][2];    
    int mod = 1e9+7;    
    int rec(string &s1,int ind,int num,bool smaller){
            
            if(ind  == s1.size()){
                    if(num >= mn && num <= mx) return 1;
                    return 0;
            }
			
            if(dp[ind][num][smaller]  != -1) return dp[ind][num][smaller];
            
            int ans = 0;
            
            ans = (ans + rec(s1,ind+1,num + 0, smaller ? smaller : (s1[ind] != '0')))%mod; // for creating numbers like 000,001,002 etc.
			
            if(smaller){
                    for(int i = 1;i<=9;i++)
                    ans = (ans + rec(s1,ind+1,num + i, smaller))%mod;
            }else{
                    int diff = (s1[ind] - '0');
                    if(diff > 0){
                            for(int i = 1;i<diff;i++){
                                    ans = (ans + rec(s1,ind+1,num + i,true))%mod;
                            }
                    }
                    if(s1[ind] != '0')
                            ans = (ans + rec(s1,ind+1,num + diff,false))%mod;
            }
            return dp[ind][num][smaller] = ans;
    }    
        
    int check(string &num1){
            
            int ans = 0;
            for(int i = 0;i<num1.size();i++){
                    ans = ans + (num1[i] - '0');
            }
            
            if(ans >= mn && ans <= mx) return 1;
            return 0;
    }    
        
        
        
        
        
        
    int count(string num1, string num2, int min_sum, int max_sum) {
            
            mn = min_sum;
            mx = max_sum;
           
            memset(dp,-1,sizeof(dp));
            int a = rec(num2,0,0,false);
            
            memset(dp,-1,sizeof(dp));
            int b = rec(num1,0,0,false);
           
          
            return( a - b + check(num1) + mod)%mod;
        
    }
};
```




Problem 1 : [Classy Numbers](https://codeforces.com/problemset/problem/1036/C)
Problem 2: [Magic Numbers](https://codeforces.com/contest/628/problem/D)













