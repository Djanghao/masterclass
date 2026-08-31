# Swift💯

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525229/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525229/)

---

**Good Interview Answer (accepted answer)**
Avoid using string conversion because it's MUCH SLOWER than doing the `Int` math.
```
class Solution {
    func sortJumbled(_ mapping: [Int], _ nums: [Int]) -> [Int] {
        func mapNum(_ num: Int) -> Int {
            var result = 0
            var powerOfTen = 1
            var num = num
            repeat {
                result += mapping[num % 10] * powerOfTen
                powerOfTen *= 10
                num /= 10
            } while num > 0
            return result
        }
        return nums.sorted { a,b in mapNum(a) < mapNum(b) }
    }
}
```

**Variation: Recursion + Eager Memoization; much faster (accepted answer)**
```
class Solution {
    func sortJumbled(_ mapping: [Int], _ nums: [Int]) -> [Int] {
        func mapNum(_ num:Int, _ powerOfTen:Int = 1)->Int {
            mapping[num % 10]*powerOfTen + (num>9 ? mapNum(num/10, powerOfTen*10):0)
        }
        return zip(nums.map{mapNum($0)},nums).sorted{$0.0 < $1.0}.map{$1}
    }
}
```
