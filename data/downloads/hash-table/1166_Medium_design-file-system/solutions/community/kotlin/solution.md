# Kotlin Hashmap

**Author:** Karim_Ibrahim
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/3937693/](https://leetcode.com/problems/design-file-system/solutions/3937693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FileSystem() {

    val map = mutableMapOf<String, Int>()

    fun createPath(path: String, value: Int): Boolean {

        if(map.contains(path)) {
            return false
        }

        val parent = path.substringBeforeLast('/')
        if(!parent.isEmpty() && !map.contains(parent)) {
            return false
        }

        map[path] = value
        return true
    }

    fun get(path: String): Int {
        return map[path] ?: -1
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
```