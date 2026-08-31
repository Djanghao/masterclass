# Soln using List | Java | Kotlin | Hyder Nabi

**Author:** HyderNabi
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/4042076/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/4042076/)

---

# Java Code 
```
class RandomizedCollection() {
    private val multiSet : MutableList<Int> = mutableListOf()
    fun insert(`val`: Int): Boolean {
        if(multiSet.contains(`val`)) {
            multiSet.add(`val`)
            return false
        } else {
            multiSet.add(`val`)
            return true
        }
    }

    fun remove(`val`: Int): Boolean {
        return if(multiSet.contains(`val`)){
            multiSet.remove(`val`)
            true
        } else {
            false
        }
    }

    fun getRandom(): Int {
        val random = (Math.random() * multiSet.size).toInt()
        return multiSet[random]
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = RandomizedCollection()
 * var param_1 = obj.insert(`val`)
 * var param_2 = obj.remove(`val`)
 * var param_3 = obj.getRandom()
 */
```
# Kotlin
```
class RandomizedCollection() {
    private val multiSet : MutableList<Int> = mutableListOf()
    fun insert(`val`: Int): Boolean {
        if(multiSet.contains(`val`)) {
            multiSet.add(`val`)
            return false
        } else {
            multiSet.add(`val`)
            return true
        }
    }

    fun remove(`val`: Int): Boolean {
        return if(multiSet.contains(`val`)){
            multiSet.remove(`val`)
            true
        } else {
            false
        }
    }

    fun getRandom(): Int {
        val random = (Math.random() * multiSet.size).toInt()
        return multiSet[random]
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = RandomizedCollection()
 * var param_1 = obj.insert(`val`)
 * var param_2 = obj.remove(`val`)
 * var param_3 = obj.getRandom()
 */
```