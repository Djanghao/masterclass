# First attempt at Leetcode after years, using Scala

**Author:** Thanakrit-Anutrakulchai
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/4919582/](https://leetcode.com/problems/merge-similar-items/solutions/4919582/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Interleave the arrays, combining pairs with same values.
# Approach
<!-- Describe your approach to solving the problem. -->
A variant of merge from the mergesort algorithm is used to interleave two sorted (by values) arrays. When values match, weights are summed.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn), mostly from the sorts.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n), for (presumably) the sorts, and also the accumulation list returned.
# Code
```
import scala.collection.*

object Solution {
    def mergeSimilarItems(items1: Array[Array[Int]], items2: Array[Array[Int]]): List[List[Int]] = {
        val accum : List[List[Int]] = Nil;
        val sorted1 = items1.sortBy(p => p(0));
        val sorted2 = items2.sortBy(p => p(0));
        return mergeAccum(sorted1, sorted2, items1.length-1, items2.length-1, accum);
    }

    def mergeAccum(items1 : Array[Array[Int]], items2 : Array[Array[Int]], i : Int, j : Int, 
                   accum : List[List[Int]]) : List[List[Int]] = {
        if (i < 0) {
            return items2.slice(0, j+1).toList.map(_.toList) ++: accum;
        } else if (j < 0) {
            return items1.slice(0, i+1).toList.map(_.toList) ++: accum;
        } else if (items1(i)(0) > items2(j)(0)) {
            val next : List[List[Int]] = items1(i).toList +: accum;
            return mergeAccum(items1, items2, i-1, j, next);
        } else if (items1(i)(0) == items2(j)(0)) {
            val arr = List(items1(i)(0), items1(i)(1) + items2(j)(1));
            val next : List[List[Int]] = arr +: accum;
            return mergeAccum(items1, items2, i-1, j-1, next);
        } else {
            val next : List[List[Int]] = items2(j).toList +: accum;
            return mergeAccum(items1, items2, i, j-1, next);
        }
    }
}
```