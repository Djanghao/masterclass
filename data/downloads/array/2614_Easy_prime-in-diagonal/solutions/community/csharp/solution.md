# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 5
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3429968/](https://leetcode.com/problems/prime-in-diagonal/solutions/3429968/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Code: C#
```
public class Solution {
    public int DiagonalPrime(int[][] nums) {
        int max=0;
        int n=nums.Length;
       for(int i=0;i<n;i++){
          if(IsPrime(nums[i][i]))
          max=max>nums[i][i]? max:nums[i][i];
          if(IsPrime(nums[i][n-1-i]))
          max=max>nums[i][n-1-i]? max:nums[i][n-1-i];
       } 
       return max;
    }
    public bool IsPrime(int x){
        if(x==1)
        return false;
        for(int i=2;i<=Math.Sqrt(x);i++){
            if(x%i==0)
            return false;
        }
        return true;
    }
}
```

# Code: C++
```
class Solution {
public:
    int diagonalPrime(vector<vector<int>>& nums) {
        int maxPrime = 0;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            if(isPrime(nums[i][i]))
                maxPrime = max(maxPrime, nums[i][i]);
            if(i != n - 1 - i && isPrime(nums[i][n - 1 - i]))
                maxPrime = max(maxPrime, nums[i][n - 1 - i]);
        }
        return maxPrime;
    }
    
    bool isPrime(int x) {
        if(x < 2)
            return false;
        if(x == 2 || x == 3)
            return true;
        if(x % 2 == 0 || x % 3 == 0)
            return false;
        int divisor = 5;
        while(divisor * divisor <= x) {
            if(x % divisor == 0 || x % (divisor + 2) == 0)
                return false;
            divisor += 6;
        }
        return true;
    }
};
```
# Code: JavaScript
```
var diagonalPrime = function(nums) {
        let max=0;
        let n=nums.length;
       for(let i=0;i<n;i++){
          if(IsPrime(nums[i][i]))
          max=max>nums[i][i]? max:nums[i][i];
          if(IsPrime(nums[i][n-1-i]))
          max=max>nums[i][n-1-i]? max:nums[i][n-1-i];
       } 
       return max;
};
    function IsPrime(x){
        if(x<=1)
        return false;
        for(let i=2;i<=Math.sqrt(x);i++){
            if(x%i==0)
            return false;
        }
        return true;
    }
```
![Vote.png](./images/0.png)
