# Straight forward approach + IntArray

**Author:** klukwist
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/3653607/](https://leetcode.com/problems/design-phone-directory/solutions/3653607/)

---

# Approach
Straight forward approach. Use Array for storing numbers.

# Complexity
- Time complexity:
Check and release O(1)
Get O(n)

- Space complexity: 
O(n)

# Code
```
class PhoneDirectory(maxNumbers: Int) {
    
    private val numbers = IntArray(maxNumbers)

    fun get(): Int {
        for (i in numbers.indices) {
            if (numbers[i] == 0) {
                numbers[i] = 1
                return i
            }
        }
        return -1
    }

    fun check(number: Int): Boolean {
        return numbers[number]==0
    }

    fun release(number: Int) {
        numbers[number] = 0
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
```