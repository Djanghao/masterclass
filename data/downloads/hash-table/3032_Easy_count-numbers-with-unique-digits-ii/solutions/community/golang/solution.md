# Go hash map solution

**Author:** andreypetko987
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5319223/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5319223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
func numberCount(a int, b int) int {
    counter := 0

    for i := a; i <= b; i++ {
        strI := strconv.Itoa(i)
        uniqueItems := make(map[string]struct{})

        for j := 0; j < len(strI); j++ {
            uniqueItems[string(strI[j])] = struct{}{}
        }

        if len(uniqueItems) == len(strI) {
            counter++
        }
    }

    return counter
}
```