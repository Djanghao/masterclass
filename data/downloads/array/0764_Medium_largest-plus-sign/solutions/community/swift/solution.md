# Dynamic Programming O(n^2) - Runtime: 164 ms, faster than 100.00%

**Author:** BADUnhinged
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/1859470/](https://leetcode.com/problems/largest-plus-sign/solutions/1859470/)

---

```
func orderOfLargestPlusSign(_ n: Int, _ mines: [[Int]]) -> Int {
		//Arrays representing max moves from a given index based on direction
        var left: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)
        var right: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)
        var up: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)
        var down: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)

        // Give them all bombs
        for i in 0..<mines.count {
            let row = mines[i][0]
            let col = mines[i][1]

            left[row][col] = -1
            right[row][col] = -1
            up[row][col] = -1
            down[row][col] = -1
        }


        // Initialize left and up arrays
		// By going from 0,0 -> n,n 
        for row in 0..<n {
            for col in 0..<n {
                if left[row][col] == -1 { continue }
                if col - 1 < 0 {
                    left[row][col] = 0
                } else {
                    left[row][col] = left[row][col-1] + 1
                }

                if row - 1 < 0 {
                    up[row][col] = 0
                } else {
                    up[row][col] = up[row-1][col] + 1
                }
            }
        }


        // Initialize right and down arrays
		// By going from n,n -> 0,0 
        for row in stride(from: n-1, to: -1, by: -1) {
            for col in stride(from: n-1, to: -1, by: -1) {
                if right[row][col] == -1 { continue }
                if col + 1 >= n {
                    right[row][col] = 0
                } else {
                    right[row][col] = right[row][col+1] + 1
                }

                if row + 1 >= n {
                    down[row][col] = 0
                } else {
                    down[row][col] = down[row+1][col] + 1
                }
            }
        }

        // Iterate through to find max
        var maxLength = -1
        for row in 0..<n {
            for col in 0..<n {
                let left = left[row][col]
                let right = right[row][col]
                let down = down[row][col]
                let up = up[row][col]
				
				//If not a mine then find plus sign length = min of the 4 directions
                if left != -1 {
                    let plusLength = min(left, right, down, up)
                    //print(plusLength)
                    if (plusLength + 1) > maxLength {

                        maxLength = plusLength + 1
                    }
                }
            }
        }
        if maxLength == -1 {
            return 0
        }
        return maxLength

```