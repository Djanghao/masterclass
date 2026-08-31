# Beginner Friendly | Reverse Order Aproach | Simple | Easy To Understand | Java | Python3 |C++ | C#

**Author:** antovincent
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4309730/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4309730/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It iterates through an array of strings (garbage), where each string represents a location, and an array of integers (travel), where each integer represents the travel distance between consecutive locations. Considers the lengths of the strings, the occurrences of 'P', 'G', 'M' in each string, and the travel distances to compute the total distance.

# Approach
<!-- Describe your approach to solving the problem. -->
- Initializes variables (sum, mul, p, g, m) to keep track of the total distance, a multiplier for certain characters, and counts for 'P', 'G', 'M'.
- Iterates through the garbage array in **REVERSE ORDER**, calculating the sum of string lengths and updating the counts of 'P', 'G', 'M' in each string.
- Then calculates the contribution of the current step to the total distance by multiplying the multiplier (mul) with the corresponding travel distance.
- The final result is the sum of all these distances.

# Complexity
- Time complexity:O(N * M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```java []
class Solution {
    public int garbageCollection(String[] garbage, int[] travel) {
        int sum=0,mul=0;
        int p=0,g=0,m=0;
        for(int i=garbage.length-1;i>0;i--){
         sum+=garbage[i].length();
         if(mul<3){
             for(int j=0;j<garbage[i].length();j++){
                 char ch = garbage[i].charAt(j);
                 switch(ch){
                     case 'P' :
                      mul = p==0 ? mul+1:mul;
                      p++;
                      break;
                      case 'G' :
                        mul = g==0 ? mul+1:mul;
                      g++;
                      break;
                      case 'M' :
                        mul = m==0 ? mul+1:mul;
                      m++;
                      break;
                      default : 
                      break;
                 }
             }
         }
         sum+=(mul*travel[i-1]);
        }
        sum+=garbage[0].length();
        return sum;
    }
}
```
```python3 []
class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        sum_val = 0
        mul = 0
        p = 0
        g = 0
        m = 0

        for i in range(len(garbage) - 1, 0, -1):
            sum_val += len(garbage[i])

            if mul < 3:
                for j in range(len(garbage[i])):
                    ch = garbage[i][j]
                    if ch == 'P':
                        mul = mul + 1 if p == 0 else mul
                        p += 1
                    elif ch == 'G':
                        mul = mul + 1 if g == 0 else mul
                        g += 1
                    elif ch == 'M':
                        mul = mul + 1 if m == 0 else mul
                        m += 1

            sum_val += mul * travel[i - 1]

        sum_val += len(garbage[0])
        return sum_val
```
```C []
int garbageCollection(char** garbage, int garbageSize, int* travel, int travelSize) {
    int sum = 0, mul = 0;
    int p = 0, g = 0, m = 0;

    for (int i = garbageSize - 1; i > 0; i--) {
        sum += strlen(garbage[i]);

        if (mul < 3) {
            

            for (int j = 0; j < strlen(garbage[i]); j++) {
                char ch = garbage[i][j];
                switch (ch) {
                    case 'P':
                        mul = p == 0 ? mul + 1 : mul;
                        p++;
                        break;
                    case 'G':
                        mul = g == 0 ? mul + 1 : mul;
                        g++;
                        break;
                    case 'M':
                        mul = m == 0 ? mul + 1 : mul;
                        m++;
                        break;
                    default:
                        break;
                }
            }

            
        }
        sum += mul * travel[i - 1];
    }
     sum+=strlen(garbage[0]);
    return sum;
}
```
```C++ []
class Solution {
public:
    int garbageCollection(vector<string>& garbage, vector<int>& travel) {
        int sum = 0, mul = 0;
        int p = 0, g = 0, m = 0;

        for (int i = garbage.size() - 1; i > 0; i--) {
            sum += garbage[i].length();

            if (mul < 3) {
                for (int j = 0; j < garbage[i].length(); j++) {
                    char ch = garbage[i][j];
                    switch (ch) {
                        case 'P':
                            mul = p == 0 ? mul + 1 : mul;
                            p++;
                            break;
                        case 'G':
                            mul = g == 0 ? mul + 1 : mul;
                            g++;
                            break;
                        case 'M':
                            mul = m == 0 ? mul + 1 : mul;
                            m++;
                            break;
                        default:
                            break;
                    }
                }
            }

            sum += mul * travel[i - 1];
        }

        sum += garbage[0].length();
        return sum;
    }
};
```
```Javascript []
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let sum = 0;
    let mul = 0;
    let p = 0;
    let g = 0;
    let m = 0;

    for (let i = garbage.length - 1; i > 0; i--) {
        sum += garbage[i].length;

        if (mul < 3) {
            for (let j = 0; j < garbage[i].length; j++) {
                const ch = garbage[i][j];
                switch (ch) {
                    case 'P':
                        mul = p === 0 ? mul + 1 : mul;
                        p++;
                        break;
                    case 'G':
                        mul = g === 0 ? mul + 1 : mul;
                        g++;
                        break;
                    case 'M':
                        mul = m === 0 ? mul + 1 : mul;
                        m++;
                        break;
                    default:
                        break;
                }
            }
        }

        sum += mul * travel[i - 1];
    }

    sum += garbage[0].length;
    return sum;
};
```
```Kotlin []
class Solution {
    fun garbageCollection(garbage: Array<String>, travel: IntArray): Int {
        var sum = 0
        var mul = 0
        var p = 0
        var g = 0
        var m = 0

        for (i in garbage.size - 1 downTo 1) {
            sum += garbage[i].length

            if (mul < 3) {
                for (j in garbage[i].indices) {
                    val ch = garbage[i][j]
                    when (ch) {
                        'P' -> {
                            mul = if (p == 0) mul + 1 else mul
                            p++
                        }
                        'G' -> {
                            mul = if (g == 0) mul + 1 else mul
                            g++
                        }
                        'M' -> {
                            mul = if (m == 0) mul + 1 else mul
                            m++
                        }
                        else -> {
                        }
                    }
                }
            }

            sum += mul * travel[i - 1]
        }

        sum += garbage[0].length
        return sum
    }
}
```
```typescript []
function garbageCollection(garbage: string[], travel: number[]): number {
    let sum = 0;
    let mul = 0;
    let p = 0;
    let g = 0;
    let m = 0;

    for (let i = garbage.length - 1; i > 0; i--) {
        sum += garbage[i].length;

        if (mul < 3) {
            for (let j = 0; j < garbage[i].length; j++) {
                const ch = garbage[i][j];
                switch (ch) {
                    case 'P':
                        mul = p === 0 ? mul + 1 : mul;
                        p++;
                        break;
                    case 'G':
                        mul = g === 0 ? mul + 1 : mul;
                        g++;
                        break;
                    case 'M':
                        mul = m === 0 ? mul + 1 : mul;
                        m++;
                        break;
                    default:
                        break;
                }
            }
        }

        sum += mul * travel[i - 1];
    }

    sum += garbage[0].length;
    return sum;
}

```
```C# []
public class Solution {
    public int GarbageCollection(string[] garbage, int[] travel) {
        int sum = 0;
        int mul = 0;
        int p = 0;
        int g = 0;
        int m = 0;

        for (int i = garbage.Length - 1; i > 0; i--) {
            sum += garbage[i].Length;

            if (mul < 3) {
                for (int j = 0; j < garbage[i].Length; j++) {
                    char ch = garbage[i][j];
                    switch (ch) {
                        case 'P':
                            mul = p == 0 ? mul + 1 : mul;
                            p++;
                            break;
                        case 'G':
                            mul = g == 0 ? mul + 1 : mul;
                            g++;
                            break;
                        case 'M':
                            mul = m == 0 ? mul + 1 : mul;
                            m++;
                            break;
                        default:
                            break;
                    }
                }
            }

            sum += mul * travel[i - 1];
        }

        sum += garbage[0].Length;
        return sum;
    }
}

```
```php []
class Solution {
    /**
     * @param String[] $garbage
     * @param Integer[] $travel
     * @return Integer
     */
    function garbageCollection($garbage, $travel) {
        $sum = 0;
        $mul = 0;
        $p = 0;
        $g = 0;
        $m = 0;

        for ($i = count($garbage) - 1; $i > 0; $i--) {
            $sum += strlen($garbage[$i]);

            if ($mul < 3) {
                for ($j = 0; $j < strlen($garbage[$i]); $j++) {
                    $ch = $garbage[$i][$j];
                    switch ($ch) {
                        case 'P':
                            $mul = $p == 0 ? $mul + 1 : $mul;
                            $p++;
                            break;
                        case 'G':
                            $mul = $g == 0 ? $mul + 1 : $mul;
                            $g++;
                            break;
                        case 'M':
                            $mul = $m == 0 ? $mul + 1 : $mul;
                            $m++;
                            break;
                        default:
                            break;
                    }
                }
            }

            $sum += $mul * $travel[$i - 1];
        }

        $sum += strlen($garbage[0]);
        return $sum;
    }
}

```
```ruby []
# @param {String[]} garbage
# @param {Integer[]} travel
# @return {Integer}
def garbage_collection(garbage, travel)
    sum = 0
    mul = 0
    p = 0
    g = 0
    m = 0

    (garbage.length - 1).downto(1) do |i|
        sum += garbage[i].length

        if mul < 3
            garbage[i].each_char do |ch|
                case ch
                when 'P'
                    mul = p == 0 ? mul + 1 : mul
                    p += 1
                when 'G'
                    mul = g == 0 ? mul + 1 : mul
                    g += 1
                when 'M'
                    mul = m == 0 ? mul + 1 : mul
                    m += 1
                end
            end
        end

        sum += mul * travel[i - 1]
    end

    sum += garbage[0].length
    return sum
end

```


# **UPVOTES ARE ENCOURAGING**
my linkdin profile:
[https://www.linkedin.com/in/antony-vincent-r-86ab611bb/]()


