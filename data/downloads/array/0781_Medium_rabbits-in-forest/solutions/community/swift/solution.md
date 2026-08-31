# Dict, group ( x + 1)

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/5276272/](https://leetcode.com/problems/rabbits-in-forest/solutions/5276272/)

---


```
class Solution {
    func numRabbits(_ answers: [Int]) -> Int {
        var dict = [Int: Int]()
        var ans = 0

        for rabbit in answers{
            dict[rabbit, default: 0] += 1
        }

        for (key, value) in dict{
            let group_size = key + 1
            let num_groups = (value + key) / group_size
            ans += num_groups * group_size
        }

        return ans
    }
}
```