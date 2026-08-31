# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3186840/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3186840/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func putMarbles(_ w: [Int], _ k: Int) -> Int {
        [zip(w,w[1...]).map{$0.0+$0.1}.sorted()].map{zip($0[0..<k-1],$0[w.count-k..<w.count-1]).reduce(0){$0+$1.1-$1.0}}[0]
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func putMarbles(_ weights: [Int], _ k: Int) -> Int {
        [
            (0 ..< weights.count-1).reduce(into: [Int]()) { array, i in
                array.append(weights[i] + weights[i+1])
            }
            .sorted()
        ] // wrap result into one-element array to create monad
        .map { sortedSums in
			// just need to difference the sums, order is not really important
            zip(sortedSums[0 ..< k-1], sortedSums[weights.count-k ..< weights.count-1]) 
              .reduce(0) { sum, tuple in
                let (minValue, maxValue) = tuple
                return sum + maxValue - minValue
              }
        }[0] // unwrap monad
    }
}
```