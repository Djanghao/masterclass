# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/4920799/](https://leetcode.com/problems/count-square-sum-triples/solutions/4920799/)

---

O(n*2):O(n)
# Code
```
# @param {Integer} n
# @return {Integer}
def count_triples(n)
    @square_root_of = {}
    @square_root_of[1] = 1
    @square_root_of[4] = 2
    @square_root_of[9] = 3
    
    # Build square root of hash.
    i = 4
    while i <= n
        @square_root_of[(i*i)] = i
        i += 1
    end

    ans = 0
    
    while n > 3
        n_square = n * n
        (3..n-1).each do |a|
            if @square_root_of[n_square - (a*a)]
                ans += 1
            end
        end

        n -= 1
    end

    ans 
end
```