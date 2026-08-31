# 💯🦁 100% Beast | Easy Approach | Best Solution 🚀

**Author:** dev-shahadat
**Votes:** 15
**Link:** [https://leetcode.com/problems/largest-number/solutions/5802487/](https://leetcode.com/problems/largest-number/solutions/5802487/)

---

# \uD83D\uDE80 Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to arrange a list of non-negative integers such that they form the largest possible number when concatenated. The key insight here is that **the order of concatenation matters**. We need to compare combinations of numbers (as strings) to decide their order.

The intuition is to treat this as a **sorting problem**, where instead of comparing two numbers based on their value, we compare the strings formed by concatenating them in different orders. This will help us determine which order of concatenation will give the largest result.

For example, when comparing `3` and `30`, we check whether `330` or `303` is larger. By doing this for all pairs of numbers, we can determine the correct order.


# \uD83D\uDEE0\uFE0F Approach
<!-- Describe your approach to solving the problem. -->
1. **Convert Numbers to Strings**:  
   Since we need to compare concatenations, we first convert all numbers to strings for easy manipulation.

2. **Custom Sorting**:  
   We define a custom comparator that compares two numbers `a` and `b` by checking if `a + b` is greater than `b + a`. If `a + b` is greater, then `a` should come before `b`. This ensures the correct order for forming the largest number.

3. **Edge Case Handling**:  
   If the largest number after sorting is `"0"`, then all numbers must be zeros, so we return `"0"`.

4. **Concatenate the Result**:  
   After sorting the numbers based on the custom comparator, we concatenate them into a single string to form the final result.

## \u2705 Example Walkthrough
1. Given the input: `nums = [3, 30, 34, 5, 9]`

2. Convert each number to a string:  
   `["3", "30", "34", "5", "9"]`
   
3. Sort the strings using the custom comparator:
   - Compare `9` vs `5`: `95 > 59`, so `9` comes before `5`
   - Compare `5` vs `34`: `534 > 345`, so `5` comes before `34`
   - Compare `34` vs `3`: `343 > 334`, so `34` comes before `3`
   - Compare `3` vs `30`: `330 > 303`, so `3` comes before `30`
   
   The sorted array is:  
   `["9", "5", "34", "3", "30"]`

4. Concatenate the sorted strings:  
   `"9534330"`

5. Return the result:  
   `9534330`
# \uD83D\uDCCA Complexity
- **Time Complexity**:  
  The time complexity is $$(O(n \\log n))$$, where `n` is the number of integers in the input array. This is due to the sorting step, where each comparison of two numbers takes $$(O(1))$$ time since we are only comparing concatenated strings.
  
- **Space Complexity**:  
  The space complexity is $$(O(n))$$, where `n` is the number of integers in the array. We require additional space to store the string representations of the numbers.



# Code
```ruby []
# @param {Integer[]} nums
# @return {String}
def largest_number(nums)
    string_nums = nums.map(&:to_s)
    compare = lambda do |str1, str2|
        concate_strs = str1 + str2
        concate_strs2 = str2 + str1
        concate_strs2 <=> concate_strs
    end
    string_nums.sort!(&compare)
    return "0" if string_nums[0] == "0"
    string_nums.join('')
end
```
```javascript []
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const stringNums = nums.map(num => num.toString());
    const compare = (a, b) => {
        const concateStrs = a + b;
        const concateStrs2 = b + a;
        return concateStrs > concateStrs2 ? -1 : (concateStrs === concateStrs2 ? 0 : 1);
    };
    stringNums.sort(compare);
    if (stringNums[0] === "0") {
        return "0";
    }
    return stringNums.join('');
};
```
