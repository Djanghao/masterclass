# Kotlin O(1) time O(n) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5540772/](https://leetcode.com/problems/first-unique-number/solutions/5540772/)

---

# Code
```

class FirstUnique(nums: IntArray) { // O(n) space

    private val counter = HashMap<Int, Int>()
    private val list = LinkedList<Int>()

    // O(n) time
    init { 
        nums.forEach {
            counter[it] = (counter[it] ?: 0) + 1
            list.addLast(it)
        }
        cleanStart()
    }

    // O(1) time
    fun showFirstUnique(): Int = if (list.isEmpty()) -1 else list.first() 

    // O(1) time
    fun add(value: Int) {
        counter[value] = (counter[value] ?: 0) + 1
        list.addLast(value)
        cleanStart()
    }

    private fun cleanStart() {
        while (list.isNotEmpty() && counter[list.first()]!! > 1) {
            list.removeFirst()
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
```