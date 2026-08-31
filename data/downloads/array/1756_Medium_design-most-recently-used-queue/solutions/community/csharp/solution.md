# Easy

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/5536176/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/5536176/)

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
public class MRUQueue {
List<int> a=new List<int>();
    public MRUQueue(int n) {
        for (int i=1; i<=n; i++){
            a.Add(i);
        }
        
    }
    
    public int Fetch(int k) {
        int x=a[k-1];
        a.RemoveAt(k-1);
        a.Add(x);
        return x;
        
    }
}

/**
 * Your MRUQueue object will be instantiated and called as such:
 * MRUQueue obj = new MRUQueue(n);
 * int param_1 = obj.Fetch(k);
 */
```