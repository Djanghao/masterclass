# Ruby approach using memoization with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3678802/](https://leetcode.com/problems/count-all-possible-routes/solutions/3678802/)

---

# Intuition
This can be solved fairly easily with memoization where we store our current location and remaining fuel.  We then go to every legal location and add the number of ways to get to finish from each of them.

# Approach
0. Define @mod variable.

1. In the main function, create the memo and make locations and finish be class variables so they're accessible in the helper function.
2. Call the helper function num_routes, passing in start as current and fuel as fuel.

Helper function:
1. Check is we have value stored in memo; if so, return it.
2. If fuel is negative, the current position is invalid.  Return 0.
3. Create an arrays of options, representing going to each other position.  (Create a val variable for convenience.)
4. Iterate through locations, but exclude the current location (otherwise, this never ends).
    - For each location, find the number of routes from that new starting place, subtracting the amount of fuel we used to get there from fuel.  (Note that this may result in negative fuel, which is why we check this and return 0.)
5. Add all the options together, and add 1 more if you're at finish (because you can stop the route there, even if you have more fuel).  Memoize and return.

# Complexity
- Time complexity:
$$O(n * k)$$, where *n* is the length of locations and *k* is fuel.

- Space complexity:
$$O(n * k)$$, where *n* is the length of locations and *k* is fuel.

# Code
```
@mod = 1000000007

def count_routes(locations, start, finish, fuel)
    @memo = Array.new(locations.length) { {} }
    @locations = locations
    @finish = finish

    num_routes(start, fuel) % @mod
end

def num_routes(curr, fuel)
    return @memo[curr][fuel] if @memo[curr][fuel]
    return 0 if fuel < 0
    
    val = @locations[curr]
    options = []

    @locations.each_with_index do |location,i|
        if i != curr
            options << num_routes(i, fuel - (location-val).abs)
        end
    end

    @memo[curr][fuel] = options.sum + (curr == @finish ? 1 : 0)
end
```