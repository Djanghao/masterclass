# Swift Solution - READABILITY > PERFORMANCE (92%)

**Author:** rhenz
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/869907/](https://leetcode.com/problems/distribute-candies-to-people/solutions/869907/)

---

I would prefer my solution for readability than those weird modulo formula. It's dumb in my opinion to use the solution. Not everyone knows that.

```
class Solution {
    func distributeCandies(_ candies: Int, _ num_people: Int) -> [Int] {
        
        var result: [Int] = Array(repeating: 0, count: num_people)
        var candies = candies
        var currentIndex = 0
        var currentGive = 1
        
        while candies > 0 {
            if candies > currentGive {
                result[currentIndex] += currentGive
                candies -= currentGive
                currentGive += 1
            } else {
                result[currentIndex] += candies
                candies = 0
            }
            currentIndex = currentIndex < num_people - 1 ? currentIndex + 1 : 0
        }
        return result
    }
}
```