# Swift | Stack

**Author:** jayantsogikar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952840/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952840/)

---

```
func mostCompetitive(_ nums: [Int], _ k: Int) -> [Int] {
    var fin : [Int] = []
    for (i,n) in nums.enumerated(){
        while (!fin.isEmpty && fin.last! > n && fin.count - 1 + nums.count - i >= k) {
            fin.removeLast()
        }
        if fin.count < k{
            fin.append(n)
        }
    }
    return fin
}
```