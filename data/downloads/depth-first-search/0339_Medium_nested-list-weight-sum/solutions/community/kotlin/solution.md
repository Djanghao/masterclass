# So clean.

**Author:** kimsuktae
**Votes:** 1
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/5022104/](https://leetcode.com/problems/nested-list-weight-sum/solutions/5022104/)

---

# Code
```
class Solution {
    //[1] => 1
    //[[1]] => 2
    //[[1, 1]] => 4
    //[[[1]]] => 3
    //[[1, 0]] => 2
    //[[1, 1], 2, [1, 1]] => 10
    //[1, [4, [6]]] => 27
    fun depthSum(nestedList: List<NestedInteger>): Int {
        val sum = nestedList.fold(0) { acc, nestedInteger ->
            acc + nestedInteger.sum()
        }

        return sum
    }
}

fun NestedInteger.sum(depth: Int = 1): Int {
    if (this.isInteger()) {
        return depth * this.getInteger()!!
    }

    return this.getList()?.fold(0) { acc, nestedInteger ->
        acc + nestedInteger.sum(depth = depth + 1)
    }!!
}


```