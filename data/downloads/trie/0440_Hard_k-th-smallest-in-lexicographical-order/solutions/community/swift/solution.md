# Beat 100% || Swift solution with explanation

**Author:** hudamabed
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818805/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818805/)

---

# Approach
	1.	Lexicographical Tree Structure:
	    \u2022	Consider the numbers from 1 to n as nodes in a lexicographical tree. 
            The root of the tree is any number starting from 1,
            and its children are the numbers formed by appending digits to the current number (e.g., 1 -> 10, 11, 12, ...).
	2.	Tree Traversal:
	\u2022	The goal is to traverse this tree level by level and count how many nodes (numbers) we have visited, starting from 1. At each step, we decide whether to move to the next sibling or go deeper into the tree.
	3.	Counting Steps:
	\u2022	For each number (node) current, we need to calculate how many steps (numbers) exist between current and its next sibling (e.g., between 1 and 2). This is done using the countSteps function, which efficiently computes the range of numbers that start with current.
	\u2022	If the total steps from current to current + 1 is less than or equal to k, it means the k-th number lies beyond this range, so we can skip the entire subtree rooted at current and move to the next sibling (current += 1).
	\u2022	If the steps exceed k, we go deeper into the current subtree (current *= 10) to explore the children of current.
	4.	Termination:
	\u2022	This process continues until we have traversed exactly k nodes. At this point, the value of current is the k-th number.

# Complexity
- Time complexity:O(log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
func findKthNumber(_ n: Int, _ k: Int) -> Int {
    var current = 1
    var i = 1

    // Helper function to count steps between 'prefix' and 'prefix + 1'
    func countSteps(from prefix: Int, to n: Int) -> Int {
        var current = prefix
        var next = prefix + 1
        var steps = 0
        
        while current <= n {
            steps += min(n + 1, next) - current
            current *= 10
            next *= 10
        }
        
        return steps
    }

    while i < k {
        let steps = countSteps(from: current, to: n)

        if i + steps <= k {
            current += 1
            i += steps
        } else {
            current *= 10
            i += 1
        }
    }

    return current
}
}
```