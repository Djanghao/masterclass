# ✅✅Without any dp and very simple✅✅

**Author:** shukhratutaboev
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932107/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932107/)

---

```C++ []
class Solution {
public:
    int check(int low) {
        int even = 0;
        int odd = 0;

        while (low > 0) {
            if (low % 2 == 0) {
                even++;
            } else {
                odd++;
            }

            low /= 10;
        }

        if (even == odd) {
            return 1;
        } else {
            return 0;
        }
    }

    int numberOfBeautifulIntegers(int low, int high, int k) {
        low = ((low - 1) / k + 1) * k;
        int count = 0;
        while (low <= high) {
            count += check(low);
            low += k;

            if (low >= 100000000) {
                return count;
            }
        }

        return count;
    }
};
```
```C# []
public class Solution {
    public int NumberOfBeautifulIntegers(int low, int high, int k) {
        low = ((low-1)/k + 1) * k;
        var count = 0;
        while (low <= high)
        {
            count += Check(low);
            low += k;

            if (low >= 100000000) return count;
        }
        
        return count;
    }

    int Check(int low) {
        var even = 0;
        var odd = 0;

        while (low > 0)
        {
            if (low % 2 == 0)
            {
                even++;
            }
            else
            {
                odd++;
            }

            low /= 10;
        }

        return even == odd ? 1 : 0;
    }
}
```
```Go []
func numberOfBeautifulIntegers(low, high, k int) int {
    low = ((low-1)/k + 1) * k
    count := 0
    for low <= high {
        count += Check(low)
        low += k

        if low >= 100000000 {
            return count
        }
    }

    return count
}

func Check(low int) int {
    even := 0
    odd := 0

    for low > 0 {
        if low%2 == 0 {
            even++
        } else {
            odd++
        }

        low /= 10
    }

    if even == odd {
        return 1
    }
    return 0
}
```
```Rust []
impl Solution {
    pub fn number_of_beautiful_integers(low: i32, high: i32, k: i32) -> i32 {
        let mut low = ((low - 1) / k + 1) * k;
        let mut count = 0;
        while low <= high {
            count += Solution::check(low);
            low += k;

            if low >= 100000000 {
                return count;
            }
        }

        count
    }

    pub fn check(mut low: i32) -> i32 {
        let mut even = 0;
        let mut odd = 0;

        while low > 0 {
            if low % 2 == 0 {
                even += 1;
            } else {
                odd += 1;
            }

            low /= 10;
        }

        if even == odd {
            1
        } else {
            0
        }
    }
}
```
```C []
int check(int low) {
    int even = 0;
    int odd = 0;

    while (low > 0) {
        if (low % 2 == 0) {
            even++;
        } else {
            odd++;
        }

        low /= 10;
    }

    if (even == odd) {
        return 1;
    } else {
        return 0;
    }
}

int numberOfBeautifulIntegers(int low, int high, int k) {
    low = ((low - 1) / k + 1) * k;
    int count = 0;
    while (low <= high) {
        count += check(low);
        low += k;

        if (low >= 100000000) {
            return count;
        }
    }

    return count;
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)