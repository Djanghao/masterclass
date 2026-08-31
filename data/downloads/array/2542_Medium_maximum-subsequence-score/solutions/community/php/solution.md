# Beats 99.16% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/5177997/](https://leetcode.com/problems/maximum-subsequence-score/solutions/5177997/)

---

# Approach
1. The input arrays nums1 and nums2 are zipped together into pairs (i, j) where i is an element from nums1 and j is an element from nums2.
The pairs are sorted in descending order based on the second element of each pair (j). This is done using the sorted function with a custom key function itemgetter(1) and the reverse=True parameter.
2. A prefix sum variable prefix_sum is initialized to 0. This will keep track of the sum of the first k elements of nums1 encountered so far.
3. A minimum heap min_heap is initialized as an empty list. This will store the first k elements of nums1 encountered so far, in ascending order.
4. The sorted pairs are iterated over. For each pair (i, j), the following steps are performed:
- The prefix_sum is updated by adding i.
- The min_heap is updated by adding i.
- If the size of the min_heap is equal to k, it means we have encountered k elements of nums1 so far. In this case, the score is calculated as prefix_sum * j and compared with the current res value. - If the calculated score is greater, res is updated with the new score.
- The prefix_sum is decremented by removing the smallest element from the min_heap.
5. Step 4 are repeated for all the pairs in the sorted list.
6. Finally, the maximum score achieved is returned as the result.

# Complexity
- Time complexity:
$$O(n log n)$$, where n is the length of the input arrays nums1 and nums2. This is because the sorting operation takes O(n log n) time, and the subsequent iterations over the sorted pairs take O(n) time.

- Space complexity:
$$O(n)$$, where n is the length of the input arrays nums1 and nums2. This is because the solution uses a sorted list of pairs and a minimum heap of size k, both of which have a maximum size of n.

# Code
``` python3 []
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        res, prefix_sum, min_heap = 0, 0, []

        # Sort the pairs by the second element of each pair in descending order
        s = sorted(list(zip(nums1, nums2)), key=itemgetter(1), reverse=True)

        # Iterate over the sorted pairs
        for i, j in s:
            # Update the prefix sum and the minimum heap
            prefix_sum += i
            heapq.heappush(min_heap, i)

            # If the heap size is equal to k, calculate the score and update the result
            if len(min_heap) == k:
                x = prefix_sum * j
                res = res if res > x else x
                prefix_sum -= heapq.heappop(min_heap)

        # Return the maximum score achieved
        return res
```
``` javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let res = 0,
    prefixSum = 0,
    minHeap = new MinHeap();

  const s = nums1
    .map((i, idx) => [i, nums2[idx]])
    .sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < s.length; i++) {
    const [num1, num2] = s[i];
    prefixSum += num1;
    minHeap.push(num1);

    if (minHeap.size() === k) {
      const x = prefixSum * num2;
      res = Math.max(res, x);
      prefixSum -= minHeap.pop();
    }
  }

  return res;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    while (this.leftChild(i) < this.size()) {
      let minChild = this.leftChild(i);
      if (
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)] < this.heap[minChild]
      ) {
        minChild = this.rightChild(i);
      }
      if (this.heap[i] <= this.heap[minChild]) {
        break;
      }
      this.swap(i, minChild);
      i = minChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
}
```
``` php []
class MinHeap {
    private $heap;

    public function __construct() {
        $this->heap = [];
    }

    public function insert($value) {
        $this->heap[] = $value;
        $this->siftUp($this->count() - 1);
    }

    public function extract() {
        if ($this->isEmpty()) {
            return null;
        }

        $root = $this->heap[0];
        $last = array_pop($this->heap);

        if (!$this->isEmpty()) {
            $this->heap[0] = $last;
            $this->siftDown(0);
        }

        return $root;
    }

    public function isEmpty() {
        return count($this->heap) === 0;
    }

    public function count() {
        return count($this->heap);
    }

    private function siftUp($index) {
        $value = $this->heap[$index];

        while ($index > 0) {
            $parentIndex = ($index - 1) >> 1;
            $parentValue = $this->heap[$parentIndex];

            if ($value >= $parentValue) {
                break;
            }

            $this->heap[$index] = $parentValue;
            $index = $parentIndex;
        }

        $this->heap[$index] = $value;
    }

    private function siftDown($index) {
        $value = $this->heap[$index];
        $half = $this->count() >> 1;

        while ($index < $half) {
            $leftChildIndex = (2 * $index) + 1;
            $rightChildIndex = (2 * $index) + 2;
            $swapIndex = $leftChildIndex;

            if ($rightChildIndex < $this->count() && $this->heap[$rightChildIndex] < $this->heap[$leftChildIndex]) {
                $swapIndex = $rightChildIndex;
            }

            if ($this->heap[$swapIndex] >= $value) {
                break;
            }

            $this->heap[$index] = $this->heap[$swapIndex];
            $index = $swapIndex;
        }

        $this->heap[$index] = $value;
    }
}

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer
     */
    function maxScore($nums1, $nums2, $k) {
        $res = 0;
        $prefix_sum = 0;
        $min_heap = new MinHeap();

        // Sort the pairs by the second element of each pair in descending order
        $s = array_map(function($i) use ($nums1, $nums2) {
            return [$nums1[$i], $nums2[$i]];
        }, array_keys($nums1));
        usort($s, function($a, $b) {
            return $b[1] - $a[1];
        });

        // Iterate over the sorted pairs
        foreach ($s as $pair) {
            list($i, $j) = $pair;

            // Update the prefix sum and the minimum heap
            $prefix_sum += $i;
            $min_heap->insert($i);

            // If the heap size is equal to k, calculate the score and update the result
            if ($min_heap->count() == $k) {
                $x = $prefix_sum * $j;
                $res = max($res, $x);
                $prefix_sum -= $min_heap->extract();
            }
        }

        // Return the maximum score achieved
        return $res;
    }
}
```