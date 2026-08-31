# PHP two heap solution

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/5638418/](https://leetcode.com/problems/sliding-window-median/solutions/5638418/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use min and max heap and balance them everytime a new element is added
balance would be either 0, or 2 or -2 

# Complexity
- Time complexity:
O((n - k) * log(k))

- Space complexity:
O(k)

# Code
```
class Solution {

    // Time Complexity: O((n - k) * log(k))
    // Space Complexity: O(k)

    private function find_median($max_heap, $min_heap, $heap_size)
    {
        if ($heap_size % 2 == 1) {
            return $max_heap->top();
        } else {
            return ($max_heap->top() + $min_heap->top()) / 2;
        }
    }

    public function medianSlidingWindow($nums, $k)
    {
        $max_heap = new SplMaxHeap();
        $min_heap = new SplMinHeap();
        $heap_dict = [];
        $result = [];

        // Initial population of heaps
        for ($i = 0; $i < $k; $i++) {
            $max_heap->insert($nums[$i]);
            $min_heap->insert($max_heap->extract());
            if ($min_heap->count() > $max_heap->count()) {
                $max_heap->insert($min_heap->extract());
            }
        }

        $median = $this->find_median($max_heap, $min_heap, $k);
        $result[] = $median;

        // Sliding window
        for ($i = $k; $i < count($nums); $i++) {
            $prev_num = $nums[$i - $k];
            if (!isset($heap_dict[$prev_num])) {
                $heap_dict[$prev_num] = 0;
            }
            $heap_dict[$prev_num]++;

            $balance = ($prev_num <= $median) ? -1 : 1;

            if ($nums[$i] <= $median) {
                $balance++;
                $max_heap->insert($nums[$i]);
            } else {
                $balance--;
                $min_heap->insert($nums[$i]);
            }

            if ($balance < 0) {
                $max_heap->insert($min_heap->extract());
            } elseif ($balance > 0) {
                $min_heap->insert($max_heap->extract());
            }

            while (!$max_heap->isEmpty() && isset($heap_dict[$max_heap->top()]) && $heap_dict[$max_heap->top()] > 0) {
                $heap_dict[$max_heap->top()]--;
                $max_heap->extract();
            }

            while (!$min_heap->isEmpty() && isset($heap_dict[$min_heap->top()]) && $heap_dict[$min_heap->top()] > 0) {
                $heap_dict[$min_heap->top()]--;
                $min_heap->extract();
            }

            $median = $this->find_median($max_heap, $min_heap, $k);
            $result[] = $median;
        }

        return $result;
    }

}
```