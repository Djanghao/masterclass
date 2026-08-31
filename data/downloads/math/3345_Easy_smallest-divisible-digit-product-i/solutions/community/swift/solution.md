# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6029101/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6029101/)

---

**Brute Force (accepted answer)**
```
class Solution {
    func smallestNumber(_ n: Int, _ t: Int) -> Int {
        let digitProduct = {n in sequence(first: 1){$0*10}.prefix{$0<=n}.reduce(1){$0*(n/$1%10)}}
        var result = n
        while digitProduct(result) % t != 0 {
            result += 1
        }
        return result
    }
} 
```