# C++  Easy Solution with different Approaches

**Author:** Richa_kochar
**Votes:** 127
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1330474/](https://leetcode.com/problems/concatenation-of-array/solutions/1330474/)

---

**1st Method using extra space.**
```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums)
    {
        vector<int>ans;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            ans.push_back(nums[i]);
        }
        for(int i=0;i<n;i++)
        {
            ans.push_back(nums[i]);
        }
        return ans;
    }
};
```
**2nd method  without extra Space.**
```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n=nums.size();
        for(int i=0;i<n;i++)
        {
            nums.push_back(nums[i]);
        }
        return nums;
    }
};
```
**3rd method using copy_n**
```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int len = nums.size();
        vector<int> res(len * 2);
        copy_n(nums.begin(), len, res.begin());
        copy_n(nums.begin(), len, res.begin() + len);
        return res;
    }
};
```
**4 method using vectors.**
```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& arr1) {
        vector<int> results;
        results.reserve(arr1.size() + arr1.size());
        results.insert(results.end(), arr1.begin(), arr1.end());
        results.insert(results.end(), arr1.begin(), arr1.end());
        return results;
    }
};
```
**5 Method using Maths & vector.**
```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n=nums.size();
        vector<int>s(n*2);
        for(int i=0;i<n;i++){
            s[i]=nums[i];
              s[n*2-(n-i)]=nums[i];
        }
        return s;
    }
};
```
**Upvote if this helps you :)**