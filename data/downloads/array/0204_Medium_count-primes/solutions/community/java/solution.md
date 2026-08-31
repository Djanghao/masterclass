# JS, Python, Java, C++ | Easy Sieve of Eratosthenes Solution w/ Explanation

**Author:** sgallivan
**Votes:** 199
**Link:** [https://leetcode.com/problems/count-primes/solutions/1200796/](https://leetcode.com/problems/count-primes/solutions/1200796/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

There are several ways to go about solving this problem, but the classic solution is known as the **sieve of Eratosthenes**. For the sieve of Eratosthenes, we start by creating a boolean array (**seen**) of size **n** to represent each of the numbers less than **n**.

We start at **2** and for each number processed (**num**), we iterate through and mark each multiple (**mult**) of **num**, starting at **num^2**, as seen. We start at **num^2** because every multiple up to the **num**'th multiple will have been guaranteed to have been seen before, since they're also a multiple of a smaller number. For example, when processing **5**s, we can skip to **25** because **10** will have been seen when we processed **2**s, **15** when we processed **3**s, and **20** when we processed **2**s.

Then we move **num** forward, skipping any numbers that have already been seen. By doing this, we will only stop on prime numbers, because they haven't been seen as a multiple of a previous iteration. We just have to update our count (**ans**) each time we stop and then **return ans** once we reach **n**.

![Visual 1](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)
( visual from the **[wikipedia page on the sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)** )

---

#### ***Javascript Code:***
```javascript
var countPrimes = function(n) {
    let seen = new Uint8Array(n), ans = 0
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue
        ans++
        for (let mult = num * num; mult < n; mult += num)
            seen[mult] = 1
    }
    return ans
};
```

---

#### ***Python Code:***
```python
class Solution:
    def countPrimes(self, n: int) -> int:
        seen, ans = [0] * n, 0
        for num in range(2, n):
            if seen[num]: continue
            ans += 1
            seen[num*num:n:num] = [1] * ((n - 1) // num - num + 1)
        return ans
```

---

#### ***Java Code:***
```java
class Solution {
    public int countPrimes(int n) {
        boolean[] seen = new boolean[n];
        int ans = 0;
        for (int num = 2; num < n; num++) {
            if (seen[num]) continue;
            ans += 1;
            for (long mult = (long)num * num; mult < n; mult += num)
                seen[(int)mult] = true;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    int countPrimes(int n) {
        vector<bool> seen(n, false);
        int ans = 0;
        for (int num = 2; num < n; num++) {
            if (seen[num]) continue;
            ans++;
            for (long mult = (long)num * num; mult < n; mult += num)
                seen[mult] = true;
        }
        return ans;
    }
};
```