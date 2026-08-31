# Easy to read ruby solution

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5530337/](https://leetcode.com/problems/sort-the-people/solutions/5530337/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn) - for sorting

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {String[]} names
# @param {Integer[]} heights
# @return {String[]}
def sort_people(names, heights)
    hash = {}
    (0...names.length).each do |i|
        hash[heights[i]] = names[i]
    end
    hash = hash.sort_by { |k,v| -k }.to_h
    hash.values
end
```