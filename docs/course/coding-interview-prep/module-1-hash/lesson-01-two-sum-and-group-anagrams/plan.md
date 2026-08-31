# Lesson Plan: Two Sum & Group Anagrams — Hash Table Pattern Recognition

## Prerequisites
- None (first lesson of the course)
- Basic Python syntax (dict, list, string operations)

## Learning Objectives
- Recognize the signal "need fast lookup / dedup / counting" and instantly connect it to a hash table (dict/set) optimization
- Master the "iterate while recording complement" technique for Two Sum
- Master the "use a normalized value as hash key to group" technique for Group Anagrams (sorted string vs char-count key)
- Independently analyze time/space complexity (brute force O(n^2) -> hash-optimized O(n))
- Articulate the recognition signal for "this looks like a hash table problem" — the first entry in the learner's pattern library

## Outline
1. Start from the brute-force solution: why is O(n^2) slow, where's the bottleneck?
2. Introduce the core value of hash tables: trade space for time, O(1) average lookup
3. Two Sum: the "iterate while recording complement" technique
4. Group Anagrams: how to design a good hash key when the value itself isn't a valid key
5. Abstract out the "hash table pattern" recognition signals (keywords: lookup, dedup, counting, pairing)
6. Practice + recap

## Key Concepts
- Hash table O(1) average lookup/insert
- Space-time tradeoff mindset
- Designing a hash key when the raw value can't be used directly

## Practice Ideas
- Write Two Sum from scratch, no looking at solutions
- Write Group Anagrams, try both key designs (sorted string vs char-count tuple)
- Verbalize: "If I see a problem like X, I'd reach for a hash table, because..."

## Interview Prep
- Hash table pattern trigger words: "does X exist", "pairing/complement", "grouping", "dedup", "frequency count"
- Assigned problems:
  - LeetCode 1 — Two Sum (`interview/0001-coding-two-sum`)
  - LeetCode 49 — Group Anagrams (`interview/0049-coding-group-anagrams`)
- Related upcoming problems: Longest Consecutive Sequence (this module, Lesson 02), Contains Duplicate, Valid Anagram
