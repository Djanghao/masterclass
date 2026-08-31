# JS, Python, Java, C++ | Efficient Solution w/ Explanation

**Author:** sgallivan
**Votes:** 27
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123830/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123830/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to attempt all permutations, but that would run up to **2.7e10** attempts. The first important thing to notice is that the range of numbers is very small at **[0,100]**. With that few number options, any large input array (**A**) will have many duplicates, which means we're looking at a **combinatorics** solution.

In order to use the combinatorics shortcut, however, we'll first have to make a **frequency map** of the numbers in **A**. We could always use a standard map for this, but since the range of numbers is so small and **0-indexed**, it makes more sense to use an **array** instead.

After we've iterated through **A** and filled our number map (**nmap**) with the number frequencies, we can get down to the real work. The normal approach here would be to figure out the distinct numbers available and use nested loops to attempt every possible permutation. But rather than doing this, which would require many array calls, we can again take advantage of the fact that the number range is so small.

We can iterate through every possible permutation from **[0,100]**, regardless of wheter the numbers are in **A**. Since we've made a frequency map, those numbers will be represented as **0**'s, which will handily prevent anything from being added to our answer (**ans**) for permutations that we can't make, and by using simple math instead of many array calls, we can actually be more performant.

Still, there are ways to streamline this process. The basic approach will be to use a **2-pointer system** to find two of our values and then mathematically figure the third, before applying the proper permutation formula to the values.

It should be apparent that our largest value (**k**) can never go above the target (**T**), nor can it obviously go above the max value of **100**, so we can start it out at **min(T, 100)** and decrement from there. Also, since it will always represents the largest of the three values, it can never go below **T / 3**, because then the two smaller numbers would never be able to bring it up to **T**.

Moving down to the next value (**j**), we can see that it can never be larger than **k** by definition, nor can it be larger than the remaining amount of space (**rem**) left to **T**, so we should start it at **min(rem, k)**. Similar to **k**, **j** can also never go below **rem / 2**.

Once we have two of the three values, we can check for their frequencies. If any of them are **0**'s, then it will automatically make the result of its permutation check a **0** as well. We can also potentially save some processing by checking for **0**'s and **continuing** before applying the combinatorics formulas.

If **i == k**, then we know that **i == j == k** because **j** has to be between **i** and **k**, so we'll have to use the **n choose 3** formula. We should also check if any two other values are the same, then we should use **(n choose 2) * (n choose 1)**. Otherwise, we can just use the simple combinations formula.

Then it's important to remember to apply the **modulo** before **returning**.

---

#### ***Implementation:***

Javascript was actually faster with an approach that featured isolating the actual distinct elements, sorting them, and then running efficiently through the combinations, but the code was much longer and more complex. This method is much easier and nearly as fast. In either case, we should use a typed array here for the arraymap.

Java was oddly slower at the iteration shortcuts and actually ran faster without the added processes.

Java and C++ should use **long** for their **ans** (prior to returning it, at least), and even for **nmap**, otherwise we'll have to cast those values to **long** each time anyway.

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 40.5MB** (beats 100% / 80%).
```javascript
var threeSumMulti = function(A, T) {
    let nmap = new Uint16Array(101), third = T / 3, ans = 0
    for (let i in A) nmap[A[i]]++
    for (let k = Math.min(T, 100); k >= third; k--) {
        let rem = T - k, half = rem / 2
        for (let j = Math.min(rem, k); j >= half; j--) {
            let i = rem - j, x = nmap[i], y = nmap[j], z = nmap[k], res
            if (i === k) res = x * (x-1) * (x-2) / 6
            else if (i === j) res = x * (x-1) / 2 * z
            else if (j === k) res = x * y * (y-1) / 2
            else res = x * y * z
            ans = (ans + res) % 1000000007
        }
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **60ms / 14.2MB** (beats 100% / 92%).
```python
class Solution:
    def threeSumMulti(self, A, T):
        nmap, third, ans = [0 for _ in range(101)], ceil(T / 3) - 1, 0
        for num in A: nmap[num] += 1
        for k in range(min(T,100), third, -1):
            rem = T - k
            half = ceil(rem / 2) - 1
            for j in range(min(rem, k), half, -1):
                i = rem - j
                x, y, z = nmap[i], nmap[j], nmap[k]
                if i == k: ans += x * (x-1) * (x-2) // 6
                elif i == j: ans += x * (x-1) // 2 * z
                elif j == k: ans += x * y * (y-1) // 2
                else: ans += x * y * z
        return ans % 1000000007
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 38.3MB** (beats 100% / 98%).
```java
class Solution {
    public int threeSumMulti(int[] A, int T) {
        long[] nmap = new long[101];
        long ans = 0;
        for (int num : A) nmap[num]++;
        for (int k = 100; k >= 0; k--)
            for (int j = k; j >= 0; j--) {
                int i = T - k - j;
                if (i > j || i < 0) continue;
                long x = nmap[i], y = nmap[j], z = nmap[k], res = x * y * z;
                if (res == 0) continue;
                if (i == k) res = x * (x-1) * (x-2) / 6;
                else if (i == j) res = x * (x-1) / 2 * z;
                else if (j == k) res = x * y * (y-1) / 2;
                ans += res;
            }
        return (int)(ans % 1000000007);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 10.2MB** (beats 99% / 100%).
```c++
class Solution {
public:
    int threeSumMulti(vector<int>& A, int T) {
        long nmap[101] = {0}, ans = 0;
        double third = T / 3;
        for (int num : A) nmap[num]++;
        for (int k = min(T, 100); k >= third; k--) {
            int rem = T - k;
            double half = rem / 2;
            for (int j = min(rem, k); j >= half; j--) {
                int i = rem - j;
                if (i > j || i < 0) continue;
                long x = nmap[i], y = nmap[j], z = nmap[k], res = x * y * z;
                if (res == 0) continue;
                if (i == k) res = x * (x-1) * (x-2) / 6;
                else if (i == j) res = x * (x-1) / 2 * z;
                else if (j == k) res = x * y * (y-1) / 2;
                ans += res;
            }
        }
        return (int)(ans % 1000000007);
    }
};
```