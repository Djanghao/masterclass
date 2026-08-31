# Explained - Bit wise manipulation || Very simple and easy understand

**Author:** kreakEmp
**Votes:** 12
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5903752/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5903752/)

---


# Intuition 
- By analysing few cases I observed following:
  - as all are prime except 2, all numbers are odd ( so the last bit is set)
  - as all numbers are odd => trivial ans is n-1. Where n-1 one has last bit set to zero and (n-1) | n will be always eqaul to n
  - Now we need to optimise further to find  a smaller number that satisfy given condition
  - if all bits are not set then the highest bit must be set in the answer as well.( the answer must be number whose largest bit is same as that of given number)

- Finally concluded with the following two cases :
  1. when all bits are one (that is the number is in the form n^2 -1 ) => then answer will be n/2
  2. when all bits are not one => 
      - then in the answer the highest bit must be set( Need to find the largest number less than current number which is a power of 2 and add this value to answer)
      - then set the highest bit to zero. ( subtract largest number less than current number which is smaller than 2)
      Other way of thinking this is => 
      
Lets take an example of n = 13 ( 1101) and initialize ans with 0
Now n is not a number whose all bits are set, so we remove the highest bit and the same is added to ans temporary variable.
or you can think up lik find the largest number which is power of 2 and less than n (that is 8 here ) and subtract this from the number ( this will set the higest bit zero) and add this number to the ans as well.
So now n = 13 - 8 = 5 and ans = 0 + 8 = 8

In next iteration n = 5 is again not in the form which has all bits set, so we repeat above steps
find the largest power of 2 which is smaller than n = 5 that is 4
Now subtract 4 from n and add it to the ans => n = 5 - 4 = 1 and ans = 8 + 4 = 12

In next iteration we find that n = 1 is in the form where all the bits are set. So we add n/2 to ans and set n to zero
n = 0 and ans = 12 + 1/2 = 12
      
Hence here our answer is 12

# Approach 
- Iterate over each number in the nums
- if n is equal to 2 which is a even number and we will consider a special case here. So return the answer as -1
- if not equal to 2 then do the following steps:
 - initialize temp answer sum to zero and copy value of n to a temp var t
 - now if t is greater than 0 then repeat :
   - if it is in the form where all bits are set(or we can check if n+1 is a power of 2 or not) then sum qill be equal to t/2 and set t to zero
   - if all bits are not set then find the largest number which is power of 2 and less than t. Add the number to sum and subtract it from t

# Code
```cpp []
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return ((n & (n - 1)) == 0);
    }
    
    int largestPowerOfTwoLessThan(int n) {
        if (n <= 1) return 0;
        int exponent = floor(log2(n));
        return 1 << exponent; // Equivalent to pow(2, exponent)
    }
    
    vector<int> minBitwiseArray(vector<int>& nums) {
        vector<int> ans;
        for(auto n: nums){
            if(n == 2) ans.push_back(-1);
            else{
                int t = n, sum = 0;
                while(t > 0){
                    if(isPowerOfTwo(t+1)){
                        sum += t/2;
                        t = 0;
                    }else{
                        int d = largestPowerOfTwoLessThan(t);
                        sum += d;
                        t -= d;
                    }
                }
                ans.push_back(sum);
            }
        }
        return ans;
    }
};
```

---


<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---