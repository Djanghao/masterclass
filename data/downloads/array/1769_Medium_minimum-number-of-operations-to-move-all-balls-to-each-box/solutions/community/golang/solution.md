# Go two passes O(n) | 0ms | 4.9M

**Author:** vashik
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1079976/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1079976/)

---

```
func minOperations(boxes string) []int {
    leftSum, leftOnes, rightSum, rightOnes := 0, 0, 0, 0
    for i,c := range boxes {
        if c == '1' {
            rightOnes++
            rightSum += i + 1
        }
    }
    answer := make([]int, len(boxes))
    for i,c := range boxes {
        rightSum -= rightOnes
        leftSum += leftOnes
        answer[i] = leftSum + rightSum
        if c == '1' {
            leftOnes++
            rightOnes-- 
        }
    }
    return answer
}
```