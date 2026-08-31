# ✅ Easy || C++ || Most Optimal || Explanation || 100% Fast

**Author:** atharva_kulkarni1
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/3176256/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/3176256/)

---

```
class Solution {
public:
    int countEven(int num) 
    {
        /* 
        Here we have alternate digit sum as odd and even i.e.
        if sum of digits sum of num -> even 
        then sum of digit sum of num+1 -> odd 
        
        and vice versa 
        
        AND
        
        if sum of each digit in num is even then res -> num/2
        
        else res -> (num-1)/2
        
        */
        
        int currSum = 0;        // for storing sum of each digit in num 
        
        int store = num;        // storing value of num for further checking
        
        while(num)
        {
            currSum += num % 10;    
            num /= 10;
        }
                
        if(currSum & 1)     // i.e. sum is odd
            return (store-1)/2;
        
        else
            return store/2;
        
    }
};
```