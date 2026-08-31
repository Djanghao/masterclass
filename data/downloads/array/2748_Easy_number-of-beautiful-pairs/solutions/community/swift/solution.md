# Swift | Concise | FAST, no GCD

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3682957/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3682957/)

---

**O(1) Coprime determination (accepted answer)**
```
class Solution {
    func countBeautifulPairs(_ nums: [Int]) -> Int {
        func isCoprime(_ i:Int, _ j:Int) -> Bool {
            !(i>1 && i==j || i&1+j&1 == 0 || i%3==0 && j%3==0)
        }

        // example: nums = [123,456] becomes a = [[1,3], [4,6]]
        let a = nums.map {i in [i/max(1,Int(pow(10, ceil(log10(Float(i)))-1.0))), i%10]}

        return a.indices.reduce(0) { ans, i in
            a[(i+1)...].lazy.reduce(ans) {$0 + (isCoprime(a[i][0], $1[1]) ? 1:0)}
        }
    }
}
```