# Official Solution

**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solution/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

We can do exactly what the problem asks: count repeating adjacent letters and remove them when the count reaches `k`. Then, we do it again until there is nothing to remove.

![Brute Force Illustration](../Figures/1209/1209_approach1.png)

**Algorithm**

1. Remember the length of the string.

2. Iterate through the string:

    - If the current character is the same as the one before, increase the count.

        - Otherwise, reset the count to `1`.

    - If the count equals `k`,  erase last `k` characters.

3. If the length of the string was changed, repeat starting from the first step.

<iframe src="https://leetcode.com/playground/n2npbziE/shared" frameBorder="0" width="100%" height="327" name="n2npbziE"></iframe>

**Complexity Analysis**

- Time complexity: $$\mathcal{O}(n^2 / k)$$, where $$n$$ is a string length. We scan the string no more than $$n / k$$ times.

- Space complexity: $$\mathcal{O}(1)$$. A copy of a string may be created in some languages, however, the algorithm itself only uses the current string.

---

### Approach 2: Memoise Count

If you observe how the count changes in the approach above, you may have an idea to store it for each character. That way, we do not have to start from the beginning each time we remove a substring. This approach will give us linear time complexity, and the trade-off is the extra memory to store counts.

**Algorithm**

1. Initialize `counts` array of size `n`.

2. Iterate through the string:

    - If the current character is the same as the one before, set `counts[i]` to `counts[i - 1] + 1`.

        - Otherwise, set `counts[i]` to `1`.

    - If `counts[i]` equals `k`,  erase last `k` characters and decrease `i` by `k`.

<iframe src="https://leetcode.com/playground/kav4bkUJ/shared" frameBorder="0" width="100%" height="327" name="kav4bkUJ"></iframe>

**Complexity Analysis**

- Time complexity: $$\mathcal{O}(n)$$, where $$n$$ is a string length. We process each character in the string once.

- Space complexity: $$\mathcal{O}(n)$$ to store the count for each character.

---

### Approach 3: Stack

Instead of storing counts for each character, we can use a stack. When a character does not match the previous one, we push `1` to the stack. Otherwise, we increment the count on the top of the stack.

![Stack Illustration](../Figures/1209/1209_approach3.png)

**Algorithm**

1. Iterate through the string:

    - If the current character is the same as the one before, increment the count on the top of the stack.

        - Otherwise, push `1` to the stack.

    - If the count on the top of the stack equals `k`, erase last `k` characters and pop from the stack.

> Note that, since `Integer` is immutable in Java, we need to pop the value first, increment it, and then push it back (if it's less than `k`).

<iframe src="https://leetcode.com/playground/3KjVTULX/shared" frameBorder="0" width="100%" height="361" name="3KjVTULX"></iframe>

**Complexity Analysis** <a name="approach3complexity"></a>

- Time complexity: $$\mathcal{O}(n)$$, where $$n$$ is a string length. We process each character in the string once.

- Space complexity: $$\mathcal{O}(n)$$ for the stack.

---
### Approach 4: Stack with Reconstruction

If we store both the count and the character in the stack, we do not have to modify the string. Instead, we can reconstruct the result from characters and counts in the stack.

**Algorithm**

1. Iterate through the string:

    - If the current character is the same as on the top of the stack, increment the count.

        - Otherwise, push `1` and the current character to the stack.

    - If the count on the top of the stack equals `k`, pop from the stack.

2. Build the result string using characters and counts in the stack.

<iframe src="https://leetcode.com/playground/TwUXiamB/shared" frameBorder="0" width="100%" height="500" name="TwUXiamB"></iframe>

**Complexity Analysis**

- Same as for [approach 3](#approach3complexity) above.

---

### Approach 5: Two Pointers

This method was proposed by @[lee215](https://leetcode.com/lee215/), and we can use it to optimize string operations in approaches 2 and 3. Here, we copy characters within the same string using the fast and slow pointers. Each time we need to erase `k` characters, we just move the slow pointer `k` positions back.

![Two Pointers Illustration](../Figures/1209/1209_approach5.png)

**Algorithm**

1. Initialize the slow pointer (`j`) with zero.

2. Move the fast pointer (`i`) through the string:

    - Copy s[i] into s[j].

    - If `s[j]` is the same as `s[j - 1]`, increment the count on the top of the stack.

        - Otherwise, push `1` to the stack.

    - If the count equals `k`,  decrease `j` by `k` and pop from the stack.

3. Return `j` first characters of the string.

<iframe src="https://leetcode.com/playground/ez3QvhCE/shared" frameBorder="0" width="100%" height="378" name="ez3QvhCE"></iframe>

**Complexity Analysis**

- Same as for [approach 3](#approach3complexity) above.