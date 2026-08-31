# Lesson Plan: 3Sum & Trapping Rain Water — Advanced Two-Pointer Variants

## Prerequisites
- Module 2 Lesson 01: opposite-direction two pointers
- Module 1: Two Sum's "lookup complement" mindset

## Learning Objectives
- Master the "dimension reduction" technique: how 3Sum reduces from "three numbers" to "sort + fix one number + two-pointer two-sum"
- Understand 3Sum's deduplication logic (avoiding duplicate triplets)
- Understand why Trapping Rain Water can't use the "two boundary lines only" idea from Container With Most Water
- Master the two-pointer solution for Trapping Rain Water (maintaining leftMax/rightMax), still O(n) time O(1) space
- Clearly articulate how these two problems relate to and differ from previously learned problems (Two Sum, Container With Most Water)

## Outline
1. 3Sum: starting from Two Sum, how do we "reduce dimensions" to handle three numbers? Why sort first?
2. 3Sum's dedup logic: skipping duplicate starting values, skipping duplicate two-pointer results
3. Trapping Rain Water: why doesn't "just pick two boundary lines" work here? What determines the water trapped at each position?
4. Brute force → two-pointer optimization: maintaining leftMax/rightMax, why the extra array can be dropped
5. Compare and contrast with prior two-pointer problems
6. Practice + recap

## Key Concepts
- "Dimension reduction": N-Sum problems typically reduce via "fix some numbers + sort + two pointers" to a lower-dimensional subproblem
- Sorting's dual role in two-pointer problems: provides monotonicity AND makes deduplication easy (skip adjacent duplicate values)
- Trapping Rain Water's core invariant: water trapped at a position = min(max height to its left, max height to its right) - its own height

## Practice Ideas
- Implement both problems
- Verbally articulate the core difference between Container With Most Water and Trapping Rain Water

## Interview Prep
- Recognition signal: "N-Sum" style problems → think sort + two-pointer dimension reduction
- Recognition signal: distinguish "trap/fill water at every position" problems from "pick only two boundary lines" problems
- Assigned problems: LeetCode 15 (3Sum), LeetCode 42 (Trapping Rain Water)
