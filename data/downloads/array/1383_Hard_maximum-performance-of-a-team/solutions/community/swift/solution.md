# Swift solution (using Heap)

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1253063/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1253063/)

---

Let's hire engineers from the most efficient to the less. If the team size exceeds k, we dismiss the slowest engineer. At each step, we calculate the performance of a team to find max
```
import CoreFoundation

class Solution {
    func maxPerformance(_ n: Int, _ speed: [Int], _ efficiency: [Int], _ k: Int) -> Int {
        let divider = 1_000_000_007
        let indexes = Array(0..<n).sorted(by: { efficiency[$0] > efficiency[$1] })
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { (a, b, _) in
             let x: Int = a!.load(as: Int.self), y: Int = b!.load(as: Int.self)
             return x == y ? 0 : (x > y ? 1 : -1)
        }
        var heap = Heap<Int>(callbacks: &callbacks), speedSum = 0, result = 0
        for i in 0..<n {
            speedSum += speed[indexes[i]]
            heap.insert(speed[indexes[i]])
            if heap.count > k, let minSpeed = heap.remove() {
                speedSum -= minSpeed
            }
            result = max(result, speedSum * efficiency[indexes[i]])
        }
        return result % divider
    }
}

public struct Heap<T> {
    private var heap: CFBinaryHeap
    private var pointer: UnsafeMutablePointer<T>
    public var count: Int { return CFBinaryHeapGetCount(self.heap) }
    public var isEmpty: Bool { return CFBinaryHeapGetCount(self.heap) == 0 }
    init(callbacks: inout CFBinaryHeapCallBacks) {
        self.heap = CFBinaryHeapCreate(nil, 0, &callbacks, nil)
        self.pointer = UnsafeMutablePointer<T>.allocate(capacity: 1)
    }
    public func peek() -> T? {
        guard !isEmpty else { return nil }
        let t: T = CFBinaryHeapGetMinimum(self.heap).load(as: T.self)
        return t
    }
    public mutating func insert(_ value: T) {
        pointer = UnsafeMutablePointer<T>.allocate(capacity: 1)
        pointer.initialize(to: value)
        CFBinaryHeapAddValue(self.heap, pointer)
    }
    @discardableResult public mutating func remove() -> T? {
        if let t = self.peek() {
            CFBinaryHeapRemoveMinimumValue(self.heap)
            return t
        } else {
            return nil
        }
    }
}
```