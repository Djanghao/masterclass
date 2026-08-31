# Golang backtracking solution with explanation

**Author:** anandsuman33
**Votes:** 0
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/3485299/](https://leetcode.com/problems/cracking-the-safe/solutions/3485299/)

---

# Intuition
To crack a password we need to look at all possible combinations using n letters.
That would mean we have k^n combinations to look at. We also know that every combination is not mutually exclusive from other combination meaning they can have some letters in common.
For e.g
k=2, n=2
Possible combinations are :-
1. "00"
2. "01"
3. "10"
4. "11"

If we look at string "010", it has 2 combinations in it and it didn't take 4 letters to build it. So our task is to figure out minimum length string that can cover all possible combinations.

# Approach
In order to get minimum length, we need to make sure that a combination doesn't occur **more than once** in the solution string.
We do this by keeping a visited map, where it tracks what combinations have we already added in the string.

We try out a new combination by trying out every possible letter from 0 to k-1. And we try to see if we can get the answer i.e. visited length is equal to max combinations.

As a starting value we always try with all 0s. i.e. if n=3 our starting string is "000" and we try out the 4th letter using the above approach and see if we can get to the terminating condition which is if we have visited all combinations that occur only once.

Note: In every iteration, we take the last n-1 letters of solution string and append a new letter to see if we have already visited it

If we cannot find the solution, we simply backtrack and try out a different letter.

# Complexity
- Time complexity:
Since we are trying out every combination recursively, time complexity is O(k^n) 

- Space complexity:
We are keeping a visited to store all possible combinations, so space complexity is also O(k^n)

# Code
```
func crackSafeUtil(solution *[]byte, visited map[string]bool, maxCombinations, n, k int) bool {
    if len(visited) == maxCombinations {
        return true
    }

    // take last n-1 characters from solution
    var subStr = (*solution)[len(*solution) - n + 1:]
    for i:=0; i<k; i++ {
        subStr = append(subStr, byte('0' + i))
        if !visited[string(subStr)] {
            *solution = append(*solution, byte('0' + i))
            visited[string(subStr)] = true
            if crackSafeUtil(solution, visited, maxCombinations, n, k) {
                return true
            }
            // backtrack
            *solution = (*solution)[:len(*solution)-1]
            delete(visited, string(subStr))
        }
        subStr = subStr[:len(subStr)-1]
    }

    return false
}

func crackSafe(n int, k int) string {
    visited := map[string]bool{}
    maxCombinations := int(math.Pow(float64(k), float64(n)))
    var solution []byte
    for i:=0; i<n; i++ {
        solution = append(solution, '0')
    }
    visited[string(solution)] = true
    crackSafeUtil(&solution, visited, maxCombinations, n, k)
    return string(solution)
}
```