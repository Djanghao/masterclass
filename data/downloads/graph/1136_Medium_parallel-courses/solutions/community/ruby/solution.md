# Hash & Sets. 100& Runtime/Mem

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/4050844/](https://leetcode.com/problems/parallel-courses/solutions/4050844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create two hashes, one for dependencies and other for dependents courses.
Loop through semesters, each semester taking all courses without dependencies and removing its respective entries from dependencies/dependents dictionaries.
If the list of remaining courses gets empty, return count of semesters.
If at any semester is not possible to take courses, return -1.

# Complexity
N = count of relationships.

- Time complexity: $${O(N)}$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $${O(N)}$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} relations
# @return {Integer}
def minimum_semesters(n, relations)
    dependencies = {}
    dependents = {}

    relations.each do |a, b|
      dependencies[b] ||= Set[]
      dependencies[b] << a
      dependents[a] ||= Set[]
      dependents[a] << b 
    end

    courses = (1..n).to_set
    semesters_count = 0
    loop do
        return semesters_count if courses.empty?

        taken_courses = []
        courses.each do |course|
          taken_courses << course if dependencies[course].nil?
        end
        return -1 if taken_courses.empty?

        taken_courses.each do |course|
          (dependents[course] || []).each do |dependent|
            dependencies[dependent].delete(course)
            dependencies.delete(dependent) if dependencies[dependent].empty?
          end

          courses.delete(course)
        end
        semesters_count += 1
    end
end
```