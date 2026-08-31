# Explained with flowchart, code walkthrough, complexity analysis. Time complexity O(n + m)

**Author:** kanatara
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/6000623/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/6000623/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This input array can be viewed as a tree where \u2018int\u2019 type entries are leaf nodes and \u2018list\u2019 type entries are intermediate nodes. While doing level order traversal on this tree, integer data are added to \u2018unweighted sum variable. As we go to next level, Unweightedsum value will be added to weightedSum variable. At the end of the traversal, weightedSum variable contains the inverse Weighted sum of the array.


# Approach
<!-- Describe your approach to solving the problem. -->
Please check out this video for a detailed explanation:
https://youtu.be/XALL49Q6kWo

# Complexity
- Time complexity: O(n + m)
- n - no. of integer elements
- m - no. of sublists

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(n)
- n - no. of integer elements

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (n NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (n NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (n *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (n NestedInteger) GetList() []*NestedInteger {}
 */

func depthSumInverse(nestedList []*NestedInteger) int {
    weightedSum := 0
    unWeightedSum := 0

    for len(nestedList) > 0 {
        nextLevelElements := []*NestedInteger{}
        count := len(nestedList)
        for i :=0; i< count; i++ {
            if nestedList[i].IsInteger() {
                unWeightedSum += nestedList[i].GetInteger()
            } else {
                nextLevelElements = append(nextLevelElements, nestedList[i].GetList()...)
            }
        }
        nestedList = nextLevelElements
        weightedSum += unWeightedSum
    }
    return weightedSum
}


```