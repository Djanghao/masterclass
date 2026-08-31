# Swift solution

**Author:** vasiliyfedotov
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482661/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482661/)

---

# Approach
Please look the comments in code for explanation.

# Complexity
- Time complexity: O(max(queries.count, s.count))

# Code
```
class Solution {

    func diff(_ f2: [Int], _ f1: [Int]) -> [Int] {
        var diff = [Int](repeating: 0, count: 26)
        for i in 0..<26 {
            diff[i] = f2[i] - f1[i]
        }
        return diff
    }

    func isDiffZero(_ f2: [Int], _ f1: [Int]) -> Bool {
        var count = 0
        for i in 0..<26 {
            if f2[i] < 0 || f1[i] < 0 { return false }
            count += abs(f2[i] - f1[i])
        }
        return count == 0
    }

    func canMakePalindromeQueries(_ s: String, _ queries: [[Int]]) -> [Bool] {
        let chrs = [Character](s)

        let cnt = chrs.count
        let cnt2 = chrs.count/2

        /// divide string to two substrings of equal count/2 size, second part is reversed for easily processing
        let chrs0 = [Character](chrs[0..<cnt2])
        let chrs1 = [Character](chrs[cnt2...].reversed())
        
        /// chrs<0/1>Counts[i+1] - array of counters for chars in [0...i] substring in 0/1 part of origin string
        /// actually, this is a kind of PREFIX array, but for char counters.
        /// using it, we can calc char counters in range [x, y] using func diff(y+1, x) with O(1) complexity
        var chrs0Counts = [[Int]](repeating: [Int](repeating: 0, count: 26), count: 1)
        var chrs1Counts = [[Int]](repeating: [Int](repeating: 0, count: 26), count: 1)

        /// countOfMismatches[i+1] - count of mismatches between substrings chrs0[0...i] and chrs1[0...i]
        /// firstDiff - index of FIRST mismatch chrs0[i] != chrs0[i] in range [0...cnt2-1]
        /// lastDiff - index of LAST mismatch chrs0[i] != chrs0[i] in range [0...cnt2-1]
        var countOfMismatches = [Int](repeating: 0, count: cnt2 + 1), firstDiff = cnt2, lastDiff = -1

        for i in 0..<cnt2 {
            let mtch = chrs0[i] == chrs1[i]
            countOfMismatches[i+1] = countOfMismatches[i] + (mtch ? 0 : 1)
            if !mtch {
                firstDiff = min(firstDiff, i)
                lastDiff = max(lastDiff, i)
            }
        }

        for i in 1...cnt2 {
            var nxt0 = chrs0Counts[i-1]
            var nxt1 = chrs1Counts[i-1]

            nxt0[chrs0[i-1].asciiLetterIndex] += 1
            nxt1[chrs1[i-1].asciiLetterIndex] += 1

            chrs0Counts.append(nxt0)
            chrs1Counts.append(nxt1)
        }

        var res = [Bool](repeating: false, count: queries.count)

        for i in 0..<queries.count {

            /// actual indexes for ranges [l0...r0] in chrs0 and ranges [l1...r1] in chrs1
            let l0 = queries[i][0]
            let r0 = queries[i][1]
            let l1 = cnt - 1 - queries[i][3]
            let r1 = cnt - 1 - queries[i][2]

            if firstDiff < min(l0, l1) || lastDiff > max(r0, r1)  {
                /// difference between strings out of bounds of mixable ranges
                /// so, res[i] = false
                continue
            }

            var st0 = diff(chrs0Counts[r0+1], chrs0Counts[l0])
            var st1 = diff(chrs1Counts[r1+1], chrs1Counts[l1])

            if l1 - r0 > 0 || l0 - r1 > 0 {
                /// ranges [l0...r0] and [l1...r1] do not intersect

                if l1 - r0 > 1 && countOfMismatches[l1] - countOfMismatches[r0+1] > 0 {
                    /// there is a gap between end of [l0, r0] and beginning of [l1, r1], and this gap contains mismatch chrs0[x] != chrs1[x]
                    /// so, res[i] = false
                    continue
                }

                if l0 - r1 > 1 && countOfMismatches[l0] - countOfMismatches[r1+1] > 0 {
                    /// there is a gap between end of [l1, r1] and beginning of [l0, r0] , and this gap contains mismatch chrs0[x] != chrs1[x]
                    /// so, res[i] = false
                    continue
                }

                /// gap between [l0, r0] and [l1, r1] do not contain mismatches

                let st01 = diff(chrs1Counts[r0+1], chrs1Counts[l0])
                let st10 = diff(chrs0Counts[r1+1], chrs0Counts[l1])

                /// so, we need compare char counters between chrs0[l0, r0] and chrs1[l0, r0], AND chrs0[l1, r1] and chrs1[l1, r1]
                /// if both of ranges contains same counts of same chars, so intermixing can make them equal

                res[i] = isDiffZero(st0, st01) && isDiffZero(st1, st10)
                continue
            }

            /// if we are here, then ranges [l0...r0] and [l1...r1] DO intersect
            /// [isl, isr] is range of intersection
            let isl = max(l0, l1), isr = min(r0, r1)
            
            /// now, we need to substact disjoint ranges from corresponding range.
            ///  l0--------------------------r0
            ///              l1-----------------------r1
            ///  for example, from chrs0[l0,r0] counts we need substract chrs1[l0,l1)
            ///  and from chrs1[l1,r1] we need subsract chrs0(r0, r1]
            ///  if char counts of intersection[l1,r0] coincide, then result of query is TRUE,
            if l0 < isl {
                st0 = diff(st0, diff(chrs1Counts[isl], chrs1Counts[l0]))
            }
            if r0 > isr {
                st0 = diff(st0, diff(chrs1Counts[r0 + 1], chrs1Counts[isr + 1]))
            }

            if l1 < isl {
                st1 = diff(st1, diff(chrs0Counts[isl], chrs0Counts[l1]))
            }
            if r1 > isr {
                st1 = diff(st1, diff(chrs0Counts[r1 + 1], chrs0Counts[isr + 1]))
            }


            res[i] = isDiffZero(st0, st1)
        }

        return res
    }
}

extension Character {
    var asciiLetterIndex: Int { Int(asciiValue!)  - 97 }
}
```