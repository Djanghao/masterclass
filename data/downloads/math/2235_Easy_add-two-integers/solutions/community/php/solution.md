# ✅ Adding Two Integers in EVERY Language! (Scheme, Erlang, Elixir, PHP, etc.)

**Author:** ouckah
**Votes:** 4
**Link:** [https://leetcode.com/problems/add-two-integers/solutions/3381914/](https://leetcode.com/problems/add-two-integers/solutions/3381914/)

---

# Adding Two Integers in EVERY SINGLE LANGUAGE.
Fun little thing I did while I was bored. Only needed docurmentation for Erlang (I learned Scheme in CS 135).

# Code
## C++
```c++
class Solution {
public:
    int sum(int num1, int num2) {
        return num1 + num2;
    }
};
```
## Java
```java
class Solution {
    public int sum(int num1, int num2) {
        return num1 + num2;
    }
}
```
## Python
```python
class Solution(object):
    def sum(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        return num1 + num2
```
## Python3
```py3
class Solution:
    def sum(self, num1: int, num2: int) -> int:
        return num1 + num2
```
## C
```c
int sum(int num1, int num2){
    return num1 + num2;
}
```
## C# (Java Mimic)
```c#
public class Solution {
    public int Sum(int num1, int num2) {
        return num1 + num2;
    }
}
```
## JavaScript
```js
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1 + num2;
};
```
## Ruby
```ruby
# @param {Integer} num1
# @param {Integer} num2
# @return {Integer}
def sum(num1, num2)
    return num1 + num2;
end
```
## Swift
```swift
class Solution {
    func sum(_ num1: Int, _ num2: Int) -> Int {
        return num1 + num2;
    }
}
```
## Go
```go
func sum(num1 int, num2 int) int {
    return num1 + num2;
}
```
## Scala
```scala
object Solution {
    def sum(num1: Int, num2: Int): Int = {
        return num1 + num2;
    }
}
```
## Kotlin
```kotlin
class Solution {
    fun sum(num1: Int, num2: Int): Int {
        return num1 + num2;
    }
}
```
## Rust
```rust
impl Solution {
    pub fn sum(num1: i32, num2: i32) -> i32 {
        num1 + num2
    }
}
```
## PHP
```php
class Solution {

    /**
     * @param Integer $num1
     * @param Integer $num2
     * @return Integer
     */
    function sum($num1, $num2) {
        return $num1 + $num2;
    }
}
```
## TypeScript
```ts
function sum(num1: number, num2: number): number {
    return num1 + num2;
};
```
## Racket
```racket
(define/contract (sum num1 num2)
  (-> exact-integer? exact-integer? exact-integer?)
    (+ num1 num2)
  )
```
## Erlang
```erlang
-spec sum(Num1 :: integer(), Num2 :: integer()) -> integer().
sum(Num1, Num2) ->
    Num1 + Num2.
```
## Elixir
```elixir
defmodule Solution do
  @spec sum(num1 :: integer, num2 :: integer) :: integer
  def sum(num1, num2) do
    num1 + num2
  end
end
```
## Dart
```dart
class Solution {
  int sum(int num1, int num2) {
    return num1 + num2;
  }
}
```
### Have Fun!
This was brought to you by: Ouckah.