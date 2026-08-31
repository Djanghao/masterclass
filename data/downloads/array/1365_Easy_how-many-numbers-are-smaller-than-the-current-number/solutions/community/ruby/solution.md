# Ruby | O(n log n) | sort + hash | 94% speed 100% mem

**Author:** jrico59
**Votes:** 3
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/535681/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/535681/)

---

If you sort the array, there will be `i` smaller numbers in front of a given number, where `i` is that number's index in the sorted array. For example:

```ruby
[1, 2, 3, 4]
```

There are 0 numbers smaller than 1, 1 number smaller than 2, etc.

The next problem to resolve is that this will be thrown off if there are duplicates. We can use a hash to resolve the duplicate problem. Loop through the sort array, and set the hash key to the number, and hash value to the index in the sorted array. If the key already exists, skip it. This ensures that the value for a duplicate number only gets set at the first index where that number appears.

After setting up the hash, loop through the original (unsorted) array and at each index replace the current value with the value of that number's key in the hash.

```ruby
def smaller_numbers_than_current(nums)
    sorted = nums.sort
    map = Hash.new
    
    sorted.each_with_index do |num, i|
        next if map[num]
        map[num] = i
    end
    
    nums.each_with_index do |num, i|
        nums[i] = map[num]
    end
    
    nums
end
```