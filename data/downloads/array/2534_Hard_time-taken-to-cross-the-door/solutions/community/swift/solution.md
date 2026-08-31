# Swift | Simulation with 2 queues

**Author:** fondant-concord-connote
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3556862/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3556862/)

---

# Code
```
class Solution {
    struct Person {
        let index: Int
        let arrivalTime: Int

        init(index: Int, arrivalTime: Int) {
            self.index = index
            self.arrivalTime = arrivalTime
        }
    }

    enum DoorState {
        case entering
        case exiting
        case unused
    }

    func timeTaken(_ arrival: [Int], _ state: [Int]) -> [Int] {
        var enterQueue: [Person] = []
        var exitQueue: [Person] = []
        var result: [Int] = Array(repeating: 0, count: arrival.count)
        var usedDoorCount = 0

        for (offset, arrivalTime) in arrival.enumerated() {
            let person = Person(index: offset, arrivalTime: arrivalTime)
            if state[offset] == 0 {
                enterQueue.append(person)
            } else {
                exitQueue.append(person)
            }
        }
        var lastDoorState = DoorState.unused
        var currentTime = arrival[0]
        while usedDoorCount < arrival.count {
            var nextEnterer: Person?
            var nextExiter: Person?
            if 
                let enterer = enterQueue.first, 
                enterer.arrivalTime <= currentTime 
            {
                nextEnterer = enterer
            }
            if 
                let exiter = exitQueue.first,
                exiter.arrivalTime <= currentTime
            {
                nextExiter = exiter
            }

            switch (nextEnterer, nextExiter, lastDoorState) {
            case let (.none, .some(exiter), _):
                exitQueue.removeFirst()
                result[exiter.index] = currentTime
                currentTime += 1
                usedDoorCount += 1
                lastDoorState = .exiting

            case let (.some(enterer), .none, _):
                enterQueue.removeFirst()
                result[enterer.index] = currentTime
                currentTime += 1
                usedDoorCount += 1
                lastDoorState = .entering

            case let (.some, .some(exiter), .unused), let (.some, .some(exiter), .exiting):
                exitQueue.removeFirst()
                result[exiter.index] = currentTime
                currentTime += 1
                usedDoorCount += 1
                lastDoorState = .exiting
            
            case let (.some(enterer), .some, .entering):
                enterQueue.removeFirst()
                result[enterer.index] = currentTime
                currentTime += 1
                usedDoorCount += 1
                lastDoorState = .entering
                
            case (.none, .none, _):
                currentTime = min(
                    enterQueue.first?.arrivalTime ?? Int.max,
                    exitQueue.first?.arrivalTime ?? Int.max
                )
                lastDoorState = .unused
            }
        }

        return result
    }
}
```