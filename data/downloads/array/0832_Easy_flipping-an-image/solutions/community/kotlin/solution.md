# Kotlin style simple one-line

**Author:** pentiux1
**Votes:** 3
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/1280790/](https://leetcode.com/problems/flipping-an-image/solutions/1280790/)

---

```
fun flipAndInvertImage(image: Array<IntArray>) = 
	image.map{ it.map{ i -> if( i == 1) 0 else 1 }.reversed()}
```