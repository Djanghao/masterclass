# ✅☑️ Best C++ 2 Solution || Divide and Conquer || Merge Sort || Brute Force -> Optimize.

**Author:** its_vishal_7575
**Votes:** 199
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/3185939/](https://leetcode.com/problems/reverse-pairs/solutions/3185939/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have solve this question using Two Approaches.
1. Solved Using Array(Two Nested Loop). Brute Force Approach.
2. Solved using Array + Divide and Conquer + Merge Sort. Optimized Approach.

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

    Time Complexity : O(N^2), where N is the size of the array. As we check for possible pair which can satisfy
    the given condition, and the total number of pairs are : N*(N\u20131)/2.

    Space complexity : O(1), Constant space.

    Solved Using Array(Two Nested Loop). Brute Force Approach.

    Note : This approach is Giving TLE.

*/


/***************************************** Approach 1 *****************************************/

class Solution {
public:
    int reversePairs(vector<int>& nums) {
        int n = nums.size();
        long long reversePairsCount = 0;
        for(int i=0; i<n-1; i++){
            for(int j=i+1; j<n; j++){
                if(nums[i] > 2*(long long)nums[j]){
                    reversePairsCount++;
                }
            }
        }
        return reversePairsCount;
    }
};






/*

    Time Complexity : O(NlogN), Each recursive call to performs two recursive calls on subslices of size N/2 and
    One linear scans of length <= N. Therefore, the time complexity of the divide & conquer approach can be
    represented by the following recurrence relation: T(N)=2T(N/2)+N. Where N is the size of the Array(nums).

    Space Complexity : O(N), Recursion Stack Space O(logN) + Array(temp) space O(N). 

    Solved using Array + Divide and Conquer + Merge Sort. Optimized Approach.

*/


/***************************************** Approach 2 *****************************************/

class Solution {
private: 
    void merge(vector<int>& nums, int low, int mid, int high, int& reversePairsCount){
        int j = mid+1;
        for(int i=low; i<=mid; i++){
            while(j<=high && nums[i] > 2*(long long)nums[j]){
                j++;
            }
            reversePairsCount += j-(mid+1);
        }
        int size = high-low+1;
        vector<int> temp(size, 0);
        int left = low, right = mid+1, k=0;
        while(left<=mid && right<=high){
            if(nums[left] < nums[right]){
                temp[k++] = nums[left++];
            }
            else{
                temp[k++] = nums[right++];
            }
        }
        while(left<=mid){
            temp[k++] = nums[left++]; 
        }
        while(right<=high){
            temp[k++] = nums[right++]; 
        }
        int m=0;
        for(int i=low; i<=high; i++){
            nums[i] = temp[m++];
        }
    }

    void mergeSort(vector<int>& nums, int low, int high, int& reversePairsCount){
        if(low >= high){
            return;
        }
        int mid = (low + high) >> 1;
        mergeSort(nums, low, mid, reversePairsCount);
        mergeSort(nums, mid+1, high, reversePairsCount);
        merge(nums, low, mid, high, reversePairsCount);
    }
public:
    int reversePairs(vector<int>& nums) {
        int reversePairsCount = 0;
        mergeSort(nums, 0, nums.size()-1, reversePairsCount);
        return reversePairsCount;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)