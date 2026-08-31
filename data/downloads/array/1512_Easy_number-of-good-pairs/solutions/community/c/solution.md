# ✅98.44%🔥Easy Solution🔥Array & Math🔥

**Author:** MrAke
**Votes:** 57
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/4122104/](https://leetcode.com/problems/number-of-good-pairs/solutions/4122104/)

---

# Problem
#### The problem you described is a classic counting problem that asks you to find the number of "good pairs" in an array of integers. A good pair is defined as a pair of indices (i, j) where i < j and the elements at those indices in the array are equal (nums[i] == nums[j]).
---
# Solution
#### The given solution uses a nested loop to iterate through all possible pairs of indices (i, j) where i < j. For each pair, it checks whether the elements at those indices are equal, and if they are, it increments the count variable. Finally, it returns the count, which represents the number of good pairs in the array.

##### 1. Initialize a variable count to 0. This variable will be used to keep track of the number of good pairs.

##### 2. Use a for loop to iterate through each index i in the array nums. This loop represents the first element of a potential pair.

##### 3. Within the outer loop, use another for loop to iterate through each index j in the array nums, where j is greater than i. This loop represents the second element of the pair and ensures that i < j.

##### 4. Inside the inner loop, check if nums[i] is equal to nums[j]. If they are equal, it means you've found a good pair, so increment the count variable by 1.

##### 5. Continue this process, checking all possible pairs in the array.

##### 6. After both loops have finished, the count variable will hold the total number of good pairs.

##### 7. Finally, return the count as the result.

#### This solution has a time complexity of O(n^2) because it uses nested loops to compare all possible pairs of elements in the array. For larger arrays, this can be inefficient, so there are more optimized approaches to solving this problem with a time complexity of O(n).
---
# Code
```python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] == nums[j]:
                    count += 1
        return count
```
```C# []
public class Solution {
    public int NumIdenticalPairs(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.Length; i++) {
            for (int j = i + 1; j < nums.Length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }
}

```
```C++ []
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }
};

```
```C []
int numIdenticalPairs(int* nums, int numsSize) {
    int count = 0;
    
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    
    return count;
}

```
```Java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }
}

```
```javascript []
var numIdenticalPairs = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    
    return count;
};

```

![9c6f9412-c860-47d6-9a2e-7fcf37ff3321_1686334926.180891.png](./images/0.png)
