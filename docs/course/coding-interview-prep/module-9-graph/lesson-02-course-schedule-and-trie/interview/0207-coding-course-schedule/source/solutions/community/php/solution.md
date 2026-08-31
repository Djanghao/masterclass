# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule/solutions/6083103/](https://leetcode.com/problems/course-schedule/solutions/6083103/)

---

```php []
class Solution {
    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @return Boolean
     */
    function canFinish($numCourses, $prerequisites) {
        // 1. Create an adjacency list to keep track of prerequisites.
        $this->preMap = [];
        foreach ($prerequisites as $_ => [$course, $pre]) { // Tricky with the $_
            $this->preMap[$course][] = $pre;
        }

        // 2. DFS on each course
        $this->achievable = [];
        for ($i=0; $i<$numCourses; $i++) {
            if (!$this->achievable($i)) return false;
        }
        return true;
    }

    function achievable($course, $visited = []) {
        // Quick skip: already achievable.
        if (isset($this->achievable[$course])) return true;

        // A course is not achievable when there is a cycle among courses.
        if (isset($visited[$course])) return false;
        $visited[$course] = true;

        // A course is achevable when happens one out of two things:
        //  - either it has no prerequisites,
        //  - or all its prerequisites are achievable.
        if (!isset($this->preMap[$course])) return true;
        foreach ($this->preMap[$course] as $preCourse) {
            if (!$this->achievable($preCourse, $visited)) return false;
        }
        $this->achievable[$course] = true;
        return true;
    }
}
```