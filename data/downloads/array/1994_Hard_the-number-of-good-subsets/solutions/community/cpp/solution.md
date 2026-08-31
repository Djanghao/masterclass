# C++ Easy Solution || DP || BitMask

**Author:** viraj7403
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/5030602/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/5030602/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Let's build intuition of this question. 
I will go through from scratch. If you don't have time to read full article you can directly jump to solution. 

First of all what came in your mind ? 

```
Pick - Non Pick method and at the end validate taken subset. 
That is too basic but you have your core task that you have to perform , 
1 ) generate subset
2 ) validation. 
you have to do above things with optimization. 
```


`Task 1) `

look at constraints , element in array is max upto 30. 
and you have to take those element from array such that in element itself there is not any duplicate prime number. 

in range of 30 you know below are the prime numbers: 

{2, 3, 5, 7, 11, 13, 17, 19, 23, 29}.

Now those element only in which each of this prime number should not occur more than once. 

Just look into above array , 
total prime number is 10 in any number each prime either should occur zero time or should occur once , right ? 
***That means you can have only 1024 unique elements.*** and nums array is upto 1e5 , so rather than considering each number different just iterate on this 1024 number and store frequency of each of this numbers to get count of subsets. 


```
let say
number is 2 represention is :   0000000001
number is 3 representation is : 0000000010
number is 10 representation is :0000000101

```
so create different array  that contains this elements and maintain freq table of this number also. 

***SO , you have reduced your array from 1e5 to 1024.*** 

`Task 2)` 

now you got your array and freq table all that stuff , now comes validation part. which element you should take or not. 

Now let say you are at current index and number is 10 , now you have to decide are you able to take this or not ? 

For that you need previous configuration , that you can build using mask which have knowledge of what prime numbers you have taken so far. 

let your mask is                       :  10100
and current elements representation is :  01010

have you noticed anything ? 
**If BitWise AND of this numbers is 0 than only you can take this current element in your previous subset otherwise you just have to go for next index.** 

If you don't get this point, 
let me explain : let say bit 5 represents prime number 13. 
now in your mask that bit is set , and number at which currently are also has this prime number 13 , so AND so that bit is 1. and when AND is 1 that means it presents in both your previous element and current element and that means prime number repeats but you don't want this. 
so for each bit it shoul be set to 0 then only you are able to consider this.

Now passing this mask for further index I  have done Bitwise OR , 
that means this prime numbers have been taken.
So , OR is for maintaining which prime number have taken
ansd AND is for checking part , can add this element or not. 


now when you out of bound index then you check if your mask is greater than 1 that means you have taken any number than return 1 as this is valid subset otherwise return 0. 


Now , have to tackle 1 seperatly , 

we can add this multiple times and that will not affect our result. 

**so at the end just multiply pow(2 , ones) to number of subset that you have got.** 


***Are you still reading ??*** 

**Thanks to come upto here.** 

DO UPVOTE AND MAKE ME HAPPY :)) 



# Code
```
class Solution {
public:

    long long dp[1025][1025]; 

    
    long long binary_exponentiation(int a , long long x , int md){
        if(x == 0) return 1; 
        long long half = binary_exponentiation(a , x/2 , md)%md; 
        if(x%2 == 0){
            return ( half % md * half % md ) % md; 
        }
        return (a % md * half % md * half % md) % md; 
    }


    long long get_value(vector < long long > &v , int index , int mask , 
    map < long long , long long > & mp){

        int md = 1e9 + 7; 
        if(index == v.size()) return (mask > 0); 
        if(dp[index][mask] != -1) return dp[index][mask];
        // non _take
        long long a = get_value(v , index+1 , mask , mp) % md; 
        long long b = 0; 
        // Take (after checking)
        if( (mask & v[index]) == 0){
            b = ((mp[v[index]] % md)*(get_value(v , index+1 , mask | (v[index])  , mp) % md)%md) % md; 
        }
        return dp[index][mask] = (a%md + b%md)%md; 

    }

    void can_take(int x , int primes[] , map < long long , long long > & mp){

        bool check = true; 
        long long num = 0; 
        for(int i = 0 ; i< 10 ; i++){
            int cnt = 0;
            while(x % primes[i] == 0) {
                x /= primes[i]; 
                cnt++;
                // if duplicate is there than remove. 
                if(cnt > 1){
                    check = false; 
                    break; 
                }
            }
            if(cnt == 1) num |= (1<<i); 
        }
        if(check){
            mp[num]++; 
        }
    }
    int numberOfGoodSubsets(vector<int>& nums) {

        int primes[10] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
        vector < long long > v; 
        map < long long , long long > mp; 
        long long ones = 0; 
        for(auto  x : nums){
            // count ones
            if(x == 1) ones++; 
            // store number is term of bitmask that we have discussed. 
            else {
                can_take(x , primes , mp);      
            }
        }

        for(auto & x : mp) v.push_back(x.first); 
        memset(dp , -1 , sizeof(dp)); 
        int md = 1e9 + 7; 
        long long ans = get_value(v , 0 , 0 , mp) % md; 
        // binary exponentiation to find power. 
        long long power = binary_exponentiation(2 , ones , md) % md; 
        ans = ((ans%md)*power%md) % md; 
        return ans%md;  
    }
};
```

image.png![image.png](./images/0.png)
