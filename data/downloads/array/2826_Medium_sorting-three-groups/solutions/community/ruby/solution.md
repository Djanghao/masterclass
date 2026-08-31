# Ruby solution using count arrays, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3932184/](https://leetcode.com/problems/sorting-three-groups/solutions/3932184/)

---

# Intuition
You can create two breakpoints such that all numbers before the first are 1, all numbers after the last one are 3, and all numbers between them are two.  Check all combinations of breakpoints and see which requires the fewest changes.  Use arrays with stored count values to make this more efficient.

# Approach
1. Find the length and set the min_changes variable equal to length.
2. Create arrays that count the number of ones, twos, and threes up to a certain index.
3. Iterate through nums and populate these arrays with the counts.
4. Inside a double loop, find every combination of breakpoints with j >= i.
    - For each one, calulate the number of matching values and subtract from the length of the array; this is how many you'd have to change.
    - Compare your test value to min_changes and take whichever is lower.
5. Return min_changes.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
def minimum_operations(nums)
    len = nums.length
    
    min_changes = len
    
    one_val = Array.new(len+1,0)
    two_val = Array.new(len+1,0)
    three_val = Array.new(len+1,0)
    (1..len).each do |i|
        one_val[i] = one_val[i-1]
        one_val[i] += 1 if nums[i-1] == 1
        two_val[i] = two_val[i-1]
        two_val[i] += 1 if nums[i-1] == 2
        three_val[i] = three_val[i-1]
        three_val[i] += 1 if nums[i-1] == 3
    end
        
    
    (0..len).each do |i|
        (i..len).each do |j|
            test = len - (one_val[i] + two_val[j] - two_val[i] + three_val[-1] - three_val[j])
            min_changes = test if test < min_changes
        end
    end
    
    min_changes
end
```