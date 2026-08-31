# 💡Swift - Optimal Solution - Topological Sort

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/4087625/](https://leetcode.com/problems/parallel-courses/solutions/4087625/)

---

# Solution
```
class Solution {
    func minimumSemesters(_ n: Int, _ relations: [[Int]]) -> Int {
        // Create arrays storing the number of prerequisites for each course
        // and the courses that depend on a course.
        var prerequisitesCounts: [Int] = Array(repeating: 0, count: n)
        var nextCourses: [[Int]] = Array(repeating: [], count: n)
        for relation in relations {
            prerequisitesCounts[relation[1] - 1] += 1
            nextCourses[relation[0] - 1].append(relation[1] - 1)
        }
        
        var semesters = 0
        var remainingCourses = n
        
        // Initialize the list of courses that can be taken in the current semester.
        var coursesToTake = Array(0..<n).filter {
            prerequisitesCounts[$0] == 0
        }

        // Continue until there are courses that can be taken.
        while !coursesToTake.isEmpty {
            semesters += 1

            // Take courses.
            remainingCourses -= coursesToTake.count

            // Add courses to take in the next semester when they have no more prerequisites.
            var nextCoursesToTake: [Int] = []

            // Update prerequisites counts and find candidates for the next semester.
            for completed in coursesToTake {
                nextCourses[completed].forEach { next in
                    prerequisitesCounts[next] -= 1
                    if prerequisitesCounts[next] == 0 {
                        nextCoursesToTake.append(next)
                    }
                }
            }

            // Set courses for the next semester.
            coursesToTake = nextCoursesToTake
        }

        // If there are remaining courses, there must be cycles in the relations.
        return remainingCourses == 0 ? semesters : -1
    }
}
```

# Complexity
- Time: $$O(v + e)$$
- Space: $$O(v + e)$$