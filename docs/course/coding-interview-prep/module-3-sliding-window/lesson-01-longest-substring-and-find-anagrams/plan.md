# Lesson Plan: Longest Substring & Find All Anagrams — Sliding Window Introduction

## Prerequisites
- Module 1: hash tables (`defaultdict`, counting arrays for bounded charsets)
- Module 2: two-pointer fundamentals (same-direction fast-slow, opposite-direction converging)

## Learning Objectives
- Understand sliding window as a new two-pointer variant: maintain a contiguous window `[left, right]` that expands/contracts based on a validity condition
- Master two sub-variants:
  - **Variable-size window**: `right` expands greedily; `left` shrinks only when the window becomes invalid — used for "longest/shortest substring satisfying X"
  - **Fixed-size window**: window size is fixed by the problem; the whole window slides one step at a time, incrementally updating state (add new element, remove old element) rather than recomputing from scratch
- Understand why a hash map / frequency counter is the natural companion structure for tracking window state
- Be able to state the recognition signal: "substring/subarray" + "contiguous" + "condition on window content" → sliding window

## Outline
1. What is sliding window? Relationship to the two-pointer family (especially same-direction variants) covered in Module 2
2. Longest Substring Without Repeating Characters (LC 3): brute force → O(n) sliding window using a set/hashmap to track characters currently in the window
3. Find All Anagrams in a String (LC 438): fixed-size window, frequency-count comparison, slide the whole window by one position at a time
4. Compare variable-size vs. fixed-size window — when does each apply?
5. Practice + recap

## Key Concepts
- Sliding window invariant: the window `[left, right]` always satisfies (or is actively being restored to) the validity condition
- Variable-size window: expand-then-shrink, used when window length itself is the answer (longest/shortest substring)
- Fixed-size window: size fixed by the problem statement (e.g. `len(p)`); slide by incrementally adding the new right element and removing the old left element, avoiding recomputation
- Frequency counter as window state: `Counter`/`defaultdict(int)` tracks per-character counts inside the window; compare counters for anagram equality, or track a "seen" set for uniqueness

## Practice Ideas
- Implement both LC 3 and LC 438
- Transfer exercise: Permutation in String (LC 567) — structurally near-identical to LC 438, used to test pattern recognition rather than re-teach

## Interview Prep
- Recognition signal: "contiguous substring/subarray" + some condition on window content → sliding window
- "Longest/shortest satisfying a constraint" → variable-size window
- "Fixed length k" or "matches a fixed pattern length" → fixed-size window
- Assigned problems: LeetCode 3 (Longest Substring Without Repeating Characters), LeetCode 438 (Find All Anagrams in a String)
