# Ruby solution with indices hash, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/4203066/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/4203066/)

---

# Intuition
The subarray with maximum beauty will be composed of the first and last index of an element that appears multiple times in the array and all the positive elements between those.  Test all elements that appear multiple times and use cumulative sum (of positive numbers) array to efficiently calculate the sum of elements between those indices.

# Approach
1. Create an indices hash to store every index at which element appears, plus a cumulative sums array for the cumulative sum of positive elements.
2. Iterate though each element of the array, adding the index to the indices hash, and adding the val to the cumulative sum if it's positive.
3. Remove the beginning of sums (we want its value at idx 0 to include the 0th element of flowers), select the values that appeared multiple times in the array from idx hash, and initialize max to -infinity.  (Note that the answer can be negative, so we can't initialize it to 0.)
4. Iterate through the indices hash.  For each val, calculate the beauty of the subarray containing the first and last index of that value and all positive numbers between.  Replace max if appropriate.
5. Return max.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def maximum_beauty(flowers)
    idxs = Hash.new { |h,k| h[k] = [] }
    sums = [0]

    flowers.each_with_index do |val,i|
        idxs[val] << i
        sums << sums[-1] + (val > 0 ? val : 0)
    end

    sums.shift
    idxs.select! { |key,val| val.length > 1 }
    max = -Float::INFINITY

    idxs.each do |key,arr|
        curr_sum = 2 * key + sums[arr[-1]-1] - sums[arr[0]]
        max = curr_sum if curr_sum > max
    end
    
    max
end
```