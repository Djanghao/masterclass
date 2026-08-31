# Beats 100% | Simple Solution| Easy To Understand | Java | Python3 |JS | c#

**Author:** antovincent
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337344/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337344/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Counting the number of ways to choose a seat in a corridor with certain conditions based on consecutive 'S' characters. The conditions involve checking the count of consecutive 'S' characters and updating the result accordingly.
# Approach
<!-- Describe your approach to solving the problem. -->
- Loop to iterate through each character in the corridor string.
- It maintains variables to keep track of the consecutive 'S' characters (seatCount) and the position of the most recent 'S' character (recentPosition).
- When the count of consecutive 'S' characters becomes greater than 2 and is an odd number, the result (ans) is updated by multiplying it with the difference between the current position and the recent position, and then taking the modulo operation.
- The final result is returned based on the conditions of the seat count.

# Complexity
- Time complexity : O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```java []
class Solution {
    public int numberOfWays(String corridor) {
        long ans=1,seatCount=0,recentPosition=0,mod=1000000000+7;

        for(int i=0;i<corridor.length();i++){
            if(corridor.charAt(i)=='S'){
                if(++seatCount>2&&(seatCount&1)==1){
                    ans = ans*(i-recentPosition)%mod;
                }
                recentPosition = i;
            }
        }
        return (seatCount&1)==0 && seatCount>0 ? (int)ans:0;
    }
}
```
```python3 []
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        ans, seatCount, recentPosition, mod = 1, 0, 0, 10**9 + 7

        for i, char in enumerate(corridor):
            if char == 'S':
                seatCount += 1
                if seatCount > 2 and seatCount % 2 == 1:
                    ans = (ans * (i - recentPosition)) % mod
                recentPosition = i

        return ans if seatCount % 2 == 0 and seatCount > 0 else 0

```
```cpp []
#include <string>
using namespace std;

class Solution {
public:
    int numberOfWays(string corridor) {
        long long ans = 1, seatCount = 0, recentPosition = 0, mod = 1000000007;

        for (int i = 0; i < corridor.length(); ++i) {
            if (corridor[i] == 'S') {
                ++seatCount;
                if (seatCount > 2 && seatCount % 2 == 1) {
                    ans = (ans * (i - recentPosition)) % mod;
                }
                recentPosition = i;
            }
        }

        return (seatCount % 2 == 0 && seatCount > 0) ? static_cast<int>(ans) : 0;
    }
};

```
```javascript []
/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    let ans = 1, seatCount = 0, recentPosition = 0, mod = 1000000007;

    for (let i = 0; i < corridor.length; ++i) {
        if (corridor[i] === 'S') {
            ++seatCount;
            if (seatCount > 2 && seatCount % 2 === 1) {
                ans = (ans * (i - recentPosition)) % mod;
            }
            recentPosition = i;
        }
    }

    return (seatCount % 2 === 0 && seatCount > 0) ? ans : 0;
};

```
```csharp []
public class Solution
{
    public int NumberOfWays(string corridor)
    {
        long ans = 1, seatCount = 0, recentPosition = 0, mod = 1000000007;

        for (int i = 0; i < corridor.Length; ++i)
        {
            if (corridor[i] == 'S')
            {
                ++seatCount;
                if (seatCount > 2 && seatCount % 2 == 1)
                {
                    ans = (ans * (i - recentPosition)) % mod;
                }
                recentPosition = i;
            }
        }

        return (seatCount % 2 == 0 && seatCount > 0) ? (int)ans : 0;
    }
}

```
```php []
class Solution {
    /**
     * @param String $corridor
     * @return Integer
     */
    function numberOfWays($corridor) {
        $ans = 1;
        $seatCount = 0;
        $recentPosition = 0;
        $mod = 1000000007;

        for ($i = 0; $i < strlen($corridor); ++$i) {
            if ($corridor[$i] === 'S') {
                ++$seatCount;
                if ($seatCount > 2 && $seatCount % 2 === 1) {
                    $ans = ($ans * ($i - $recentPosition)) % $mod;
                }
                $recentPosition = $i;
            }
        }

        return ($seatCount % 2 === 0 && $seatCount > 0) ? $ans : 0;
    }
}

```
```kotlin []
class Solution {
    fun numberOfWays(corridor: String): Int {
        var ans = 1L
        var seatCount = 0
        var recentPosition = 0
        val mod = 1000000007L

        for (i in corridor.indices) {
            if (corridor[i] == 'S') {
                ++seatCount
                if (seatCount > 2 && seatCount % 2 == 1) {
                    ans = (ans * (i - recentPosition)) % mod
                }
                recentPosition = i
            }
        }

        return if (seatCount % 2 == 0 && seatCount > 0) ans.toInt() else 0
    }
}

```
**UPVOTES ARE ENCOURAGING!**


