# 🔥🔥BRUTE TO OPTIMAL🌟🔥[C++] || SlidingWindow💯

**Author:** aDish_21
**Votes:** 21
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/3737164/](https://leetcode.com/problems/longest-alternating-subarray/solutions/3737164/)

---

## Connect with me on LinkedIN : https://www.linkedin.com/in/aditya-jhunjhunwala-51b586195/
# Complexity
```
- Time complexity:
1st Approach : O(n^2)
2nd Approach : O(n)

```
```
- Space complexity:
O(1)
```

# Code
## An Upvote will be encouraging\uD83E\uDD17 as it motivates me to post more such solutions\uD83C\uDF1F
# 1st Approach(BRUTE FORCE):-
```
class Solution {
public:
    int alternatingSubarray(vector<int>& nums) {
        int n = nums.size(); // Size of the input vector
        int maxi = -1; // Initialize the maximum length of an alternating subarray as -1
        
        for(int i = 0; i < n-1; i++) { // Outer loop for starting index of subarray
            bool ch = false; // Flag to track increasing or decreasing order
            
            for(int j = i + 1; j < n; j++) { // Inner loop for ending index of subarray
                if(!ch) { // Subarray is in increasing order
                    if(nums[j] - nums[j-1] == 1) { // Check for alternating pattern
                        ch = true; // Set flag to true
                        maxi = max(maxi, j - i + 1); // Update maximum length if necessary
                    } else {
                        break; // Break the inner loop if alternating pattern is not valid
                    }
                } else { // Subarray is in decreasing order
                    if(nums[j] - nums[j-1] == -1) { // Check for alternating pattern
                        ch = false; // Set flag to false
                        maxi = max(maxi, j - i + 1); // Update maximum length if necessary
                    } else {
                        break; // Break the inner loop if alternating pattern is not valid
                    }
                }
            }
        }
        
        return maxi; // Return the maximum length of an alternating subarray
    }
};

```
# 2nd Approach(Sliding Window):-
```
class Solution {
public:
    int alternatingSubarray(vector<int>& nums) {
        int n = nums.size(),i = 0,j = 1,maxi = -1;
        bool ch = false;
        while(j < n){
            if(!ch){
                if(nums[j] - nums[j-1] == 1){
                    ch = true;
                    maxi = max(maxi,j - i + 1);
                }
                else
                    i = j;
            }
            else{
                if(nums[j] - nums[j-1] == -1){
                    ch = false;
                    maxi = max(maxi,j - i + 1);
                }
                else if(nums[j] - nums[j-1] == 1){
                    i = j - 1;
                    maxi = max(maxi,j - i + 1);
                }
                else{
                    ch = false;
                    i = j;
                }
            }
            j++;
        }
        return maxi;
    }
};
```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
