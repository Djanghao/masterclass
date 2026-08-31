# Explained - O(n) || Check consecutive sum only

**Author:** kreakEmp
**Votes:** 159
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3869991/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3869991/)

---

#### Up vote if you like the solution
# Approach 
- This case is only possible if there are two consecutive number whose sum is greater than or equal to m. Because if we have this case then we can simply remove all previous and post numbers one by one. But if this is not present then there is no way we can devide all the elements as at some point we arrive at point where we have three numbers left and non of the two consicutive sum greater than or equal to m.

Note : corner case  - if we have less than or equal  2 elements then it is always possible to divide it into two as each have a length of 1.

# C++
```
bool canSplitArray(vector<int>& nums, int m) {
    if(nums.size() <= 2) return true;
    for(int i = 1; i < nums.size(); i++){
        if(nums[i] + nums[i-1] >= m) return true;
    }
    return false;
}
```

# Java
```
boolean canSplitArray(List<Integer> nums, int m) {
    if(nums.size() <= 2) return true;
    for(int i = 1; i < nums.size(); i++){
        if(nums.get(i) + nums.get(i-1) >= m) return true;
    }
    return false;
}
```

---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---