# C++ O(n) explained

**Author:** alvin-777
**Votes:** 13
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/922323/](https://leetcode.com/problems/kth-smallest-instructions/solutions/922323/)

---

#### Fundamentals

- We need to move to the right `col` steps and down `row` steps to reach to the destination (bottom right) cell => the result string is always:
  - of length `col + row`
  - consisted of `row` 'H's and `col` 'V's
- The possible strings are **lexicographically ordered** => 'H' < 'V'
- The total number of possible paths (number of combinations of `row` 'H's and `col` 'V's) is `nCr(row + col, row)`. i.e., `"length of string" choose "number of H"`
  - Why? We have `row + col` positions in the string, we need to choose `row` of them for 'H'.
- How to calculate `N choose K`?
  - `N!/(N-K)!/K!` (Why? this is a math question. I'm not going to explain it here)
  - `tgamma(x)` returns `(x-1)!`
  - There are many other methods to calculate `N choose K`

#### Solve the Problem

1. Let's only consider the first letter.
  a) Say, we have `h` of 'H's and `v` of 'V's, there are `x` possible combinations (`x = nCr(h+v, h)`)
  b) The chance we choose 'H' for the first letter is `h/(h+v)` => in all combinations, there are `y` of them (`y = x * h/(h+v)`) have 'H' as the first letter
  c) All the combinations are *lexicographically ordered* => the **first** `y` combinations have 'H' as the first letter
  d) We want the *kth* combination => **if `k <= y`, the first letter should be 'H', otherwise it should be 'V'.**
2. We have found the first letter. Now let's look at the next one:
	a) If the first letter is 'H'
		- The number of combinations start with 'H' is `y` (calculated in step 1)
		- We have used one 'H', and we have `h-1` left
		- The length of rest of strting is `h+v-1`
		- The remaining combinations (all start with 'H') - from 1st to yth, since k fell into this range, it remains the same (we need to find kth combination of 1 to y).
	b) If the first letter is 'V'
		- The number of combinations start with 'V' is `x - y`
		- We didn't use 'H', so we still have `h` 'H's left
		- The length of rest of strting is `h+v-1`
		- The remaining combinations (all start with 'V') are from `y+1` to `x` => we need to find (kth from 1st, that is) `k-y`th combination from `y+1`.
	c) Apply same method of step 1, we can find the 2nd letter.
3. Repeated step 2 until we used either all 'H's or all 'V's.
4. Fill rest of the string with the other letter.

#### Code

```cpp
class Solution {
public:
    size_t NChooseK(int n, int k) {
        return round(tgamma(n+1)/tgamma(k+1)/tgamma(n-k+1));
    }
    
    string kthSmallestPath(vector<int>& destination, int k) {
        int numHLeft = destination[1], numCharsToBuild = destination[0] + destination[1];
        uint64_t totalMax = NChooseK(numCharsToBuild, numHLeft);
        string ans = "";
        while (numHLeft && numHLeft < numCharsToBuild) {
            uint64_t maxH = totalMax*numHLeft/numCharsToBuild;
            if (k <= maxH) {
                ans += "H";
                numHLeft--;
                totalMax = maxH;
            } else {
                ans += "V";
                totalMax -= maxH;
				k -= maxH;
            }
            numCharsToBuild--;
        }
        ans += string(numCharsToBuild, numHLeft ? 'H' : 'V');
        return ans;
    }
};
```

#### Complexity

We built the string of length `row + col` letter by letter => O(n), where `n = row + col`

#### Additional Note

Calculating `N choose K` can be time consuming. We only need to calculate it **once** in this solution, instead of _every step_ (like many other solutions do).
