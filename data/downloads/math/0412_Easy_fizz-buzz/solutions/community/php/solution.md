# Fizz Buzz

**Author:** frankaz
**Votes:** 7
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/4006178/](https://leetcode.com/problems/fizz-buzz/solutions/4006178/)

---

# Intuition
Mod Check == 0


# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
``` C# []
public class Solution {
  public IList<string> FizzBuzz(int n) {
    var zzList = new List<String>(n);

    for (int i = 1; i <= n; i++)
    {
      var temp = "";
      if (i % 3 == 0) temp = "Fizz";
      if (i % 5 == 0) temp += "Buzz";
      zzList.Add(string.IsNullOrWhiteSpace(temp) ? i.ToString() : temp);
    }

    return zzList;
  }
}

```
```typescript []
function fizzBuzz(n: number): string[] {
  let zzList: string[] = Array(n);

  for(let i = 1; i <= n; i++){
    let temp = "";
    if(i % 3 == 0) temp = "Fizz";
    if(i % 5 == 0) temp += "Buzz";
    zzList[i-1] = temp === "" ? i.toString() : temp;
  }

  return zzList;
};

```
```python []
class Solution:
  def fizzBuzz(self, n: int) -> List[str]:
    zzList = []
    for i in range(1, n+1):
      temp = ""
      if (i%3 == 0):
        temp = "Fizz"
      if (i%5 == 0):
        temp += "Buzz"
      zzList.append(str(i) if temp == "" else temp)

    return zzList

```
```php []
class Solution {
    function fizzBuzz($n) {
      $zzList = array_fill(1,$n,""); //O(n)
      
      for ($i = 1; $i <= $n; $i++){
        $temp = "";
        if($i % 3 == 0) $temp = "Fizz";
        if($i % 5 == 0) $temp .= "Buzz";
        $zzList[$i] = $temp === "" ? strval($i) : $temp;
      }
      
      return $zzList;
    }
}

```