# ⭐ Brute Force + Hashing - Time Complexity + Space Complexity + Explanation ⭐

**Author:** psy_0
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2234261/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2234261/)

---

**Brute Force**

Time Complexity - Due to nested loops, time complexity is O(N^2).
Space Complexity - Since we do not use any extra space, space complexity is O(1).
Explanation - We use nested loops to find all pairs (i, j) such that i < j. Then we check for the given condition.

```
class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        int n = nums.size();
        int count = 0;
        for(int i = 0; i < n - 1; i++){
            for(int j = i + 1; j < n; j++){
                if(abs(nums[i] - nums[j]) == k) count++;
            }
        }
        return count;
    }
};
```

**Hashing Approach (optimal)**

Time Complexity - Iterating over the array takes O(N) time.
Space Complexity - Since we are storing the elements in a hashmap, space complexity is O(N).
Explanation - Upon solving the equation |x - y| = k, we find that y can be either x + k or x - k. If these values are present in the hashmap, we can form a pair. Thus for every x in the array, we add the frequency of x + k and x - k to count, and add the current x to the hashmap.

```
class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        int n = nums.size();
        unordered_map<int, int> mp;
        int count = 0;
        // |x - y| = k => y = x + k or y = x - k

        for(auto x : nums){
            count +=  mp[x + k] + mp[x - k]; // If y1 and/or y2 is present, they can form a pair with x
            mp[x]++;
        }
        return count;
    }
};
```

Kindly upvote if you found the solution helpful :)
**For more such explanations of LeetCode problems along with their C++ solutions:**
https://github.com/Arya-Gupta/LeetCode
