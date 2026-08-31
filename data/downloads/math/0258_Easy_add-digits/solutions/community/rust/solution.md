# One Line O(1) solution with explanation beats 100%

**Author:** user5545De
**Votes:** 11
**Link:** [https://leetcode.com/problems/add-digits/solutions/4626383/](https://leetcode.com/problems/add-digits/solutions/4626383/)

---

# Approach
Upon observing carefully, we can see that ```38 -> 11 -> 2``` is similar to ```38 % 9``` which is again ```2```

Similarly, for any number which is a ```multiple of 9```, the result will be ```9```. For example, ```18 -> 9```, ```27 -> 9```, ```36 -> 9``` and so on.

##### Edge Case Scenario:
If ```num == 0```, then ```0 % 9 will give 9``` which is wrong as the correct answer should be ```0```. So, we need to handle it separately.

**PLEASE DO CONSIDER AN UPVOTE IF YOU LIKED AND UNDERSTOOD THE SOLUTION :)**

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
class Solution {
    public int addDigits(int num) {
        return num == 0 ? 0 : num % 9 == 0 ? 9 : num % 9;
    }
}
```