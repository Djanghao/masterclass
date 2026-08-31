# Typescript O(V + E) time and space complexity solution

**Author:** shivangmistry
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/5995322/](https://leetcode.com/problems/parallel-courses-iii/solutions/5995322/)

---

# Complexity
- Time complexity: O(V + E)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V + E)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class Node {
  id: number;
  prereqs?: Node[]
  constructor (id: number, prereqs = []) {
    this.id = id;
    this.prereqs = prereqs;
  }
}

function minimumTime(n: number, relations: number[][], time: number[]): number {
  const nodeMap = new Map<number, Node>()
  // build graph
  for (const relation of relations) {
    const [prereq, course] = relation
    let courseNode: Node | undefined;
    if (nodeMap.has(course))  {
      courseNode = nodeMap.get(course) 
    } else {
      courseNode = new Node(course)
      nodeMap.set(course, courseNode)
    }
    let prereqNode: Node | undefined;
    if (nodeMap.has(prereq))  {
      prereqNode = nodeMap.get(prereq) 
    } else {
      prereqNode = new Node(prereq)
      nodeMap.set(prereq, prereqNode)
    }
    courseNode?.prereqs?.push(prereqNode)
  }
  // find minTime for each course
  // minTime of a course = courseTime + max of all prereqs
  // maintain a dp[n]
  const dp = new Array(n).fill(null)
  const helper = (course: number) => {
    if (dp[course - 1] !== null) {
      return dp[course - 1]
    }
    const courseNode = nodeMap.get(course)
    if (!courseNode || !courseNode?.prereqs?.length) {
      const courseTime = time[course - 1]
      dp[course - 1] = courseTime
      return courseTime
    }
    let maxPrereqTime = -Infinity
    for (const prereq of courseNode.prereqs) {
      maxPrereqTime = Math.max(maxPrereqTime, helper(prereq.id))
    }
    const totalTime = time[course - 1] + maxPrereqTime
    dp[course - 1] = totalTime
    return totalTime
  }
  let result = -Infinity
  for (let i = 1; i <= n; i++) {
    result = Math.max(result, helper(i))
  }
  // return max
  return result
};
```