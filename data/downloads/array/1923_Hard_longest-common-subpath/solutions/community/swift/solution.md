# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/5397670/](https://leetcode.com/problems/longest-common-subpath/solutions/5397670/)

---

```
class Solution {
    func longestCommonSubpath(_ n: Int, _ paths: [[Int]]) -> Int {
        let paths = paths.sorted { $0.count < $1.count }
        
        func checkIfExists(_ subpathLength: Int) -> Bool {
            guard subpathLength > 0 else { return true }

            func buildHashes(_ pathIndex: Int) -> [Int: [Int]] {
                let base = 26
                let mod = 1_000_000_007
                var hashes = [Int: [Int]]()
                var cur = paths[pathIndex][0]
                var power = 1

                for i in 1..<subpathLength {
                    power = (power * base) % mod
                    cur = (cur * base + paths[pathIndex][i]) % mod
                }
                hashes[cur] = [0]
                
                for i in 1..<paths[pathIndex].count - subpathLength + 1 {
                    cur = (cur - power * paths[pathIndex][i - 1]) % mod
                    cur = (cur * base + paths[pathIndex][i + subpathLength - 1]) % mod
                    cur = (mod + cur) % mod
                    hashes[cur, default: []].append(i)
                }
                return hashes
            }

            var subpathsHashes = buildHashes(0)

            for pathIndex in 1..<paths.count {
                guard !subpathsHashes.isEmpty else { break }

                let pathHashes = buildHashes(pathIndex)
                let sharedHashes = subpathsHashes.keys.filter { pathHashes.keys.contains($0) }
                var newSubpathHashes = [Int: [Int]]()

                for hash in sharedHashes {
                    var subpaths = subpathsHashes[hash]!
                    for subpath in subpaths {
                        var contains = false
                        for pathSubpath in pathHashes[hash]! {
                            guard !contains else { break }
                            var equal = true
                            for iterator in 0..<subpathLength
                                where paths[pathIndex][pathSubpath + iterator] != paths[0][subpath + iterator] {
                                    equal = false
                                    break
                                }
                            guard !equal else {
                                contains = true
                                break
                            }
                        }
                        guard !contains else {
                            newSubpathHashes[hash, default: []].append(subpath)
                            break
                        }
                    }
                }

                subpathsHashes = newSubpathHashes
            }

            return !subpathsHashes.isEmpty
        }

        var l = 0
        var r = paths[0].count

        while l <= r {
            let m = (l + r) / 2
            if checkIfExists(m) { l = m + 1 }
            else { r = m - 1 }
        }

        return r
    }
}
```