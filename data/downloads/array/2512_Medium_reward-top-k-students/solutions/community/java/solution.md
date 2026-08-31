# Java clean solution

**Author:** FLlGHT
**Votes:** 13
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/2991124/](https://leetcode.com/problems/reward-top-k-students/solutions/2991124/)

---


# Code
```
class Solution {
    public List<Integer> topStudents(String[] positive_feedback, String[] negative_feedback, String[] report, int[] student_id, int k) {
    Set<String> positive = Arrays.stream(positive_feedback).collect(Collectors.toSet());
    Set<String> negative = Arrays.stream(negative_feedback).collect(Collectors.toSet());
    List<Student> students = new ArrayList<>();

    for (int i = 0; i < report.length; ++i) {
      int points = toPoints(report[i], positive, negative);
      students.add(new Student(student_id[i], points));
    }

    return students.stream()
      .sorted(Comparator.comparing(Student::points).reversed().thenComparing(Student::id))
      .map(Student::id).limit(k).toList();
  }

  private int toPoints(String report, Set<String> positive, Set<String> negative) {
    int points = 0;
    for (String word : report.split(" ")) {
      if (positive.contains(word))
        points += 3;
      else if (negative.contains(word))
        points -= 1;
    }
    return points;
  }

  public record Student(int id, int points) {}
}
```