# Clean and short with sort and Hashmap

**Author:** lwmqwer
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5827998/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5827998/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```golang []\r
func displayTable(orders [][]string) [][]string {\r
    freq := map[string]map[string]int{}\r
    menu := map[string]bool{}\r
    for _, or := range orders {\r
        if _, ok := freq[or[1]]; !ok {\r
            freq[or[1]] = make(map[string]int)\r
        }\r
        freq[or[1]][or[2]]++\r
        menu[or[2]] = true\r
    }\r
    res := []string{}\r
    for k :=range menu {\r
        res = append(res, k)\r
    }\r
    sort.Strings(res)\r
    res = append([]string{"Table"}, res...)\r
    rc := [][]string{res}\r
    for k, v := range freq {\r
        temp := []string{k}\r
        for _, name := range res[1:] {\r
            temp = append(temp, strconv.Itoa(v[name]))\r
        }\r
        rc = append(rc, temp)\r
    }\r
    sort.Slice(rc[1:], func(i, j int)bool{\r
        if len(rc[1:][i][0]) == len(rc[1:][j][0]) {\r
            return rc[1:][i][0] < rc[1:][j][0]\r
        }\r
        return len(rc[1:][i][0]) < len(rc[1:][j][0])\r
    })\r
    return rc\r
}\r
```