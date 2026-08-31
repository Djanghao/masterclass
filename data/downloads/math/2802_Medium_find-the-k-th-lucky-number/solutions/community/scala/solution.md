# Scala Solution - Functional Programming

**Author:** sarwaan001
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5229815/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5229815/)

---

# Intuition
Convert k to a binary string, find the most significant bit, and convert 0 to 4 and 1 to 7s

# Approach
Convert k to a binary string, find the most significant bit, and convert 0 to 4 and 1 to 7s

# Complexity
- Time complexity:
O(nlog(n))

- Space complexity:
O(n)

# Code
```
object Solution {
    def kthLuckyNumber(k: Int): String = {
        (k+1)
            .toBinaryString
            .substring(1)
            .split("")
            .map((value) => value match {
                case x if x == "0" => "4"
                case x => "7"
            })
            .reduce((acc, curr) => acc + curr)
    }
}
// 0 = n/a = 000
// 1 = 4 = 1
// 2 = 7 = 2
// 3 = 44 = 11
// 4 = 47 = 12
// 5 = 74 = 21
// 6 = 77 = 22
// 7 = 444 = 6
// 8 = 447 = 7
// 9 = 474 = 8
// 10 = 477 = 9
// 11 = 744 = A
// 12 = 747 = B
// 13 = 774 = C
// 14 = 777 = D
// 15 = 4444 = E
// 16 = 4447
// 17 = 4474
// 18 = 


// 10 % 2 = 0 -> 4
// 5 % 2 = 1 -> 7
// 2
```