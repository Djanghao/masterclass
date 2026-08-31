# Except-ionally fast Python

**Author:** StefanPochmann
**Votes:** 872
**Link:** [https://leetcode.com/problems/linked-list-cycle/solutions/44494/](https://leetcode.com/problems/linked-list-cycle/solutions/44494/)

---

Took 88 ms and the "Accepted Solutions Runtime Distribution" doesn't show any faster Python submissions. The "trick" is to not check all the time whether we have reached the end but to handle it via an exception. ["Easier to ask for forgiveness than permission."](https://docs.python.org/3/glossary.html#term-eafp)

The algorithm is of course [Tortoise and hare](https://en.wikipedia.org/wiki/Cycle_detection#Tortoise_and_hare).

    def hasCycle(self, head):
        try:
            slow = head
            fast = head.next
            while slow is not fast:
                slow = slow.next
                fast = fast.next.next
            return True
        except:
            return False