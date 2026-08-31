# This is a trick question (Every language in Leetcode)

**Author:** GregWaters
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5486846/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5486846/)

---

# Intuition
I figured this out in about 30 seconds using my pattern-seeking primate brain

# Approach
By analyzing the kinds of tests failed, you can quickly find that it is exclusively numbers that end in '0'. By taking `num` modulo 10, we can extract this digit and compare it against zero. The only exception to this is 'zero' itself, which can be eliminated with a simple comparison.

This simplified my job down to the following pseudocode:

`f(x) -> (x % 10 != 0) OR (x == 0)`

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
The code itself is so trivial that I decided to write it in every language currently supported by Leetcode. I had to read the Erlang documentation for this bit.

## C
```C
bool isSameAfterReversals(unsigned num)
{
    return num % 10 || !num;
}
```

## C++
```C++
bool isSameAfterReversals(unsigned num)
{
    return num % 10 != 0 or num == 0;
}
```

## Python
```Python
class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        return num % 10 != 0 or num == 0
```

## Java
```Java
class Solution {
    public boolean isSameAfterReversals(int num) {
        return num % 10 != 0 || num == 0;
    }
}
```

## Javascript
```Javascript
let isSameAfterReversals = num  => num % 10 != 0 || num == 0
```

## Typescript
```Typescript
function isSameAfterReversals(num: number): boolean 
{
    return num % 10 != 0 || num == 0
}
```

## C#
```C#
public class Solution {
    public bool IsSameAfterReversals(int num){
        return num % 10 != 0 || num == 0;
    }
}
```

## Scala
```Scala
object Solution {
    def isSameAfterReversals(num: Int): Boolean = {
        return num % 10 != 0 || num == 0
    }
}
```

## Rust
```Rust
impl Solution {
    pub fn is_same_after_reversals(num: i32) -> bool {
        return num % 10 != 0 || num == 0;
    }
}
```

## Ruby
```Ruby
def is_same_after_reversals(num)
    return num % 10 != 0 || num == 0
end
```

## Go
```Go
func isSameAfterReversals(num int) bool {
    return num % 10 != 0 || num == 0;
}
```

## Swift
```Swift
class Solution {
    func isSameAfterReversals(_ num: Int) -> Bool {
        return num % 10 != 0 || num == 0
    }
}
```

## PHP
```PHP
class Solution {
    function isSameAfterReversals($num) {
        return $num % 10 != 0 || $num == 0;
    }
}
```

## Kotlin
```Kotlin
class Solution {
    fun isSameAfterReversals(num: Int): Boolean {
        return num % 10 != 0 || num == 0
    }
}
```

## Dart
```Dart
class Solution {
  bool isSameAfterReversals(int num) {
    return num % 10 != 0 || num == 0;
  }
}
```

## Erlang
```Erlang
is_same_after_reversals(Num) -> (Num rem 10 /= 0) or (Num == 0).
```

## Elixir
```Elixir
defmodule Solution do
    def is_same_after_reversals(num), do: (rem(num, 10) != 0 || num == 0)
end
```

## Racket
```Racket
(define/contract (is-same-after-reversals num) (-> exact-integer? boolean?) 
    (or (not (= (modulo num 10) 0)) (= num 0)))
```
