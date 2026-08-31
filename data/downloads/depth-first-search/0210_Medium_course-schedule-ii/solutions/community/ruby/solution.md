# BFS/DFS(Topological Sort) Ruby Solutions

**Author:** ksodha93
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/4130942/](https://leetcode.com/problems/course-schedule-ii/solutions/4130942/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(E + V) => O(p + n) -> p = number of prereqs, n = num of courses

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Integer[]}
def find_order(num_courses, prerequisites)
    # @hash = Hash.new { |h,k| h[k] = [] }

    @hash = {}

    num_courses.times.each do |course|
        @hash[course] = []
    end

    prerequisites.each do |course, prereq|
        @hash[course] << prereq
    end

    # a course has 3 possible states:
    # visited -> courses has been added to output
    # visiting -> courses not added to output but added to cycle
    # unvisited -> courses not added to output or cycle
    @visited = Set.new
    @cycle = Set.new
    @result = []

    num_courses.times.each do |course|
        return [] if !dfs(course)
    end
    @result
end

def dfs(course)
    return false if @cycle.include?(course)

    return true if @visited.include?(course)

    @cycle << course
    @hash[course].each do |prereq|
        return false if !dfs(prereq)
    end
    @cycle.delete(course)
    @visited << course
    @result << course
    @hash[course] = []
    true
end
```
```
# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Integer[]}
def find_order(num_courses, prerequisites)
    hash = Hash.new { |h,k| h[k] = [] }
    indegree = Array.new(num_courses, 0)

    prerequisites.each do |course, prereq|
        hash[course] << prereq
        indegree[prereq] += 1
    end

    queue = []
    result = []

    num_courses.times do |course|
        queue << course if indegree[course] == 0 # meaning there is no dependency
    end

    while !queue.empty?
        curr_course = queue.pop
        result << curr_course

        hash[curr_course].each do |prereq|
            indegree[prereq] -= 1
            queue << prereq if indegree[prereq] == 0
        end
    end
    result.length == num_courses ? result.reverse : []
end
```