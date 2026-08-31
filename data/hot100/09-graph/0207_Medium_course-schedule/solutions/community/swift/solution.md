# Swift: Spent some time trying to understand the solutions to this problem

**Author:** OwlCS
**Votes:** 9
**Link:** [https://leetcode.com/problems/course-schedule/solutions/736576/](https://leetcode.com/problems/course-schedule/solutions/736576/)

---

## Prompt

- There are a total of  `numCourses`  courses you have to take, labeled from  `0`  to  `numCourses-1`
- Some courses may have **prerequisites**
	- For example, to take **course 0** you have to first take **course 1**, which is expressed as a **pair**:  `[0,1]`
- Given the ***total number of courses*** and a ***list of prerequisite pairs***, is it possible for you to finish all courses?

**Note**

- **`prerequisites`** is a **graph** represented by a ***list of edges***, *not* adjacency matrices

**Example 1**
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
```

**Example 2**
```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```

## Setup
```swift
// Language: Swift
/// - Parameters:
///   - numCourses: Total number of courses you have to take
///   - prerequisites: List of edges where each edge represents a 
///                    relationship between two courses
/// - Returns: `true` if it is possible to finish all courses provided
func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool
```

## Brief review

We're given as input an **array of arrays** to represent the **prerequisites**.

**Input**
```swift
let numCourses: Int = 4
let prerequisites: [[Int]] = [ [0, 1], [1, 2], [2, 3], [3, 2] ]
```

**Graph**
```
+------+
|      |
v      |
3 ---> 2 --> 1 ---> 0
```

**Interpretation**
```
To take course 0, you must first take course 1

To take course 1, you must first take course 2

To take course 2, you must first take course 3 <------+
                                                      | Cycle! => return false
To take course 3, you must first take course 2 <------+
```

**In 'n Out Degrees**
|Vertex|In degree|Out degree| 
|------|---------|----------|
| 0    | 1       | 0        |
| 1    | 1       | 1        |
| 2    | 1       | 2        |
| 3    | 1       | 1        |

## Solution

After spending a few hours trying to solve it myself, I looked at a solution written in Java by someone else (link: ["_Concise JAVA solutions based on BFS and DFS with explanation_"](https://leetcode.com/problems/course-schedule/discuss/58669/Concise-JAVA-solutions-based-on-BFS-and-DFS-with-explanation)) and wrote my own interpretation of it in **Swift**, with comments for each main step.

```swift

struct Edge {
    var source: Int
    var destination: Int
    
    init(mustTake source: Int, beforeTaking destination: Int) {
        self.source = source
        self.destination = destination
    }
}

// MARK: - Debug purposes
extension Edge: CustomStringConvertible { var description: String { return "Must take course \\(source) before taking course \\(destination)"} }

/// - Parameters:
///   - numCourses: Total number of courses you have to take
///   - prerequisites: List of edges where each edge represents a relationship between two courses
/// - Returns: `true` if it is possible to finish all courses provided
func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
    
    /// 0. Handle empty case
    if numCourses == 0 || prerequisites.isEmpty { return true }
    
    /// 0.5. Convert each subarray to an Edge structure for sake of readability
    let prerequisites = prerequisites.map { edge in Edge(mustTake: edge[1], beforeTaking: edge[0]) }

    /// 1. Convert from list of edges to indegree of adjacency list
    var inDegree = Array(repeating: 0, count: numCourses)
    for i in 0 ..< prerequisites.count { inDegree[prerequisites[i].destination] += 1 }

    /// 2. Setup the queue
    ///  - Start by adding all courses **without prerequisites** to the queue
    var queue = [Int]()
    for i in 0 ..< numCourses where inDegree[i] == 0 { queue.append(i) }
    var canFinishCount = queue.count
    
    /// 3. Take each course in FIFO order while updating the prerequisites. If it has no in-degree, take it.
    while !queue.isEmpty {

        /// 3.a. Indicate we've just completed a course by removing it from the queue
        let lastCompletedCourse = queue.removeFirst()

        /// 3.b. Update the remaining prerequisites for courses that depend on the course we just completed
        for edge in prerequisites where edge.source == lastCompletedCourse {
            let course = edge.destination
            inDegree[course] -= 1

            // 3.c. If the course has no in-degree, take the course
            if inDegree[course] == 0 {
                canFinishCount += 1
                queue.append(course)
            }
        }
    }
    return canFinishCount == numCourses
}
```

---

**Take a deeper look at this segment of code:**

```swift
/// 1. Store in degrees of each course
var inDegree = Array(repeating: 0, count: numCourses)
for i in 0 ..< prerequisites.count { inDegree[prerequisites[i].destination] += 1 }
```

**Creating a list of in-degrees from an array of edges**

-  Recall that `0 --> 1 <-- 2 --> 3` means
	- Course **`0`** has an *in*-degree of `0` and an *out*-degree of `1`
	- Course **`1`** has an *in*-degree of `2` and an *out*-degree of `0`
	- Course **`2`** has an *in*-degree of `0` and an *out*-degree of `2`
	- Course **`3`** has an *in*-degree of `1` and an *out*-degree of `0`

This is represented by the following input:

```swift
let prerequisites: [[Int]] = [
	[1, 0],
	[1, 2],
	[3, 2]
]

// Turns into

let prerequisites: [Edge] = [
	Edge(source: 0, destination: 1), // 0 --> 1
	Edge(source: 2, destination: 1), // 2 --> 1
	Edge(source: 2, destination: 3), // 2 --> 3
]
```

Since in this problem the *in*-degree of a course represents how many courses **require** (or **depend on**)  the course to be completed first, it's useful to keep track of the *in*-degree.

```swift
for i in 0 ..< prerequisites.count { inDegree[prerequisites[i].destination] += 1 }

// i = 0
// Increment in-degree of 1
inDegree[prerequisites[0].destination] = inDegree[1] 
                                       = 0 + 1 
                                       = 1

// i = 1
// Increment in-degree of 1 again
inDegree[prerequisites[1].destination] = inDegree[1] 
                                       = 1 + 1 
                                       = 2
                              
// i = 2
// Increment in-degree of 3
inDegree[prerequisites[2].destination] = inDegree[3]
							           = 0 + 1 
                                       = 1
```

| Course | In degree |
|--------|-----------|
| 0      | 0         |
| 1      | 2         |
| 2      | 0         |
| 3      | 1         |

Start by taking either course 0 or 2 since they have no requirements

Hope that was helpful, it was for me at least.

I hate this problem :)