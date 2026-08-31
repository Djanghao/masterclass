# Python 3 Solution | GoLang Solution | HashMap | 3Sum Approach

**Author:** 1nnOcent
**Votes:** 6
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1919461/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1919461/)

---

### Python
```py
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        mp, res = {}, 0
        for i in range(len(arr)-1):
            for j in range(i+1, len(arr)):
                diff = target - (arr[i] + arr[j])
                res += mp[diff] if diff in mp else 0
            
            mp[arr[i]] = mp.get(arr[i], 0) + 1
            
        return res % int(1e9 + 7)
```

### GoLang [Faster than 93%]
```go
func threeSumMulti(arr []int, target int) int {
    
    var mp map[int]int = map[int]int{0: 0}
    var res int
    
    for i := 0; i < len(arr)-1; i++ {
        for j := i+1; j < len(arr); j++ {
            diff := target - (arr[i] + arr[j])
            res += mp[diff]
        }
        mp[arr[i]]++
    }
    return res % int(1e9 + 7)
}
```