# Very easy solution using an array, beats 100%

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3577977/](https://leetcode.com/problems/design-hashset/solutions/3577977/)

---



# Approach
Very easy solution using an array, beats 100%. We just keep an array of the maximum possible size and mark into it if we have the element or not. 

That's all :)

# Code
```
class MyHashSet() {

  private val arr = new Array[Byte](1000001)

  def add(key: Int) {
    
    arr(key) = 1
  }

  def remove(key: Int) {

    arr(key) = 0
  }

  def contains(key: Int): Boolean = {

    arr(key) == 1
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```