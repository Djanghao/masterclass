# Easiest Java Solution ( Brute Force [ 47.49% ] ) ( Optimized [ 100% ] )

**Author:** RajarshiMitra
**Votes:** 17
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5325505/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5325505/)

---

# Approach (Brute Force)
1. **Initialize the Result Variable**:
   - Start with a result variable `res` initialized to 0. This will store the cumulative permutation difference.

2. **Nested Loop to Compare Characters**:
   - Use two nested loops:
     - The outer loop iterates through each character `s.charAt(i)` in the string `s` using its index `i`.
     - The inner loop iterates through each character `t.charAt(j)` in the string `t` using its index `j`.

3. **Compare Characters**:
   - For each character `s.charAt(i)`, compare it with `t.charAt(j)`.

4. **Calculate the Absolute Difference**:
   - If the characters match (`s.charAt(i) == t.charAt(j)`), calculate the absolute difference between the indices `i` and `j`.

5. **Update the Result**:
   - Add this absolute difference to the result variable `res`.

6. **Return the Result**:
   - After both loops complete, return the accumulated result `res`.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int findPermutationDifference(String s, String t) {
        int res=0;
        for(int i=0; i<s.length(); i++){
            for(int j=0; j<t.length(); j++){
                if(s.charAt(i) == t.charAt(j)) res+=Math.abs(i-j);
            }
        }
        return res;
    }
}
```
# Approach (Optimized)
1. **Initialize the Result Variable**:
   - Start with a result variable `res` initialized to 0. This variable will store the cumulative difference.

2. **Iterate Through the Characters of the First String**:
   - Loop through each character `ch` in the string `s` using its index `is`.

3. **Find the Index of the Character in the Second String**:
   - For each character `ch` in `s`, find its index `it` in the string `t` using the `indexOf` method. This gives the position of `ch` in `t`.

4. **Calculate the Absolute Difference**:
   - Compute the absolute difference between the current index `is` in `s` and the found index `it` in `t`.

5. **Update the Result**:
   - Add this absolute difference to the result variable `res`.

6. **Return the Result**:
   - After the loop completes, return the accumulated result `res`.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int findPermutationDifference(String s, String t) {
        int res=0;
        for(int is=0; is<s.length(); is++){
            char ch=s.charAt(is);
            int it=t.indexOf(ch);
            res+=Math.abs(is-it);
        }
        return res;
    }
}
```

![193730892e8675ebafc11519f6174bee5c4a5ab0.jpeg](./images/0.jpeg)
