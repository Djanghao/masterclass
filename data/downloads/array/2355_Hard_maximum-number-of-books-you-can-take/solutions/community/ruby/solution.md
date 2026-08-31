# ruby version of editorial

**Author:** johnhaoxian
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4393121/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4393121/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} books
# @return {Integer}
    def calculate_sum(l,r, books)
      cnt = [books[r], r-l+1].min
      return (2*books[r] -cnt+1)*cnt / 2
    end 
def maximum_books(books)
    n = books.length
    stack = []
    dp=Array.new(n, 0)
    0.upto(n-1).each do |i|
      while !stack.empty? && books[stack[-1]] - stack[-1] >= books[i] -i do
        stack.pop
      end
      if stack.empty? 
        dp[i] = calculate_sum(0,i, books)
      else
        j = stack[-1]
        dp[i] = dp[j] + calculate_sum(j+1, i, books)

      end
      stack.append(i)
    end
    dp.max
end
```