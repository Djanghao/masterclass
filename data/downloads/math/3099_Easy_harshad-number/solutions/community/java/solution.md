# 👏Beats 100.00% of users with Java🎉||✅Simple & Easy 💯Well Explained Solution 🔥💥

**Author:** Rutvik_Jasani
**Votes:** 12
**Link:** [https://leetcode.com/problems/harshad-number/solutions/5087523/](https://leetcode.com/problems/harshad-number/solutions/5087523/)

---

# Intuition
The problem identifies Harshad numbers, divisible by the sum of their digits. The code iterates through the digits, sums them, and checks divisibility. If divisible, it returns the sum; otherwise, it returns -1. This concise algorithm efficiently verifies Harshad numbers and computes their digit sums.

# I Think This Can Help You(For Proof Click on the Image)
[![Screenshot 2024-02-24 232407.png](./images/0.png)](https://leetcode.com/problems/harshad-number/submissions/1244840036/)

# Approach
1. Initialize two integer variables `temp` and `sum`. `temp` is assigned the value of `x`, and `sum` is initialized to 0.
   
```java
int temp = x;
int sum = 0;
```

2. Start a while loop that continues until `temp` becomes 0. Inside the loop:
   - Add the last digit of `temp` to `sum`.
   - Divide `temp` by 10 to remove the last digit.
   
```java
while (temp > 0) {
    sum += temp % 10;
    temp /= 10;
}
```

3. After the while loop, check if `x` is divisible by `sum` (the sum of its digits). If it is divisible, it means `x` is a Harshad number. In that case, return the sum of the digits.

```java
if (x % sum == 0) {
    return sum;
}
```

4. If `x` is not divisible by `sum`, return -1 indicating that `x` is not a Harshad number.

```java
return -1;
```

# Complexity
- Time complexity:
O(log x)

- Space complexity:
O(1)

# Code
```java
class Solution {
    public int sumOfTheDigitsOfHarshadNumber(int x) {
        int temp = x;
        int sum=0;
        while(temp>0){
            sum += temp%10;
            temp /= 10;
        }
        if(x%sum==0){
            return sum;
        }
        return -1;
    }
}
```

![_820a7945-fc34-4bfb-b379-3d81a750f95e.jpeg](./images/1.jpeg)
