# [JAVA] straight forward solution

**Author:** Jugantar2020
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/2769633/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/2769633/)

---



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int smallestEqual(int[] nums) {
      for(int i = 0; i < nums.length; i ++) {
           if(i % 10 == nums[i]) { 
               return i;
               
           }
       }
        return - 1;  
    }
}
```
# PLEASE UPVOTE IF IT WAS HELPFULL