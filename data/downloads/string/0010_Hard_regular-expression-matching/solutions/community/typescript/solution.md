# [EASY TO READ][TOP 20% TIME] DP Solution from Editorial in Typescript

**Author:** lolimdumbwataboutu
**Votes:** 2
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/3994444/](https://leetcode.com/problems/regular-expression-matching/solutions/3994444/)

---


# Approach
this is the top down DP approach from the editorial except written in native typescript

Some of the code is extracted into helper functions to help readability.

# Complexity
- Time complexity: O(M)(N)
- Space complexity: O(M)(N)

*(read editorial for more details)*

# Code
```
function isMatch(s: string, p: string): boolean {
  const memo: boolean[][] = [];

  // this is the main DP recursion. its the exact same as it would work recursively
  // except that we cache the results before returning it
  function isMatchDp(i:number,j:number): boolean {
    // if it exists in cache then return it
    if (getMemo(i,j) !== undefined) {
        return getMemo(i,j);
    }
    // BASE CASE:
    // if theres remaining values in string, but none in pattern then we didn't match everything return false
    if (i < s.length && j === p.length) return setMemo(i,j,false);
    // if theres nothing left to match then we've matched everything, return true
    if (i === s.length && j === p.length) return setMemo(i,j,true);

    // STAR CASE:
    if (p[j+1] === "*") {
      if (matchFirstChar(i, j)) {
        // if the chars match then either:
        // take one character and keep star
        // do nothing and remove star
        // if either recurses true, then we got at least one match, so the whole expression is valid
        return setMemo(i,j,isMatchDp(i+1, j) || isMatchDp(i, j+2));
      }
      // otherwise if nothing matches, then we remove star and continue
      return setMemo(i,j,isMatchDp(i, j+2));
    }

    // REGULAR CASE:
    if (matchFirstChar(i,j)) {
      // successful match, recurse
      return setMemo(i,j,isMatchDp(i+1, j+1));
    }

    // first characters never matched, return false
    return setMemo(i,j,false);
  }

  function getMemo(i:number, j:number): boolean {
    return memo?.[i]?.[j];
  }
  function setMemo(i:number, j:number, val:boolean): boolean {
      if (memo[i] === undefined) {
        memo[i] = [];
      }
      memo[i][j] = val;
      return val;
  }

  // if chars match either because they are the same or pattern is "."
  function matchFirstChar(i:number, j:number): boolean {
    if (s[i] === undefined) return false;
    if (p[j] === ".") return true;
    return s[i] === p[j];
  }


  return isMatchDp(0,0);
}

```