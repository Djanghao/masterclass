# Beginner friendly optimal solution in Go

**Author:** adrenaline03
**Votes:** 3
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4734476/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4734476/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity: $$O(n*log(n))$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(n)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
func findLeastNumOfUniqueInts(arr []int, k int) int {\r
    m := map[int]int{}\r
    count := 0\r
\r
    for _, i := range arr {\r
        m[i]++\r
    }\r
\r
    freq := []int{}\r
    for _, i := range m {\r
        freq = append(freq, i)\r
    }\r
\r
    sort.Ints(freq)\r
\r
    for i := 0; i < len(freq); i++ {\r
        count += freq[i]\r
\r
        if count > k {\r
            return len(freq) - i\r
        }\r
    }\r
\r
    return 0\r
}\r
```