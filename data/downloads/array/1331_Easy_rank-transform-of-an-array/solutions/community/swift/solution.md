# Swift💯2liner

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858089/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858089/)

---

**Good Interview Answer (accepted answer)**
All answers involve: 1) de-duplicating `arr`; 2) sorting `arr`; 3) mapping values of `arr` to rank. 
With Swift, we can idiomatically and cleanly do this in two lines.
```
class Solution {
    func arrayRankTransform(_ arr: [Int]) -> [Int] {
        let ranks = [Int:Int](uniqueKeysWithValues: zip(Set(arr).sorted(),1...))
        return arr.map{elem in ranks[elem]!}
    }
}
```

**Without using Sort() (accepted answer)**
We could use a `Heap` structure instead of `.sort()` to provide the ordering, but why??
```
import Collections

struct HeapElem {
    var elem:Int
	var indices:[Int]
    init(_ tuple:(Int,[Int])) { (elem, indices) = tuple }
}
extension HeapElem: Comparable {
    static func <(l:HeapElem, r:HeapElem) -> Bool { l.elem < r.elem }
}

class Solution {
    func arrayRankTransform(_ arr: [Int]) -> [Int] {        
        var result = Array(repeating: 0, count: arr.count)
        var heap = Heap<HeapElem>(
            // map `arr` element to array of that element's indices
            arr.indices.reduce(into: [:]) { dict, i in
               dict[arr[i], default:[]].append(i)
            }
            // map dictionary's key-value tuples to `HeapElem`
            .map{keyValueTuple in HeapElem(keyValueTuple)}
        )
        var rank = 1
        while let heapElem = heap.popMin() {
            heapElem.indices.forEach {i in result[i] = rank}
            rank += 1
        }
        return result
    }
}
```