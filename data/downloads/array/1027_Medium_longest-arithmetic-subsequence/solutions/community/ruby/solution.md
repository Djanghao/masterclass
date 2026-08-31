# Ruby solution using DP, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671538/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671538/)

---

# Intuition
An arithmetic sequence has a constant difference.  For every number in arr, compare it to the previous elements and add 1 to each sequence with the same difference.

# Approach
1. Initialize an array of hashes to tabulate results.  Use a default value of 1 (since the first comparison between two elements should have a length of 2).
2. Iterate through the array in a double loop, comparing each element to every previous element.
    - Find the difference between the two elements.
    - Add one to the longest sequence with the same difference that ends in the earlier element.
    For example, imagine your array is [2,3,6,9] and you're looking at 6 and 9.  The difference is 3.  The longest sequence ending is 6 with a difference of 3 has a length of 2 ([3,6]), so the longest sequence with a difference of 3 ending in 9 is one higher.
3. Start max off as 0.
4. Iterate through your hashes, choosing the max value from each.  Compare that to max and take the largest.
5. Return max.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
def longest_arith_seq_length(arr)
    tab = Array.new(arr.length) { |h,k| Hash.new(1) }

    (1...arr.length).each do |i|
        (0...i).each do |j|
            a,b = arr[i],arr[j]
            diff = b - a

            tab[i][diff] = tab[j][diff] + 1
        end
    end
    
    max = 0

    tab.each do |hash| 
        max_val = hash.values.max || 0
        max = max_val if max_val > max
    end

    max
end
```