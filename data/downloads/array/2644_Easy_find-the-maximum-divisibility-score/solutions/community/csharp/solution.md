# ✅Simple Solution in Go and C#✅

**Author:** shukhratutaboev
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422013/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422013/)

---



# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxDivScore(nums []int, divisors []int) int {
    maxCount, index := 0, 0
    
    for i := 0; i < len(divisors); i++ {
        count := 0
        for j := 0; j < len(nums); j++ {
            if nums[j] % divisors[i] == 0 {
                count++
            }
        }
        
        if count > maxCount || (count == maxCount && divisors[i] < divisors[index]) {
            maxCount = count
            index = i
        }
    }
    
    return divisors[index]
}
```
C#
```
public class Solution {
    public int MaxDivScore(int[] nums, int[] divisors) {
        int maxCount = 0;
        int index = 0;
        
        for (int i = 0; i < divisors.Length; i++) {
            int count = 0;
            for (int j = 0; j < nums.Length; j++) {
                if (nums[j] % divisors[i] == 0) {
                    count++;
                }
            }
            
            if (count > maxCount || (count == maxCount && divisors[i] < divisors[index])) {
                maxCount = count;
                index = i;
            }
        }
        
        return divisors[index];
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)