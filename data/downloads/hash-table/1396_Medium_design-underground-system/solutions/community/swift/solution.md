# Swift → solution with two dictionaries

**Author:** ozinchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/3583062/](https://leetcode.com/problems/design-underground-system/solutions/3583062/)

---

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(m + n)$$

# Code
```
class UndergroundSystem {
    var customerData = [Int: (station: String, time: Int)]()
    var routeData = [String: (totalTime: Double, count: Int)]()

    func checkIn(_ id: Int, _ stationName: String, _ t: Int) {
        customerData[id] = (stationName, t)
    }
    
    func checkOut(_ id: Int, _ stationName: String, _ t: Int) {
        guard let checkIn = customerData[id] else {
            return // Invalid check-out without check-in
        }
        
        let routeKey = checkIn.station + "->" + stationName
        let journeyTime = Double(t - checkIn.time)
        
        if let existingData = routeData[routeKey] {
            let updatedTime = existingData.totalTime + journeyTime
            let updatedCount = existingData.count + 1
            routeData[routeKey] = (updatedTime, updatedCount)
        } else {
            routeData[routeKey] = (journeyTime, 1)
        }
        
        customerData[id] = nil // Remove check-in details after successful check-out
    }
    
    func getAverageTime(_ startStation: String, _ endStation: String) -> Double {
        let routeKey = startStation + "->" + endStation
        
        if let routeInfo = routeData[routeKey] {
            return routeInfo.totalTime / Double(routeInfo.count)
        }
        
        return 0.0 // No journeys recorded for the given stations
    }
}

```