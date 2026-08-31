# Straightforward C++ Solution | 🍎

**Author:** finch185277
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-array-statistics-tracker/solutions/6104406/](https://leetcode.com/problems/design-an-array-statistics-tracker/solutions/6104406/)

---

# Intuition  
To implement the required functionality efficiently, we need to leverage different data structures for specific operations:  

- **First added number:** Use a deque to store the numbers, enabling O(1) access to the first added element.  
- **Median:** Use two heaps to efficiently retrieve the median in O(1).  
- **Mean:** Keep a running sum of the numbers.  
- **Mode (most frequent element):** Use a frequency map to store element frequencies and a ordered set to track `{frequency, number}` pairs for O(1) access to the mode.  

# Approach  
The solution involves several design considerations:  

1. **Why a custom comparator `cmp`?**  
   The problem specifies that in case of multiple modes, we need to return the smallest one. A custom comparator ensures this behavior.  

2. **Why two heaps for the median?**  
   The median is efficiently maintained by splitting the numbers into two heaps, as commonly done in problems like [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/description/).  

3. **Why use `multiset` instead of heaps?**  
   Although heaps are commonly used for median problems, removing a number from a heap takes O(n). A `multiset` allows us to perform this operation in O(log n) while still supporting median calculations.

4. **Why balance the two heaps?**  
   To ensure correctness, the heaps must follow the rule:  
   - `upper.size() == lower.size()` or  
   - `upper.size() == lower.size() + 1`.  

   If we delete a number, this balance may temporarily break and must be restored afterward.  

5. **Why use `prev(multiset::end)`?**  
   Accessing the last element in the `multiset`.  

6. **Why not use `*prev(upper.end())` consistently during insertion and deletion?**  
   Passing an integer to `multiset::erase` removes all occurrences of that number. Using iterators ensures that **only one instance of the number** is removed.  

7. **Why `upper.erase(upper.find(number))` instead of `upper.erase(number)`?**  
   This ensures that only one instance of the number is removed from the `multiset`.  

# Complexity  

Here, `n` represents the number of elements processed:  

- **Time complexity:**  
  - `addNumber(int number)`: $$O(\\log n)$$.  
  - `removeFirstAddedNumber()`: $$O(\\log n)$$.  
  - `int getMean()`: $$O(1)$$.  
  - `int getMedian()`: $$O(1)$$.  
  - `int getMode()`: $$O(1)$$.  

- **Space complexity:** $$O(n)$$.  


# Code
```cpp []
class cmp {
public:
    bool operator() (const pair<int, int>& a, const pair<int, int>& b) const {
        if (a.first != b.first) {
            return a.first < b.first;
        } else {
            return a.second > b.second;
        }
    }
};

class StatisticsTracker {
private:
    long long sum;
    deque<int> nums;
    multiset<int, greater<>> upper;             // min heap (for bigger nums)
    multiset<int> lower;                        // max heap (for smaller nums)
    unordered_map<int, int> numFreq;            // {num, freq}
    set<pair<int, int>, cmp> freqNum;           // {freq, num}

    void balanceTwoHeaps() {
        if (upper.size() == lower.size() - 1) { // if upper over erase
            upper.insert(*prev(lower.end()));
            lower.erase(prev(lower.end()));
        }
        if (lower.size() == upper.size() - 2) { // if lower over erase
            lower.insert(*prev(upper.end()));
            upper.erase(prev(upper.end()));
        }
    }

public:
    StatisticsTracker() : sum(0) {}
    
    void addNumber(int number) {
        // maintain sum and deque
        sum += number;
        nums.push_back(number);

        // maintain freq
        int prevFreq = numFreq[number]++;
        int currFreq = prevFreq + 1;
        if (prevFreq != 0) {
            freqNum.erase({prevFreq, number});
        }
        freqNum.insert({currFreq, number});

        // maintain two heap
        upper.insert(number);
        lower.insert(*prev(upper.end()));
        upper.erase(prev(upper.end()));
        if (upper.size() < lower.size()) {
            upper.insert(*prev(lower.end()));
            lower.erase(prev(lower.end()));
        }
    }
    
    void removeFirstAddedNumber() {
        // maintain sum and deque
        int number = nums.front(); // the number to remove
        nums.pop_front();
        sum -= number;
        
        // maintain freq
        int prevFreq = numFreq[number]--;
        int currFreq = prevFreq - 1;
        freqNum.erase({prevFreq, number});
        if (currFreq != 0) {
            freqNum.insert({currFreq, number});
        } else {
            numFreq.erase(number);
        }

        // maintain two heap
        if (number >= *prev(upper.end())) {
            upper.erase(upper.find(number));
        } else {
            lower.erase(lower.find(number));
        }
        balanceTwoHeaps();
    }
    
    int getMean() {
        return sum / nums.size();
    }
    
    int getMedian() {
        return *prev(upper.end());
    }
    
    int getMode() {
        return prev(freqNum.end())->second;
    }
};

```