# Simply check cost after each rotation || Very Simple & Easy to understand solution

**Author:** kreakEmp
**Votes:** 42
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3623883/](https://leetcode.com/problems/collecting-chocolates/solutions/3623883/)

---

<b> Up vote if you like the solution </b>
# Approach
Trick : Keep rotating the array and then collect the min value possible at each type and check for the total cost after each roation and take the minimum.

Could not get above !!!

Here is the step wise explanation:
1. We take a vector "checked" which stores minimum possible value of type when we keep on rotating.
2. There is one outer loop that basically keep track of the number of rotation we performed.
3. There will be a inner loop that basically check the total cost till that rotation.
4. Keep taking the smallest value of all rotations.

### Note : 
- eventually the checked vector will store only min value in all its indexes but the optimal solution may be encountered in between as well.

- Also we have taken a cnum of size double of the nums to nullify the effect of rotation.

# Code
```
long long minCost(vector<int>& nums, int x) {
    long long ans = LONG_MAX;
    vector<int> checked(nums.size(), INT_MAX), cnum(nums.begin(), nums.end());
    for(auto n: nums) cnum.push_back(n);
    for(int i = 0; i < nums.size(); ++i){
        long long sum = 0;
        for(int j = 0; j < nums.size(); ++j){
            checked[j] = min(checked[j], cnum[i+j]);
            sum += checked[j];
        }
        sum += (long long)i*(long long)x;
        ans = min(ans, sum);
    }
    return ans;
}
```

<b>Here is an article of my recent interview experience at Amazon, you may like :
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted