# Ruby solution using Stack

**Author:** ksodha93
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4305660/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4305660/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {String} s
# @param {Integer} k
# @return {String}
def remove_duplicates(s, k)
    stack = [] # [char, count]
    s.each_char do |ch|
        if !stack.empty? && stack[-1][0] == ch
            stack[-1][1] += 1
        else
            stack << [ch, 1]
        end

        if stack[-1][1] == k
            stack.pop
        end
    end

    result = ''
    stack.each do |ch, count|
        result << ch * count
    end
    result
end
```