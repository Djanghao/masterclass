# return false 🔥

**Author:** lee215
**Votes:** 246
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/2524702/](https://leetcode.com/problems/strictly-palindromic-number/solutions/2524702/)

---

# **Intuition**
The condition is extreme hard to satisfy, think about it...
for every base `b` between `2` and `n - 2`...
4 is not strictly palindromic number
5 is not strictly palindromic number
..
then the bigger, the more impossible.
Just `return false`
<br>

# **Prove**
`4 = 100 (base 2)`, so 4 is not strictly palindromic number
for `n > 4`, consider the base `n - 2`.
In base `n - 1`, `n = 11`.
In base `n - 2`, `n = 12`, so `n` is not strictly palindromic number.

There is no strictly palindromic number n where `n >= 4`
<br>

# **More**
I think it may make some sense to ask if there a base `b`
between `2` and `n - 2` that `n` is palindromic,
otherwise why it bothers to mention `n - 2`?

It's `n - 2`, not `n - 1`,
since for all `n > 1`,
`n` is `11` in base `n - 2`.
(Because `n = (n - 1) + (1)`)

Then it's at least a algorithme problem to solve,
instead of a brain-teaser.

Maybe Leetcode just gave a wrong description.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
	return false;
```

**C++**
```cpp
	return false;
```

**Python**
```py
	return False
```
