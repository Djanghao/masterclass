# ✅ [JS/Rust] Topological Sort Approach w/ explanation 🔥

**Author:** ad0x99
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5634464/](https://leetcode.com/problems/course-schedule-iv/solutions/5634464/)

---

**\uD83D\uDC4D If you found my solution to be beneficial, I would be most grateful if you would consider \u261D\uFE0FUPVOTING IT\u261D\uFE0F. This action would serve as a significant motivation for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Topological Sort Approach

**Idea**: We can assume that each course is a `vertex` (node) in the graph, the `prerequisites` can be represented as a graph where an `edge` from course `A` to course `B` indicates that course `A` must be taken before course `B`.

Since we need to know all of the `indirect` and `direct` prerequisites of a course, each time we explore a course, we want to keep track all of indirect and direct in the same time.

Here, we will use a `edgeMap` to store the relationship such that the `key` is the `current course` and its `value` will contain all of `courses` that `it depends on`, it means the `prerequisites list` of the current course.

Then, if we want to check whether a course `A` is prerequisite of `B` or not, we just want to check in the list of prerequisites of `A`. If `B` is included in the prerequisites list of `A`, that's mean, `B` is prerequisite of `A`.

**For example:**
- numCourses = 5
- prerequisites = [[3, 4], [2, 3], [1, 2], [0, 1]]
- queries = [[0, 4], [4, 0], [1, 3], [3, 0]]
- result = [ false, false, false, false ]

```js
edgeMap(5) { 0 => [], 1 => [ 0 ], 2 => [ 1 ], 3 => [ 2 ], 4 => [ 3 ] }

reachability(5) {
   0 => Set(1) { 0 },
   1 => Set(2) { 0, 1 },
   2 => Set(2) { 1, 2 },
   3 => Set(2) { 2, 3 },
   4 => Set(1) { 3 }
 }
```

**Implementation**

1. We create a map (`edgeMap`) where each `key` is a `course`, and its `value` is a `list of courses` that the current course depends on directly. It means, if we want to take the current course, all of the courses in this list need to be taken first.

2. We create another map (`reachability`), where each `key` is a `course`, and its `value` is a set of all the `courses` that the current course can be reached from either `directly` or `indirectly`. It means, all the courses in the list are `prerequisites` for the current course.

3. The `DFS` function: For each course, we perform a `DFS` to determine all the courses that can be reached from it. During DFS, if a course `A` can reach course `B`, then `A` is a prerequisite for `B`. We update the reachability set for `B` to include `A`. It means, we update the set of `B` to contain all of its prerequisites.
- 3.1: We iterate through each course to explore all possible paths starting from each course.

- 3.2: If the course hasn't been visited yet, we run `DFS` to explore all courses that can be reached from it. It means we explore all the course might be the `indirect` prerequisite of the current course.

4: The `BFS` function: For each course, we perform a `BFS` starting from the current course to explore all `directly` reachable courses (its neighbors) and `mark` them as `reachable` in the reachability map.
- 4.1: We create a `queue` to store a list of dependent courses need to be explored.

- 4.2: As long as the queue is not empty, we explore all the dependent course of the current course.

- 4.3: If the dependent course is not visited yet, we `mark` the current dependent course as `reachable` for the current course by `adding` it to the `dependent list` of the current course.

- 4.4: We then add the `dependent course` to the `queue` to explore more dependent courses.

5. The `isPrerequisiteOf` checks if a course `u` is prerequisite of `v` by exploring the reachability list. If the course `u` exits in the reachability list of course `v`, that means, course `u` is prerequisite of `v`.


# Complexity
- Time complexity: `O(q * (n + m))`, where `q` is the number of queries, `n` is the number of `courses` (`vertices`), and `m` is the number of `prerequisite` pairs (`edges`).
    - **DFS**: `O(m + n)`
    - **isPrerequisiteOf**: `O(1)`

- Space complexity: `O(n ^ 2)`,  in the worst case, as each `course` (`vertex`) can potentially reach all other `courses` (`vertices`)

# Code

```javascript []
class TopologicalSort {
  constructor(numCourses, prerequisites) {
    this.numCourses = numCourses;
    this.edgeMap = new Map();
    this.reachability = new Map();

    // Create a adjacent list
    for (let course = 0; course < numCourses; course++) {
      this.edgeMap.set(course, new Array());
      this.reachability.set(course, new Set());
    }

    // Build the graph where key is dependent course, and value is its parent
    // [ai, bi] => bi: [ai]
    for (const [ai, bi] of prerequisites) {
      this.edgeMap.get(bi).push(ai);
    }

    // Build prerequisites list for each course using BFS or DFS
    for (let course = 0; course < numCourses; course++) {
      this.bfs(course);
      // this.dfs(course, course);
    }
  }

  bfs(parentCourse) {
    const queue = [parentCourse];

    while (queue.length) {
      const currentCourse = queue.shift();

      // Explore all the dependent courses of the current course
      for (const dependentCourse of this.edgeMap.get(currentCourse)) {
        // If the dependent course has not been visited yet
        if (!this.reachability.get(parentCourse).has(dependentCourse)) {
          // Mark the current dependent course as reachable for the current course
          this.reachability.get(parentCourse).add(dependentCourse);
          // Add the dependent course to the queue to explore more dependent courses
          queue.push(dependentCourse);
        }
      }
    }
  }

  dfs(parentCourse, course) {
    // Explore all the dependent courses of the current course
    for (const dependentCourse of this.edgeMap.get(course)) {
      // If the next course has not been visited yet
      if (!this.reachability.get(parentCourse).has(dependentCourse)) {
        // Add the dependent course into to reachability list of the current course.
        this.reachability.get(parentCourse).add(dependentCourse);
        // Recursively traverse to collect all prerequisites in the dependent course
        this.dfs(dependentCourse, parentCourse);
      }
    }
  }

  isPrerequisiteOf(u, v) {
    return this.reachability.get(v).has(u);
  }
}

const checkIfPrerequisite = (numCourses, prerequisites, queries) => {
  const topo = new TopologicalSort(numCourses, prerequisites);
  const result = [];

  for (const [u, v] of queries) {
    result.push(topo.isPrerequisiteOf(u, v));
  }

  return result;
};
```
```rust []
use std::collections::{HashMap, HashSet, VecDeque};

struct TopologicalSort {
    num_courses: usize,
    edge_map: HashMap<usize, Vec<usize>>,
    reachability: HashMap<usize, HashSet<usize>>,
}

impl TopologicalSort {
    fn new(num_courses: usize, prerequisites: Vec<Vec<i32>>) -> Self {
        let mut edge_map = HashMap::new();
        let mut reachability = HashMap::new();

        // Initialize adjacency list and reachability map
        for course in 0..num_courses {
            edge_map.insert(course, Vec::new());
            reachability.insert(course, HashSet::new());
        }

        // Build the graph
        for prerequisite in prerequisites {
            let ai = prerequisite[0] as usize;
            let bi = prerequisite[1] as usize;
            edge_map.get_mut(&bi).unwrap().push(ai);
        }

        let mut topo_sort = TopologicalSort {
            num_courses,
            edge_map,
            reachability,
        };

        // Build prerequisites list for each course using BFS or DFS
        for course in 0..num_courses {
            topo_sort.bfs(course);
            //topo_sort.dfs(course, course);
        }

        topo_sort
    }

    fn bfs(&mut self, parent_course: usize) {
        let mut queue = VecDeque::new();
        queue.push_back(parent_course);

        while let Some(current_course) = queue.pop_front() {
            if let Some(dependent_courses) = self.edge_map.get(&current_course) {
                for &dependent_course in dependent_courses {
                    // If the dependent course has not been visited yet
                    if !self
                        .reachability
                        .get(&parent_course)
                        .unwrap()
                        .contains(&dependent_course)
                    {
                        // Mark the current dependent course as reachable for the current course
                        self.reachability
                            .get_mut(&parent_course)
                            .unwrap()
                            .insert(dependent_course);
                        // Add the dependent course to the queue to explore more dependent courses
                        queue.push_back(dependent_course);
                    }
                }
            }
        }
    }

    fn dfs(&mut self, parent_course: usize, course: usize) {
        if let Some(dependent_courses) = self.edge_map.get(&course).cloned() {
            for dependent_course in dependent_courses {
                // If the next course has not been visited yet
                if !self
                    .reachability
                    .get(&parent_course)
                    .unwrap()
                    .contains(&dependent_course)
                {
                    // Add the dependent course to the reachability list of the current course
                    self.reachability
                        .get_mut(&parent_course)
                        .unwrap()
                        .insert(dependent_course);
                    // Recursively traverse to collect all prerequisites in the dependent course
                    self.dfs(parent_course, dependent_course);
                }
            }
        }
    }

    fn is_prerequisite_of(&self, u: usize, v: usize) -> bool {
        self.reachability.get(&v).unwrap().contains(&u)
    }
}

impl Solution {
    pub fn check_if_prerequisite(
        num_courses: i32,
        prerequisites: Vec<Vec<i32>>,
        queries: Vec<Vec<i32>>,
    ) -> Vec<bool> {
        let topo = TopologicalSort::new(num_courses as usize, prerequisites);
        queries
            .into_iter()
            .map(|query| topo.is_prerequisite_of(query[0] as usize, query[1] as usize))
            .collect()
    }
}
```
