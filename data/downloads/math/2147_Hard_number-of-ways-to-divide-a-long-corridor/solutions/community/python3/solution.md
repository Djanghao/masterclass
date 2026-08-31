# 🥇 C++ | PYTHON | JAVA || O( N ) EXPLAINED || ; ]  ✅

**Author:** karan_8082
**Votes:** 42
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337209/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337209/)

---


# Solution 1

- We need to place a dividor after 2 seats.
- When a dividor is placed between any 2 seats : 
- * `Number of ways to do so = (Number of plants in between seats + 1)`

So we iterate through the String
1. After every two seats : Count the number of plants till next seat
2. Number of ways to put dividor = `(Number of plants in between seats + 1)`
3. Multiply all the number of ways to get the answer.
Return modulo `10^9 + 7`

``` Python []
class Solution:
    def numberOfWays(self, corridor):
        seat, res, plant = 0, 1, 0
        for i in corridor:
            if i=='S':
                seat += 1
            else:
                if seat == 2:
                    plant += 1
            if seat == 3:
                res = res*(plant+1) % (10**9 + 7)
                seat , plant = 1 , 0
        if seat != 2:
            return 0
        return res
```
``` C++ []
nt numberOfWays(std::string corridor) {
        int seat = 0, res =1, plant = 0;

        for (char i : corridor) {
            if (i == 'S')
                seat += 1;
            else
                if (seat == 2)
                    plant += 1;

            if (seat == 3) {
                res = (res * (plant + 1)) % (1000000007);
                seat = 1;
                plant = 0;
            }
        }

        if (seat != 2)
            return 0;

        return res;
    }
```


# Solution 2
If seats == odd , then ```answer -> 0```
If seats == even, then there is always a possible division.

We can only put a DIVIDER after every two seats

# Explanation

`x` -> number of way to put divider betweem seats, current number of seats. It mean, when x > 0 it mean we have counted 1 or 2 seats.

`y` -> state variable, if y > 0 it means we have counted 1 seat.
`z` -> total ways to put divider.

The flow of the algo:
- `x` start with 1, due to we counted no seat. y, z = 0 hence we counted 0 seats and 0 ways to put divider.
- When we counted first seat, x = 0, y = 1, z = 0.
- When we counted second seat, x = 0, y = 0, z = 1. After the second seat, x is increase by z every time we meet a plant.
- When we meet a seat again, the swap happen -> `z=y, y = x, x = 0`. When we meet the second seat, the swap become -> `z = y, y = x, x = 0`. so, this basically update number of way we counted to z when we have countered 2 more seat again, if not, z stay 0.

Creating variables
```
x -> 0 seats
y -> 1 seat
z -> 2 seats
```

For each ``"s"`` in string :

``x -> x + z``
``z -> y``
``y -> x``
``x -> 0``
Else
``
x -> x + z
``



- Time complexity: O(N)

- Space complexity: O(1)

``` C++ []
class Solution {
public:
    int numberOfWays(string corridor) {
        int x = 1; // 0 seat
        int y = 0; // 1 seat
        int z = 0; // 2 seats
        for (char& ch: corridor)
            if (ch == 'S')
                x = (x + z) % int(1e9 + 7), z = y, y = x, x = 0;
            else
                x = (x + z) % int(1e9 + 7);
        return z;
    }
};
```
``` Python []
class Solution:
    def numberOfWays(self, corridor):
        x = 1 # 0 seat
        y = 0 # 1 seat
        z = 0 # 2 seats
        for char in corridor:
            if char == 'S':
                x, y, z = 0, x + z, y
            else:
                x, y, z = x + z, y, z
        return z % (10**9+7) 
```
```JAVA []
class Solution {
    public int numberOfWays(String corridor) {
        int x = 1; // 0 seat
        int y = 0; // 1 seat
        int z = 0; // 2 seats
        int mod = (int)1e9 + 7;
        for (int i = 0; i < corridor.length(); ++i)
            if (corridor.charAt(i) == 'S') {
                x = (x + z) % mod;
                z = y; 
                y = x;
                x = 0;
            } else {
                x = (x + z) % mod;
            }
        return z;
    }
}

```

![IMG_3725.JPG](./images/0.jpeg)
