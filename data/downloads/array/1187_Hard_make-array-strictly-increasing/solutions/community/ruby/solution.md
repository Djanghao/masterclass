# Optimized DP, explained (with b-search & OOP): 270ms, 243.74 MB, beats 100% ruby (on both)

**Author:** innorogue
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/4273677/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/4273677/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can tell it's dynamic programming, because each step depends on the previous one, and we need to somehow encode the previous choices in the end-result (if we didn't need encoding of previous choices, we could just use greedy) for example, if we run out of numbers to use for replacing, we need to know that it's impossible to get an end result.

For example, for these two cases, it doesn't seem like we can get a greedy solution just by counting at each step, since we need to somehow keep track of which replacements were used:
```
arr1 = [10,11,1,2,15], arr2 = [2,3,4,5,12,13]
arr1 = [10,11,1,2,15], arr2 = [2,3,4,5,12]
```

So now the hard part is just figuring out what the dynamic programming recursive step is, e.g. what is `f()` for something like:
`min_replacements[i] = f(min_replacements[i-1])`

However, since at each step we have a number of possible options to choose from at each step, and we don't know which is best until we get to the end, we will do something like:
`options[i] = f(options[i-1])`, and then get the minimum replacements from `options.last[...]`

# Approach
<!-- Describe your approach to solving the problem. -->
To get a proper dynamic programming step, `f()` we need a proper baseline:

- for the first number, we have only 2 possible choices:
  - keep the `arr1[0]`, so 0 replacements needed
  - replace `arr1[0]` with `arr2[0]`, but only if `arr2[0] < arr1[0]`, so 1 replacement needed
- we won't be comparing forward, but only backward, i.e. we never do `arr1[i] <=> arr[i+1]`, but only `arr1[i] <=> arr[i-1]`
- sort arr2 and keep unique values, since we can't do multiple replacements with equal values (i.e. "strictly increasing") and all replacements will be done in order from smallest possible to largest possible
- on each step, we use only the first possible replacement in the array, that still keeps an increasing order. Once we find the first number in `arr2` that fits, the rest of the numbers in `arr2` will just be greater, so no point in trying to use them.

Start by encoding the proper data structure (we'll use a hash)

- `options[pos] = { index => min_replacements }`
  - options hash at position `pos` to track min possible replacements for `arr1[pos]` for all options which still keep the array strictly increasing until and including `arr1[pos]`
  - `index` = position of `arr2` number to use for replacing
  - `min_replacements` = minimum number of total replacements needed, when using `arr2[index]`
  - `index=nil` is used when no replacement is done, i.e. `options[nil]`, to keep track of the minimum number of replacements needed to NOT replace `arr1[pos]`

Then, the recursive step for `options[pos]` is:
- `foreach (key, value) in options[pos-1]`
  - check if either keeping `arr1[pos]` or replacing it with `min_larger` number from arr2 keeps increasing order, and store that option accordingly
  - repeat for all pos values until the end of arr[1]
  - if at any time the options left are nil, return -1 since no solution is available

# Optimizations Used
* used binary search to get `min_largest` number to replace with
* used hash for `options[pos]` to allow O(1) insertions and allow encoding of the `nil` value meaning no replacement

# Complexity
- with 
  - n=arr1.length
  - m=arr2.length
- Time complexity: **O( n * log(m) )**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O( n * log(m) )**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Counter
    attr_accessor :arr1, :arr2, :options

    def initialize(arr1, arr2)
        @arr1 = arr1
        @arr2 = arr2
        @options = {nil => 0}
        @options[0] = 1 if arr2[0] < arr1[0]
    end

    # Binary Search: Finds index of first number in arr2 strictly greater than num
    def min_greater(arr, num)
        first = 0
        last = arr.length - 1
        middle = nil

        while first < last
            if arr[first] > num
                return first
            elsif arr[last] <= num
                return nil
            else
                middle = (first + last) / 2
                if arr[middle] == num
                    return middle + 1
                elsif num >= arr[middle]
                    first = middle + 1
                else
                    last = middle
                end
            end
        end
        last
    end

    # Function to determine if a can be replaced with b in options hash
    def can_replace?(a, b)
        !a || a > b
    end

    def get_next_options(step, previous_options)
        {}.tap do |new_ops|
            previous_options.each do |index, min_replacements|
                if index.nil?
                    # minops if no replacement for arr1[step]
                    if arr1[step-1] < arr1[step] && can_replace?(new_ops[index], min_replacements)
                        new_ops[index] = min_replacements
                    end

                    # minops for replacement of arr1[step] with best possible value
                    greater_key = min_greater(arr2, arr1[step-1])
                    new_ops[greater_key] = min_replacements + 1 if greater_key
                else
                    # check minops if no replacement for arr1[step]
                    if arr1[step] > arr2[index] && can_replace?(new_ops[nil], min_replacements)
                        new_ops[nil] = min_replacements
                    end

                    # check minops if replacement for arr1[step] with arr2[index+1]
                    if index < arr2.length - 1 && can_replace?(new_ops[index+1], min_replacements + 1)
                        new_ops[index+1] = min_replacements + 1
                    end
                end
            end
        end
    end

    def get_min_count
        (1...arr1.length).each do |i|
            @options = get_next_options(i, @options)
            return if @options.length == 0
        end
        @options.values.min
    end
end

# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer}
def make_array_increasing(arr1, arr2)
    arr2.sort!.uniq!
    Counter.new(arr1, arr2).get_min_count || -1
end

```