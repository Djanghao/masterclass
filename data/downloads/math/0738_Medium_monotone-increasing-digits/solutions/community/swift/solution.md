# Swift || 3 ms

**Author:** mehrafruz
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/2302681/](https://leetcode.com/problems/monotone-increasing-digits/solutions/2302681/)

---

```
func monotoneIncreasingDigits(_ n: Int) -> Int {
    var arr: [Int] = String(n).map{Int(String($0))!}
    let n = (arr.count)-1
    var index = -1
  
    for i in stride(from: n, through: 1, by: -1) {
        if arr[i-1] > arr[i] {
            arr[i] = 9
            arr[i-1] = arr[i-1]-1
            index = i
        }
    }

    while index <= n && index != -1  {
        arr[index] = 9
        index+=1
    }

    let result = Int(arr.map{String($0)}.joined())!
    return result
}
```
