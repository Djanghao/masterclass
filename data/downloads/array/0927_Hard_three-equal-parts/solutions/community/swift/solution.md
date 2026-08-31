# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/1343246/](https://leetcode.com/problems/three-equal-parts/solutions/1343246/)

---

1. Count ones in `arr`
2. If there is no ones in `arr`, then all parts are zeros
3. Ones count must be multiple of three, else it is not possible to split `arr` into three parts
4. Find first significant bit for each part in `arr`
5. The last part ends at the end of `arr`, it has a reference length. Check that the length of the first two parts is not less than the reference one.
6. Check the equality of the three parts

Time complexity O(n), space complexity O(1)

Update: simplified reduce, as [@Legonaftik](https://leetcode.com/Legonaftik/) suggested
```
class Solution {
    func threeEqualParts(_ arr: [Int]) -> [Int] {
        let n = arr.count, ones = arr.reduce(0, +), partOnes = ones / 3
        guard ones > 0 else { return [0, 2] } // all parts are zeros
        guard ones % 3 == 0 else { return [-1, -1] } // it is not possible to split into three parts

        var starts = [Int](repeating: -1, count: 3), runningOnes = 0
        for i in 0..<n where arr[i] == 1 {
            let part = runningOnes / partOnes // 0...2
            if starts[part] == -1 {
                starts[part] = i
            }
            runningOnes += 1
        }

        let len = n - starts[2]

        guard starts[1] - starts[0] >= len && starts[2] - starts[1] >= len else { return [-1, -1] }

        // check if three parts are equal
        for l in 0..<len where arr[starts[0] + l] != arr[starts[1] + l] || arr[starts[0] + l] != arr[starts[2] + l] {
            return [-1, -1]
        }
        
        return [starts[0] + len - 1, starts[1] + len]
    }
}
```