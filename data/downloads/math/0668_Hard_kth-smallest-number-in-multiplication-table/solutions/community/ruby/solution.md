# Ruby Solution with Binary Search (100%/67%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/3464325/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/3464325/)

---

# Intuition
Find the smallest value i such that there are at least k products less than or equal to i using binary search.

# Approach
Do a binary search to find the smallest i with at least k numbers up to i.
For each value i, count how many values are at most k.  Do k divided by the row amount to find the value, with a max of the row length.

# Complexity
- Time complexity:
$$O(m log(k))$$

- Space complexity:
$$O(log(k))$$

# Code
```
def find_kth_number(m, n, k)
    ans = (1..k).bsearch { |i| count(m,n,i) >= k }
end

def count(m,n,i)
    total = 0
    (1..m).each { |j| total += [i/j, n].min }
    total
end
```

# One-line solution (in case you hate readability)
```
def find_kth_number(m, n, k)
    (1..k).bsearch { |i| (1..m).map { |x| [i/x,n].min }.sum >= k }
end
```