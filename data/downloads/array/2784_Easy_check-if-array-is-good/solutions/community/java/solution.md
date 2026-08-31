# ✅ 100% Frequency Counting and Max Tracking

**Author:** Kirawastaken
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/4506728/](https://leetcode.com/problems/check-if-array-is-good/solutions/4506728/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to count the frequency of every entry and track the highest number. Afterwards check every frequency and make sure that the highest number was counted **twice** and every number from **1..highest** was exactly counted **once**.

# Approach
<!-- Describe your approach to solving the problem. -->
**Declarations and Initializations**
Primitive Variable to hold value of the highest entry in the array: *highest*
Array to count frequencies. Index of Array corresponds to the numbers 1..n: *f*

According to the description, *n* should equal *nums.length-1* if the input is *good*. That also means we should only have n different values. If we want the index of *f* to correspond to our n numbers from *1..n* the length needs to be *n+1* such that the index *0* is unused and the last index is *n*. 

**Input Array Iteration**
We iterate through the input array once to track the highest value and count the number occurence in the *f* array. If we find a number that is bigger than n should be we can return false because this input can not be **good** as per the problem description.

**Frequency Iteration**
We now iterate through the frequency array to check if every number from *1..n-1* was counted exactly once. If we find one that was not, we return false as the input is not **good**.

**Last Check**
Afterwards we return false if the frequency of n is not equal to 2, true if it is.


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$ 
because you ***never*** ***alter*** ***inputs*** in a real codebase


# Code
```
class Solution {
    public boolean isGood(int[] nums) {
        int n = nums.length-1;
        int highest = 0;
        int[] f = new int[nums.length];
        for(int i = 0; i<nums.length; i++) {    
            if(nums[i] > n) return false;
            f[nums[i]]++;
            if(nums[i] > highest) {
                highest = nums[i];
            } 
        }
        for(int i = 1; i<n; i++) {
            if(f[i] != 1) return false;
        }
        if(f[n] != 2) return false;
        return true;
    }
}
```
![image.png](./images/1.png)


