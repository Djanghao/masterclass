# Easy Solution in TS no need to store......

**Author:** hashcoderz
**Votes:** 2
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5252521/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5252521/)

---

# Solution 1 (Basic Approach)
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we need to determine the "**distance**" between the characters of the string t in terms of their positions in the string s. Specifically, for each character in t, we calculate the absolute difference between its position in s and its position in t, and then sum up these differences.

# Approach 
<!-- Describe your approach to solving the problem. -->
1. **Initialization**: Start with a variable sum to accumulate the total difference.
2. **Iteration**: Loop through each character in the string t.
3. **Calculation**:
a. Find the index of the current character in the string s.
b. Calculate the absolute difference between this index and the     current index in t.
c. Add this difference to the sum.
4. **Return Result**: After processing all characters, return the accumulated sum.
# Complexity
- **Time complexity**: $$O(n*m)$$ ,where n is the length of t and m is the average length to search in s. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity:** The space complexity is $$O(1)$$, since we are only using a constant amount of extra space for the variable sum.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript []
function findPermutationDifference(s: string, t: string): number {
    let sum : number = 0;
    for(let i=0; i<t.length; i++){
        sum+= Math.abs(s.indexOf(t.charAt(i)) - i)
    }
    return sum;
};
```

# Solution 2 (Fun with JS......)
# Intuition
Here\u2019s another approach using the Array.from and reduce methods for a more functional programming style:
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**:
a. sum is set to 0.
2. **Iteration**:
a. We loop through each character in t using a for loop.
b. For each character, we find its index in s using s.indexOf(t.charAt(i)).
c. We calculate the absolute difference between this index and i.
d. We add this difference to sum.
3. **Return**:
Finally, we return the accumulated sum.

# Complexity
- **Time complexity**: $$O(n*m)$$ ,where n is the length of t and m is the average length to search in s. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity:** The space complexity is $$O(1)$$, since we are only using a constant amount of extra space for the variable sum.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript []
function findPermutationDifference(s: string, t: string): number {
     return Array.from({ length: t.length }, (_, i) => Math.abs(s.indexOf(t[i]) - i)).reduce((a, b) => a + b, 0);
};
```
# Example
- Let's consider an example where s = "abcd" and t = "bcda":

1. For t[0] = 'b': s.indexOf('b') = 1 and the index in t is 0, so the difference is |1 - 0| = 1.
2. For t[1] = 'c': s.indexOf('c') = 2 and the index in t is 1, so the difference is |2 - 1| = 1.
3. For t[2] = 'd': s.indexOf('d') = 3 and the index in t is 2, so the difference is |3 - 2| = 1.
4. For t[3] = 'a': s.indexOf('a') = 0 and the index in t is 3, so the difference is |0 - 3| = 3.
5. The total sum is 1 + 1 + 1 + 3 = 6.

### If you like the content then Pls Upvote.... \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F