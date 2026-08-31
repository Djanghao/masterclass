# Typical solution, like most people's

**Author:** Alexandr_Novikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4229805/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4229805/)

---


# Code
```
class Solution {
    func findArray(_ pref: [Int]) -> [Int] {
        var answer:[Int] = [pref[0]]

        if pref.count == 1{
            print(answer)
        } else{
            for i in 1..<pref.count{
                answer.append(pref[i] ^ pref[i-1])
            }
        }

        return (answer)
    }
}
```