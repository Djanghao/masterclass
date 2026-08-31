# O(1) space and time complexity

**Author:** junkmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4126915/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4126915/)

---

# Intuition
Pay attention to this phrase in the problem statement:
"...the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing."
So we know that at any time, the longest uninterrupted sequence (i.e. not containing any 0) will be of at most length 30 (ignoring the 1s). That would be 30 2s.

# Approach
Keep the last uninterrupted sequence (ignoring 1s).

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
public class ProductOfNumbers {
    private List<(int Index, int Value)> _results = new();
    private int _index = -1;

    public ProductOfNumbers() {

    }
    
    public void Add(int num) {
        ++_index;

        if (num == 0) {
            _results.Clear();
        } else if (num > 1 || _results.Count == 0) {
            _results.Add((_index, num));
        }
    }
    
    public int GetProduct(int k) {
        var minIndex = _index + 1 - k; // inclusive

        if (_results.Count == 0 || _results[0].Index > minIndex) {
            return 0;
        }
        
        var ans = 1;

        for (var i = _results.Count - 1; i >= 0 && _results[i].Index >= minIndex; --i) {
            ans *= _results[i].Value;
        }

        return ans;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * ProductOfNumbers obj = new ProductOfNumbers();
 * obj.Add(num);
 * int param_2 = obj.GetProduct(k);
 */
```