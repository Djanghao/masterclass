# [C++/JAVA/Python] Beginner-friendly || Bit Manipulation

**Author:** Aditya00
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679236/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679236/)

---

# Intution
- The given code aims to find the minimum number of steps required to make a given integer, num1, zero by subtracting num2 from it in each step. 
- The code first checks if num1 is smaller than num2, in which case it is not possible to make it zero and returns -1. 
- It then iterates through a range of steps, from 0 to 100, Within each iteration, I calculate the difference between num1 and the product of num2 and the current step. This difference is stored in the variable diff. 
- To count the number of bits set to 1 in diff, I use the countBits function. If the number of bits is less than or equal to the current step and the step itself falls within the range of diff, it indicates that it is possible to make num1 zero in the current number of steps. In such cases, I return the minimum number of steps required.

If none of the valid step counts are found within the given range, then return -1, indicating that it is not possible to make num1 zero using the given subtraction operation.

---


# C++ Code
```
class Solution { 
public: 
    int countBits(long long num) { 
        int count = 0; 
        while (num > 0) { 
            count += num & 1; 
            num >>= 1; 
        } 
        return count; 
    } 

    int makeTheIntegerZero(int num1, int num2) { 
        if (num1 < num2) { 
            return -1; 
        } 
 
        for (int steps = 0; steps <= 100; steps++) { 
            long long diff = num1 - 1LL*(num2) * steps; 
            int bits = countBits(diff); 
            if (bits <= steps && steps <= diff) { 
                return steps; 
            } 
        } 
 
        return -1; 
    }
};
```
# JAVA Code
```
class Solution {
    public int countBits(long num) {
        int count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    public int makeTheIntegerZero(int num1, int num2) {
        if (num1 < num2) {
            return -1;
        }

        for (int steps = 0; steps <= 100; steps++) {
            long diff = num1 - 1L * num2 * steps;
            int bits = countBits(diff);
            if (bits <= steps && steps <= diff) {
                return steps;
            }
        }

        return -1;
    }
}
```
# Python Code 
```
def countBits(self, num):
        count = 0
        while num > 0:
            count += num & 1
            num >>= 1
        return count

    def makeTheIntegerZero(self, num1, num2):
        if num1 < num2:
            return -1

        for steps in range(101):
            diff = num1 - 1 * num2 * steps
            bits = self.countBits(diff)
            if bits <= steps and steps <= diff:
                return steps

        return -1
```