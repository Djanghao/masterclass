# HashMap + Treeset, CQRS principle

**Author:** BrunoSzczuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/3623859/](https://leetcode.com/problems/design-a-number-container-system/solutions/3623859/)

---

# Intuition
This is a problem to be solved using two objects, one to keep the most updated list and one to store all the indexes changes of the number.

# Approach
The key point is when there`s comming a change in the updated list, so you have to maintain the find list
The TreeSet help up keeping the value we need in the first position.

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(n)

# Code
```
class NumberContainers() {

     val changeHashMap = HashMap<Int, Int>()
        val findHashMap = HashMap<Int, TreeSet<Int>>()

        fun change(index: Int, number: Int) {
            changeHashMap[index]?.let { oldNumber ->
                findHashMap[oldNumber]?.remove(index)
            }

            changeHashMap[index] = number
            findHashMap.computeIfAbsent(number) { TreeSet() }.add(index)
        }

        fun find(number: Int): Int {
            return findHashMap[number]?.firstOrNull() ?: -1
        }

        
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
```