# Event Scheduling Using a Binary Search Tree to Prevent Double Bookings

**Author:** Beasme
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5836794/](https://leetcode.com/problems/my-calendar-i/solutions/5836794/)

---

# Intuition
To handle this efficiently, we can use a binary search tree (BST) structure.
# Approach
1. **Binary Tree Structure:** Each node in the tree represents an event `[start, end]`.
2. **Event Insertion:** When a new event is added, we compare it to the existing events starting from the root.
- If the new event's start time is greater than or equal to the end time of the current node's event, it means the new event is entirely after the current event, so we proceed to the right subtree.
- If the new event's end time is less than or equal to the start time of the current node's event, it means the new event is entirely before the current event, so we move to the left subtree.
- If neither condition is met, it means the new event overlaps with the current event, and thus, we cannot insert it.
3. **Recursive Insertion:** We recursively follow this logic, inserting the event in the appropriate subtree if a suitable position is found (i.e., where it does not overlap with any existing event). If no such position is available, the event cannot be added.

# Example:

- Consider a root node with the event [4, 5].
- If a new event [6, 9] comes in, we check if the start of the new event (6) is greater than or equal to the end of the current root event (5). Since this is true, the new event goes to the right subtree.
- If the new event were [3, 4], we would check if its end time (4) is less than or equal to the start time of the root event (4). This is true, so it would go to the left subtree.
- If the new event overlaps with the existing event, insertion is not possible, and we return false.

This method ensures that we only insert events that do not cause overlaps, and the binary tree allows efficient event insertion and lookup.

```
[4,5] [1,2] [5,6] [11,12] [7,9] [2,3]

           [4,5]
     [1,2]       [5,6]
    []  [2,3]   []   [11,12]  
                   [7,9]    []

- If you try to add [8,11], you move to the right of [4,5]. 
- Then, you continue to the right of [5,6]. 
- Next, you go to the left of [11,12]. 
- You cannot proceed further[7,9] left or right without causing an 
  overlap, so you return false. 
```
# Complexity
- Time complexity: O(n * Log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class MyCalendar {
    public Date $date;
    /**
     */
    function __construct() {
        $this->date = new Date();
    }
  
    /**
     * @param Integer $start
     * @param Integer $end
     * @return Boolean
     */
    function book($start, $end) {
        $date = $this->date;

        return $this->bst($start, $end, $date);
    }

    function bst($start, $end, $date) {

        if (empty($date->value)) {
            $date->value = [$start, $end];

            return true;
        }
        
        list($s, $e) = $date->value;

        if ($start >= $e) {

            if (!$date->right) {
                $date->right = new Date();
            }

            return $this->bst($start, $end, $date->right);
        } else if ($end <= $s) {

            if (!$date->left) {
                $date->left = new Date();
            }

            return $this->bst($start, $end, $date->left);
        }

        return false;
    }
}

class Date {
    public array $value = [];
    public $left = null;
    public $right = null;
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * $obj = MyCalendar();
 * $ret_1 = $obj->book($start, $end);
 */
```