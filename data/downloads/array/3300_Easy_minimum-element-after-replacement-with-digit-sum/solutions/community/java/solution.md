# Minimum Digit Sum Finder | Beats 100% ✅

**Author:** deleted_user
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844334/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844334/)

---

# Intuition
- Calculate the sum of digits for each number and track the smallest sum.

# Approach
- Use a helper function to get the sum of digits.
- Iterate through the array, updating the minimum digit sum.

# Complexity
- Time complexity:  
  $$O(n \\cdot m)$$ \u2014 \\(n\\) is the number of elements, \\(m\\) is the average digits per number.
  
- Space complexity:  
  $$O(1)$$ \u2014 Constant space for the minimum sum.

# Code
```java
class Solution {
    private int sumOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
    
    public int minElement(int[] nums) {
        int min = Integer.MAX_VALUE;
        for (int num : nums) {
            min = Math.min(min, sumOfDigits(num));
        }
        return min;
    }
}
```

# Upvote if you found this helpful! \uD83D\uDE0A