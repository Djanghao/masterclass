# ✅ Scala: O(1) space with two pointers (beats 97.37%)

**Author:** aaabramov
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3413536/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3413536/)

---

# Intuition
Find good explanation of this solution [here](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1092898/js-python-java-c-easy-o-1-extra-space-solution-w-visual-explanation/). I won't probably describe it better :)

# Complexity
- Time complexity:
$$O(m + n)$$, where $$m = len(A)$$, $$n = len(B)$$

- Space complexity:
$$O(1)$$

# Code
```scala
object Solution {
  def getIntersectionNode(headA: ListNode, headB: ListNode): ListNode = {
    var a = headA; var b = headB
    while (a != b){
      a = if (a == null) headB else a.next
      b = if (b == null) headA else b.next
    }
    a
  }
}
```