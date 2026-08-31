# Ruby solution without backtracking, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702280/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702280/)

---

# Intuition
I really hate backtracking, so I do some basic optimizations and create every possible distribution.

# Approach
Main function is to optimize and reduce k to 4 or lower.  Helper function solves this exhaustively for k <= 4.

Main function:
1. If k is the length of cookies, every child gets a bag.  Return the biggest bag.
2. Sort the cookies to optimize.
3. If there aren't enough for every child to get two bags, some children will have one bag.  Give the biggest bags to the children who only get one.  Then solve the sub-problem for the remaining children with the helper function.
4. If none of these optimizations work, there are at most four children, so you can solve directly with the helper function.

Helper function:
1. Handle special cases.
2. Create an array of arrays, containing an array of length k and all values of 0.  This will represent the distribution.
3. Give the first cookie to the first child.
4. For the remaning cookies, look at each array you have and create a new array for each child you could give the cookie to.
5. Map each array to its unfairness (max value).
6. Find the minimum unfairness.

# Complexity
- Time complexity:
$$O(k^n)$$

- Space complexity:
$$O(k^n)$$

# Code
```
def distribute_cookies(cookies, k)
    return cookies.max if k == cookies.length
    cookies.sort!

    if cookies.length < 2*k
        diff = 2*k - cookies.length
        test = simple_cookies(cookies[0...cookies.length-diff], k - diff)
        return [test,cookies.max].max
    end
    
    simple_cookies(cookies.dup, k)
end

def simple_cookies(c, k)
    return c.max if c.length == k
    return c.sum if k == 1

    arrs = [Array.new(k,0)]
    arrs[0][0] = c.shift

    until c.empty?
        ele = c.shift
        new_arrs = []
        arrs.each do |arr|
            (0...k).each do |i|
                new_arr = arr.dup
                new_arr[i] += ele
                new_arrs << new_arr
            end
        arrs = new_arrs
        end
    end

    arrs.map! { |arr| arr.max }
    arrs.min
end
```