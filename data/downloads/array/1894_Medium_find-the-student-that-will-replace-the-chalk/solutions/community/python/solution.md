# BASIC MATHS  ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5723222/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5723222/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to find out where the chalk runs out 
we need to find the remainder of the chalk with the total chalk needed by the studnets to remove unwanted cycles 
# Approach
<!-- Describe your approach to solving the problem. -->
we eill find the total chalk needed by the students in one round and then will divide the total chalk by the needed chalk per one full cycle of students then we will get a remainder

we will get a for loop travelling to each student and seeing on whom the chalk is emptying and returning his index 
thats it
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven.jpg](./images/0.jpeg)

# Code
```javascript []
var chalkReplacer = function(chalk, k) {
    let sum=0
    for(let x of chalk)sum+=x
    let rem=k%sum
    for(let i=0;i<chalk.length;i++){
        rem-=chalk[i]
        if(rem<0)return i
    }
};
```
```python []
def chalk_replacer(chalk, k):
    total = sum(chalk)
    rem = k % total
    for i, value in enumerate(chalk):
        rem -= value
        if rem < 0:
            return i
    return -1 
```
```c []
#include <stdio.h>

int chalkReplacer(int* chalk, int chalkSize, int k) {
    int sum = 0;
    for (int i = 0; i < chalkSize; i++) {
        sum += chalk[i];
    }
    int rem = k % sum;
    for (int i = 0; i < chalkSize; i++) {
        rem -= chalk[i];
        if (rem < 0) {
            return i;
        }
    }
    return -1; // Default return if no index is found (though theoretically should never happen)
}

int main() {
    int chalk[] = {5, 1, 5};
    int k = 22;
    int chalkSize = sizeof(chalk) / sizeof(chalk[0]);
    printf("%d\
", chalkReplacer(chalk, chalkSize, k)); // Output: 0
    return 0;
}

```
``` java []
public class ChalkReplacer {
    public static int chalkReplacer(int[] chalk, int k) {
        int sum = 0;
        for (int x : chalk) {
            sum += x;
        }
        int rem = k % sum;
        for (int i = 0; i < chalk.length; i++) {
            rem -= chalk[i];
            if (rem < 0) {
                return i;
            }
        }
        return -1; // Default return if no index is found (though theoretically should never happen)
    }

    public static void main(String[] args) {
        int[] chalk = {5, 1, 5};
        int k = 22;
        System.out.println(chalkReplacer(chalk, k)); // Output: 0
    }
}

```
