# [scala] Array[Boolean] and counter

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1863064/](https://leetcode.com/problems/design-bitset/solutions/1863064/)

---

```
class Bitset(_size: Int) {
  private var arr = new Array[Boolean](_size)
  private var flipped = Array.fill(_size)(true)
  private var ones = 0

  def fix(idx: Int) {
    if(!arr(idx)) {
      arr(idx) = true
      ones += 1
    }
    flipped(idx) = false
  }

  def unfix(idx: Int) {
    if(arr(idx)) {
      arr(idx) = false
      ones -= 1
    }
    flipped(idx) = true
  }

  def flip() {
    ones = _size - ones
    val other = arr
    arr = flipped
    flipped = other
  }

  def all(): Boolean = ones == _size

  def one(): Boolean = ones > 0

  def count(): Int = ones
  
  override def toString(): String = {
    val chars = arr.map(if(_) '1' else '0')
    String.valueOf(chars)
  }
}
```