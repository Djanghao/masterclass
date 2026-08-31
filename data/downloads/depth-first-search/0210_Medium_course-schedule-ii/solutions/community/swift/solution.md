# Swift Solution (Topological Sort) (beats 92.9%)

**Author:** JerExplosion
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/3468058/](https://leetcode.com/problems/course-schedule-ii/solutions/3468058/)

---

```
func findOrder(_ numCourses: Int, _ prerequisites: [[Int]]) -> [Int] {
      var inDegreesArr = Array(repeating: 0, count: numCourses)
      var adjDict = [Int: [Int]]()
      
      for prereqPair in prerequisites {
          inDegreesArr[prereqPair[0]] += 1
          adjDict[prereqPair[1], default: []].append(prereqPair[0])
      }
      var zeroIndegreeQueue = [Int]()
      for courseNumber in 0..<numCourses {
          if inDegreesArr[courseNumber] == 0 {
              zeroIndegreeQueue.append(courseNumber)
          }
      }
      var topologicallySortedCourses = [Int]()
      while !zeroIndegreeQueue.isEmpty {
          let prereqCourse = zeroIndegreeQueue.removeFirst()
          topologicallySortedCourses.append(prereqCourse)
          
          for course in adjDict[prereqCourse] ?? [] {
              inDegreesArr[course] -= 1
              if inDegreesArr[course] == 0 {
                  zeroIndegreeQueue.append(course)
              }
          }
      }
      return (topologicallySortedCourses.count == numCourses) ? topologicallySortedCourses : []
  }
  // Time Complexity - O(V + E)
  // Space Complexity - O(V + E)

```