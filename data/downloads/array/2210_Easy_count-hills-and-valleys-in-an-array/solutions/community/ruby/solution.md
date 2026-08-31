# O(n) with 3 variables

**Author:** sleight42
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5388807/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5388807/)

---

# Intuition
Linear time solution tracking whether we're on a possible hill or a possible valley, incrementing a counter every time there's a dip or spike accompanied by the opposite change later in the `Array`.

# Approach
Tracked possible hill/valley state with `state` variable having valid states `[nil, :hill, :valley]` and a `count` of how many of either we encounter. Remember, a `:hill` requires a rise and drop whereas a `:valley` a drop and rise. The `nil` state is the initial state: it can persist indefinitely so long as the 0th through nth values of `nums` are the same value.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```ruby
def count_hill_valley(nums)
    count = 0
    state = nil
    last = nums[0]    
    (1...nums.length).each do |i|
        if !state
            if nums[i] < last
                state = :valley
            elsif nums[i] > last
                state = :hill
            end
        elsif nums[i] < last && state == :hill
            count += 1
            state = :valley
        elsif nums[i] > last && state == :valley 
            count += 1
            state = :hill
        end
        last = nums[i]
    end
    count
end
```