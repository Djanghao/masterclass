# C# - Clearly explained - Queue + HashMap - [92.59%, 16.67%]

**Author:** PREngineer
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/3308892/](https://leetcode.com/problems/parallel-courses/solutions/3308892/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I thought about mapping the courses to either their preReqs or the other way around.  I knew I needed to take as many courses as possible each semester.  But I wasn't sure how to deal with the possibility of a loop.

# Approach
<!-- Describe your approach to solving the problem. -->
Using a HashMap (Dictionary) would help to be able to track the nodes relations in an easier way.  The indegrees of the nodes came as the solution to identify, in a clear way, which courses I should be taking each semester.  The queue served to track the semester at which I was while taking courses and to stop in case of a loop.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
+ $$O(n)$$ to create the empty graph 
+~$$O(n)$$ to populate it and calculate the in-degrees 
+$$O(n)$$ to identify the courses in the first semester 
+$$O(n)$$ to actually take them (do the processing) 
= $$O(4n)$$ = $$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
+ $$O(n)$$ to hold the indegrees array 
+$$O(n)$$ to hold the list of associated courses 
= $$O(2n)$$ = $$O(n)$$

# Code
```
public class Solution {

    public int MinimumSemesters(int n, int[][] relations) {
        // To track our progress and answer
        int answer = 0;
        int coursesCompleted = 0;
        
        // This array contains the indegree of each course (arrows coming in)
        //------------------------------------------------
        // Using +1 to use the same numbers, 0 is not used
        //------------------------------------------------
        int[] indegree = new int[n+1];

        // An array of lists to track courses that come after this one
        Dictionary<int,List<int>> graph = new Dictionary<int,List<int>>();        
        // Initiate the graph, blank
        for(int i=0; i<=n; i++){
            graph[i] = new List<int>();
        }
        
        // Populate the list of next courses for each course
        foreach(int[] relation in relations)
        {
            // Calculate the next course's indegree (because it has a preRequisite: arrow coming in)
            indegree[relation[1]]++;
            // Add course that follows, to its list
            graph[relation[0]].Add(relation[1]);
        }
        
        // To control the processing of courses per semester
        Queue<int> queue = new Queue<int>(); 

        // Check all the indegrees, we start with
        for(int i=1; i<=n; i++)
        {
            // If it is 0 (has no preRequisite - candidate for first semester)
            if(indegree[i] == 0){
                // Add to the queue of courses to take on this semester
                queue.Enqueue(i);
            }
        }
        
        // Process all of the courses in this semester
        while(queue.Count > 0)
        {
            // Get the amount of courses in this semester, so we know when to stop
            int coursesInSemester = queue.Count;

            // Loop over them
            for(int i=0; i<coursesInSemester; i++)
            {
                // Take the current course
                int currentCourse = queue.Dequeue();
                // Mark as completed
                coursesCompleted++;
                
                // For each course that comes after this one
                foreach(int course in graph[currentCourse])
                {
                    // Reduce its indegree, as we have already completed one preReq
                    indegree[course]--;

                    // If no additional pre-reqs, add to next semester (queue)
                    if(indegree[course] == 0){
                        queue.Enqueue(course);
                    }                
                }
            }
            
            // Increase the semester count
            answer++;
        }

        // If we completed all courses
        if(coursesCompleted == n){
            return answer;
        }
        else{
            return -1;
        }
    }
}
```