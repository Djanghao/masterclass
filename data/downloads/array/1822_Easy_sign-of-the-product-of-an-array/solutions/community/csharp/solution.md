# Easy C# Solution

**Author:** Rohit_chiki
**Votes:** 2
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476194/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476194/)

---

# Intuition

- If there are even negative numbers in the array then the result always be a positive number.

- If there are odd negative numbers in the array then the result always be a negative number.

# Approach

Iterate over an array and count the number of negative integers in the entire array. Check a base condition If there is any zero return answer as zero.

# Complexity
- Time complexity: O(n)


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ArraySign(int[] nums) {
        int neg = 0;
        
        foreach(var num in nums)
        {
            if(num == 0) return 0;

            if(num < 0) neg++;
        }        

        return (neg%2 == 0) ? 1 : -1;
    }
}


```