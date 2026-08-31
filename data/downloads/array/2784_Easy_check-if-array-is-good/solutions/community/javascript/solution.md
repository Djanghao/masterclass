# 🔍[VIDEO] Array Permutation Check: Is it Good? 🤔

**Author:** vanAmsen
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3803163/](https://leetcode.com/problems/check-if-array-is-good/solutions/3803163/)

---

# Intuition
When first tackling this problem, the immediate thought is to identify the maximum number in the array, let's call it 'n'. As per the problem description, for the array to be good, it should be a permutation of an array base[n] where base[n] is an array of length n+1 containing numbers from 1 to n-1 exactly once and 'n' exactly twice. The straightforward approach is to keep a track of each number's frequency in the array.

https://youtu.be/2tKuwrNOfF4

# Approach
Our approach to solving the problem involves creating a frequency map of the numbers present in the array. We use a list of size 'n+1' to store the frequency of each number. Then, we traverse the array, incrementing the frequency count for each number in the frequency map. 

Next, we validate our array against two conditions: 
1. The frequency of 'n' should be exactly 2.
2. The frequency of all numbers from 1 to n-1 should be exactly 1.

If the array passes both conditions, it is a good array and we return True, otherwise we return False.

# Complexity
- Time complexity: O(n)
The time complexity is O(n) because we have to traverse through all the numbers in the array to fill the frequency map.

- Space complexity: O(n)
The space complexity is O(n) due to the additional list we are using to store the frequency of each number.

# Code
```Python []
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        n = max(nums)
        freq_map = [0] * (n + 1)
        for num in nums:
            freq_map[num] += 1
        if freq_map[n] != 2: 
            return False 
        for i in range(1, n): 
            if freq_map[i] != 1: 
                return False 
        return True 
```
``` C++ []
class Solution {
public:
    bool isGood(vector<int>& nums) {
        int n = *max_element(nums.begin(), nums.end());
        vector<int> freq_map(n + 1, 0);
        for(int num: nums) {
            freq_map[num] += 1;
        }
        if(freq_map[n] != 2) {
            return false;
        }
        for(int i = 1; i < n; i++) {
            if(freq_map[i] != 1) {
                return false;
            }
        }
        return true;
    }
};
```
``` JavaScript []
var isGood = function(nums) {
        let n = Math.max(...nums);
    let freq_map = Array(n + 1).fill(0);
    for(let num of nums) {
        freq_map[num] += 1;
    }
    if(freq_map[n] !== 2) {
        return false;
    }
    for(let i = 1; i < n; i++) {
        if(freq_map[i] !== 1) {
            return false;
        }
    }
    return true;
};
```
``` Java []
class Solution {
    public boolean isGood(int[] nums) {
        int n = nums[0];
        for(int num: nums) {
            if(num > n) {
                n = num;
            }
        }
        int[] freq_map = new int[n + 1];
        for(int num: nums) {
            freq_map[num] += 1;
        }
        if(freq_map[n] != 2) {
            return false;
        }
        for(int i = 1; i < n; i++) {
            if(freq_map[i] != 1) {
                return false;
            }
        }
        return true;
    }
}
```
``` Rust []
impl Solution {
    pub fn is_good(nums: Vec<i32>) -> bool {
        let n = *nums.iter().max().unwrap();
        let mut freq_map = vec![0; (n + 1) as usize];
        for num in nums {
            freq_map[num as usize] += 1;
        }
        if freq_map[n as usize] != 2 {
            return false;
        }
        for i in 1..n {
            if freq_map[i as usize] != 1 {
                return false;
            }
        }
        return true;
    }
}
```