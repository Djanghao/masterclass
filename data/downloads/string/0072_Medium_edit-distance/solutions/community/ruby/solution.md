# Ruby solution using DP

**Author:** ksodha93
**Votes:** 2
**Link:** [https://leetcode.com/problems/edit-distance/solutions/4262299/](https://leetcode.com/problems/edit-distance/solutions/4262299/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n1 * n2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n1 * n2)

# Code
```
# @param {String} word1
# @param {String} word2
# @return {Integer}
def min_distance(word1, word2)
    n1 = word1.length
    n2 = word2.length

    # stores the minimum number of operations at each position
    dp = Array.new(n1 + 1) { Array.new(n2 + 1, Float::INFINITY) }

    # initializing the base case
    # update last row to values based on the length of other string
    (n2).downto(0) do |j|
        dp[n1][j] = n2 - j
    end

    # update last column to values based on the length of other string
    (n1).downto(0) do |i|
        dp[i][n2] = n1 - i
    end

    (n1 - 1).downto(0).each do |i|
        (n2 - 1).downto(0).each do |j|
            if word1[i] == word2[j]
                dp[i][j] = dp[i + 1][j + 1]
            else
                dp[i][j] = 1 + [ # because we need to do atleast one operation
                    dp[i][j + 1], # insert
                    dp[i + 1][j], # delete
                    dp[i + 1][j + 1] # replace
                ].min
            end
        end
    end
    dp[0][0]
end
```
Using Recursion
```
# @param {String} word1
# @param {String} word2
# @return {Integer}
def min_distance(word1, word2)
    @n1 = word1.length
    @n2 = word2.length
    @word1 = word1
    @word2 = word2

    @dp = Array.new(@n1) { Array.new(@n2) }
    dfs(0, 0)
end

def dfs(i, j)
    return @n1 - i if j == @n2

    return @n2 - j if i == @n1

    return @dp[i][j] if @dp[i][j]

    if @word1[i] == @word2[j]
        @dp[i][j] = dfs(i + 1, j + 1)
    else
        @dp[i][j] = [
            1 + dfs(i, j + 1), # insert
            1 + dfs(i + 1, j), # delete 
            1 + dfs(i + 1, j + 1) # replace
        ].min
    end 
end
```