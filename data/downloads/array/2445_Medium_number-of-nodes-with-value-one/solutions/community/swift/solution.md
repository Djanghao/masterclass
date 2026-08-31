# Swift

**Author:** chadnewbry
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2881501/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2881501/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Brute force approach would be to propogate every query through the entire tree. This is too slow. 

Please leave comments if you see room for improvement :) 

# Approach
<!-- Describe your approach to solving the problem. -->
I ended up using a Set to store queries. I didn't originally notice a query could be repeated as an input. See the code for how I take this case into consideration. 

I store the tree in an array of size n - 1. 

I then recursively go through the tree. At each node I check to see if the node exists in the set. If it does then I flip the value of the node. If the node value is 1 I increment my counter for 1s in the tree. 

Either way I pass the current node value onto recursive calls to the left and right child. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - Each node is visted once and only once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n + n)$$ -> $$O(n)$$ - array to track tree (n), set (n)

# Code
```
class Solution {
    func numberOfNodes(_ n: Int, _ queries: [Int]) -> Int {
        // create an array modeling the nodes of the tree
        // array[0] is Node 1 
        // array[i] is Node i + 1 
        var array = Array(repeating: 0, count: n)
        var set = Set<Int>()

        // put queries into a set
        // performing the same query
        // twice cancels itself out 
        for q in queries {
            if set.contains(q) {
                // so if the set contains the query already remove it
                set.remove(q)
            } else {
                // otherwise add it to the set
                set.insert(q)
            }
        }

        var onesCount = 0

        r(index: 0, isOne: false)

        func r(index: Int, isOne: Bool) {
            if index >= array.count {
                return
            }

            var isOne = isOne
            var node = index + 1 

            if set.contains(node) {
                isOne = !isOne
            }

            if isOne {
                onesCount += 1
            }

            // could structure this differently and 
            // return 1 + r(leftChild, rightChild)
            // then have the base case be return 1 
            r(index: index * 2 + 1, isOne: isOne)
            r(index: index * 2 + 2, isOne: isOne)
        }

        return onesCount
    }
}
```