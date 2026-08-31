# Swift Counter Solution

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/5505697/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/5505697/)

---

```
class DataStream {
  private(set) var value: Int
  private(set) var k: Int
  private(set) var counter = 0
  
  init(_ value: Int, _ k: Int) {
    self.value = value
    self.k = k
  }
  
  func consec(_ num: Int) -> Bool {
    if num == value { counter += 1 }
    else { counter = 0 }
    return counter >= k
  }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * let obj = DataStream(value, k)
 * let ret_1: Bool = obj.consec(num)
 */
```