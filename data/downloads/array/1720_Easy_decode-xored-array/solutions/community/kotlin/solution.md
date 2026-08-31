# My Solution

**Author:** cthoughtz
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/5525242/](https://leetcode.com/problems/decode-xored-array/solutions/5525242/)

---

```
class Solution {
    fun decode(encoded: IntArray, first: Int): IntArray {
        
        var decodeList = mutableListOf<Int>()
        var arr = mutableListOf<Int>()

        decodeList.add(first)
        arr.add(first)

        while(encoded.size >= decodeList.size) {
            for(i in encoded.indices) {
                decodeList.add(encoded[i].xor(arr[0]))
                arr[0] = decodeList.last()
            }
        }
        return decodeList.toIntArray()
    }
}
```