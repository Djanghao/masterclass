# PHP Priority Queue (based of lee215's one)

**Author:** denevix171
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/3971682/](https://leetcode.com/problems/swim-in-rising-water/solutions/3971682/)

---

Based of the solution of 'lee215' using priority queue.
But PHP SPL priority queue implements 'MaxHeap', not 'MinHeap' like its Python counterpart - need to add custom class with an inverted compare method.

# Code
```
class MinHeapPriorityQueue extends SplPriorityQueue {
    public function compare(mixed $priority1, mixed $priority2): int {
        return ($priority1 <=> $priority2) * -1;
    }
}

class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function swimInWater($grid) {
        $visited = [[0, 0]];
        $size = count($grid);
        
        $priorityQueue = new MinHeapPriorityQueue();
        $priorityQueue->setExtractFlags(SplPriorityQueue::EXTR_BOTH);
        $priorityQueue->insert([0, 0], $grid[0][0]);

        $time = 0;
        while (true) {
            ['data' => $coords, 'priority' => $depth] = $priorityQueue->extract();

            //print("Extracted!!!  {${implode(',', $coords)}} $depth" . PHP_EOL);
            $time = max($depth, $time);

            [$x, $y] = $coords;
            if ($x === $y && $y === $size - 1) {
                return $time;
            }

            foreach ([[$x - 1, $y], [$x + 1, $y], [$x, $y - 1], [$x, $y + 1]] as $coords) {
                [$x, $y] = $coords;
                if ($x < 0 || $y < 0 || $x >= $size || $y >= $size) {
                    //print("out of bounds  $x,$y" . PHP_EOL);
                    continue;
                }

                //  in_array(mixed $needle, array $haystack, bool $strict = false): bool
                if (in_array($coords, $visited, true) === true) {
                    //print("visited before $coords[0],$coords[1] " . PHP_EOL);
                    continue;
                }

                $visited[] = $coords;
                //print("inserting  $x,$y " . PHP_EOL);
                $priorityQueue->insert([$x, $y], $grid[$y][$x]);
            }
        }
    }
}
```