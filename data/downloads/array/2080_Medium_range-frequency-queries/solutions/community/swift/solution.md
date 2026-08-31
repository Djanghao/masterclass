# Swift Easy Solution || 100% beat Time & Space ||  New way to find frequency

**Author:** rekhalilapara
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/3871267/](https://leetcode.com/problems/range-frequency-queries/solutions/3871267/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class RangeFreqQuery {

     var arr = [Int]()
     var dict = [[Int]:Int]()

    init(_ arr: [Int]) {
        self.arr = arr
    }
    
    func query(_ left: Int, _ right: Int, _ value: Int) -> Int {
        if let count = dict[[left,right,value]] {
          return count
        }else {
           let count = arr[left...right].reduce(0) {$0 + ($1 == value ? 1 : 0)}
           dict[[left,right,value]] = count
            return count
        }
    }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * let obj = RangeFreqQuery(arr)
 * let ret_1: Int = obj.query(left, right, value)
 */
```