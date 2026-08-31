# 100% Beats| Best C++ Solution with two pointer approach

**Author:** sarthak--saini
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/3913642/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/3913642/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->We were given a sorted 2D array to work.

# Approach
<!-- Describe your approach to solving the problem. -->
1. isValid Function: Determines if a fruit range is valid based on constraints, considering cases where one endpoint is before/after the start position.
2. maxTotalFruits Function: Sliding window approach to find maximum fruits collectible. Iterates through fruits, adding counts to sum.
3. Adjusting Left Pointer: While range is invalid, subtract fruit count at left and move left pointer.
Updating Max Fruits: Keeps track of maximum fruit sum (ans) encountered during iteration.

Return Maximum: After iteration, returns the maximum sum of fruits collectible from the given start position while satisfying constraints.

PLEASE UPVOTE \u2B06\uFE0F\uD83C\uDD99


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
public:
    bool isValid(int left,int right,int startPos,int k) {
        if(right<=startPos) {
            return startPos-left<=k;
        }
        else if(left>=startPos) {
            return right-startPos<=k;
        }
        else {
            int x=startPos-left;
            int y=right-startPos;

            return (2*x + y)<=k || (2*y + x)<=k;
        }

    }
    int maxTotalFruits(vector<vector<int>>& fruits, int startPos, int k) {
        int n=fruits.size();
        int ans=INT_MIN;
        int sum=0;

        int left=0;

        for(int right=0;right<n;right++) {
            sum+=fruits[right][1];
            while(left<=right && !isValid(fruits[left][0],fruits[right][0],startPos,k)) {
                sum-=fruits[left++][1];
            }
            ans=max(ans,sum);
        }

        return ans;
    }
};
```