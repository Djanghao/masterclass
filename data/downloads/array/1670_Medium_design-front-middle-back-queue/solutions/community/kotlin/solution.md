# Kotlin | Easy and Short Solution using Deques

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/5428439/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/5428439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Adding something at the front and the back is easy while using a Deque. Since in this task it is a requirement to be able to insert in the middle, two Deques are neede.

# Approach
<!-- Describe your approach to solving the problem. -->
First create two Deques. To be able to always insert in the middle both Deques need to be balanced. Both Deques are balanced if the difference of size of both Deques doesn't exceed 1. Since it is defined that the middle, in case that there are odd numbers of elements inside, is the left element of the theorectical middle, the size of the first Deque can't exceed the second Deque. 

Balancing both Deques can be easily done by shifting the elements to each other. After every operation it is needed to rebalance the Deques. There are no elements in the datastructure if the sum of the sizes of both Deques is equal to 0 and a -1 is returned.

There are some edge cases that need to be solved. If there is only one element popping the front means popping the front of the second deque (There are no elements in the first Deque since the requirement is that the second Deque is always bigger.) Popping the last element isn't an edge case, since if there are element presents, there is always at least 1 element in the second Deque.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class FrontMiddleBackQueue() {
    val deq1:ArrayDeque<Int> = ArrayDeque()
    val deq2:ArrayDeque<Int> = ArrayDeque()

    fun balanceDeques(){
        if(deq2.size - 1 > deq1.size){
            deq1.addLast(deq2.first())
            deq2.removeFirst()
        }

        if(deq1.size > deq2.size){
            deq2.addFirst(deq1.last())
            deq1.removeLast()
        }
    }

    fun pushFront(`val`: Int) {
        deq1.addFirst(`val`)

        balanceDeques()
    }

    fun pushMiddle(`val`: Int) {
        deq1.addLast(`val`)

        balanceDeques()
    }

    fun pushBack(`val`: Int) {
        deq2.addLast(`val`)

        balanceDeques()
    }

    fun popFront(): Int {
        if(deq1.size + deq2.size == 0)
            return -1

        if(deq1.size == 0)
            return deq2.first().also{ deq2.removeFirst() }

        return deq1.first().also{ deq1.removeFirst(); balanceDeques() }
    }

    fun popMiddle(): Int {
        if(deq1.size + deq2.size == 0)
            return -1

        if(deq1.size == deq2.size)
            return deq1.last().also{ deq1.removeLast() }

        return deq2.first().also{ deq2.removeFirst() }
    }

    fun popBack(): Int {
        if(deq1.size + deq2.size == 0)
            return -1

        return deq2.last().also{ deq2.removeLast(); balanceDeques() }
    }

}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = FrontMiddleBackQueue()
 * obj.pushFront(`val`)
 * obj.pushMiddle(`val`)
 * obj.pushBack(`val`)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
```