# Javascript w/ Explanation, Good Var Names, & Commented code.  Enjoy :-)

**Author:** paultman
**Votes:** 4
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/1133197/](https://leetcode.com/problems/parallel-courses/solutions/1133197/)

---

Ok, basicly we need to create a graph based on course prerequisites, then as we finsh courses each semester, remove those prerequisites.  Each round/semester, we increment our count, and remove a pre-requisite(s).  Each round we also check for classes with zero prerequisites, and repeat the process.

So:
 First create graph, which consists of a prerequisite class and an array of the classes that depend on it.  Also keep track of how many prerequisite classes exist for each class.
 
To start,  find all classes with zero prerequisites.
 
We remove the each class from our queue (a class we can take in the current semester), then we check which others have that as a prerequisite and remove them.  If we encounter a class which now has no remaining prerequisites, we can add it to our queue to be processed next, and mark it as visited.
 
With each loop, we increment our semester and go though the current classes which have zero dependencies.
 
if we have visited all classes, we return the number of semesters taken, if not, return -1 (could not reach all classes)

 ```
var minimumSemesters = function(n, relations) {
    var graph = new Array(n);
    var preReqs = new Array(n).fill(0);
    
   // First create graph, and record how many dependencies each class has, btw, converting everything to index 0
    for (let [dep, course] of relations) {
      dep--;
      if (!graph[dep] ) graph[dep] = [];
      graph[dep].push(--course);
      preReqs[course]++;
    }
    
	 // next find start points for classes w/o dependency
    var queue = [], sems = 0; visited = 0;
    for (let i = 0; i < n; i++) {
        if (preReqs[i] === 0) {
            visited++;
            queue.push(i);
        }
      };
     
	 // now for our semester processing loop
    while (queue.length) { //process classes with no remaining prereqs
        let curLength = queue.length;
        while (curLength--) {
            let curr = queue.shift(); 
            for (let course of graph[curr] || []) { //find all other classes that had the current one as a prerequisite
                preReqs[course]--; 
                if (preReqs[course] === 0) { //found a class we can take next semester, add to next queue
                    queue.push(course);
                    visited++;
                }
            }
        }
        sems++;
    }
    return visited == n ? sems : -1;
};
```

If this writeup helped you, please upvote it to show your appreciation and also help others discover it.  Thanks.