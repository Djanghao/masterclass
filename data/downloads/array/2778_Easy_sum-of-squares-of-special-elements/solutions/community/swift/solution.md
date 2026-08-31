# Swift | O(n) -> O(√n) time optimized

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3772469/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3772469/)

---

# Trivial solution
- Time complexity: $O(n)$
- Space complexity: $O(1)$
```
class Solution {
    func sumOfSquares(_ nums: [Int]) -> Int {
        var sum = 0, n = nums.count
        for (i, num) in nums.enumerated() {
            if n % (i+1) == 0 { sum += num*num }
        }
        return sum
    }
}
```
# Optimizations
1. We can check divisors not from $1$ to $n$, but from $1$ to $\\sqrt{n}$, since any pair of divisors $x \\cdot y = n$ can be arranged that $x \\le \\sqrt{n} \\le y$.


# Complexity
- Time complexity: $O(\\sqrt{n})$
- Space complexity: $O(1)$

```
extension Int { var squared:  Int { self * self } }
class Solution {
    func sumOfSquares(_ nums: [Int]) -> Int
    {
        var i = 1, sum = 0, n = nums.count
        while i.squared < n {
            if n % i == 0 { sum += nums[i-1].squared + nums[n/i - 1].squared }
            i += 1
        }
        if i.squared == n { sum += nums[i-1].squared }
        return sum
    }
}
```
2. It can be noted that special indices do not depend on nums and can be precomputed and/or cached

# Complexity
- Time complexity: $O(\\sqrt{n})$
- Space complexity: $O(n \\cdot \\sqrt{n}) = O(n^{\\frac{3}{2}})$

# Code
```
extension Int { var squared:  Int { self * self } }
class Solution
{
    func sumOfSquares(_ nums:  [Int]) -> Int {
        getIndexes(nums.count).reduce(0){ $0 + nums[$1].squared }
    }

    func getIndexes(_ n:  Int) -> [Int]
    {
        if let indexes = specialIndexes[n] { return indexes }
        else
        {
            var i = 1, indexes:  [Int] = []
            while i.squared < n {
                if n % i == 0 { indexes.append(i - 1); indexes.append(n/i - 1) }
                i += 1
            }
            if i.squared == n { indexes.append(i - 1) }
            specialIndexes[n] = indexes
            return indexes
        }
    }
}
// static var for caching between tests
var specialIndexes: [Int:[Int]] = [
1 :  [0],
2 :  [0, 1],
3 :  [0, 2],
4 :  [0, 1, 3],
5 :  [0, 4],
6 :  [0, 1, 2, 5],
7 :  [0, 6],
8 :  [0, 1, 3, 7],
9 :  [0, 2, 8],
10 : [0, 1, 4, 9],
11 : [0, 10],
12 : [0, 1, 2, 3, 5, 11],
13 : [0, 12],
14 : [0, 1, 6, 13],
15 : [0, 2, 4, 14],
16 : [0, 1, 3, 7, 15],
17 : [0, 16],
18 : [0, 1, 2, 5, 8, 17],
19 : [0, 18],
20 : [0, 1, 3, 4, 9, 19],
21 : [0, 2, 6, 20],
22 : [0, 1, 10, 21],
23 : [0, 22],
24 : [0, 1, 2, 3, 5, 7, 11, 23],
25 : [0, 4, 24],
26 : [0, 1, 12, 25],
27 : [0, 2, 8, 26],
28 : [0, 1, 3, 6, 13, 27],
29 : [0, 28],
30 : [0, 1, 2, 4, 5, 9, 14, 29],
31 : [0, 30],
32 : [0, 1, 3, 7, 15, 31],
33 : [0, 2, 10, 32],
34 : [0, 1, 16, 33],
35 : [0, 4, 6, 34],
36 : [0, 1, 2, 3, 5, 8, 11, 17, 35],
37 : [0, 36],
38 : [0, 1, 18, 37],
39 : [0, 2, 12, 38],
40 : [0, 1, 3, 4, 7, 9, 19, 39],
41 : [0, 40],
42 : [0, 1, 2, 5, 6, 13, 20, 41],
43 : [0, 42],
44 : [0, 1, 3, 10, 21, 43],
45 : [0, 2, 4, 8, 14, 44],
46 : [0, 1, 22, 45],
47 : [0, 46],
48 : [0, 1, 2, 3, 5, 7, 11, 15, 23, 47],
49 : [0, 6, 48],
50 : [0, 1, 4, 9, 24, 49]]
```