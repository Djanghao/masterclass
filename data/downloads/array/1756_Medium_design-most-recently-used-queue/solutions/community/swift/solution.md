# Swift Sqrt Decomposition

**Author:** kmhsn11
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/1951975/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/1951975/)

---


class MRUQueue {

    var n: Int
    var arr = [[Int]]()
    var nSqrt: Int
    init(_ n: Int) {
        self.n = n
        self.nSqrt = Int(ceil(sqrt(Double(n))))
        var i = 0
        while(i < n) {
            var tempArr = [Int]()
            for j in 0..<nSqrt {
                if i+j+1 <= n {
                tempArr.append(i+j+1)
                }
            }
            arr.append(tempArr)
            i += nSqrt
        }
    }
    
    func fetch(_ k: Int) -> Int {
        let index = k - 1
        let block = index/nSqrt
        let offset = index%nSqrt
        let item = arr[block].remove(at: offset)
        arr[arr.count-1].append(item)
        for i in block..<arr.count-1 {
            arr[i].append(arr[i+1].remove(at:0))
        }
        return item
    }
}