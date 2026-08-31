# Simple | Java | Greedy

**Author:** priyanpaulraj
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/807150/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/807150/)

---

```
	public int minOperations(int[] nums) {
        int res = 0;
        boolean allZeros = false;
        
        while(!allZeros){
            allZeros = true;         
            
            for(int j=0;j<nums.length;j++){
                int mod = nums[j] % 2; // to count the odds
                res += mod; // op 0
                nums[j] /= 2; // divide by 2
                if(nums[j] != 0)
                    allZeros = false;
            }
            
            res++; // op 1
        }                
        return res - 1;       
    }
```