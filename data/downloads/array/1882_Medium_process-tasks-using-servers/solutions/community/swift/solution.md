# Swift - Heap Solution - Apple swift collections (heap module)

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/6035251/](https://leetcode.com/problems/process-tasks-using-servers/solutions/6035251/)

---

# Code
```swift []
import HeapModule 

struct FreeServer: Comparable {
    let availableTime: Int
    let weight: Int
    let index: Int 

    static func < (_ lhs: FreeServer, _ rhs: FreeServer) -> Bool {
        if lhs.weight == rhs.weight {
            return lhs.index < rhs.index
        } else {
            return lhs.weight < rhs.weight
        }
    }
}

struct BusyServer: Comparable {
    let availableTime: Int
    let weight: Int
    let index: Int 

    static func < (_ lhs: BusyServer, _ rhs: BusyServer) -> Bool {
        return lhs.availableTime < rhs.availableTime
    }
}

class Solution {
    var currentTime = 0
    var freeServerHeap = Heap<FreeServer>()
    var busyServerHeap = Heap<BusyServer>()
    var result = [Int]()
    
    func assignTasks(_ servers: [Int], _ tasks: [Int]) -> [Int] {
        for (index, weight) in servers.enumerated() {
            let freeServer = FreeServer(
                availableTime : 0,
                weight: weight,
                index: index
            )
            freeServerHeap.insert(freeServer)
        }

        //every second task is added
        for (second, task) in tasks.enumerated() {
            currentTime = max(currentTime, second)

            //release completed servers to free server heap
            freeUpServers()

            //if no free servers available, move time to the next available time
            if freeServerHeap.isEmpty {
                //we have to wait till busyServer peek is complete
                currentTime = busyServerHeap.min!.availableTime
                freeUpServers() // since currenttime has changed
            }

            //assign task from free server to busy server
            var freeServer = freeServerHeap.removeMin()
            var busyServer = BusyServer(
                availableTime: currentTime + task, 
                weight: freeServer.weight,
                index: freeServer.index
            )
            result.append(freeServer.index)
            busyServerHeap.insert(busyServer)
        }

        return result
    }

    private func freeUpServers() {
        while let topServer = busyServerHeap.min, topServer.availableTime <= currentTime {
            let busyServer = busyServerHeap.removeMin()
            let freeServer = FreeServer(
                availableTime: 0, 
                weight: busyServer.weight,
                index: busyServer.index
            )
            freeServerHeap.insert(freeServer)
        }
    }
}
```