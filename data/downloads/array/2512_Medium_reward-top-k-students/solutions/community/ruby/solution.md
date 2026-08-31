# Ruby solution using sorting, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/3671549/](https://leetcode.com/problems/reward-top-k-students/solutions/3671549/)

---

# Intuition
Calculate the score for each student.  Sort students by score and return the top k.

# Approach
1. Convert positive and negative feedback words to sets for faster lookup.
2. Map each report to its score:
    a. Split each sentence into words
    b. Initialize total as 0
    c. Add 3 to totla for each positivr word, subtract 1 for each negative word.
    d. Return total
3. Create a new array that stores each student along with their score.  Put score first and make it negative so students will be ordered from highest score to lowest, and from lowest id to highest in case of ties.
4. Sort students.
5. Choose the first k and return just the student ids (which we pull out from mapping each subarray to its second element).

# Complexity
- Time complexity:
$$O(n * log(n) + w)$$, where *w* is the total number of words.

- Space complexity:
$$O(n + k)$$, where *k* is the length of the longest report.

# Code
```
def top_students(positive_feedback, negative_feedback, report, student_id, k)
    pos,neg = positive_feedback.to_set,negative_feedback.to_set
    
    report.map! do |sentence|
        words = sentence.split(' ')
        total = 0

        words.each do |word|
            total += 3 if pos.include?(word)
            total -= 1 if neg.include?(word)
        end

        total
    end

    arr = []
    report.each_with_index { |rep,i| arr << [-rep,student_id[i]] }
    arr.sort!

    (arr[0...k]).map { |subarr| subarr[1] }
end
```