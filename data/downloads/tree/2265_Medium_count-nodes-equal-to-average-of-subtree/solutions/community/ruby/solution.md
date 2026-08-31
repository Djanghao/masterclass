# Ruby || Recursion || OOP approach

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4238090/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4238090/)

---


# Code
```ruby
ZARR = [0, 0, 0]

class NilClass
    def traverse = ZARR
end

class Array
    def esum = first.zip(last).collect(&:sum)
end

class TreeNode
    # @return [cnt, sum, nchilds]
    def traverse
        below = [left, right].collect(&:traverse).esum
        avg = (below[1] + val) / (below.last + 1)
        [below, [(avg == val ? 1 : 0), val, 1]].esum
    end
end

def average_of_subtree(root)
    root.traverse.first
end
```