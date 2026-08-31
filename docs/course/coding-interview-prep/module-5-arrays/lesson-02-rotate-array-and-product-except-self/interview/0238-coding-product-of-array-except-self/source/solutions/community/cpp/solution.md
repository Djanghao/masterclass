# ✅☑️ Best C++ 3 Solution || DP || Space optimization || Brute Force -> Optimize || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 1095
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/3186745/](https://leetcode.com/problems/product-of-array-except-self/solutions/3186745/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Multiple Approaches. (Here I have explained all the possible solutions of this problem).

1. Solved using Array(Two Nested Loops). Brute Force Approach.
2. Solved using Dynamic Programming Approach(tabulation).
3. Solved using Dynamic Programming Approach(Space Optimization). Optimized Approach.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the All the approaches by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity is given in code comment.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is given in code comment.

# Code
```
/*

    Time Complexity : O(N^2), Where N is the size of the Array(nums). Here Two nested loop creates the time 
    complexity.

    Space complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
    output does not count towards the space complexity.

    Solved using Array(Two Nested Loop). Brute Force Approach.

    Note : This will give TLE.

*/


/***************************************** Approach 1 *****************************************/

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output;
        for(int i=0; i<n; i++){
            int product = 1;
            for(int j=0; j<n; j++){
                if(i == j) continue;
                product *= nums[j];
            }
            output.push_back(product);
        }
        return output;
    }
};






/*

    Time Complexity : O(N), As we iterate the Array(nums) thrice. Where N = size of the array.

    Space complexity : O(N), Array(left_Product and right_Product) space. 

    Solved using Dynamic Programming Approach(tabulation).

*/


/***************************************** Approach 2 *****************************************/

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);
        vector<int> left_Product(n);
        vector<int> right_Product(n);
        left_Product[0] = 1;
        for(int i=1; i<n; i++){
            left_Product[i] = left_Product[i-1] * nums[i-1];
        }
        right_Product[n-1] = 1;
        for(int i=n-2; i>=0; i--){
            right_Product[i] = right_Product[i+1] * nums[i+1];
        }
        for(int i=0; i<n; i++){
            ans[i] = left_Product[i] * right_Product[i];
        }
        return ans;
    }
};






/*

    Time Complexity : O(N), As we iterate the Array(nums) twice. Where N = size of the array.

    Space complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
    output does not count towards the space complexity.

    Solved using Dynamic Programming Approach(Space Optimization). Optimized Approach.

*/


/***************************************** Approach 3 *****************************************/

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output(n);
        output[0] = 1;
        for(int i=1; i<n; i++){
            output[i] = output[i-1] * nums[i-1];
        }
        int right = 1;
        for(int i=n-1; i>=0; i--){
            output[i] *= right;
            right *= nums[i];
        }
        return output;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)