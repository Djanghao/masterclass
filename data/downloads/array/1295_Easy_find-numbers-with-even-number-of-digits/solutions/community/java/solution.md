# JAVA solution with 100% better space and Time

**Author:** adarshv19
**Votes:** 545
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/459489/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/459489/)

---

Very Simple 
10-99 ---- EVEN digit
1000-9999 --- EVEN digit
100000 -- EVEN digit
```
class Solution {
    public int findNumbers(int[] nums) {
        
        int count=0;
        
        for(int i =0 ; i< nums.length; i++){
            
            if((nums[i]>9 && nums[i]<100) || (nums[i]>999 && nums[i]<10000) || nums[i]==100000){
                count++;
            }
        }
        
        return count;
        
    }
}
```
