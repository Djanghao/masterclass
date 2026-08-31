# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/5178683/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/5178683/)

---

# Intuition
The problem is asking to return a random number that is not in the blacklist. The first thought that comes to mind is to use a random number generator to generate a number within the range and check if it\u2019s in the blacklist. If it is, then generate another number. However, this approach could potentially take a long time if the blacklist is large.


# Approach
A more efficient approach is to remap the blacklisted numbers within the range to the non-blacklisted numbers outside the range. We can create a dictionary where the keys are the blacklisted numbers and the values are the non-blacklisted numbers. When we generate a random number, we first check if it\u2019s in the dictionary. If it is, we return the corresponding value. If it\u2019s not, we return the number itself.

# Complexity
- Time complexity: The time complexity for the pick function is O(1) because we can look up the dictionary in constant time.

- Space complexity: The space complexity is O(B), where B is the length of the blacklist. This is because we need to store the blacklist in a set and also create a dictionary to store the mapping. In the worst case, the size of the dictionary is the same as the size of the blacklist.


# Code
```
class Solution {
    var map = [Int: Int]()
    var M: Int

    init(_ N: Int, _ blacklist: [Int]) {
        var blacklist = Set(blacklist)
        M = N - blacklist.count
        var j = M

        for b in blacklist where b < M {
            while blacklist.contains(j) { j += 1 }
            map[b] = j
            j += 1
        }
    }

    func pick() -> Int {
        let r = Int.random(in: 0..<M)
        return map[r] ?? r
    }
}

```