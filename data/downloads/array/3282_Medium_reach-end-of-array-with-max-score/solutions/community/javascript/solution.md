# ✅Beats 100% - C++/Java/Python/JS - 08 Sept'24 Weekly Contest 3 - Explained in Detail

**Author:** millenium103
**Votes:** 32
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753416/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753416/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to maximize the total score when jumping from the start (index 0) to the end (index n-1) of the array. The score for a jump from index `i` to index `j` is given by `(j - i) * nums[i]`. To maximize the total score, we should consider leveraging the highest values in the `nums` array, especially when making larger jumps. The challenge is to find an efficient way to calculate the maximum possible score without needing to evaluate every possible jump explicitly.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Understanding the Score Calculation:**
   - The score for jumping from index `i` to `j` is `(j - i) * nums[i]`. Therefore, the score is influenced by the difference between indices `(j - i)` and the value at the starting index `nums[i]`.

2. **Optimal Strategy:**
   - The optimal score can be achieved by:
     - **Keeping Track of Maximum Values:** As you traverse the array, maintain the maximum value seen so far. This helps in determining the best possible score from the current index to the end of the array.
     - **Accumulate Scores:** For each index `i`, compute the potential score if you were to jump directly to the end of the array from that index using the maximum value seen so far. Accumulate these scores to find the maximum possible score.

3. **Algorithm Steps:**
   - Initialize two variables: `max` to keep track of the maximum value seen so far, and `sum` to accumulate the total score.
   - Iterate through the array from the beginning to the second-last element:
     - Update the `max` value with the current element if it\u2019s greater.
     - Compute the score for jumping from the current index to the end using the `max` value and add this score to `sum`.
   - Return the accumulated `sum` which represents the maximum possible score.


# Complexity
- Time complexity:
    - The solution involves a single pass through the array to update the maximum value and accumulate the score. Therefore, the time complexity is \\( O(n) \\), where \\( n \\) is the length of the `nums` array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
   - The solution uses a constant amount of extra space for the variables `max` and `sum`, regardless of the input size. Therefore, the space complexity is `(O(1))`.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```java []
class Solution {

    public long findMaximumScore(List<Integer> nums) {
        long max = 0, sum = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            sum += max = Math.max(max, nums.get(i));
        }
        return sum;
    }
}
```
```C++ []
class Solution {
public:
    long long findMaximumScore(vector<int>& nums) {
        long max = 0, sum = 0;
        for (size_t i = 0; i < nums.size() - 1; ++i) {
            max = std::max(max, static_cast<long>(nums[i]));
            sum += max;
        }
        return sum;
    }
};
```
```Python []
class Solution(object):
    def findMaximumScore(self, nums):
        max_val = 0
        total_sum = 0
        for i in range(len(nums) - 1):
            max_val = max(max_val, nums[i])
            total_sum += max_val
        return total_sum
        
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i]);
        sum += max;
    }
    return sum;
};
```
![upvote.png](./images/0.png)
