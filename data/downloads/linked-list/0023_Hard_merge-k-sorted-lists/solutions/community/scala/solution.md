# Scala solution with recursion

**Author:** fixablecar
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/1012940/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/1012940/)

---

As this problem is the extended version of Problem #21 Merge Two Sorted Lists, we can use the solution of #21 to answer this question.

1. Split the input into halves recursively until the array is of length <= 2.
2. Apply the mergeTwoLists function to it.

```
def mergeKLists(lists: Array[ListNode]): ListNode = lists.length match {
  case 0 => null
  case 1 => lists(0)
  case 2 => mergeTwoLists(lists(0), lists(1))
  case x => {
    val split = lists.splitAt(x / 2)
    mergeTwoLists(mergeKLists(split._1), mergeKLists(split._2))
  }
}
```