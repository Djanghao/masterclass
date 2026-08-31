# Swift | Explained solution

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3710401/](https://leetcode.com/problems/buddy-strings/solutions/3710401/)

---

# Approach

First, if the strings lengths are not equal, no swap can help with that, return false.

Next, find all differences between the strings.

If there are exactly two positions with non-matching symbols, check whether swapping characters on these two positions will make them equal.

If it turns out that there are no differences, it means that the strings are already equal\u2026 but by the problem conditions we have to perform a swap. So we check if there are any repeating characters in `s`, so we can swap them without changing the string.

These are all cases where it's possible to obtain equality by a single swap. For the rest, the answer is false.

## Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

## Code
```
class Solution {
    func buddyStrings(_ s: String, _ goal: String) -> Bool
    {
        if s.count != goal.count { return false }

        let diffs = s.indices.filter { s[$0] != goal[$0] }
        
        if diffs.count == 2 // try swap these two
        {
            return s[diffs[0]] == goal[diffs[1]] 
                && s[diffs[1]] == goal[diffs[0]]
        }
        else if diffs.count == 0 // check if there are any repeats in s  
        {                        // that could be swapped with each other
            var charSet: Set<Character> = []
            return s.contains { !charSet.insert($0).inserted }
        }
        else { return false }
    }
}
```

# Optimization of the above approach

It can be noted that if during the process of locating the differences their number exceeds 2, further search is not necessary, the answer is already unambiguously false.
So, let's implement the early termination for that case.
The simplest would be just fill the `diffs` array in a loop, but let's do it a little differently.
Just to show how one can break out of the execution of such functions as `map`, `filter`, `reduce`, where normally is no way to stop, we'll calculate the differences with the `reduce` function using *exceptions* for early termination.

## Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$
Generally speaking, the space complexity is $O(c)$, where $c$ is the amount of allowed symbols. As in our case the number of lowercase letters is limited to 26, we consider it a constant.

```
class Solution {
    func buddyStrings(_ s: String, _ goal: String) -> Bool
    {
        if s.count != goal.count { return false }

        let diffs: [String.Index]
        do {
            diffs = try s.indices.reduce(into: [])
            {
                diffsArray, index in
                if s[index] != goal[index] { diffsArray.append(index) }
                if diffsArray.count > 2 { throw "Too many diffs" }
            }
        }
        catch { return false }
        
        if diffs.count == 2 // try swap these two
        {
            return s[diffs[0]] == goal[diffs[1]] 
                && s[diffs[1]] == goal[diffs[0]]
        }
        else if diffs.count == 0 // check if there are any repeats in s  
        {                        // that could be swapped with each other
            var charSet: Set<Character> = []
            return s.contains { !charSet.insert($0).inserted }
        }
        else { return false }
    }
}
extension String: Error {}
```