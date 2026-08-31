# Ruby memoization & bsearch solution, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3879169/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3879169/)

---

# Intuition
If you know how many numbers you're going to reset, you can check the total from resetting them in optimal order in O(n^2) time with memoization.  Use a binary search to figure out how many numbers to reset.

# Approach
1. Special cases: if the sum is already low enough return 0; if all numbers must be reset because x and everything in nums2 is 0, return nums1.length.
2. Create class variables for length and both arrays.
3. Create a variable for the indices ordering nums2 by value.  (If we know we're resetting two things that have a different nums2 value, we want to reset the lower one first, since it will increase less.)
4. More special cases: check if resetting one or no values would work.  (This speeds up the code.)
5. Do a binary search for the numbers from 2 to length (exclusive), and find the lowest that returns a total less than k.
6. Return the result, or else @len, since we know resetting @len works from the special cases we tested earlier.

Helper function total (find the minimum total from resetting k values):
1. Create a memo object.
2. Create a sums array that calculates the value at each index if it's *not* reset.  (We calculate this multiple times in the next helper function, so this speeds it up.)
3. Call the other helper function, starting at index 0 and k values to reset.

Helper function change:
This iterates throuh the values (in the order of @order) and tries changing k of them.  Use memoization to efficiently find the lowest possible total.
1. If you have negative changes, this situation isn't possible.  Return infinity so this option is never selected.
2. Return 0 if you've reached the end of the array.
3. Return the value stored in memo if it exists.
Two options at each index:
    1. Do not change the value at that index -- increment i and add @sum[i]
    2. Change that index: decrement changes and multiply by the nums2 value.  (Right now it's 0, but you're going to add @nums2[i] (changes-1) times.)
4. Take the option with the lowest value, memoize, and return. 

# Complexity
- Time complexity:
$$O(n^2 * log(n))$$

- Space complexity:
$$O(n^2)$$

# Code
```
def minimum_time(nums1, nums2, x) # O(n^2 * log(n)) -> (10**3)**2 * 10**1 -> 10**7
    return 0 if nums1.sum <= x
    return nums1.count { |n| n > 0 } if x == 0 && nums2.all? { |k| k == 0 }

    @len = nums1.length
    @nums1, @nums2 = nums1, nums2
    
    @order = (0...@len).to_a.sort_by { |i| nums2[i] }

    return 1 if total(1) <= x
    return -1 unless total(@len) <= x
        
    res = (2...@len).bsearch do |k|
        total(k) <= x
    end
    
    res || @len
end

def total(k)
    @memo = Array.new(@len) { Array.new(k) }
    @sum = (0...@len).to_a.map { |i| @nums1[@order[i]] + k * @nums2[@order[i]] }
    change(0,k)
end

def change(i,changes)
    return Float::INFINITY if changes < 0
    return 0 if i == @len
    return @memo[i][changes] if @memo[i][changes]
    
    idx = @order[i]
    
    option1 = change(i+1, changes) + @sum[i]
    option2 = change(i+1, changes-1) + (changes-1) * @nums2[idx]
    
    @memo[i][changes] = [option1,option2].min
end
```