# In Scala

**Author:** nader-gh
**Votes:** 1
**Link:** [https://leetcode.com/problems/gray-code/solutions/2825743/](https://leetcode.com/problems/gray-code/solutions/2825743/)

---

# Approach
RBC(n) = n XOR (n/2)

# Code
```
object Solution {  
  def grayCode(n: Int): List[Int] = 
    Iterator.from(0).map(d => d ^ (d >> 1)).take(1 << n).toList
}

```