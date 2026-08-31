# O(1) | 0 - ms beats 100 % | Java | Python | Go | C++ | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5769018/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5769018/)

---


### Code 1



```java []
public class Solution {
    public int minBitFlips(int start, int goal) {
        return Integer.bitCount(start ^ goal);
    }
}

```


```cpp []
class Solution {
public:
    int minBitFlips(int start, int goal) {
        return __builtin_popcount(start ^ goal);
    }
};

```





```python []
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        return bin(start ^ goal).count('1')

```




```go []
func minBitFlips(start int, goal int) int {
    return bits.OnesCount(uint(start ^ goal))
}

```




```rust []
impl Solution {
    pub fn min_bit_flips(start: i32, goal: i32) -> i32 {
        (start ^ goal).count_ones() as i32
    }
}

```




```javascript []
var minBitFlips = function(start, goal) {
    return (start ^ goal).toString(2).split('1').length - 1;
};

```

### Code 2

```Java []
class Solution {
    public int minBitFlips(int start, int goal) {
        int flipCount = 0;
        int mask = 1;
        
        for (int i = 0; i < 32; i++) {  
            boolean startBit = (start & mask) != 0;
            boolean goalBit = (goal & mask) != 0;
            
            if (startBit != goalBit) {
                flipCount++;
            }
            
            mask <<= 1;
        }
        
        return flipCount;
    }
}
```
```C++ []
class Solution {
public:
    int minBitFlips(int start, int goal) {
        int flipCount = 0;
        unsigned int mask = 1;
        
        for (int i = 0; i < 32; i++) {
            bool startBit = (start & mask) != 0;
            bool goalBit = (goal & mask) != 0;
            
            if (startBit != goalBit) {
                flipCount++;
            }
            
            mask <<= 1;
        }
        
        return flipCount;
    }
};
```
```Python []
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        flip_count = 0
        mask = 1
        
        for _ in range(32):  # Assuming 32-bit integers
            start_bit = bool(start & mask)
            goal_bit = bool(goal & mask)
            
            if start_bit != goal_bit:
                flip_count += 1
            
            mask <<= 1
        
        return flip_count
```
```Go []
func minBitFlips(start int, goal int) int {
    flipCount := 0
    mask := 1

    for i := 0; i < 32; i++ {
        startBit := (start & mask) != 0
        goalBit := (goal & mask) != 0

        if startBit != goalBit {
            flipCount++
        }

        mask <<= 1
    }

    return flipCount
}
```
```Rust []
impl Solution {
    pub fn min_bit_flips(start: i32, goal: i32) -> i32 {
        let mut flip_count = 0;
        let mut mask: u32 = 1;
        
        for _ in 0..32 {
            let start_bit = (start & (mask as i32)) != 0;
            let goal_bit = (goal & (mask as i32)) != 0;
            
            if start_bit != goal_bit {
                flip_count += 1;
            }
            
            mask <<= 1;
        }
        
        flip_count
    }
}
```
```JavaScript []
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let flipCount = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i++) {
        const startBit = (start & mask) !== 0;
        const goalBit = (goal & mask) !== 0;
        
        if (startBit !== goalBit) {
            flipCount++;
        }
        
        mask <<= 1;
    }
    
    return flipCount;
};
```