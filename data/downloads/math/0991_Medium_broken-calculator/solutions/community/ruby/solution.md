# [NotAGenius] Recursive 3 line solution -> Iterative that uses less memory. Multilanguage.

**Author:** lord_ghaleon
**Votes:** 9
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1874888/](https://leetcode.com/problems/broken-calculator/solutions/1874888/)

---

Hi everyone! I hope you are enjoying coding every day.

Quick post today, the non-genius approach as always!

- We can model this as BSF or DSF, at every step the game branches by subtracting 1 or multiplying by 2. Of course this is exponential. We also need to take care of loops. It's a path forward, but given that the problem restriction marks target being as high as 1_000_000_000, we are encouraged to find something faster.
- My first realization is that if we work backwards from the result we can cut some branches, as you cannot always divide by 2 and keep the current value an integer. Wrking backwards means dividing the target by 2 or adding 1 to the target, rather than multiplying the start by 2, or subtracting 1 from start.
- There are no restrictions on startValue or target being greater or lower than the other one. When startValue is greater than target though, you can only get there by subtracting (working forward, or adding working backward). In that case, the result is just adding/subtracting n times, or put another way, startValue-target.
- Since we are trying to make target as close as possible as startValue, when we can, we will always divide, as adding 1 will make them further apart.
- Sometimes though we need to add 1 as it's the only way to make progress.
- So we get to the algorithm:
	- If startValue >= target, we just return startValue-target
	- Else when we can, we divide the target by 2 and try again
	- If we cannot divide by 2, we can just add 1 to target and try again

And here is the code:

```java
class Solution {
    public int brokenCalc(int startValue, int target) {
        if (startValue >= target) return startValue-target;
        if (target % 2 == 0) return 1 + brokenCalc(startValue, target/2);
        else return 1 + brokenCalc(startValue, target + 1);
    }
}
```

**Runtime: 0 ms, faster than 100.00% of Java online submissions for Broken Calculator.**

This is O(logn) time and O(logn) memory. From here you can go to iterative if you want to save memory.

```java
class Solution {
    public int brokenCalc(int startValue, int target) {
        int result = 0;
        while (true) {
            if (startValue >= target) return result+startValue-target;
            if (target % 2 == 0) {
                result++; 
                target /= 2;
            }
            else {
                result++;
                target++;
            }
        }
    }
}
```

Or the more concise

```java
class Solution {
    public int brokenCalc(int startValue, int target) {
        int result = 0;
        while (true) {
            if (startValue >= target) return result+startValue-target;
            result++;
            if (target % 2 == 0) target /= 2;
            else target++;
        }
    }
}
```


Or if you are afraid of `while(true)`

```java
class Solution {
    public int brokenCalc(int startValue, int target) {
        int result = 0;
        while (startValue < target) {
            result++;
            if (target % 2 == 0) target /= 2;
            else target++;
        }
        return result+startValue-target;
    }
}
```

**Runtime: 0 ms, faster than 100.00% of Java online submissions for Broken Calculator.**

This is O(logn) time and O(1) memory.

Bonus track:

C++:

```cpp
class Solution {
public:
    int brokenCalc(int startValue, int target) {
        int result = 0;
        while (startValue < target) {
            result++;
            if (target % 2 == 0) target /= 2;
            else target++;
        }
        return result+startValue-target;
    }
};
```

Python:

```py
class Solution(object):
    def brokenCalc(self, startValue, target):
        result = 0;
        while (startValue < target) :
            result+=1;
            if target % 2 == 0: target = target/2;
            else: target+=1;
        return result+startValue-target;
```

Ruby:

```ruby
def broken_calc(start_value, target)
    result = 0;
    while start_value < target
        result+=1;
        if target % 2 == 0 then target = target/2;
        else target+=1;
        end
    end
    return result+start_value-target
end
```

Go:

```go
func brokenCalc(startValue int, target int) int {
    var result = 0;
    for startValue < target {
        result++;
        if target % 2 == 0 {
            target /= 2
        } else {
            target++
        }
    }
    return result+startValue-target;
}
```

Have fun!!