# Explained - using map || very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3868017/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3868017/)

---

# Inution 
We need to find out the number whose occurance is very frequent and max elements between its two occurance should be minimun.

# Approach
1. Here we need to find the max number of elements in between two occurance of same element for each value.
2. Then find the element where the maxDiff is minimum.
3. Return the (min + 1)/2 as the answer.

Basically for each two occurance of an element with n number of different elements in between them. Then it will take (n+1) second to make all middle element equal to the boundary element.
for ex: [1, 2,3,4, 1]
Here in b/w two occurance of 1's we have 3 different numbers.
Now after 1st operation : [ 1, 1,3,1, 1]
After 2nd operation: [1, 1,1,1, 1]

We needed (n+1)/2 = (3+1)/2 = 2 operations make all element equal.

Note : To handle rotation case, I have executed the for loop two times.


# Code
```
int minimumSeconds(vector<int>& nums) {
    int ans = INT_MAX, n = nums.size();
    unordered_map<int, int> lastSeen, maxDiff;
    for(int i = 0; i < n; ++i){
        if(lastSeen.find(nums[i]) != lastSeen.end()){
            maxDiff[nums[i]] = max(maxDiff[nums[i]], i - lastSeen[nums[i]] - 1);
        }
        lastSeen[nums[i]] = i;
    }
    for(int i = 0; i < n; ++i){ //to handle rotation repeat the same once again
        maxDiff[nums[i]] = max(maxDiff[nums[i]], (i - lastSeen[nums[i]] -1 + n )%n );
        lastSeen[nums[i]] = i;
    }
    
    for(auto [k, v]: maxDiff) ans = min(ans, v);
    return (ans + 1)/2; 
}
```
---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---