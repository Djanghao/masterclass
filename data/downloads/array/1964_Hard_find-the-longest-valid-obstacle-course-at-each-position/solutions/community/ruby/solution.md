# Ruby Solution O(nlogn) + Explanation

**Author:** nischay_dhiman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/1584067/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/1584067/)

---

We will use similar logic to longest increasing subsequence.
We will maintain a obstacle_path array
```
if current obstacle makes longest subsequence
	We insert the obstacle in path
	We set the obstacle_path.length 
else
	We find the next first greater obstacle index (via bsearch)
	We replace the obstacle
    * We return the index +1 (NOT obstacle_path.length, because there might be a case where we can have bigger obstacle later in list , so we dont want to narrow the list after finding a small obstacle )
```
FOR EG.
```
obstacles =      [5,1,5,5,1,3,4,5,1,4]
obstacles_path = [[5],[1],[1,5],[1,5,5],[1,1,5],[1,1,3],[1,1,3,4],[1,1,3,4,5],[1,1,1,4,5],[1,1,1,4,4]]
obstacles_count = [1,1,2,3,2,3,4,5,3,5]

```


```
def longest_obstacle_course_at_each_position(obstacles)
    obstacle_path = []
    obstacle_count = []
    for i in 0..obstacles.length - 1
        if obstacle_path.empty? || (obstacles[i] >= obstacle_path.last)
            obstacle_path << obstacles[i] 
            obstacle_count[i] = obstacle_path.count
        else
            idx = obstacle_path.bsearch_index {|obstacle| obstacle > obstacles[i] }
            obstacle_path[idx] = obstacles[i]
            obstacle_count[i] = idx + 1
        end
       
    end
    obstacle_count
end
```