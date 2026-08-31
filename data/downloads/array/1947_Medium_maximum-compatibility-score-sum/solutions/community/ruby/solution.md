# Ruby - T: O(2^m * n) S: O(m^2 * n + 2^m) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2616050/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2616050/)

---

```
# @param {Integer[][]} students
# @param {Integer[][]} mentors
# @return {Integer}
def max_compatibility_sum(students, mentors)
  m = students.size
  n = students[0].size

  @memo = []
  @memo2 = Array.new(m) { [] }
  comp_sum(students, mentors, m, n, 0, 0)
end

def comp_sum(students, mentors, m, n, student_index, mentor_bm)
  return 0 if student_index == m
  if cache = @memo[mentor_bm]
    return cache
  end

  max = 0
  
  0.upto(m - 1) do |mentor_index|
    new_bm = mentor_bm | (1 << mentor_index)
    next if new_bm == mentor_bm
    max = [
      max,
      compatibility_score(students, mentors, n, student_index, mentor_index) +
        comp_sum(students, mentors, m, n, student_index + 1, new_bm)
    ].max
  end

  @memo[mentor_bm] = max
end

def compatibility_score(students, mentors, n, student_index, mentor_index)
  @memo2[student_index][mentor_index] ||= begin
    score = 0
    student = students[student_index]
    mentor = mentors[mentor_index]
    0.upto(n - 1) do |i|
      score += 1 if student[i] == mentor[i]
    end
    score
  end
end