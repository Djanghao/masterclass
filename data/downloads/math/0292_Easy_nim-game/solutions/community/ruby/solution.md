# Easy solution in every possible language😂 with easy explanation (including Racket, Erlang, Elixir)

**Author:** arayi
**Votes:** 4
**Link:** [https://leetcode.com/problems/nim-game/solutions/3443232/](https://leetcode.com/problems/nim-game/solutions/3443232/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
if n%4 is not 0 we can take n%4 stones from pile and make n%4 be equal to 0. Watever the other player does n%4 will not be 0 again so we can repeat until we get 0 (As 0%4 = 0).
if n%4 is 0 then watever we do on the next step n%4 is not going to be 0. And the other player can "start" the game as described above and win.
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
Please upvote if you like this)
```python3 []
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n%4
```
```cpp []
class Solution {
public:
    bool canWinNim(int n) {
        return n%4;
    }
};
``` 
```python []
    class Solution(object):
    def canWinNim(self, n):
        """
        :type n: int
        :rtype: bool
        """
        return n%4
```
```java []
class Solution {
    public boolean canWinNim(int n) {
        return n%4>0;
    }
}
```
```c []
bool canWinNim(int n){
    return n%4;
}
```
```csharp []
public class Solution {
    public bool CanWinNim(int n) {
        return n%4>0;
    }
}
```
```javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n%4
};
```
```ruby []
# @param {Integer} n
# @return {Boolean}
def can_win_nim(n)
    return n%4>0
end
```
```swift []
class Solution {
    func canWinNim(_ n: Int) -> Bool {
        return n%4>0;
    }
}
```
$\\space$
```Go []
func canWinNim(n int) bool {
    return n % 4>0;
}
```
```scala []
object Solution {
    def canWinNim(n: Int): Boolean = {
        return n%4>0;
    }
}
```
```kotlin []
class Solution {
    fun canWinNim(n: Int): Boolean {
        return n%4>0;
    }
}
```
```rust []
impl Solution {
    pub fn can_win_nim(n: i32) -> bool {
        return n%4>0;
    }
}
```
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function canWinNim($n) {
        return $n%4>0;
    }
}
```
```typescript []
function canWinNim(n: number): boolean {
    return n%4>0;
};
```
```racket []
(define/contract (can-win-nim n)
  (-> exact-integer? boolean?)
    (cond [(> (modulo n 4) 0) true]
        [else false])
  )
```
```Erlang []
-spec can_win_nim(N :: integer()) -> boolean().
can_win_nim(N) ->
  N rem 4 > 0.
```
```Elixir []
defmodule Solution do
  @spec can_win_nim(n :: integer) :: boolean
  def can_win_nim(n) do
    rem(n,4)>0
  end
end
```
```Dart []
class Solution {
  bool canWinNim(int n) {
    return n%4>0;
  }
}
```





