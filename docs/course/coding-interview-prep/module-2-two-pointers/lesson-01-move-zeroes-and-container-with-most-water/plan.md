# Lesson Plan: Move Zeroes & Container With Most Water — Two Pointers Pattern Recognition

## Prerequisites
- Basic array manipulation

## Learning Objectives
- Recognize the "same-direction two pointers" (fast-slow, read/write) signal: in-place filtering / partitioning / compaction while preserving relative order
- Recognize the "opposite-direction two pointers" (converging) signal: two-ended shrinking, often with a greedy justification
- Clearly articulate what distinguishes these two variants: direction of movement, and what determines which pointer moves
- Note where the other two-pointer variants (differing-speed cycle detection, merge-style comparison advance) will appear later (Module 7 — Linked List), and that sliding window (Module 3) is a specialized same-direction variant with its own module

## Outline
1. Move Zeroes: why two pointers? The read-pointer vs write-pointer division of labor
2. Abstract the "same-direction two pointers" signal: in-place overwrite, preserve relative order
3. Container With Most Water: brute force O(n^2) → why it can shrink to O(n)
4. The greedy proof for opposite-direction pointers: why moving the shorter wall is always safe
5. Compare and contrast: how to tell which two-pointer variant a problem needs
6. Practice + recap

## Key Concepts
- Same-direction two pointers: fast pointer scouts ahead, slow pointer marks the write position (in-place partition)
- Opposite-direction two pointers: shrink from both ends, each step's move decided by a greedy rule
- Why "always move the shorter wall" doesn't miss the optimal answer (proof by contradiction intuition)

## Practice Ideas
- Implement both problems
- Verbally state the recognition signal for each two-pointer variant

## Interview Prep
- Same-direction signal words: in-place modify, filter, dedup, partition
- Opposite-direction signal words: two-ended squeeze, sorted array, maximize/minimize some interval metric
- Assigned problems: LeetCode 283 (Move Zeroes), LeetCode 11 (Container With Most Water)
