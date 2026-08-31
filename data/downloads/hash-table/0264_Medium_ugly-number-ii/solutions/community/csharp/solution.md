# C# Solution for Ugly Number II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5655078/](https://leetcode.com/problems/ugly-number-ii/solutions/5655078/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem of finding the nth ugly number can be approached using a min-heap (priority queue) to ensure that we always process the smallest possible ugly number at each step. By maintaining a heap of generated ugly numbers and continuously extracting the smallest, we can build the sequence of ugly numbers efficiently. This method allows us to avoid generating non-ugly numbers and ensures the sequence is generated in sorted order.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Min-Heap (Priority Queue):
	\u2022	Initialize a min-heap with the first ugly number, which is 1.
	\u2022	Use a HashSet to keep track of numbers already added to the heap to prevent duplicates.
2.	Generate Ugly Numbers:
	\u2022	Repeatedly extract the smallest number from the heap (this is the next ugly number in the sequence).
	\u2022	Multiply the extracted number by 2, 3, and 5 to generate new potential ugly numbers.
	\u2022	Add these new numbers to the heap, but only if they haven\u2019t been added before (using the HashSet to check).
3.	Continue Until nth Ugly Number:
	\u2022	Repeat the extraction and multiplication process until the nth ugly number is extracted from the heap.
4.	Return the nth Ugly Number:
	\u2022	After n iterations, the value extracted from the heap is the nth ugly number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Heap Operations: Inserting and extracting elements from a min-heap (priority queue) each take O(log k) time, where k is the current size of the heap.
\u2022	Total Complexity: Since we perform n extractions and may insert up to 3n elements into the heap, the overall time complexity is O(n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Heap and HashSet: The space complexity is O(n), as the heap and hash set will store all distinct ugly numbers generated up to the nth one. In the worst case, this involves keeping up to 3n elements in the heap and hash set, but usually, the actual size will be around n due to overlaps and duplications in multiples.

# Code
```
public class Solution {
    public int NthUglyNumber(int n) {
        HashSet<long> seen = new HashSet<long>();
        PriorityQueue<long, long> heap = new PriorityQueue<long, long>();
        
        // Initial ugly number is 1
        heap.Enqueue(1, 1);
        seen.Add(1);
        
        long[] primes = { 2, 3, 5 };
        long ugly = 1;
        
        for (int i = 0; i < n; i++) {
            // Extract the smallest ugly number
            ugly = heap.Dequeue();
            
            // Generate new ugly numbers and add them to the heap
            foreach (long prime in primes) {
                long newUgly = ugly * prime;
                if (!seen.Contains(newUgly)) {
                    seen.Add(newUgly);
                    heap.Enqueue(newUgly, newUgly);
                }
            }
        }
        
        return (int)ugly;
    }
}
```