# ✅☑️ Best C++ 3 Solution || Binary Search || Iterative-Recursive || Brute Force->Optimize.

**Author:** its_vishal_7575
**Votes:** 203
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/3189138/](https://leetcode.com/problems/find-peak-element/solutions/3189138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can Solved this question using multiple approach. (Here I have explained all the possible solutions of this problem).

1. Solved using Linear Search. Brute Force Approach
2. Solved using Binary Search (Recursive Approach).
3. Solved using Binary Search (Iterative Approach). Optimized Approach.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the all the approaches by seeing the code which is easy to understand with comments.

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

    Time Complexity : O(N), because in the worst case we traverse the <= N element. Where N is the size of the
    Array(nums).
                    
    Space Complexity : O(1), the space complexity is constant.

    Solved using Linear Search.

*/


/***************************************** Approach 1 First Code *****************************************/

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int n = nums.size();
        for(int i=0; i<n-1; i++){
            if(nums[i] > nums[i+1]){
                return i;
            }
        }
        return n-1;
    }
};






/***************************************** Approach 1 Second Code *****************************************/

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        return max_element(nums.begin(), nums.end()) - nums.begin();
    }
};






/*

    Time Complexity : O(log N), since we have used binary search to find the target element. The time complexity
    is logarithmic.

    Space Complexity : O(logN), Recursion stack space.

    Solved using Binary Search (Recursive Approach).

*/


/***************************************** Approach 2 First Code *****************************************/

class Solution {
private: 
    int recursive_binary_search(vector<int>& nums, int low, int high){
        if(low == high){
            return low;
        }
        int mid = (low + high) >> 1;
        if(nums[mid] > nums[mid+1]){
            return recursive_binary_search(nums, low, mid);
        }
        else{
            return recursive_binary_search(nums, mid+1, high);
        }
    }
public:
    int findPeakElement(vector<int>& nums) {
        return recursive_binary_search(nums, 0, nums.size()-1);
    }
};






/*

    Time Complexity : O(log N), since we have used binary search to find the target element. The time complexity
    is logarithmic.

    Space Complexity : O(1), since we stored only some constant number of elements, the space complexity is
    constant.

    Solved using Binary Search (Iterative Approach).

*/


/***************************************** Approach 3 First Code *****************************************/

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int n = nums.size();
        int low = 0;
        int high = nums.size()-1;
        while(low < high){
            int mid = (low + high) >> 1;
            if(nums[mid] > nums[mid+1]){
                high = mid;
            }
            else{
                low = mid + 1;
            }
        }
        return low;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)