# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/3920467/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/3920467/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class CustomStack {
    var l = 0;
    final List<int> s = [];
    CustomStack(int maxSize) {
        l = maxSize;
    }
    
    void push(int x) {
        if (s.length != l) {
            s.add(x);
        }      
    }
    
    int pop() {
        return s.isEmpty ? -1 : s.removeLast();
    }
    
    void increment(int k, int val) {
        if (k > s.length) {
            k = s.length;
        }
        for (int i = 0; i < k; i++) {
            s[i] = s[i] + val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = CustomStack(maxSize);
 * obj.push(x);
 * int param2 = obj.pop();
 * obj.increment(k,val);
 */
```