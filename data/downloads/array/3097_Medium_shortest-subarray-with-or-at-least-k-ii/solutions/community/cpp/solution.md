# Explained - Two pointer approach || Very simple

**Author:** kreakEmp
**Votes:** 51
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4947374/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4947374/)

---

# Intuition 
- This is typical two pointer approach where we need to consider a window and the start and end will be pointed by two pointers. Then keep tracking the operation value over the window to satisfy the given condition
- Also here as the operation is to do OR among the values, it is easy to perform the OR while its difficult to reverse it by simple direct operations. To nullify the OR operation we need to do some extra bit manipulations - that is keep tracking the number of bits set for all bits possible from 0 to 32, while doing the OR as well as while nullifing it. This will help us in setting a bit to zero when its count reaches to zero. If you face difficulty in understnading this statement, I would suggest you to dry run the code and you will get to know more about it.

# Approach
- Consider two pointers set to 0th index and a variable named orVal thats keep tracking the or value of the window under considerations.
- Then as per two pointer approach, simply move the ith/forward pointer and keep taking OR of all the value until its more than or equal to k.
    - To get OR operation value - we simply perform OR operation with our orVal variable and at the same time keep track of the set bits of the ith item and update there corresponding count in bitCount array.
- Once the value is greater than or equal to k, keep updating jth/back pointer to forward until the OR value is greater than or equal to k. Mean while keep tracking the smaller window value possible in the answer variable.
    - To nullify OR value - we need to keep decreasing the bit count as per the set bit of jth item.
    - While the bit count reach to zero we need to set that particular bit to zero in orVal variable

# Complexity 
- Time complexity : O(N)
- Space complexity : O(1)

# Code
```
void performOrOperation(vector<int>& bitCount, int& orVal, int n){
    orVal = (orVal | n);
    for(int t = 0; t < 32; ++t) bitCount[t] += (n & (1 << t))?1:0;
}

void nullifyOrOperation(vector<int>& bitCount, int& orVal, int n){
    for(int t = 0; t < 32; ++t){
        bitCount[t] += (n & (1 << t))?-1:0;
        if(bitCount[t] == 0) orVal = orVal & (~(1<<t));
    }
}

int minimumSubarrayLength(vector<int>& nums, int k) {
    int orVal = 0, ans = INT_MAX;
    vector<int> bitCount(32, 0);
    for(int i = 0, j = 0; i < nums.size(); ++i){
        performOrOperation(bitCount, orVal, nums[i]);
        if(orVal < k) continue; 
        for( ;j <= i && orVal >= k; j++){
            nullifyOrOperation(bitCount, orVal, nums[j]);
            ans = min(ans, i - j + 1);
        }
    }
    return (ans == INT_MAX)? -1: ans;
}
```


---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
