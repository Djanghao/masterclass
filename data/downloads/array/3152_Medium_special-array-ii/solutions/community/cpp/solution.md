# [C++/Java] Explained - Convert the array II

**Author:** kreakEmp
**Votes:** 136
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/5177107/](https://leetcode.com/problems/special-array-ii/solutions/5177107/)

---




# Intuition 
- We need to create a converted array where we start from zero and keep increasing the value as we see a pair where both of them have same parity. This way at the end if the start index and end index have same value then for that particular range there is no pair exists whose parity is same but if the start and end index do not match then there must be a pair exists in between due to which the value changes.

# Approach
1. Create a converted vector with inital value of zero
2. Then iterate over the nums and assign value to converted vector. The assigned value(j) will increase by 1 if the current number parity is same as the previous one.
3. Once we done with creation of converted vector, iterate over the queries and check if the start and end index of the ith query in the coverted vector are same or not, accordingly set true and false to ans vector. If the start and end has same value that means there is no pair in between where the parity is same. If the parity would have been same then the end index would have a larger value then that of the start endex value.

Here is an example of the same for better visualisation :
input array.............:  5, 4, 6, 4, 3, 8, 2, 6, 5, 2, 1, 8
transfermed array : 0, 0, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4


# Complexity 
- Time : O(N)
- Space : O(N)
    
# Code
```cpp []
vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
    vector<bool> ans;
    vector<int> converted(1, 0);
    for(int i = 1, j = 0; i < nums.size(); ++i){
        if( (nums[i]%2) == (nums[i-1]%2) ) j++;
        converted.push_back(j);
    }
    for(auto q: queries) ans.push_back( converted[q[0]] == converted[q[1]] );
    return ans;
}
```

```Java []
boolean[] isArraySpecial(int[] nums, int[][] queries) {
    boolean[] ans = new boolean[queries.length];
    int[] converted = new int[nums.length];
    converted[0] = 0;
    for(int i = 1, j = 0; i < nums.length; ++i){
        if(nums[i]%2 == nums[i-1]%2) j++;
        converted[i] = j;
    }
    for(int i = 0; i < queries.length; ++i) ans[i] = (converted[queries[i][0]] == converted[queries[i][1]]);
    return ans;
}
```

Above code can also be modified to the following, with out using separate j iterator:
```cpp []
vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
    vector<bool> ans;
    vector<int> converted(1, 0);
    for(int i = 1; i < nums.size(); ++i) converted.push_back(converted.back() + (nums[i]%2 == nums[i-1]%2));
    for(auto q: queries) ans.push_back( converted[q[0]] == converted[q[1]] );
    return ans;
}
```
```Java []
boolean[] isArraySpecial(int[] nums, int[][] queries) {
    boolean[] ans = new boolean[queries.length];
    int[] converted = new int[nums.length];
    converted[0] = 0;
    for(int i = 1; i < nums.length; ++i) converted[i] = (nums[i]%2 != nums[i-1]%2)?converted[i-1]: parity[i-1] + 1;
    for(int i = 0; i < queries.length; ++i) ans[i] = (converted[queries[i][0]] == converted[queries[i][1]]);
    return ans;
}
```



---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---