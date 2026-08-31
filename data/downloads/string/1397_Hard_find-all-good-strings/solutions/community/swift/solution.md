# [swift]DP

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/2222526/](https://leetcode.com/problems/find-all-good-strings/solutions/2222526/)

---

```
// https://leetcode.com/problems/find-all-good-strings/
class Solution {
    //\u7528\u4E8E\u6570\u4F4DDP
    private let lowercases = [Character]("abcdefghijklmnopqrstuvwxyz")
    private var charToIndex = [Character:Int]()
    private let MOD = 1_000_000_007

    // evil \u76F8\u5173\u4FE1\u606F
    private var M = -1
    private var evilPreffixes = [String]()
    private var evilChars = [Character]()
    private var charToLength = [Character:[Int]]()


    init() {
        for ch in lowercases {
            let idx = Int(ch.asciiValue! - 97)
            charToIndex[ch] = idx
        }
    }
    func findGoodStrings(_ n: Int, _ s1: String, _ s2: String, _ evil: String) -> Int {
        guard s1 <= s2 else {
            return 0
        }
        guard s1 < s2 else {
            return s1.contains(evil) ? 0 : 1
        }
        caculateEvilInfos(of: evil)
        return (helper(s2, n, evil) - helper(s1, n, evil) + MOD + (s1.contains(evil) ? 0 : 1)) % MOD
    }

    private func caculateEvilInfos(of evil: String) {
        self.M = evil.count
        self.evilPreffixes = (0...M).map ({ String(evil.prefix($0))})
        self.evilChars = [Character](evil)
        for i in 0..<M {
            charToLength[evilChars[i],default: []].append(i + 1)
        }
    }



    private func getMatchedLength(_ str: String) -> Int {

        let last = str.last!

        guard let lengths = charToLength[last] else {return 0}

        var j = lengths.count - 1
        while j >= 0 {
            if str.hasSuffix(evilPreffixes[lengths[j]]) {
                break
            }
            j -= 1
        }
        return j == -1 ? 0 : lengths[j]
    }



    private func helper(_ upperBound: String, _ n: Int, _ evil:String) -> Int {

        let upperBoundPreffixes = (0...n).map { String(upperBound.prefix($0))}
        let upperBoundChars = [Character](upperBound)
        let N = upperBound.count

        var memo = [[[Int]]](repeating: [[Int]](repeating: [Int](repeating: -1, count: 2), count: M), count: N)

        func dfs(_ idx: Int,_ pre: String, _ matchedLength: Int, _ isLessThan: Bool) -> Int {
            guard idx < n else {
                return 1
            }
            guard -1 == memo[idx][matchedLength][isLessThan ? 1 : 0] else {
                return memo[idx][matchedLength][isLessThan ? 1 : 0]
            }

            var ans = 0

            let rightLimit = isLessThan ? 25 : charToIndex[upperBoundChars[idx]]!

            for j in 0...rightLimit {
                let s = pre + "\\(lowercases[j])"
                guard isLessThan || s <= upperBoundPreffixes[s.count] else {
                    continue
                }
                // let l = lowercases[j] == evilChars[matchedLength] ? (matchedLength + 1) : getMatchedLength(s)
                let l = getMatchedLength(s)
                guard l != M else {
                    continue
                }
                ans += dfs(idx + 1, s, l, isLessThan || s < upperBoundPreffixes[s.count] )
                ans %= MOD
            }
            memo[idx][matchedLength][isLessThan ? 1 : 0]  = ans
            return ans
        }
        return dfs(0,"", 0,false)
    }
}
```