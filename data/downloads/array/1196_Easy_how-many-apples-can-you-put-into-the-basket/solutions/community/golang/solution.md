# Go / GoLang | Greedy

**Author:** aristorinjuang
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4843964/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4843964/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the `weight` from the lightest to the heaviest. Return the index if reaching the limit.

# Approach
<!-- Describe your approach to solving the problem. -->
Greedy

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n \\log n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
func maxNumberOfApples(weight []int) int {
    sort.Ints(weight)
    
    limit := 5000
    for i, w := range weight {
        limit -= w
        if limit < 0 {
            return i
        }
    }
    return len(weight)
}
```