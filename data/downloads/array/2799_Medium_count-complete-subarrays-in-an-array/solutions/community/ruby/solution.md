# Ruby solution using sets, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3840453/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3840453/)

---

# Intuition
Create a set of characters for each subarray, and check that against the set of characters for the whole array.

# Approach
1. Find the number of distinct characters in the entire array.
2. Initialize count to 0.
3. Iterate through all possible starting indices.  For each starting index, create a set -- this will contains the characters of the subarray.
4. Iterate through the rest of the array for each starting index.  Add each character you hit to the subarray set.  If the subarray set now has as many characters as the array overall, increment count by the number of iterations left for the inside loop (including the current one), then break.  (This is because if the current iteration works, all the rest will too.)
5. Return count.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(k)$$, where *k* is the number of distinct characters.

# Code
```
def count_complete_subarrays(nums)
    target = nums.uniq.length
    count = 0
    (0...nums.length).each do |i|
        subarray = Set[]

        (i...nums.length).each do |j|
            subarray.add(nums[j])
            if subarray.length == target
                count += nums.length - j
                break
            end
        end
    end
    
    count
end
```