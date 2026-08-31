# Kotlin | O(max(n, nodes)) time, O(maxNum) space | count + iterator  (974ms)

**Author:** tonycode88
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5747142/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5747142/)

---

# Intuition

- `nums[i]` from 1 to 10^5 - we can reduce the complexity of evaluation "should we remove this number" downto O(1)
- just keep `head` and `last` pointers for a new list, and carefully iterate throught original building answer

# Complexity
- Time complexity: $$O(n)$$ to iterate through `nums`, then throught list. Checking "should remove?" is O(1)

- Space complexity: $$O(maxNum)$$ to keep array for O(1) checking

# Code
```kotlin []
class Solution {

    fun modifiedList(nums: IntArray, head: ListNode): ListNode {
        val shouldRemove = BooleanArray(MAX_NUM+1)
        for (num in nums) shouldRemove[num] = true

        var first: ListNode? = null
        var last: ListNode? = null

        var current: ListNode? = head
        while (current != null) {
            if (!shouldRemove[current.`val`]) {
                val newNode = ListNode(current.`val`)
                if (first == null) {
                    first = newNode
                    last = first
                } else {
                    (last ?: error("last is null")).next = newNode
                    last = last.next
                }
            }
            current = current.next
        }

        return first ?: error("All items were removed")
    }


    companion object {
        private const val MAX_NUM = 100_000  // 10^5
    }

}

```