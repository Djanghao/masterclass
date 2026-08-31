# Detailed Approach in Swift 🚦 Maximum Points Inside the Square

**Author:** lebon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5193503/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5193503/)

---

# Intuition
The problem requires finding the maximum number of points that can fit inside a square, with each point having a unique label. To solve this, we can identify the smallest side length of such a square that can contain the maximum number of points.

# Approach
1. **Initialization**:
   - Use `Int.max` to represent a very large number, essentially "infinity."
   - Initialize two arrays, `minSideA` and `minSideB`, to store the smallest and second smallest side lengths for each label (26 letters in the alphabet).
   - Initialize an array `coordinates` to store the coordinates of points with minimum side lengths.

2. **Iterate through labels and points**:
   - For each label in the string `labels`, convert the label character to an index (0 to 25).
   - Calculate the absolute values of the x and y coordinates of each point.
   - Determine the maximum coordinate (side length) for the current point.
   - Update the minimum side lengths (`minSideA` and `minSideB`) for the current label based on the calculated maximum coordinate.

3. **Find the smallest side length**:
   - Iterate through the `minSideA` array to determine the smallest side length that can contain all points.

4. **Count valid points**:
   - If the smallest side length is still "infinity," it means no valid side length was found, so return the total number of points.
   - Otherwise, count the number of points that can fit within the smallest side length, ensuring no points share the same coordinates within the square.

# Complexity
- **Time complexity**: $$O(n)$$, where $$n$$ is the number of points. This is because each point and its corresponding label are processed once.
- **Space complexity**: $$O(1)$$, as the space used for the arrays is constant (size 26 for the alphabet).


# Code
```swift []
class Solution {
    func maxPointsInsideSquare(_ points: [[Int]], _ labels: String) -> Int {
        let infinity = Int.max // Use Int.max to represent a very large number
        var minSideA = [Int](repeating: infinity, count: 26) // Array to store the first minimum side length for each label
        var minSideB = [Int](repeating: infinity, count: 26) // Array to store the second minimum side length for each label
        var coordinates = [(Int, Int)](repeating: (0, 0), count: 26) // Array to store coordinates of points with minimum side lengths
        var index = 0
        var x = 0
        var y = 0
        var maxCoordinate = 0
        var labelIndex = 0

        // Iterate through the labels and corresponding points
        for label in labels {
            labelIndex = Int(label.asciiValue! - 97) // Convert label character to an index (0 to 25)
            x = abs(points[index][0]) // Get absolute value of x coordinate
            y = abs(points[index][1]) // Get absolute value of y coordinate
            maxCoordinate = max(x, y) // Find the maximum coordinate (side length)

            // Update minimum side lengths for the current label
            if maxCoordinate < minSideA[labelIndex] {
                if maxCoordinate < minSideB[labelIndex] {
                    minSideA[labelIndex] = minSideB[labelIndex]
                    minSideB[labelIndex] = maxCoordinate
                    coordinates[labelIndex] = (x, y)
                } else {
                    minSideA[labelIndex] = maxCoordinate
                }
            }
            index += 1
        }

        var smallestSideLength = infinity
        // Find the smallest side length that can contain all points
        for i in 0..<26 {
            if minSideA[i] < smallestSideLength {
                smallestSideLength = minSideA[i]
            }
        }

        // If smallestSideLength is still infinity, return the total number of points
        if smallestSideLength == infinity {
            return points.count
        }

        var count = 0
        // Count the number of points that can fit within the smallest side length
        for i in 0..<26 {
            if minSideB[i] != minSideA[i] && coordinates[i].0 < smallestSideLength && coordinates[i].1 < smallestSideLength {
                count += 1
            }
        }

        return count
    }
}


```