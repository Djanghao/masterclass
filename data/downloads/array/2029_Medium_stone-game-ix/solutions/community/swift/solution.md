# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/5869135/](https://leetcode.com/problems/stone-game-ix/solutions/5869135/)

---

```
class Solution {
    func stoneGameIX(_ stones: [Int]) -> Bool {
        
        let counts = stones.reduce(into: [0, 0, 0]) { $0[$1 % 3] += 1 }

        guard counts[1] + counts[2] > 0 else { return false }

        func play(_ start: Int) -> Bool {
            var counts = counts
            var res: Int

            if start == 1 {
                if counts[1] == 0 { return false }
                res = 1
                counts[1] -= 1
            }
            else {
                if counts[2] == 0 { return false }
                res = 2
                counts[2] -= 1
            }

            for i in 0..<counts[1] + counts[2] {

                if res == 1 {
                    if counts[1] == 0 {
                        return (i + counts[0]) % 2 == 0
                    }
                    else {
                        counts[1] -= 1
                        res = 2
                    }
                }
                else {
                    if counts[2] == 0 {
                        return (i + counts[0]) % 2 == 0
                    }
                    else {
                        counts[2] -= 1
                        res = 1
                    }
                }
            }

            return false
        }

        return play(1) || play(2)
    }
}
```