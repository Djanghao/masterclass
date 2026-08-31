# Distribute Repeating Integers

**Author:** FujMYV1KQS
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/6127567/](https://leetcode.com/problems/distribute-repeating-integers/solutions/6127567/)

---

# Intuition
The problem requires us to distribute numbers to customers where each customer needs a specific quantity of identical numbers. We can solve this using backtracking by trying different combinations of frequency groups to satisfy each customer's demand.

# Approach
1. First, we count the frequency of each number in `nums` using a Dictionary
2. Convert the frequencies into an array (`counts`) since we only care about the available quantities, not the actual numbers
3. Sort `quantity` in descending order to try larger demands first (optimization)
4. Use backtracking to:
   - Try to satisfy each customer's demand using available frequencies
   - If successful with current customer, move to next customer
   - If unsuccessful, backtrack and try different frequency group

# Complexity
- Time complexity: $$O(m^n)$$ where:
  - m = number of unique frequencies (length of counts array)
  - n = number of customers (length of quantity array)
  - This is because for each customer, we try all possible frequency groups

- Space complexity: $$O(n)$$ where:
  - n = number of customers (length of quantity array)
  - This is the maximum depth of recursion stack

# Code Explanation
```csharp
// Count frequencies of numbers
Dictionary<int, int> freq = new Dictionary<int, int>();
foreach (int num in nums) {
    if (!freq.ContainsKey(num)) freq[num] = 0;
    freq[num]++;
}

// Convert frequencies to array
int[] counts = freq.Values.ToArray();

// Sort quantities in descending order (optimization)
Array.Sort(quantity, (a, b) => b.CompareTo(a));
```

The backtracking function:
```csharp
private bool Backtrack(int[] counts, int[] quantity, int index) {
    // Base case: all customers satisfied
    if (index == quantity.Length) return true;
    
    // Try each frequency group for current customer
    for (int i = 0; i < counts.Length; i++) {
        if (counts[i] >= quantity[index]) {
            // Try using this frequency group
            counts[i] -= quantity[index];
            if (Backtrack(counts, quantity, index + 1)) return true;
            // Backtrack if unsuccessful
            counts[i] += quantity[index];
        }
    }
    
    return false;
}
```

This solution is simple but might not be the most efficient for large inputs. Adding memoization and early termination checks could improve performance significantly.