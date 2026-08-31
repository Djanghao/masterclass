# ✅ 100% Solution with explanation (sliding window) O(n)

**Author:** archetype2142
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4028659/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4028659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use a sliding window approach with 2 pointers p1 and p2
we keep sliding p2 to the right and comparing the newly formed integer if it is less than the comparision k

# Approach
<!-- Describe your approach to solving the problem. -->
**Example**: s = "165426", k = 60

**Iteration 1:**

s = [1][6][5][4][2][6]
- Set **p1 = 0** and **p2 = 1**
- s[p1..p2] = 16 < 60 \u2705
  - update **p2 = p2 + 1**
- s[p1..p2] = 165 < 60 \u274C
  - add `s[p1..(p2-1)]` to list of solutions
  - update **p1 = p2 - 1**
  - update **p2 = p2 + 1**
- s[p1..p2] = 54 < 60 \u2705
 - update **p2 = p2 + 1**
- s[p1..p2] = 542 < 60  \u274C
  - add `s[p1..(p2-1)]` to list of solutions
  - update **p1 = p2 - 1**
  - update **p2 = p2 + 1**
... 

At the end we're left with a solution list, whose lenth is the length of out solution

# Complexity
- Time complexity: $$O(n)$$
 In worst case, we have to take our pointer to the end of the string
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
In the worst case we have an array of length n with every element from the list, so the whole size of the list

# Code
```
# @param {String} s
# @param {Integer} k
# @return {Integer}
def minimum_partition(s, k)
  if k < 10
    s.each_char { |c| return -1 if c.to_i > k }
    return s.length
  end

  found_nums, s, p1, p2 = [], s.chars, 0, 1

  length = s.length

  while p2 <= length
    p2 += 1 while s[p1..p2].join.to_i < k && p2 < length
    
    found_nums.append(s[p1..(p2 - 1)].join)

    p1, p2 = p2, p2 + 1
  end

  found_nums.any? ? found_nums.count : -1
end
```