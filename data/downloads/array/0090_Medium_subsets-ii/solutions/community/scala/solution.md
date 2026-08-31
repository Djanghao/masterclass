# Trivial 3 liner in Scala

**Author:** pathikritbhowmick
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/5103206/](https://leetcode.com/problems/subsets-ii/solutions/5103206/)

---


# Approach
Start with a `solution = Set(List.empty)` and for each new element `n` in `nums` - we can decide to either add to each list in `solution` or not i.e. `sets ++ sets.map(l => n :: l)` OR `sets.flatMap(l => List(l, n :: l))`

# Complexity
- Time complexity:
`O(n * 2^n)`

- Extra Space complexity:
`O(1)`

# Code
```
object Solution {
    def subsetsWithDup(nums: Array[Int]): List[List[Int]] =
        nums.sorted.foldLeft(Set(List.empty[Int])) {
            case (sets, n) => sets ++ sets.map(l => n :: l)
        }.toList
}
```