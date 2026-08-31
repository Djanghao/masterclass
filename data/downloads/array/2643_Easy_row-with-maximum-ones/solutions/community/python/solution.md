# Python/Go | Easy Solution✅

**Author:** gmanayath
**Votes:** 4
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3510886/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3510886/)

---

# Python\u2705
```
class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        output = [0,0]
        for index, item in enumerate(mat):
            one_count = item.count(1)
            if one_count > output[1]:
                output[0] = index
                output[1] = one_count
        return output

```
# Go\u2705
```
func rowAndMaximumOnes(mat [][]int) []int {
    output := []int{0,0}
    for index, item := range mat {
        oneCount := 0
        for _, v := range item {
            if v == 1{
                oneCount++
            }
        }
        if oneCount > output[1] {
            output[0] = index
            output[1] = oneCount
        }
    }
    return output
}
```