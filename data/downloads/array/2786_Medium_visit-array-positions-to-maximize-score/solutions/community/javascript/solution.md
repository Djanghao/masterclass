# 🚀 [VIDEO] Beats 100% Skyrocket Your Coding Skills: Mastering

**Author:** vanAmsen
**Votes:** 5
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3803311/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3803311/)

---

# Intuition
This problem is a perfect example of a dynamic programming problem where the state of the system can be described by two variables: the score we would get if we were to pick the next number and it was odd, and the score we would get if it were even. Our goal is to maximize our score, so we need to carefully decide whether to pick the next number based on its parity and the potential score.

https://youtu.be/jLnWQe4Hzps

# Approach
We start by initializing `even_score` and `odd_score` to the score of the first number, accounting for the cost 'x' if necessary. Then, for each number in the array, we update the corresponding score based on its parity. If the number is odd, we update `odd_score` by adding the current number and the maximum of `odd_score` and `even_score - x`. If it's even, we update `even_score` similarly. Finally, we return the maximum of `even_score` and `odd_score` as the maximum total score we can get.

# Complexity
- Time complexity: \\(O(n)\\) 
We simply iterate over the array once, where 'n' is the length of the array.

- Space complexity: \\(O(1)\\) 
We only use a constant amount of space to store the scores for odd and even numbers.

In this problem, dynamic programming helps us keep track of the maximum score we could get if the next number we pick is odd or even. With this approach, we're able to find the maximum score in a highly efficient manner. Keep practicing such problems to get a solid grasp on dynamic programming! Happy coding! \uD83D\uDE80

# Code
```Python []
class Solution:
    def maxScore(self, nums: List[int], x: int) -> int:
        even_score = nums[0] - (x if nums[0] % 2 else 0)
        odd_score = nums[0] - (0 if nums[0] % 2 else x)
        for i in range(1, len(nums)):
            if nums[i] % 2:
                odd_score, even_score = nums[i] + max(odd_score, even_score - x), even_score
            else:
                odd_score, even_score = odd_score, nums[i] + max(even_score, odd_score - x)
        return max(even_score, odd_score)
```
``` JavaScript []
var maxScore = function(nums, x) {
    let even_score = nums[0] - (nums[0] % 2 === 0 ? 0 : x);
    let odd_score = nums[0] - (nums[0] % 2 === 0 ? x : 0);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even_score = nums[i] + Math.max(even_score, odd_score - x);
        } else {
            odd_score = nums[i] + Math.max(odd_score, even_score - x);
        }
    }
    return Math.max(even_score, odd_score);
};
```
``` C++ []
class Solution {
public:
    long long maxScore(vector<int>& nums, int x) {
        long long even_score = nums[0] - (nums[0] % 2 ? x : 0LL);
        long long odd_score = nums[0] - (nums[0] % 2 ? 0 : x);
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] % 2)
                odd_score = nums[i] + max(odd_score, even_score - x);
            else
                even_score = nums[i] + max(even_score, odd_score - x);
        }
        return max(even_score, odd_score);
    }
};
```
``` Java []
class Solution {
    public long maxScore(int[] nums, int x) {
        long even_score = nums[0] - (nums[0] % 2 == 0 ? 0 : (long)x);
        long odd_score = nums[0] - (nums[0] % 2 == 0 ? (long)x : 0);
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] % 2 == 0) {
                even_score = nums[i] + Math.max(even_score, odd_score - x);
            } else {
                odd_score = nums[i] + Math.max(odd_score, even_score - x);
            }
        }
        return Math.max(even_score, odd_score);
    }
}
```
``` C# []
public class Solution {
    public long MaxScore(int[] nums, int x) {
        long even_score = nums[0] - (nums[0] % 2 == 0 ? 0 : (long)x);
        long odd_score = nums[0] - (nums[0] % 2 == 0 ? (long)x : 0);
        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] % 2 == 0) {
                even_score = nums[i] + Math.Max(even_score, odd_score - x);
            } else {
                odd_score = nums[i] + Math.Max(odd_score, even_score - x);
            }
        }
        return Math.Max(even_score, odd_score);
    }
}
```


