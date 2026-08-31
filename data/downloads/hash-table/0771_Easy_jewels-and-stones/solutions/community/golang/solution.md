# [Go] O(N) time | 0ms (100%), 2.1mb

**Author:** akash__gupta
**Votes:** 7
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1301063/](https://leetcode.com/problems/jewels-and-stones/solutions/1301063/)

---

```
func numJewelsInStones(jewels string, stones string) int {
    jewelsMap := map[rune]bool{}
    for _, jewel := range jewels {
        jewelsMap[jewel] = true
    }
    
    result := 0
    for _, stone := range stones {
        if jewelsMap[stone] {
            result++
        }
    }
    return result
}