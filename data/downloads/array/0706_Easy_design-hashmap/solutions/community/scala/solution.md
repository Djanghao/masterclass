# Beats 100% runtime and 100% memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/5199434/](https://leetcode.com/problems/design-hashmap/solutions/5199434/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using actual implementation of hashmap using buckets 
# Approach
<!-- Describe your approach to solving the problem. -->
Each bucket would have vector of tuple , where tuple represents key and value, on each operation find the bucket belongs to key and update the vector
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1) for put
O(n) for get
O(n) for remove

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)

# Code
```
class MyHashMap() {

  private val buckets: Array[Vector[(Int, Int)]] = Array.fill(1000)(Vector.empty)

  private def hash(key: Int) = key % buckets.length

  def put(key: Int, value: Int): Unit = {
    val bucket = hash(key)
    buckets(bucket) = (key, value) +: buckets(bucket)
  }

  def get(key: Int): Int = {
    val bucket = hash(key)
    buckets(bucket).find(_._1 == key).map(_._2).getOrElse(-1)
  }

  def remove(key: Int): Unit = {
    val bucket = hash(key)
    buckets(bucket) = buckets(bucket).filterNot(_._1 == key)
  }

}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * val obj = new MyHashMap()
 * obj.put(key,value)
 * val param_2 = obj.get(key)
 * obj.remove(key)
 */
```