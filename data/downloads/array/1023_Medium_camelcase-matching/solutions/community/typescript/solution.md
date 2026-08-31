# consuming patterns

**Author:** reda_ea
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/6114165/](https://leetcode.com/problems/camelcase-matching/solutions/6114165/)

---

# Intuition

if a query can "consume" the pattern, and only have lowercase characters left, it matches

# Approach

for each `queries[i]`, we initialize `remaining` with the full pattern.

we then proceed to remove every matching character from `remaining`, while ignoring unmatched lowercase characters (by either returning a substring or the full `remaining`)

if an uppercase unmatched character is encountered, the query will not match, we therefore set `remaining` to a non alpha character (`-`) to guarantee no future matches.

in the end if the pattern was not reduced to an empty string (either because the query did not fully consume it, or because a non match left us with the string `"-"`) the match has failed

# Complexity
- Time complexity:
$$O(m.n)$$ - `queries.length` x `queries[i].length`

- Space complexity:
$$O(1)$$

# Code
```typescript []
function camelMatch(queries: string[], pattern: string): boolean[] {
    return queries.map(query => ![...query].reduce((remaining, char) => {
        if(remaining && char == remaining[0])
            return remaining.substring(1);
        if(char.match(/[a-z]/))
            return remaining;
        return "-";
    }, pattern))
};
```