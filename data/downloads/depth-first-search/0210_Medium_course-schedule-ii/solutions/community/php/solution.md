# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/6083104/](https://leetcode.com/problems/course-schedule-ii/solutions/6083104/)

---

```php []
class Solution {

    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @return Integer[]
     */
    function findOrder($numCourses, $prerequisites) {
        // Similar to https://leetcode.com/problems/course-schedule
        // In this case, we are being asked to perform TOPOLOGICAL SORT over the nodes.

        // 1. Adjacency list of prerequisites.
        //      Note: initialized to [] in all cases. Later, we will want to differentiate two cases:
        //          a) prereqMap[course] = [] => means no prerequisites, still not added to the output.
        //          b) prereqMap[course] = not set => means already added to the output.
        $this->prereqMap = array_fill(0, $numCourses, []);
        foreach ($prerequisites as $_ => [$course, $pre]) {
            $this->prereqMap[$course][] = $pre;
        }

        // 2. Iterate over all courses.
        //      We will attempt to detect cycles (we should return [] in that case).
        //      DFS to determine order.
        $this->topologicalSort = [];
        for ($c=0; $c<$numCourses; $c++) {
            $cycleDetected = $this->dfs($c);
            if ($cycleDetected) return [];
        }

        return $this->topologicalSort;
    }

    function dfs($course, $visited = []) {
        if (!isset($this->prereqMap[$course])) {    // Already added to the output, nothing to do
            return;
        }

        if (isset($visited[$course])) {    // Cycle detected
            return true;
        }
        $visited[$course] = true;

        if ($this->prereqMap[$course] === []) {
            // No prerequisites for $course. Add it to the output.
            $this->topologicalSort[] = $course;
            unset($this->prereqMap[$course]);
            return;
        }

        // Iterate over the prerequisites of course.
        foreach ($this->prereqMap[$course] as $prereq) {
            $cycleDetected = $this->dfs($prereq, $visited);
            if ($cycleDetected) return true;
        }

        // After we know all prerequisites are added, we can safely add course.
        $this->topologicalSort[] = $course;
        unset($this->prereqMap[$course]);
    }
}
```