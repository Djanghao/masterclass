# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/5610613/](https://leetcode.com/problems/design-memory-allocator/solutions/5610613/)

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
class Allocator(_n: Int) {

    val arr = Array.fill(_n)(-1)
    def allocate(size: Int, mID: Int): Int = {
        if (size > _n) return -1
        def allocateHelper(startIndex: Int, count: Int): Int = {
            if (count == size) {
                (startIndex until startIndex + count).foreach(i => arr(i) = mID)
                startIndex
            } else if (startIndex + count >= _n) {
                -1
            } else if (arr(startIndex + count) == -1) {
                allocateHelper(startIndex, count + 1)
            } else {
                allocateHelper(startIndex + count + 1, 0)
            }
        }    
        allocateHelper(0, 0)
    }

    def free(mID: Int): Int = {
        val res = arr.count(_ == mID)
        arr.indices.foreach(i => if (arr(i) == mID) arr(i) = -1)
        res
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * val obj = new Allocator(n)
 * val param_1 = obj.allocate(size,mID)
 * val param_2 = obj.free(mID)
 */
```