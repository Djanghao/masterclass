# Swift - Time: O(1), Space: O(N) - worst case

**Author:** batth
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/512667/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/512667/)

---

```
class ProductOfNumbers {

    init() {
        
    }
    
    var arr: [Int] = []
    
    func add(_ num: Int) {
        if num == 0 {
            arr = []
        } else if arr.count == 0 {
            arr.append(num)
        } else {
            arr.append(arr[arr.count - 1] * num)
        }
    }
    
    func getProduct(_ k: Int) -> Int {
        if k > arr.count {
            return 0
        } else if arr.count == k {
            return arr[arr.count - 1]
        } else {
            return arr[arr.count - 1] / arr[arr.count - k - 1]
        }
    }
}
```