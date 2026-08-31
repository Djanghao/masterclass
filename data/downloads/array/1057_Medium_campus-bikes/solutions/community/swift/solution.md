# 💡Swift - Optimal Solution - Greedy and Bucket Sort

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/4238454/](https://leetcode.com/problems/campus-bikes/solutions/4238454/)

---

# Solution
```
class Solution {
    func assignBikes(_ workers: [[Int]], _ bikes: [[Int]]) -> [Int] {
        let n = workers.count
        
        // Calculate distances and create pairs array.
        var pairs: [(worker: Int, bike: Int, dist: Int)] = []
        for (i, worker) in workers.enumerated() {
            for (j, bike) in bikes.enumerated() {
                let dist = abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])
                pairs.append((i, j, dist))
            }
        }

        // Sort pairs based on distance
        pairs.sort { $0.dist < $1.dist }

        // Initialize result array with -1 (indicating no bike assigned yet).
        var result = Array(repeating: -1, count: n)
        
        // Keep track of taken bikes to avoid double assignment.
        var takenBikes: Set<Int> = []
        
        // Iterate through pairs and assign bikes.
        for pair in pairs {
            if result[pair.worker] == -1 && !takenBikes.contains(pair.bike) {
                result[pair.worker] = pair.bike
                takenBikes.insert(pair.bike)
                
                // Early exit if all workers have been assigned bikes.
                if takenBikes.count == n {
                    break
                }
            }
        }

        return result
    }
}
```
# Complexity
- Time: $$O(nm \\cdot lognm)$$
- Space: $$O(nm)$$

# Bucket Sort Solution
```
class Solution {
    func assignBikes(_ workers: [[Int]], _ bikes: [[Int]]) -> [Int] {
        // Maximum possible distance is 2000.
        var bucket: [[(worker: Int, bike: Int)]] = Array(repeating: [], count: 2001)
        
        // Calculate distances and place pairs into corresponding buckets.
        for (i, worker) in workers.enumerated() {
            for (j, bike) in bikes.enumerated() {
                let dist = abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])
                bucket[dist].append((i, j))
            }
        }

        var result = Array(repeating: -1, count: workers.count)
        var takenBikes: Set<Int> = Set()

        // Iterate through buckets and assign bikes to workers.
        for distancePairs in bucket {
            for (worker, bike) in distancePairs {
                if result[worker] == -1 && !takenBikes.contains(bike) {
                    result[worker] = bike
                    takenBikes.insert(bike)
                }
            }
        }

        return result
    }
}
```
# Complexity
- Time: $$O(nm+k)$$
- Space: $$O(nm+k)$$