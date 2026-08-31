# PHP - 87ms / beats 100% / Not clean code but easy-understanding

**Author:** tinghaolai
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/3198785/](https://leetcode.com/problems/my-calendar-iii/solutions/3198785/)

---

# Intuition

Use the same structure from `My Calendar I` and `My Calendar II`,
whick build the binary tree with node's value is a number range.

# Approach

Since we can have book time intersection in this problem,
so we can insert a node for `intersected time range`,
and accumulate the depth of intersect time.

The way to store `intersected time range` is using another direction `middle` to store insertct booking range.

More specific:

1. Booking time is out of range of leaf node (which mean currently no intersect with existing booking)
    * Insert new node to the left/right side
    * new node's depth stay the same to the previous node
      * e.g.: If node insert into the left/right side of the root node, then the depth stay the same from root node, which is 1.
      * But if the previous node's depth is 2, so in this time range, we already have one intersect (2 booking time, which depth is 2).
2. Booking time is in the range of leaf node, insert new node ot the middle and deptth +1.
3. If part of time range is in the leaf node's time range, and the others is not, then split the time range into two part and insert twice.

The tree will look like

```
       10-20
       (d:1)
         |        \\
       15-18       25 - 30
       (d:2)       (d:1)
   /     |     \\
 10-13  14-15  16-18
 (d:2)  (d:3)  (d:2)

```


# Code
```
class Tree
{
    public $val;
    public $start;
    public $end;
    public $left = null;
    public $right = null;
    public $middle = null;
    public function __construct($start, $end, $val)
    {
        $this->start = $start;
        $this->end = $end;
        $this->val = $val;
    }
}


class MyCalendarThree {
    public $root = null;
    public $maxDep = 0;
    /**
     */
    function __construct() {
    }

    /**
     * @param Integer $start
     * @param Integer $end
     * @return Integer
     */
    function book($startTime, $endTime) {
        $this->insert($this->root, $startTime, $endTime, 1);

        return $this->maxDep;
    }

    private function insert(&$node, $start, $end, $depth) {
        // null means we've got the target leaf position,
        if (!$node) {
            // the depth stored is useless, only for debug.
            $node = new Tree($start, $end, $depth);
            if ($depth > $this->maxDep) {
                // update new depth if bigger than current max depth
                $this->maxDep = $depth;
            }

            return true;
        }

        // case 1: in time range
        if (
            $start >= $node->start &&
            $end <= $node->end
        ) {
            return $this->insert($node->middle, $start, $end, $depth + 1);
        }

        // case 2: smaller time range
        if ($end <= $node->start) {
            return $this->insert($node->left, $start, $end, $depth);
        }

        // case 3: bigger time range
        if ($start >= $node->end) {
            return $this->insert($node->right, $start, $end, $depth);
        }

        // case 4: time range the have: samller, middle, bigger
        // so we split into 3 part
        if ($start < $node->start && $end > $node->end) {
            $result = $this->insert($node->middle, $node->start, $node->end, $depth + 1);
            if (!$result) {
                return false;
            }

            $result =  $this->insert($node->left, $start, $node->start, $depth);
            if (!$result) {
                return false;
            }

            return $this->insert($node->right, $node->end, $end, $depth);
        }

        // case 5: part of time in range, other part smaller.
        if ($start < $node->start) {
            $result = $this->insert($node->middle, $node->start, $end, $depth + 1);
            if (!$result) {
                return false;
            }

            return $this->insert($node->left, $start, $node->start, $depth);
        }

        // case 6: part of time in range, other part bigger.
        $result = $this->insert($node->middle, $start, $node->end, $depth + 1);
        if (!$result) {
            return false;
        }

        return $this->insert($node->right, $node->end, $end, $depth);
    }
}
```