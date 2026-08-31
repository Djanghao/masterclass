# C++ | Golang | Greedy

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/3156000/](https://leetcode.com/problems/minimize-xor/solutions/3156000/)

---

# Code
```
// C++
class Solution {
    int countOnes(int num) {
        int count = 0;
        while(num) {
            num -= (num & -num);
            count++;
        }
        return count;
    }
public:
    int minimizeXor(int num1, int num2) {
        int count = countOnes(num2) - countOnes(num1);
        for(int i = 0; count > 0; i++) {
            if((num1 & (1 << i)) != 0) continue;
            num1 = num1 | (1 << i);
            count--;
        }
        for(int i = 0; count < 0; i++) {
            if((num1 & (1 << i)) != 0) {
                num1 = num1 ^ (1 << i);
                count++;
            }
        }
        return num1;
    }
};


// Golang
func countOnes(num int) int {
    var count = 0
    for num > 0 {
        num -= (num & -num)
        count++
    }
    return count
}
func minimizeXor(num1 int, num2 int) int {
    var count int = countOnes(num2) - countOnes(num1)
    for i := 0; count > 0; i++ {
        if (num1 & (1 << i)) == 0 {
            num1 = num1 | (1 << i)
            count--
        }
    }
    for i := 0; count < 0; i++ {
        if (num1 & (1 << i)) != 0 {
            num1 = num1 ^ (1 << i)
            count++
        }
    }
    return num1
}
```