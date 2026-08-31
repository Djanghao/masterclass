# Python3 || 1 line, bit_count  || 98% / 57%

**Author:** Spaulding_
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846352/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846352/)

---

Here's the intuition:
- The number, *k*, of times a individual character is transformed in the string generation corresponds directly to the number of set bits in the binary representation of *k* - 1. (The interested reader will observe this  with few moments of scratch-paper work.)

```python3 []
class Solution:
    def kthCharacter(self, k: int) -> str:
        
       return ascii_lowercase[(k-1).bit_count()]
```
```cpp []
class Solution {
public:
    char kthCharacter(int k) {

        int position = std::bitset<32>(k - 1).count();

        return 'a' + position;
    }
};
```
```java []
class Solution {
    public char kthCharacter(int k) {

        int position = Integer.bitCount(k - 1);

        return (char) ('a' + position);
    }
}

```
[https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/submissions/1405723560/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/submissions/1405723560/)

I could be wrong, but I think that time complexity is *O*(log *N*) and space complexity is *O*(1), in which *N* ~ `k`.