# C++ Two Solutions with O(N) and O(1) Space Complexity | Well Explained

**Author:** parassharma8041
**Votes:** 161
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1315481/](https://leetcode.com/problems/build-array-from-permutation/solutions/1315481/)

---

Starting with the first approach which is quite easy. Simply use another vector/array and store the values of nums[nums[i]] in the new vector. 
Space Complexity: O(N)
Time Complexity: O(N)
Here is my code for the first approach:
```
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        int n=nums.size();
        vector<int> ans(n);
        for(int i=0;i<n;i++){
            ans[i]=nums[nums[i]];
        }
        return ans;
    }
};
```
After thinking of this solution, I tried to find a solution with O(1) space complexity. For doing this I simply thought to store two values in one position, As the values in the input array are ranging from 0 to n-1 where n is length of array. I can simply store the input array value in modulo by n and modified value in divide by n. This solves my problem of adding extra space to my solution. All things are sorted out :)
For example:
input array: {1,0}
so I simple used this equation nums[i]+=n*(nums[nums[i]]%n)
It made my array {1,2}, so after dividing by 2 it resulted in {0,1} which is the correct answer.
Space Complexity: O(1)
Time Complexity: O(N).
Here is the code for second approach:
```
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        int n=nums.size();
        for(int i=0;i<n;i++){
            nums[i]=nums[i]+(n*(nums[nums[i]]%n));
        }
        for(int i=0;i<n;i++){
            nums[i]/=n;
        }
        return nums;
    }
};
```