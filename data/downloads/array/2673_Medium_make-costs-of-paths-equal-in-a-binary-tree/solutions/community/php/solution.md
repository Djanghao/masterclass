# Simple & efficient solution

**Author:** eugene1994
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/4266549/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/4266549/)

---

Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
if you can calculate the difference b\\w the left and right sub trees you're done.

# Approach
<!-- Describe your approach to solving the problem. -->
since it's a prefect binary tree, so we know that each node has to has two nodes (except the leaf nodes). However, the general idea is to start from the last level that contains parent nodes and then all left is to compare the valuse of the left and right sub trees.

1- add the difference b\\w them to your result

2- add the subtree with the biggest value to it's parent

they give us a cost array,so if you loop at it from the right
you would access the left and right subtrees for the last parent

and to acces the parent you can use the formula :  
parent = (i/2) - 1


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $cost
     * @return Integer
     */
    function minIncrements($n, $cost) {
        $totalIncrements = 0;
        // start looping from leaf to root (bottom-up) 
        for ($i=$n-1; $i>1; $i-=2){
            // compare the cost of the left and right subtrees
            $left = $cost[$i-1];
            $right = $cost[$i];
            // to know wich one is bigger so you can return it to the parent
            $max = max($left, $right);
            // add the difference b\\w them to the total increments
            $totalIncrements += abs($left - $right);
            // add max to parent
            $cost[ceil($i/2)-1] += $max;

            // repaeat the process again 
        }
        return $totalIncrements;
    }
}


```