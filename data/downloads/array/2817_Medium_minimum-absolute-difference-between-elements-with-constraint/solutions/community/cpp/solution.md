# C++ & Java || upper bound & set || Very simple

**Author:** kreakEmp
**Votes:** 75
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901637/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901637/)

---

# Approach
1. Add elements less than x to the multi set
2. find the upper bound of the current element in the multi set.
3. As we get the next larger number, check the diff with it and also with the previous element and take the min.

## C++
```
int minAbsoluteDifference(vector<int>& nums, int x) {
    int ans = INT_MAX;
    set<int> s;
    for(int i = x; i < nums.size(); ++i){
        s.insert(nums[i-x]);
        auto it = s.upper_bound(nums[i]);
        if(it != s.end()) ans = min(ans, abs(nums[i] - *it));
        if(it != s.begin()) ans = min(ans, abs(nums[i] - *prev(it)));
    }
    return ans;
}
```

## Java
```
int minAbsoluteDifference(List<Integer> nums, int x) {
    int ans = Integer.MAX_VALUE;
    TreeSet<Integer> s = new TreeSet<>();
    for(int i = x; i < nums.size(); ++i){
        s.add(nums.get(i-x));
        Integer high = s.ceiling(nums.get(i)), low = s.floor(nums.get(i));
        if(high != null) ans = Math.min(ans, Math.abs(nums.get(i) - high));
        if(low != null) ans = Math.min(ans, Math.abs(nums.get(i) - low));
    }
    return ans;
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
