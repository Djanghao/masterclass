# ✅C# || ✅JAVA || 🐍Python || Easy to Understand || ⏳Beats 100%

**Author:** Santhosh1608
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174674/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174674/)

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
# Upvote Please \uD83D\uDE09\uD83D\uDE09\uD83D\uDE4C
# Code
```
public class Solution {
    public long FindTheArrayConcVal(int[] nums) {
        int start=0;
        int end=nums.Length-1;
        long result=0;
        while (start <= end){
            if(start == end){
                result+=nums[start];
                start+=1;
            }
            else{
                int checkEnd=1;
                while(checkEnd <= nums[end]){
                    checkEnd*=10;
                }
                result+=(long)nums[start]*checkEnd+nums[end];
                start+=1;
                end-=1;
            }
        }
        return result;
    }
}
```