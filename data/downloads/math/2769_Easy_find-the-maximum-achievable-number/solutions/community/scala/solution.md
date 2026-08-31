# Easy Simple one linear solution in 16 Different languages [cpp/c/java/swift/php/kotlin/rust/ruby/go.

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4770321/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4770321/)

---


# Intuition
![Screenshot 2024-02-23 094106.png](./images/0.png)
![Screenshot 2024-02-23 093544.png](./images/1.png)
![Screenshot 2024-02-23 093608.png](./images/2.png)
![Screenshot 2024-02-23 093620.png](./images/3.png)
![Screenshot 2024-02-23 093643.png](./images/4.png)
![Screenshot 2024-02-23 093700.png](./images/5.png)
```javascript []
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return 2 * t + num
};
```
```python []
class Solution(object):
    def theMaximumAchievableX(self, num, t):
        """
        :type num: int
        :type t: int
        :rtype: int
        """
        return 2 * t + num
        
```
```C++ []
class Solution {
public:
    int theMaximumAchievableX(int num, int t) { 
        return 2 * t + num;
    }
};
```
```typescript []
function theMaximumAchievableX(num: number, t: number): number {
    return 2 * t + num;
};
```
```python3 []
class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return 2 * t + num
        
```
```C []
int theMaximumAchievableX(int num, int t){
    return 2 * t + num;
}
```
```Dart []
class Solution {
  int theMaximumAchievableX(int num, int t) {
      return 2 * t + num;
  }
}
```
```C# []
public class Solution {
    public int TheMaximumAchievableX(int num, int t) {
        return 2 * t + num;
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer $num
     * @param Integer $t
     * @return Integer
     */
    function theMaximumAchievableX($num, $t) {
        return 2 * $t + $num;
    }
}
```
```Java []
class Solution {
    public int theMaximumAchievableX(int num, int t) {
       return 2 * t + num; 
    }
}
```
```Swift []
class Solution {
    func theMaximumAchievableX(_ num: Int, _ t: Int) -> Int {
        return 2 * t + num;
    }
}
```
```go []
func theMaximumAchievableX(num int, t int) int {
    return 2 * t + num;
}
```
```kotlin []
class Solution {
    fun theMaximumAchievableX(num: Int, t: Int): Int {
        return 2 * t + num;
    }
}
```
```scala []
object Solution {
    def theMaximumAchievableX(num: Int, t: Int): Int = {
        return 2 * t + num
    }
}
```
```Rust []
impl Solution {
    pub fn the_maximum_achievable_x(num: i32, t: i32) -> i32 {
        return 2 * t + num
    }
}
```
```ruby []
# @param {Integer} num
# @param {Integer} t
# @return {Integer}
def the_maximum_achievable_x(num, t)
    return 2 * t + num
end
```



<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Basically for Every step we simultaneosly increase & decrease 
ans - t == nums + t
soo our ans should be 
ans = nums +  2*t
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
impl Solution {
    pub fn the_maximum_achievable_x(num: i32, t: i32) -> i32 {
        return 2 * t + num
    }
}
```
# Upvoting is in your hand