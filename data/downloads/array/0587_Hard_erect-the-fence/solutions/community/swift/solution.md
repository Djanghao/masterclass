# Swift Jarvis's Convex Hull

**Author:** captainuberawesome
**Votes:** 1
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2830381/](https://leetcode.com/problems/erect-the-fence/solutions/2830381/)

---

```
class Solution {
    enum Orientation {
        case clockwise, counterclockwise, collinear
    }
    
    func outerTrees(_ trees: [[Int]]) -> [[Int]] {
        guard trees.count > 3 else {
            return trees
        }
        var result = Set<[Int]>()
        var l = 0
        
        // Find the leftmost point (if several exist, pick the one at the bottom)
        for i in 0..<trees.count {
            if trees[i][0] < trees[l][0] {
                l = i
            } else if trees[i][0] == trees[l][0], trees[i][1] < trees[l][1] {
                l = i
            }
        }

        // Start from leftmost point, keep moving counterclockwise
        // until we reach the start point again.  This loop runs O(n)
        // times where n is number of trees in result
		
		var p = l

        repeat {
            var q = (p + 1) % trees.count
            // Search for a point 'q' such that orientation(p, q, x) is counterclockwise for all points 'x'.
            // The idea is to keep track of last visited most counterclockwise point in q. 
			// If any point 'i' is more counterclockwise than q, then update q.
            for i in 0..<trees.count {
                if orientation(p: trees[p], q: trees[i], r: trees[q]) == .counterclockwise {
                    // If i is more counterclockwise than current q, then update q
                    q = i
                }
            }
            
            // Check for points that are on the line between p and q
            // and located between those points
            for i in 0..<trees.count {
                if i != p && i != q 
                && orientation(p: trees[p], q: trees[i], r: trees[q]) == .collinear
                && inbetween(p: trees[p], i: trees[i], q: trees[q]) {
                    result.insert(trees[i])
                }
            }
            
            // Now q is the most counterclockwise with respect to p
            // Set p as q for next iteration, so that q is added to result
            result.insert(trees[q])
            p = q
        } while (p != l) // Stop when we have returned to the first point
        
        return Array(result)
    }
    
    func orientation(p: [Int], q: [Int], r: [Int]) -> Orientation {
        let val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])
        
        if val == 0 {
            return .collinear
        } else if val > 0 {
            return .clockwise
        } else {
            return .counterclockwise
        }
    }
    
    func inbetween(p: [Int], i: [Int], q: [Int]) -> Bool {
        let a = i[0] >= p[0] && i[0] <= q[0] || i[0] <= p[0] && i[0] >= q[0]
        let b = i[1] >= p[1] && i[1] <= q[1] || i[1] <= p[1] && i[1] >= q[1]
        return a && b
    }
}
```