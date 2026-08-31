# Ruby solution with memoization, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024314/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024314/)

---

# Intuition
At each point, you can choose from and of the pickups that are left or do the delivery for any pickup you've done but haven't delivered yet.  Use memoizaiton to compute this efficiently.

# Approach
1. Create a memo and store n as a class variable.
2. Call the helper function starting i and j at zero and take the mod.

**Helper function**: this function counts how many possibilities there are if you've done i pickups and j deliveries.
1. Return zero if you're done too many pickups and more deliveries than pickups -- this situation is impossible.
2. Return 1 if you've done all your deliveries: you're done!
3. Return the stored value if it exists in memo.
4. Option 1: pickup.  Choose from any of the remaining orders to pick up (there are @n-i choices) and then call the function incrementing i.
5. Option 2: delivery.  Choose from any of the remaining deliveries (there are i-j choices, since that's how many orders you've picked up but not delivered yet) and call the function incrementing j.
6. Add together the two options, memoize, and return.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
def count_orders(n)
    @memo = Array.new(n+1) { Array.new(n,nil) }
    @n = n
    count(0,0) % 1000000007
end

def count(i,j)
    return 0 if i > @n || j > i
    return 1 if j == @n
    return @memo[i][j] if @memo[i][j]

    option1 = (@n-i) * count(i+1,j) # pickup
    option2 = (i-j) * count(i,j+1) # delivery

    @memo[i][j] = option1 + option2
end
```