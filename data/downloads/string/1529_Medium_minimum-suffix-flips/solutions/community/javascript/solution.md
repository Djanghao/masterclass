# Greedy with explanation (c++/ Python/ JavaScript/ Java)

**Author:** Gh05t
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/1719625/](https://leetcode.com/problems/minimum-suffix-flips/solutions/1719625/)

---

Even though the operation is given from right to left, it's better to traverse left to right.
Initially all bits are 0, so state is false, and we just check if current bit matches the bit in the output.
If it doesn't, just update flips and change the configuration, even flips will mean 0s, and odd flips means 1s.
1-1 = 0 and 0 - 0 = 0, anything else means, we must flip.
E.g. "00000" -> "10111"
"00000"
```  ^```
First bit is a no match, so flip:
"11111"
``` `^```
Now second bit is a no match, so flip,
"10000"
```  `   ^```
Now third bit is a no match, you guessed it flip,
"10111"

And the desired output state is reached.

C++
```cpp
int flips = 0;
for(const auto &bit: target) if(flips%2 - (bit-'0') != 0) flips++;
return flips;
```
Python
```py
def minFlips(self, target: str) -> int:
    flips = 0
    for bit in target:
        if (ord(bit) - ord('0')) - flips%2 != 0:
            flips += 1
    return flips
```
JavaScript
```js
let flips = 0;
[...target].forEach((bit) => {
	// bit.charCodeAt(0) - '0'.charCodeAt(0) - flips%2 != 0
    if((bit == '1' && flips%2 === 0) || (bit == '0' && flips%2 === 1)) {
        flips++
   }
})
return flips
```
Java
```
public int minFlips(String target) {
    int flips = 0;
    for(char bit: target.toCharArray()) {
        if((bit - '0') - flips%2 != 0) {
            flips += 1;
        }
    }
    return flips;
}
```