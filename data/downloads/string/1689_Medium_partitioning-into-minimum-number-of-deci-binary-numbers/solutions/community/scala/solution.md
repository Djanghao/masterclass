# Scala | 1 Liner | 3 Approaches | 100% faster | 100% less memory

**Author:** soumensaha
**Votes:** 2
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2204589/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2204589/)

---

**Approach 1**
```
object Solution {
  def minPartitions(n: String): Int = n.max - '0'
}

//Runtime: 1034 ms, faster than 16.67% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
//Memory Usage: 83.7 MB, less than 66.67% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
```

**Approach 2**
```
object Solution {
  def minPartitions(n: String): Int = ('9'.toInt to '0'.toInt by -1).find(n.contains(_)).get - '0'
}

//Runtime: 931 ms, faster than 33.33% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
//Memory Usage: 83.5 MB, less than 66.67% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
```

**Approach 3**
Tailrec with greedy approach for max (9)
```
object Solution {
  def minPartitions(n: String): Int = {
    @scala.annotation.tailrec
    def helper(i: Int = 0, max: Int = 0): Int = if (i == n.length || max == 9) max - '0' else helper(i + 1, max max n(i))

    helper()
  }
}

//Runtime: 580 ms, faster than 100.00% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
//Memory Usage: 53.2 MB, less than 100.00% of Scala online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
```