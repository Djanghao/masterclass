# Easy to Understand and Implement C++ Solution

**Author:** not_fstk_dev
**Votes:** 17
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1162480/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1162480/)

---

**Intuition: why idea of finding product does not work:**
Consider this code:
```
int arraySign(vector<int>& nums) {
        int p = 1;
        for(auto x: nums)
            p *= x;
        if(p > 0)
            return 1;
        else if(p < 0)
            return -1;
        return 0;
    }
```
This code passes successfully for small test cases where the input is small. Larger size of array can lead to Runtime Error:
```
Runtime Error Message:
Line 6: Char 15: runtime error: signed integer overflow: 688764384 * -77 cannot be represented in type 'int' (solution.cpp)
SUMMARY: UndefinedBehaviorSanitizer: undefined-behavior prog_joined.cpp:15:15
Last executed input:
[9,72,34,29,-49,-22,-77,-17,-66,-75,-44,-30,-24]
```

So a better solution would be to check if any of the element in the array is a zero. If yes, then return 0, If no, then count how many negative numbers are there. If their count is even, then return 1, else return 0.

**Code for the same:**
```
int arraySign(vector<int>& nums) {
        int countNeg = 0;
        for(auto x: nums){
            if(x < 0)
                countNeg++;
            else if(x == 0)
                return 0;
        }
        if(countNeg%2 ==0)
            return 1;
        return -1;
    }
```
**Time complexity: O(N)
Space Complexity: O(1)**

Do upvote this solution if it helped you. 
Peace :)