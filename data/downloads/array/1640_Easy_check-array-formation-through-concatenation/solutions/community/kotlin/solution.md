# [Kotlin] Simple Traversal

**Author:** parassidhu
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918505/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918505/)

---

I am updating my solution with the help of @pgmreddy, @binlei and [this](https://leetcode.com/problems/check-array-formation-through-concatenation/discuss/918408/python-5-lines-hashmap/).

**Idea:** 
- We traverse over `pieces` and map the first element of each inner array to the array itself.
- We then create another array of same size as `arr` and would fill it with data in next step
- We now traverse over `arr` and find the element in our map. If we find it, we put the whole array to our result array
- In the end we match if our `result` array has the same contents as `arr`


**Example:**
Let's take an example:
`arr = [91,4,64,78]` and `pieces = [[78],[4,64],[91]]`

Step 1 would produce a map like this:
78 -> [78]
4 -> [4, 64]
91 -> [91]

Step 2: We create array of size 4: `[0, 0, 0 ,0]`

Step 3: Traversing `arr`:
- Find 91 in map. Found. `result` -> `[91, 0, 0, 0]`
- Find 4 in the map. Found. `result` -> `[91, 4, 64, 0]`
- Find 64 in the map. Not Found. `result` -> `[91, 4, 64, 0]`
- Find 78 in the map. Found. `result` -> `[91, 4, 64, 78]`

Since `arr == result` content-wise, we return true. To test another case, try to make `[4, 64]` as `[64, 4]` in the above example and check.

```
fun canFormArray(arr: IntArray, pieces: Array<IntArray>): Boolean {
        val map = hashMapOf<Int, IntArray>()
    
        for (piece in pieces) {
            map[piece[0]] = piece // Mapping first element to inner array
        }
    
        val result = IntArray(arr.size)
        var i = 0
    
        for (num in arr) {
            if (map.containsKey(num)) { // Found the element. Now we'll add all its inner array's elements to result array
                for (p in map[num]!!) {
                    result[i++] = p
                }
            }
        }
    
        return arr.contentEquals(result)
    }
```