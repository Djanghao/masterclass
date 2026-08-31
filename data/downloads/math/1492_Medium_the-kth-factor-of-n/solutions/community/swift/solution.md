# Swift solution O(N) time & O(1) space

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/959455/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/959455/)

---

Swift solution
```
class Solution {
    func kthFactor(_ n: Int, _ k: Int) -> Int {
        var x = 0
        for i in 1...n where n % i == 0 {
            x += 1
            if x == k { return i }
        }
        return -1
    }
}
```

In two lines:
```
class Solution {
    func kthFactor(_ n: Int, _ k: Int) -> Int {
        let factors = [Int](1...n).filter({ n % $0 == 0 }), c = factors.count
        return c >= k ? factors[k - 1] : -1
    }
}
```