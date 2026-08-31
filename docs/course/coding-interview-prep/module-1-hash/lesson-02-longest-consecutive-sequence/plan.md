# Lesson Plan: Longest Consecutive Sequence — Hash Set "Jump Detection" Application

## Prerequisites
- Hash table O(1) lookup mindset from Module 1 Lesson 01

## Learning Objectives
- Understand why the brute-force sort-based solution (O(n log n)) isn't optimal
- Master the O(n) hash-set technique: only expand a sequence from its starting number
- Recognize the signal for "consecutive sequence detection" problems and distinguish it from "lookup complement" / "group by key" hash table usage

## Outline
1. Start from the sorting solution: O(n log n) — can we avoid sorting entirely?
2. Core technique: dump all numbers into a set, then only expand from numbers that are "sequence starts" (i.e. `num - 1` is not in the set)
3. Walk through an example by hand — understand why this guarantees O(n) overall (each number is visited at most twice)
4. Abstract the recognition signal: when to reach for "start detection + expansion"
5. Practice + recap

## Key Concepts
- "Only expand from the start" avoids redundant work — amortized analysis guarantees overall O(n)
- The hash set here isn't for complement lookup — it's for O(1) existence checks during expansion

## Practice Ideas
- Implement this problem from scratch
- Variant: what does the pure-sorting solution look like, and how do the complexities compare?

## Interview Prep
- Recognition signal: "longest consecutive sequence" (values consecutive, not necessarily contiguous indices) → think hash set to avoid sorting
- Assigned problem: LeetCode 128 — Longest Consecutive Sequence (`interview/0128-coding-longest-consecutive-sequence`)
