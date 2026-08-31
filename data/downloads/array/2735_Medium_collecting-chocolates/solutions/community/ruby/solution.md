# Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3642124/](https://leetcode.com/problems/collecting-chocolates/solutions/3642124/)

---

# Intuition
Keep track of the lowest price so far for each chocolate while trying every number of rotations.

# Approach
1. Create a copy of nums that represents the lowest price of a chocolate so far.  (Right now it's a copy, but after e.g., 3 rotations, it will give the lowest price you can buy that chocolate for.)
2. Initialize min to be the sum of arr.
3. Perform one rotation, up until n.  At each rotation:
    - Find the total cost of all rotations so far
    - Check if any of the chocolates now have a lower price
    - Add the new min prices to the cost and see if it's less than min
4. Return min

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
def min_cost(nums, x)
    n = nums.length
    arr = nums.dup
    min = arr.sum

    (1...n).each do |i|
        cost = i * x
        (0...n).each { |j| arr[j] = nums[j-i] if nums[j-i] < arr[j] }

        min = [min,arr.sum + cost].min
    end

    min
end
```