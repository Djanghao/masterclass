# 💡💡 Easy Solution with detailed explanation - 100 % Acceptance rate 💡💡

**Author:** nikkipriya_78
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4115444/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4115444/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the maximum triplet value in the given vector nums by considering three distinct elements (i, j, k) such that i < j < k. You want to maximize the value of (nums[i] - nums[j]) * (nums[j] - nums[k]).

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a multiset uniqueValues to store unique elements in the vector except for the first element.
2. Initialize variables currentMax to keep track of the maximum element encountered so far and maxTripletValue to store the maximum triplet value.
3. Iterate through the vector starting from the second element (index 1).
4. For each element at index i, remove it from uniqueValues and find the current maximum in uniqueValues.
5. Calculate the triplet value using the formula and update maxTripletValue if it's greater than the current maximum.
6. Update currentMax if the current element is greater than currentMax.
7. Return the final maxTripletValue.

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm has a time complexity of O(N log N) due to the use of a multiset, where N is the number of elements in the nums vector.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N) as we store unique elements in the uniqueValues multiset, where N is the number of elements in the nums vector.

---
# Do upvote if you like the solution \uD83D\uDCA1
---


# Code
```
class Solution {
public:
    long long maximumTripletValue(vector<int>& nums) { 
        multiset<int> uniqueValues(nums.begin() + 1, nums.end()); 
        int currentMax = nums[0]; 
        long long maxTripletValue = 0; 

        for (int i = 1; i < nums.size() - 1; i++) { 
            uniqueValues.erase(uniqueValues.find(nums[i])); 
            int currentEnd = (*(--uniqueValues.end())); 
            maxTripletValue = max(maxTripletValue, (currentMax - nums[i]) * 1ll * currentEnd); 
            currentMax = max(currentMax, nums[i]); 
        } 
        return maxTripletValue; 
    }    
};

```