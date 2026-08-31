# C++ | Short w/ 3 Approaches - O(1) Space ✅

**Author:** prantik0128
**Votes:** 143
**Link:** [https://leetcode.com/problems/missing-number/solutions/2081201/](https://leetcode.com/problems/missing-number/solutions/2081201/)

---

##### Intuitive Approach
**Time Complexity: O(N)
Space Complexity : O(1)**
```
class Solution {
public:
    int missingNumber(vector<int>& nums) { // find the missing number in a array
        int sum = 0; // sum of all numbers initially 0
        int total = nums.size()*(nums.size() + 1)/2; // total is the sum of all numbers in the array
        for (auto number : nums) { // iterate through the array
            sum += number; // add the number to the sum
        }
        return total - sum; // return the difference between the sum and the total that is the missing number
    }
};
```
##### Using Bit- Manipulation
**Time Complexity: O(N)
Space Complexity : O(1)**
```
class Solution {
public:
    int missingNumber(vector<int>& nums) { // function to return missing number
        int result = nums.size(); // initialize result to size of vector
        int i=0; // initialize i to 0
        for(int num:nums){ // for each number in vector
            result ^= num; // XOR result with number
            result ^= i; // XOR result with i
            i++; // increment i
        }
        return result; // return result that is the missing number
    }
};
```
##### 1 Line Approach
**Time Complexity: O(N)
Space Complexity : O(1)**
```
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        return nums.size() * (nums.size() + 1) / 2 - accumulate(nums.begin(), nums.end(), 0);
    }
};
```