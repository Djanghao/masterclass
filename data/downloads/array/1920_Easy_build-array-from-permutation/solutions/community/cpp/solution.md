# Easy explanation for O(1) space complexity

**Author:** lakpro
**Votes:** 92
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1692310/](https://leetcode.com/problems/build-array-from-permutation/solutions/1692310/)

---

**Explanation for O(1) space complexity**

*Lets first see generally what should be done.*

**1.**  We need to store 2 values in one place, so we will use math (quotient and remainder)
	   

**2.** Let, size of array = **n**
       original number = **a**
       final number = **b**
	   
**3.**  So we will store **a = a + n*b**

**4.**   On taking **a%n**, we will get **a**
      On doing **a/n**, we will get **b**
	  
**5.**  Here the **b** that we are using is actually an **a** and there is a chance that it might be an **a** that is updated (final number)
      To get **a** from **a**, we use **a%n**
       So, here it will be **b%n**
       
  **6.** Finally, our equation becomes **a=a +n(b%n)**
       
   **7.**  In the question **a=nums[i] and b=nums[nums[i]]**
   
  **8.** So finally, the equation becomes
       **nums[i] = nums[i] + n * (nums[nums[i]]%n)**

***
**Update 1 (Intuition):**
In the question, it's given that `nums[i]` is always less than the length of nums. So, we take a number bigger than our numbers in the array. Here, we took it to be **nums.length()**.
We are updating our number in such a way that on taking `nums[i] % n` will return the original number and `nums[i]/n` will give the new number. 
Since we are adding` n*(new number)` to our original number, then `nums[i] % n` will be the previous number because the remainder will be the same.
Ex: let `n=7`, `nums[i] = 3`, `new number = 5`.
So, initially, `nums[i] = original number % n` => `3%7 =3`
Now, lets update to get the new value. `nums[i] = nums[i] + n * new number` => `nums[i] = 3 + 7*5 = 38`
To get original number: `nums[i]%n` => `38%7 = 3`
To get the new number: `nums[i]/n` => `38/7 = 5`
***
**Update 2 (Summary):**	  
As we proceed through the loop, we are updating the value of `nums[i]`
In `b`, we are storing the value of `nums[nums[i]]` (the original value, not the updated one)
For example, **we updated nums[i] for i=0,1,2** and at 3, `let nums[3] =0` .
Here, we need to store two values, `a=nums[3]` and `b=nums[nums[3]] = nums[0]`
So, *we need to store the value of nums[0] in b* .
Currently, **the value of nums[0] is updated one** and we need to store the original value.
To get the `original value from nums[i]`, we do `nums[i] % n`, which we will store in b. (see point 4)
So, `nums[nums[3]] % n` = `nums[0] % n` = `original value of nums[0]`
(if we did not use %n here, then it would have given ( `nums[0] = nums[0] + n*(something)`) , coz it was updated by the loop for i=0 .  
 
***	   

*Here is the C++ solution for the same:*
	   
```
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        
        
        int n=nums.size();
        
        for(int i=0;i<n;++i){
            
            nums[i] = nums[i] + n * (nums[nums[i]]%n);
                
        }
        
        for(int i=0;i<n;++i){
            nums[i]/=n;
        }
        
        return nums;
    }
};
```

