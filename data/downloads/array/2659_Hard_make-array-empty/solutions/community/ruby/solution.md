# Ruby || O(nlogn) || Sort + one pass

**Author:** xmmmir
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3469261/](https://leetcode.com/problems/make-array-empty/solutions/3469261/)

---

# Intuition
Performing `nums.size` operations will retain the array order with some values removed. Counting the number of such cycles and the number of values removed will provide the answer.
 
**Observations:**
1. Actual nums value doesn't matter till the order of the elements is the same. `[3, 4, -1]` and `[3, 54, 0]` both will need 5 operations.
2. When performing the operation on the `k` smallest element in the array it will be removed only if `1..(k-1)` smallest elements are removed from the array. Since this rule is applied to all elements, it's enough to know if `k-1` smallest element is already removed.
3. `k-1` and `k` smallest elements will be removed in the single cycle run if and only if the first one has a lower index in the array.

# Approach
1. Convert array elements to their relative indexes in the sorted array
2. Pass through the array, memorizing if the previous element(in sorted order) has been already chosen for the cycle.
3. Count the number of cycles and number of elements

# Example
Let's check `[12, 42, 61, 58, 27, 33]`
1. Converting to the sorted indexes: `[1, 4, 6, 5, 2, 3]`
2. Passing using the code below will result in `[1, 4, 6, 4, 1, 1]`. Counting occurrences returns `{ 1 => 3, 4 => 2, 6 => 1 }`
3. First cycle will remove elements `12, 27, 33` and will take 6 operations. Second will remove `42, 58` in 3 operations. Last operation will remove 61 and make array empty. Total `6 + 3 + 1 = 10` operations. 
# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(n)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def count_operations_to_empty_array(nums)
    pos_map = nums.sort.map.with_index { [_1, _2 + 1] }.to_h # Using 1-indexed positions so I don't have to deal with negative index later
    nums_pos = nums.map { pos_map[_1] }
        
    mem = Array.new(nums.size + 1, nil)
    nums_pos.each do |pos|
        mem[pos] = mem[pos - 1] || pos
    end
    mem.shift
    
    res = 0

    s = nums.size
    mem.tally.values.each do |val|
        res += s
        s -= val
    end
    
    res
end
```