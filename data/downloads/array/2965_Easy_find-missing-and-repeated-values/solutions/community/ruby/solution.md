# Frequency Hash. O(n), O(n). Comments included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4937601/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4937601/)

---


# Code
```
# @param {Integer[][]} grid
# @return {Integer[]}
def find_missing_and_repeated_values(grid)
    # Find a which appears twice.
    # Deduce b by finding the missing number from 1 to n.
    freq_hash = Hash.new(0)
    grid.each do |row|
        row.each do |col|
            freq_hash[col] += 1
        end
    end

    n = grid.size * grid[0].size
    i = 1
    ans = [nil, nil]
    while i < n + 1
        if freq_hash[i] == 0
            ans[1] = i
        elsif freq_hash[i] == 2
            ans[0] = i
        end
        i += 1
    end

    ans
end
```