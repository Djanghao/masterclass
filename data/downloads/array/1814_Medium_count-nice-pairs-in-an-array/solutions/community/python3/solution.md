# 💯Faster✅💯 Lesser✅Simple Math🔥Hash Table🔥Simple Explanation🔥Intuition Explained🔥

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 58
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311950/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311950/)

---

# Intuition
- We have an array of non-negative integers.
- We're looking for pairs of indices (i, j) where a specific condition is satisfied.
- The condition involves the sum of a number and its reverse (digits reversed).
- More precisely, for indices i and j (where i < j):
- Original condition: $$nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])$$
- Modified condition: We simplify this by creating a new array, subtracting the reverse from each number, and storing the differences, $$nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])$$.
- For each number in the original array, we create a new array by subtracting its reverse from itself.
- To efficiently count pairs, we sort the new array. This helps group numbers with the same differences together.
- We count how many times each unique difference appears consecutively in the sorted array.
- This count represents the number of pairs that satisfy the modified condition.
- We use these counts to calculate the total number of pairs satisfying the modified condition.
- This involves counting combinations, essentially determining how many ways we can choose pairs from the counted occurrences.
- Since the result might be a large number, we take the answer modulo $$10^9 + 7$$ to keep it within a reasonable range.

# Approach
- Define a function reverse to reverse the digits of a non-negative integer.
- Iterate through the array and subtract the reversed form of each number from the original number, updating the array with the differences.
- Sort the modified array to group identical differences together.
- Iterate through the sorted array to count the occurrences of each unique difference.
- Use the count of occurrences to calculate the number of pairs that meet the condition.
- Return the result modulo 10^9 + 7.

# Complexity
- Time complexity: $$O(n log n)$$
- Space complexity: $$O(n)$$ for the modified array.


# Code
```Python3 []
class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        mod = 1000000007
        length = len(nums)
        for i in range(length):
            nums[i] = nums[i] - self.reverse(nums[i])
        nums.sort()
        res = 0
        i = 0
        while i < length - 1:
            count = 1
            while i < length - 1 and nums[i] == nums[i + 1]:
                count += 1
                i += 1
            res = (res % mod + (count * (count - 1)) // 2) % mod
            i += 1

        return int(res % mod)
    def reverse(self, num: int) -> int:
        rev = 0
        while num > 0:
            rev = rev * 10 + num % 10
            num //= 10
        return rev
```
```Java []
class Solution {
    public int countNicePairs(int[] nums) {
        final int mod = 1000000007;
        int len = nums.length;
        for (int i = 0; i < len; i++) {
            nums[i] = nums[i] - reverse(nums[i]);
        }
        Arrays.sort(nums);
        long res = 0;
        for (int i = 0; i < len - 1; i++) {
            long count = 1;
            while (i < len - 1 && nums[i] == nums[i + 1]) {
                count++;
                i++;
            }
            res = (res % mod + (count * (count - 1)) / 2) % mod;
        }

        return (int) (res % mod);
    }
    private int reverse(int num) {
        int rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        return rev;
    }
}
```
```C++ []
class Solution {
public:
    int countNicePairs(std::vector<int>& nums) {
        const int mod = 1000000007;
        int len = nums.size();
        for (int i = 0; i < len; i++) {
            nums[i] = nums[i] - reverse(nums[i]);
        }
        std::sort(nums.begin(), nums.end());
        long res = 0;
        for (int i = 0; i < len - 1; i++) {
            long count = 1;
            while (i < len - 1 && nums[i] == nums[i + 1]) {
                count++;
                i++;
            }
            res = (res % mod + (count * (count - 1)) / 2) % mod;
        }

        return static_cast<int>(res); // Add this line to return the result.
    }

private:
    int reverse(int num) {
        int rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        return rev;
    }
};
```
