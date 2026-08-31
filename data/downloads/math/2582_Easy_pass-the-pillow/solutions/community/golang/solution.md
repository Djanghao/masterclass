# [Math O(1) Tutorial] Pass the Pillow

**Author:** never_get_piped
**Votes:** 71
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5424193/](https://leetcode.com/problems/pass-the-pillow/solutions/5424193/)

---

**Topic** :  Math

**You do not need to know calculus to code !**

___

## Solution

This problem can be solved in constant time, O(1), through mathematical insight and a few key observations.

Let's take an example with `n = 5` to observe how the sequence unfolds:
```
1 2 3 4 5 4 3 2 1 2 3 4 5 4 3 2 ... 
```

We can partition our numbers into chunks of size `n - 1`. For `n = 5`, here is how our partitioning looks:
```
1 2 3 4 | 5 4 3 2 | 1 2 3 4 | 5 4 3 2 | 1 2 3 4 | ...
```

The **odd-th** chunk starts with number `1`, while the **even-th** chunk starts with number `n`.

We use `time / (n - 1)` to calculate the number of chunks, and from there, we determine the starting number of the next chunk. Once we determine the starting number, we add the remaining number (module) from that starting point.



<br/>

```c++ []
class Solution {
public:
    int passThePillow(int n, int time) {
        int chunks = time / (n - 1);
        return chunks % 2 == 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
    }
};
```
```java []
class Solution {
    public int passThePillow(int n, int time) {
        int chunks = time / (n - 1);
        return chunks % 2 == 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
    }
}
```
```python []
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        chunks = time // (n - 1)
        return (time % (n - 1) + 1) if chunks % 2 == 0 else (n - time % (n - 1))
```
```Go []
func passThePillow(n int, time int) int {
    chunks := time / (n - 1)
	if chunks % 2 == 0 {
		return (time % (n - 1)) + 1
	} else {
		return n - (time % (n - 1))
	}
}
```
```PHP []
class Solution {

    /**
     * @param Integer $n
     * @param Integer $time
     * @return Integer
     */
    function passThePillow($n, $time) {
        $chunks = $time / ($n - 1);
        return $chunks % 2 == 0 ? ($time % ($n - 1) + 1) : ($n - $time % ($n - 1));
    }
}
```
```javascript []
var passThePillow = function(n, time) {
    let chunks = Math.floor(time / (n - 1));
    return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
};
```

**Complexity**:
* Time Complexity : `O(1)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**