# Swift Binary Search O(logN) Solution

**Author:** Noyin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2973709/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2973709/)

---


# Complexity
- Time complexity:
O(logN)

- Space complexity:
O(1)


# Code
```
class Solution {
    func minimizeSet(_ divisor1: Int, _ divisor2: Int, _ uniqueCnt1: Int, _ uniqueCnt2: Int) -> Int {
        func check(_ val: Int) -> Bool {
            let c = val / lcm(divisor1, divisor2) // # of integers divisible by both divisor1 and divisor2
            let a = (val / divisor1) - c // # of integers divisible by divisor1
            let b = (val / divisor2) - c // # of integers divisible by divisor2
            let remaining = val - (a + b) - c  // # of intergers not divisible by divisor1 or divisor2
            
            
            // subtract # of integers divisible by divisor2 from array1. integers divisible by divisor2 can be assign to array1
            
            // subtract # of integers divisible by divisor1 from array2. integers divisible by divisor1 can be assign to array2
            // return true if remaining # of integers is greater or equals to # of integers needed to fill array1 and array2
            
            return remaining >= max(0, uniqueCnt1 - b) + max(0, uniqueCnt2 - a)
        }

        var left = 0
        var right = Int.max >> 1

        var res = Int.max
            
        while left <= right {
            let mid = (left + right) >> 1

            if check(mid) {
                right = mid - 1
                res = mid
            } else {
                left = mid + 1
            }
        }

        return res
    }
}

func gcd(_ a:Int, _ b:Int) -> Int {
    if a == b {
        return a
    }
    else {
        if a > b {
            return gcd(a-b, b)
        }
        else {
            return gcd(a, b-a)
        }
    }
}
   
func lcm(_ x: Int, _ y: Int) -> Int {
   return x / gcd(x, y) * y
}
```