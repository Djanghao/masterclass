# Multiple Ruby Solutions: Recursive and Iterative

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4116740/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4116740/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * m)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n * m)

# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def find_length(nums1, nums2)
    length = 0
    n1 = nums1.length
    n2 = nums2.length

    dp = Array.new(n1 + 1, 0) { Array.new(n2 + 1, 0) }

    (n1 - 1).downto(0).each do |i|
        (n2 - 1).downto(0).each do |j|
            if nums1[i] == nums2[j]
                dp[i][j] = 1 + dp[i + 1][j + 1]
                if length < dp[i][j]
                    length = dp[i][j]
                end
            end
        end
    end
    length
end
```
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def find_length(nums1, nums2)
    @length = 0
    @nums1 = nums1
    @nums2 = nums2
    @n1 = nums1.length
    @n2 = nums2.length

    @dp = Array.new(@n1) { Array.new(@n2) }

    (0...@n1).each do |i|
        (0...@n2).each do |j|
            next if @dp[i][j]
            dfs(i, j)
        end
    end
    @length
end

def dfs(i, j)
    return 0 if i < 0 || i >= @n1 || j < 0 || j >= @n2

    return @dp[i][j] if @dp[i][j]

    if @nums1[i] != @nums2[j]
        @dp[i][j] = 0
    else
        @dp[i][j] = 1 + dfs(i + 1, j + 1)
    end
    @length = @dp[i][j] if @length < @dp[i][j]
    @dp[i][j]
end
```