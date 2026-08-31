# Kotlin Lovers | Combinatorics | Lets do some Maths

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4288489/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4288489/)

---

# Intuition
Basically its all about understanding the max and min candies we can assign to the children. (Eating candies is not good for your teeth though)

So we check min, max for first Kid and then we calculate min, max for second kid. We don't do for third kid as he / she gets the remaining so doesn't count. ( Sorry third child)

Lets understand the equations we have
```
1. 0<= a <= l, n
2. 0<= b <= l, n
3. 0<= c <= l, n
4. a + b + c = n
```


# Lets calculate the min for a

Using equation 2 and 3 RHS we have 
c + b <= 2*l
Now add equations 4 to this 
a + (b + c) = n =>  b + c = n-a
After combining => n-a <= 2*l
i.e. a >= n - 2*l
So combining this and equation 1 LHS we get
```
MinA = Math.max(0, n - 2*l)
```


# Lets calculate the max for a

Using equation 1 RHS we have 
```
MaxA = Math.min(l,n)
```

# Lets calculate the max for B. 
Note: We want this in terms of A,as we will fix A and then calculate the range for B
Using equation 3 LHS we have 
c >= 0
Using equation 4 we have 
c = n-a-b
Combine
n - a - b >= 0
Since a is constant now
b <= n-a
Using this and RHS of equation 2 we have 

```
MaxB = Math.min(n-a, l)
```


# Lets calculate the min for B

Using equation 3 LHS we have 
c <= l
Using equation 4 we have 
c = n-a-b
Combine
n - a - b <= l
Since a is constant now
b >= n - a - l
Using this and LHS of equation 2 we have 

```
MinB = Math.max(n-a-l, 0)
```


# Complexity
- Time complexity:
O(MaxA - MinA + 1) ~ O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun distributeCandies(n: Int, limit: Int): Long {
        var count = 0L
        val minA = max(0, n - limit - limit)
        val maxA = min(limit, n)
        for(a in minA .. maxA){
            val minB = max(n - limit - a, 0)
            val maxB = min(n - a, limit)
            count += (maxB - minB).toLong() + 1L
        }
        return count
    }
}
```