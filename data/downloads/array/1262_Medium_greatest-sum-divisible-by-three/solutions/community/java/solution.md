# [Java] Clear easy solution

**Author:** artemisFalcon
**Votes:** 21
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/657894/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/657894/)

---

Time Complexity: O(n)
Space Complexity: O(1)

Since we need the greatest sum divisible by 3, we just need to get the sum of the entire array and subtract the smaller number that would remove the remainder if it is not divisible by 3. 

```
class Solution {
    public int maxSumDivThree(int[] nums) {
        int sum = 0;
        int oneRemainder = 20000;
        int twoRemainder = 20000;
        
        for(int num : nums)
        {
            sum += num;
            
            if(num % 3 == 1)
            {
                twoRemainder = Math.min(twoRemainder, oneRemainder + num);
                oneRemainder = Math.min(oneRemainder, num); 
            }
            
            if(num % 3 == 2)
            {
                oneRemainder = Math.min(oneRemainder, twoRemainder + num);
                twoRemainder = Math.min(twoRemainder, num);
                 
            }
        }
        
        if(sum % 3 == 0)
            return sum;
        
        if(sum % 3 == 1)
            return sum - oneRemainder;
        
        if(sum % 3 == 2)
            return sum - twoRemainder;
        
        return 0;
            
    }
}
```