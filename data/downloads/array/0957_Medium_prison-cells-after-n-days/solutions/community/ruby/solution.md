# [Ruby] Simple solution

**Author:** MrPhantomT
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/3214682/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/3214682/)

---

# Intuition
In general it's pretty simple problem, but the main challenge is to optimize it for big N.

We can notice that we have a limited number of unique combination that can be generated using the provided algorithm.

So we just need to found out a count of unique combinations baesd on provided input and use it to solve issue for big N.

# Approach
In my solution I store all encountered combination in the `states` array.

If we do not encounter any duplicates we return last generated combination. 

If we encounter duplicate we need to count unique combinations. Using it we can calculate remaining numbers of days that we need to process.

Due to the fact that we already have all possible combinations we just took the one that we need from stored `states`


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {Integer[]} cells
# @param {Integer} n
# @return {Integer[]}
def prison_after_n_days(cells, n)
  states = [cells]
  
  while n > 0 do
    cells = (1..6).each_with_object(Array.new(cells.size, 0)) do |i, acc|
      acc[i] = cells[i - 1] == cells[i + 1] ? 1 : 0
    end

    index = states.index(cells)

    return states[index + (n - 1) % (states.size - index)] unless index.nil?

    states << cells
    n -= 1
  end

  cells
end
```