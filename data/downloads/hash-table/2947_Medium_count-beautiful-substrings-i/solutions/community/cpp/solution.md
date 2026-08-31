# Clever problem simple O(n+k) solution

**Author:** mzchen
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4331040/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4331040/)

---

This is a clone of [my original post](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330972/clever-problem-simple-o-n-solution/) for [2949. Count Beautiful Substrings II](https://leetcode.com/problems/count-beautiful-substrings-ii/).

# Approach
Substring counting with equality conditions, it rings a bell of prefix sum. Indeed, we can in a single iteration calculate the `(vowels - consonants)` difference for any prefix string, and group all prefixes by the difference. By doing so, any pair of prefixes with the same difference are grouped together, and when we take the shorter prefix off from the longer, the resulting substring will contain equal number of vowels and conconants.

But what's next when we have the groups in hand? We need to count only the pairs of prefixes which satisfy the second condition: `n * n % k == 0`, where `n` is the number of vowels (or consonants, they are equal) in the substring. Imagine if `k` is prime, then we only need to check an easier condition `n % k == 0` instead, because it's not possible to distribute factors in two `n`s. However, if `k` is composite, then yes, `k`'s factors can be distributed in two `n`s. Luckily, they are two `n`s and the factors only get doubled. Let's define an `x` by removing as many factors as possible from `k` so that when the remaining factors are doubled, the product will still be divisible by `k`. By doing so, we simplify the original `n * n % k == 0` condition into the easier `n % x == 0`. Finding `x` can be achieved with a single loop.

The remaining part is a trivial combinatory problem: count the answer. Pairs with the same `n % x` should be considered a group and only the number of items in such a group matter.

# Complexity
- Time complexity:
$$O(n + k)$$ as each prefix is accessed only twice.

- Space complexity:
$$O(n)$$

# Code
```cpp []
int beautifulSubstrings(string s, int k) {
    unordered_map<int, vector<int>> grps;
    grps[0].push_back(0);

    string vowels("aeiou");
    for (int i = 0, presum = 0; i < s.size(); i++) {
        vowels.find(s[i]) != string::npos ? ++presum : --presum;
        grps[presum].push_back(i + 1);
    }
    
    int x;
    for (x = 1; x <= k && x * x % k; x++);
    x *= 2;

    int64_t ans = 0;
    for (auto &[_, grp] : grps) {
        vector<int> mod(x);
        for (int i : grp)
            ans += mod[i % x]++;
    }
    return ans;
}
```

Though it's less easy to understand, the middle loop to find `x` can be simplified to
```cpp []
int x;
for (x = 1; x * x % (k * 4); x++);
```
This `x` represents the length of the vowels/consonants.