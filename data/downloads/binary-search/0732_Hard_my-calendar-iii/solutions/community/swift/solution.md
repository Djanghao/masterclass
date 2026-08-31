# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/5118189/](https://leetcode.com/problems/my-calendar-iii/solutions/5118189/)

---

# Complexity
- Time complexity:
    - init: $$O(1)$$
    - book: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MyCalendarThree {
    private final class Node {
        private let fromTime: Int
        private let toTime: Int

        private var value = 0
        private var propagationValue = 0

        private var left: Node?
        private var right: Node?

        init(fromTime: Int, toTime: Int) {
            self.fromTime = fromTime
            self.toTime = toTime
        }

        func updateRange(
            _ parentPropagationValue: Int,
            _ startTime: Int,
            _ endTime: Int
        ) -> Int {
            guard fromTime < endTime && toTime > startTime else {
                return propagateUpdates(parentPropagationValue)
            }

            if fromTime >= startTime && toTime <= endTime {
                value += 1
                propagationValue += 1
                return propagateUpdates(parentPropagationValue)
            } else {
                propagationValue += parentPropagationValue
                value += parentPropagationValue

                let midTime = (fromTime + toTime) / 2
                let left = left ?? Node(fromTime: fromTime, toTime: midTime)
                let right = right ?? Node(fromTime: midTime, toTime: toTime)
                self.left = left
                self.right = right

                defer {
                    propagationValue = 0
                }

                return max(
                    left.updateRange(propagationValue, startTime, endTime),
                    right.updateRange(propagationValue, startTime, endTime)
                )
            }
        }

        private func propagateUpdates(_ parentPropagationValue: Int) -> Int {
            propagationValue += parentPropagationValue
            value += parentPropagationValue
            if left != nil || right != nil {
                let midTime = (fromTime + toTime) / 2
                let left = left ?? Node(fromTime: fromTime, toTime: midTime)
                let right = right ?? Node(fromTime: midTime, toTime: toTime)
                self.left = left
                self.right = right

                defer {
                    propagationValue = 0
                }

                return max(
                    left.propagateUpdates(propagationValue),
                    right.propagateUpdates(propagationValue)
                )
            }

            return value
        }
    }

    private let root = Node(fromTime: .zero, toTime: 1_073_741_824)
    private var curK = 0

    func book(_ startTime: Int, _ endTime: Int) -> Int {
        curK = max(curK, root.updateRange(.zero, startTime, endTime))
        return curK
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * let obj = MyCalendarThree()
 * let ret_1: Int = obj.book(startTime, endTime)
 */
```