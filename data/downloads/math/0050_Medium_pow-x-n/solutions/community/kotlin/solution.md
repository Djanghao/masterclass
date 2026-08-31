# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 7
**Link:** [https://leetcode.com/problems/powx-n/solutions/1987227/](https://leetcode.com/problems/powx-n/solutions/1987227/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
public class Solution {
        public double pow(double x, int m) {
            double temp=x;
            if(m==0)
            return 1;
            temp=pow(x,m/2);
            if(m%2==0)
            return temp*temp;
            else 
            {
            if(m > 0)
                return x*temp*temp;
            else
                return (temp*temp)/x;
            }
          
    }
```

***JavaScript***
```
var myPow = function(x, n) {
  const on = n;
  let ans = 1;
  n = [...Math.abs(n).toString(2)];
  while(n.length) {
    const instruction = n.shift(); 
    switch(instruction) {
      case "0": 
        ans *= ans; 
        break;
      case "1":
        ans *= ans;
        ans *= x; 
        break;
    }
  } 
  return on < 0 ? 1/ans : ans;
};
```

***C++***
```
class Solution {
public:
    double myPow(double x, int n) {
        double res = 1;
        while (n) {
            if (n % 2) res = n > 0 ? res * x : res / x;
            x = x * x;
            n /= 2;
        }
        return res;
    }
};
```

***Python***
```
class Solution:
    def myPow(self, x: float, n: int) -> float:

        def function(base=x, exponent=abs(n)):
            if exponent == 0:
                return 1
            elif exponent % 2 == 0:
                return function(base * base, exponent // 2)
            else:
                return base * function(base * base, (exponent - 1) // 2)

        f = function()
        
        return float(f) if n >= 0 else 1/f
```

***Kotlin***
```
class Solution {
    fun myPow(x: Double, n: Int): Double {
        val num: Double = if (n < 0) 1/x else x
        var power: Long = Math.abs(n.toLong())
        var product: Double = num
        var res: Double = 1.0
        while (power > 0) {
            if (power%2 == 1L) {
                res = res * product
            }
            power = power/2
            product = product * product
        }
        return res
    }
}
```

***Swift***
```
class Solution {
    // - Complexity:
    //   - time: O(log n), where n is the power value.
    //   - space: O(log n), where n is the power value.
    
    func myPow(_ x: Double, _ n: Int) -> Double {
        guard n != 0 else { return 1 }

        var x = x
        var n = n

        if n < 0 {
            n = -n
            x = 1 / x
        }
        return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2)
    }

}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***