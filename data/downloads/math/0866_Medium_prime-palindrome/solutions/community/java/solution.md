# easy code for beginners in java

**Author:** shagunsharma07
**Votes:** 5
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/4621183/](https://leetcode.com/problems/prime-palindrome/solutions/4621183/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int primePalindrome(int n) {
     int num=n;
     while(n>0){
         if(prime(num)==1 && palindrome(num)==1){
             return num;
         }
             num++;
              if (num > 10_000_000 && num< 100_000_000) {
            num = 100_000_000; 
            }
     }
     return num;
        
    }
    public static int prime(int num){
        if(num<=1) return 0;
        for(int i=2;i<=Math.sqrt(num);i++){
           if(num%i==0){
               return 0;
           }
        }
        return 1;
    }
    public static int palindrome(int num){
     if(num<0) return 0;
     int origin=num;
     int rev=0;
     while(num>0){
         int rem=num%10;
         rev=rev*10+rem;
         num=num/10;
     }
     if(rev==origin){
         return 1;
     }
     else {
         return 0;
     }
    }
}
```