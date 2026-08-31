# 11 Languages Solution beats 100% - easy to understand -- have a look

**Author:** Edwards310
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4617175/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4617175/)

---

![Screenshot 2024-01-24 101903.png](./images/0.png)
# Intution
<!-- Describe your first thoughts on how to solve this problem. -->
    Intution is simple run a loop until one of the numbers become 0 .. if num1 >= num2 subtract num2 from num1 else num1 from num2
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
```javascript []
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    var cnt = 0;
    while (num1 != 0 && num2 != 0) {
        ++cnt;
        if (num1 > num2)
            num1 -= num2;
        else if (num2 >= num1)
            num2 -= num1;
    }
    return cnt;
};
```
```python []
class Solution(object):
    def countOperations(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        cnt = 0
        while num1 > 0 and num2 > 0:
            cnt += 1
            if num1 >= num2:
                num1 -= num2
            elif num2 > num1:
                num2 -= num1

        return cnt
        
```
```C []
int countOperations(int num1, int num2) {
    int cnt = 0;
    while (num1 != 0 && num2 != 0) {
        ++cnt;
        if (num1 > num2)
            num1 -= num2;
        else if (num2 >= num1)
            num2 -= num1;
    }
    return cnt;
}
```
```typescript []
function countOperations(num1: number, num2: number): number {
    var cnt = 0;
    while (num1 != 0 && num2 != 0) {
        ++cnt;
        if (num1 > num2)
            num1 -= num2;
        else if (num2 >= num1)
            num2 -= num1;
    }
    return cnt;
};
```
```python3 []
class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        cnt = 0
        while num1 > 0 and num2 > 0:
            cnt = cnt + 1
            if num1 >= num2:
                num1 = num1 - num2
            elif num2 > num1:
                num2 = num2 - num1

        return cnt
```
```C++ []
class Solution {
public:
    int countOperations(int num1, int num2) {
        ios_base::sync_with_stdio(0);
        cin.tie(0);
        cout.tie(0);
        int cnt = 0;
        while (num1 != 0 && num2 != 0) {
            ++cnt;
            if (num1 > num2)
                num1 -= num2;
            else if (num2 >= num1)
                num2 -= num1;
        }
        return cnt;
    }
};
```
```Java []
class Solution {
    public int countOperations(int num1, int num2) {
        int cnt = 0;
        while (num1 != 0 && num2 != 0) {
            ++cnt;
            if (num1 > num2)
                num1 -= num2;
            else if (num2 >= num1)
                num2 -= num1;
        }
        return cnt;
    }
}
```
```php []
class Solution {

    /**
     * @param Integer $num1
     * @param Integer $num2
     * @return Integer
     */
    function countOperations($num1, $num2) {
        $cnt = 0;
        while ($num1 != 0 && $num2 != 0) {
            ++$cnt;
            if ($num1 > $num2)
                $num1 -= $num2;
            else if ($num2 >= $num1)
                $num2 -= $num1;
        }
    return $cnt; 
    }
}
```
```Go []
func countOperations(num1 int, num2 int) int {
	count := 0

	for num1 != 0 && num2 != 0 {

		if num1 >= num2 {
			num1 = num1 - num2
		} else {
			num2 = num2 - num1
		}
		count++
	}

	return count
}
```
```Kotlin []
class Solution {
    fun countOperations(num1: Int, num2: Int): Int {
        var cnt = 0
        var n1 = num1 
        var n2 = num2
        while (n1 > 0 && n2 > 0) {
            if (n1 >= n2)
                n1 -= n2;
            else
                n2 -= n1;
            cnt++
        }
    return cnt;
    }
}
```
```C# []
public class Solution {
    public int CountOperations(int num1, int num2) {
        int cnt = 0;
        while (num1 != 0 && num2 != 0) {
            ++cnt;
            if (num1 > num2)
                num1 -= num2;
            else if (num2 >= num1)
                num2 -= num1;
        }
    return cnt;
    }
}
```


# Code
```
int countOperations(int n1, int n2) {
    int ct = 0;
    while (n1 != 0 && n2 != 0) {
        ++ct;
        if (n1 > n2)
            n1 -= n2;
        else if (n2 >= n1)
            n2 -= n1;
    }
    return ct;
}
```
# Please upvote if it's helpful .... Your 1 like motivates me to do better...
![th.jpeg](./images/1.jpeg)
