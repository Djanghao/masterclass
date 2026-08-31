# Simple recursive solution in Ruby.

**Author:** mariusz360
**Votes:** 4
**Link:** [https://leetcode.com/problems/path-sum/solutions/36590/](https://leetcode.com/problems/path-sum/solutions/36590/)

---

    def has_path_sum(root, sum)
      return false if root.nil?
    
      if root.val == sum && root.left.nil? && root.right.nil?
        return true
      end
      
      has_path_sum(root.left, sum - root.val) || has_path_sum(root.right, sum - root.val)
    end