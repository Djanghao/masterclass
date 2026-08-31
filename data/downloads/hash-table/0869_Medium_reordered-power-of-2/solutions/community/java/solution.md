# Quick Math

**Author:** FLlGHT
**Votes:** 58
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/2481219/](https://leetcode.com/problems/reordered-power-of-2/solutions/2481219/)

---

The main idea is what powers of 2 look like in binary form:

<img width="200" src="https://assets.leetcode.com/users/images/ae9964b4-ffbd-40a5-a934-e3dc1de49d28_1661482426.3498342.png">

this will help easily iterate over all powers of two

So all we need is to convert n to sorted digits and then compare them with the sorted digits for each power of two.
`n <= 10e9`, we only need to check powers in the range `[0,29]`

a little explanation of how the shift operation `<< `works: 

<img src="https://assets.leetcode.com/users/images/df39060e-624d-4fb8-abe2-e3f1da6d0bf9_1661486107.3084147.png">


##### Java

```java
public boolean reorderedPowerOf2(int n) {
        char[] number = sortedDigits(n);

        for (int i = 0; i < 30; ++i) {
            char[] powerOfTwo = sortedDigits(1 << i);
            if (Arrays.equals(number, powerOfTwo))
                return true;
        }
        return false;
    }

    private char[] sortedDigits(int n) {
        char[] digits = String.valueOf(n).toCharArray();
        Arrays.sort(digits);
        return digits;
    }
```

##### C++

```
public:
    bool reorderedPowerOf2(int n) {
        string number = sortedDigits(n);

        for (int i = 0; i < 30; ++i) {
            string powerOfTwo = sortedDigits(1 << i);
            if (number == powerOfTwo)
                return true;
        }

        return false;
    }

private:
    string sortedDigits(int n) {
        string digits = to_string(n);
        sort(digits.begin(), digits.end());
        return digits;
    }
```

##### Python
```python
def reorderedPowerOf2(self, n: int) -> bool:
        digits = Counter(str(n))
        
        for i in range(30):
            powerOfTwo = str(1 << i)
            if digits == Counter(powerOfTwo):
                return True
        return False
```

My repositories with leetcode problems solving - [Java](https://github.com/FLlGHT/algorithms/tree/master/j-algorithms/src/main/java),  [C++](https://github.com/FLlGHT/algorithms/tree/master/c-algorithms/src/main/c%2B%2B)
