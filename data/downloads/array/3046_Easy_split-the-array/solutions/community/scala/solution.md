# Scala one-liner

**Author:** hariprasath1436
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4779109/](https://leetcode.com/problems/split-the-array/solutions/4779109/)

---

# Explanation
- nums.groupBy(identity): This groups the elements of the array nums based on their identity, effectively creating a map where the keys are the distinct elements of nums and the values are arrays containing occurrences of those elements.

- .mapValues(_.length): For each group (value) in the map, this maps it to its length, effectively giving the count of occurrences of each distinct element in nums.

- .values: This extracts the values (counts) from the map.

- .forall(_ < 3): This checks whether all the counts in the values satisfy the condition that they are less than 3. The forall method returns true if all elements in the collection satisfy the specified predicate (in this case, being less than 3), and false otherwise.

# Code
```
object Solution {
    def isPossibleToSplit(nums: Array[Int]): Boolean = {
     nums.groupBy(identity).mapValues(_.length).values.forall( _ < 3)

    }
}
```