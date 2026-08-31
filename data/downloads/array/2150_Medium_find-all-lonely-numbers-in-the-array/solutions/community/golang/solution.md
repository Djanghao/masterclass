# Golang eas solutions

**Author:** Shakib448
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5290272/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5290272/)

---

```
func findLonely(nums []int) []int {
    m := make(map[int]int ,0)

    for _, num := range nums {
        m[num]++
    }

    lonely := make([]int, 0)

    for _, num := range nums {
        if m[num] == 1 && m[num-1] == 0 && m[num+1] == 0 {
            lonely = append(lonely, num)
        }
    }
    return lonely
};
```