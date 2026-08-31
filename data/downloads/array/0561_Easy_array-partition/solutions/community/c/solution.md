# O(NLogN), [C++/Java], beats 99%

**Author:** akashsahuji
**Votes:** 34
**Link:** [https://leetcode.com/problems/array-partition/solutions/1061085/](https://leetcode.com/problems/array-partition/solutions/1061085/)

---

**Implementation**

**1st Approach in C++**
Time Complexity = O(NLogN), Space Complexity = O(1)

```
int arrayPairSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int result = 0;
    for(int itr = 0; itr < nums.size(); itr += 2){
        result += nums[itr];
    }
    return result;
}
```


**2nd Approach in Java**
Time Complexity = O(NLogN), Space Complexity = O(1)

```
public int arrayPairSum(int[] nums) {
    Arrays.sort(nums);
    int result = 0;
    for(int itr = 0; itr < nums.length; itr += 2){
        result += nums[itr];
    }
    return result;
}
```
If you find any issue in understanding the solutions then comment below, will try to help you.
If you found my solution useful.
So **please do upvote and encourage me** to document all leetcode problems\uD83D\uDE03
Happy Coding :)