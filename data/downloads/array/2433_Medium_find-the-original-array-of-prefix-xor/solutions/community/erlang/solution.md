# All Languages: Double XOR is Identity

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/3232897/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/3232897/)

---

# Intuition
Double XOR is an identity, i.e. `a XOR b XOR b = a`.

## Explanation 1.
`output[0] = 5 = `**`5`**
`output[1] = 2 ^ 5 = `**`7`**
`output[2] = 0 ^ 5 ^ 7 = `**`2`**
`output[3] = 3 ^ `**`5 ^ 7 ^ 2`**`= 3`
`output[4] = 1 ^ 5 ^ 7 ^ 2 ^ 3 = 2`

E.g. `output[3]` is equal to `pref[3]` and XOR of `output` elements from `0` to `2`.

## Explanation 2.
`output[0] = 5     = 5`
`output[1] = 2 ^ 5 = 7`
`output[2] = 0 ^ 2 = 2`
`output[3] = 3 ^ 0 = 3`
`output[4] = 1 ^ 3 = 2`

I.e. `output[i] = pref[i] ^ pref[i - 1]`, next output equal to XOR of current with previous.

# Approach
1) C++: Vector and `for` loop;
2) Java: List and `for` loop;
3) Python: List and `for` loop;
4) Python3: List and comprehension + `zip`.
5) C: Array and `for` loop;
6) C#: Array and `for` loop;
7) JavaScript: Array and `for` loop;
8) Ruby: Array and `for` loop;
9) Swift: Array and `for` loop;
10) Go: Slice and `for` loop;
11) Scala: List and `map` + `zip`;
12) Kotlin: List and `map` + `zip`;
13) Rust: Vector and `for` loop;
14) PHP: Array and `for` loop;
15) TypeScript: Array and `for` loop;
16) Racket: List and `map`;
17) Erlang: List and `map` + `zip`;
18) Elixir: List and `map` + `zip`;
19) Dart: List and `for` loop.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
## C++ - Go
```C++ []
class Solution {
public:
  vector<int> findArray(vector<int>& pref) {
    std::vector<int> res;
    int acc = 0;
    for (auto v: pref) {
      res.push_back(v ^ acc);
      acc = v;
    }
    return res; 
  }
};
```
```java []
class Solution {
  public int[] findArray(int[] pref) {
    List<Integer> res = new ArrayList<Integer>();
    int acc = 0;
    for (int i = 0; i < pref.length; i++) {
      res.add(pref[i] ^ acc);
      acc = pref[i];
    }
    return res.stream().mapToInt(i -> i).toArray();
  }
}
```
```python []
from functools import reduce
class Solution(object):
  def findArray(self, pref):
    """
    :type pref: List[int]
    :rtype: List[int]
    """

    res = []
    acc = 0
    for v in pref:
      res.append(v ^ acc)
      acc = v
    return res
```
```python3 []
class Solution:
  def findArray(self, pref: List[int]) -> List[int]:
    return [pref[0]] + [cur ^ prev for cur, prev in zip(pref[:-1], pref[1:])]
```
```c []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findArray(int* pref, int prefSize, int* returnSize){
  *returnSize = prefSize;
  int *res = malloc(prefSize * sizeof(*res));
  res[0] = pref[0];
  for (size_t i = 1; i < prefSize; i++) {
    res[i] = pref[i] ^ pref[i - 1];
  }
  return res;
}
```
```csharp []
public class Solution {
  public int[] FindArray(int[] pref) {
    int[] res = new int[pref.Length];
    res[0] = pref[0];
    for (int i = 1; i < pref.Length; i++) {
      res[i] = pref[i] ^ pref[i - 1];
    }
    return res;    
  }
}
```
```javascript []
/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  const res = [];
  res[0] = pref[0];
  for (var i = 1; i < pref.length; i++) {
    res[i] = pref[i] ^ pref[i - 1];
  }
  return res;    
}
```
```ruby []
# @param {Integer[]} pref
# @return {Integer[]}
def find_array(pref)
  res = Array.new
  res[0] = pref[0]
  for i in 1...pref.length 
    res[i] = pref[i] ^ pref[i - 1]
  end
  res
end
```
```swift []
class Solution {
  func findArray(_ pref: [Int]) -> [Int] {
    var res = [Int]()
    res.append( pref[0])
    for i in 1..<pref.count { 
      res.append(pref[i] ^ pref[i - 1])
    }
    return res    
  }
}
```
```golang []
func findArray(pref []int) []int {
    var res []int
    res = append(res, pref[0])
    for i,_ := range pref {
      if i == 0 {
        continue
      } 
      res = append(res, pref[i] ^ pref[i - 1])
    }
    return res  
}
```

## Scala - Dart
```scala []
object Solution {
  def findArray(pref: Array[Int]): Array[Int] = {
    val lst = pref.toList
    val xors = (lst.tail zip lst.dropRight(1))
      .map { case (x, y) => x ^ y }
    (pref(0)::xors).toArray
  }
}
```
```kotlin []
class Solution {
  fun findArray(pref: IntArray): IntArray {
    val lst = pref.toList()
    val xors = (lst.drop(1) zip lst.dropLast(1))
      .map { it.first xor it.second; }
    return (listOf(pref.first()) + xors).toIntArray()
  }
}
```
```rust []
impl Solution {
  pub fn find_array(pref: Vec<i32>) -> Vec<i32> {
    let mut res = vec![0; pref.len()];
    res[0] = pref[0];
    for i in 1..pref.len()  {
      res[i] = pref[i] ^ pref[i - 1];
    }
    return res;    
  }
}
```
```php []
class Solution {
  /**
  * @param Integer[] $pref
  * @return Integer[]
  */
  function findArray($pref) {
    $res = array_fill(0, count($pref), NULL);;
    $res[0] = $pref[0];
    for ($i = 0; $i < count($pref); $i++)  {
      $res[$i] = $pref[$i] ^ $pref[$i - 1];
    }
    return $res;    
  }
}
```
```typescript []
function findArray(pref: number[]): number[] {
  const res: number[] = [];
  res[0] = pref[0];
  for (let i: number = 1; i < pref.length; i++) {
    res[i] = pref[i] ^ pref[i - 1];
  }
  return res;
};
```
```racket []
(define/contract (find-array pref)
  (-> (listof exact-integer?) (listof exact-integer?))
   (let ([cur (drop-right pref 1)] 
         [prev (list-tail pref 1)])
   (cons (car pref) (map bitwise-xor cur prev))))
```
```Erlang []
-spec find_array(Pref :: [integer()]) -> [integer()].
find_array(Pref) ->
  [Ini | Prev] = Pref, 
  Cur = lists:droplast(Pref),
  Pairs = lists:zip(Cur, Prev),
  [Ini | lists:map(fun( {C, P}) -> C bxor P end, Pairs)].
```
```Elixir []
defmodule Solution do
  @spec find_array(pref :: [integer]) :: [integer]
  def find_array(pref) do
    [ini | prev] = pref
    cur = pref |> Enum.reverse() |> tl() |> Enum.reverse()
    pairs = Enum.zip(cur, prev)
    [ini | Enum.map(pairs, fn ({c, p} )-> Bitwise.bxor(c, p) end)]
  end
end
```
```Dart []
class Solution {
  List<int> findArray(List<int> pref) {
    List<int> res = List<int>.filled(pref.length, 0);
    res[0] = pref[0];
    var rng = new List<int>.generate(pref.length - 1, (i) => i + 1);
    for (var i in rng) {
      res[i] = pref[i] ^ pref[i - 1];
    }
    return res;
  }
}
```






