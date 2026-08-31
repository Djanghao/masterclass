# [C++] Simple Solutions || Straight Forward Solutions || Different Approaches

**Author:** nitishhsinghhh
**Votes:** 23
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/2059342/](https://leetcode.com/problems/concatenation-of-array/solutions/2059342/)

---

# Problem Statement

Given an integer array nums of length n, we  are required to create a new array ans of length 2n where:

For every index i from 0 to n-1, ans[i] is equal to nums[i].
For every index i from n to 2n-1, ans[i] is also equal to nums[i-n].
Essentially, the array ans is formed by concatenating the array nums with itself.

**Constraints:**
Array Length (n): 1 <= n <= 1000 
Element Value: 1 <= nums[i] <= 1000

# Solution

We have to calculate the size of the input vector and creates a new vector with twice the size to store the concatenated result, and then iterates over the elements of the input vector to copy them into the concatenated vector at appropriate positions.


**Time Complexity: O(N)**
**Space Complaexity: O(N)**

``` C++ []
// The statement inside the loop can be re-written as two simple statements
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(2 * n);
        for (int i = 0; i < n; i++)
            ans[i + n] = ans[i] = nums[i];
        return ans;
    }
};
```
```C++ []
// The catch here is; don't use nums.size() in the for loop as the 
// size keeps on increasing after every run.
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++)
            nums.push_back(nums[i]);
        return nums;
    }
};
```
```C++ []
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        nums.insert(nums.end(), nums.begin(), nums.end());
        return nums;
    }
};
```
```C++ []
// Please note that vector class can grow as needed in C++. But size 
// of arrays are fixed in C# and Java.
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        nums.resize(2 * n);
        for (int i = 0; i < n; i++)
            nums[n + i] = nums[i];
        return nums;
    }
};
```
```C++ []
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        vector<int> res(n * 2);
        copy_n(nums.begin(), n, res.begin());
        copy_n(nums.begin(), n, res.begin() + n);
        return res;
    }
};
```
```C++ []
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> res;
        res.reserve(nums.size() + nums.size());
        res.insert(res.end(), nums.begin(), nums.end());
        res.insert(res.end(), nums.begin(), nums.end());
        return res;
    }
};
```