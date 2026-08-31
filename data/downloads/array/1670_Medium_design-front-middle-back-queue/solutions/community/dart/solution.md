# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/3920428/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/3920428/)

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
class FrontMiddleBackQueue {

    final List<int> q = [];
  
    void pushFront(int val) {
        q.insert(0, val);
        print(q);
    }
    
    void pushMiddle(int val) {
        final mid = q.length ~/ 2;
        q.insert(mid, val);
        print(q);
    }
    
    void pushBack(int val) {
        q.add(val);
        print(q);
    }
    
    int popFront() {
        if (q.isEmpty) {
            return - 1;
        } else {
           return q.removeAt(0);
        }
    }
    
    int popMiddle() {
        final mid = q.length ~/ 2;
        if (q.isEmpty) {
            return -1;
        } else {
            if (q.length % 2 != 0) {
                return q.removeAt(mid);
            } else {
                return q.removeAt(mid - 1);
            }            
        }
    }
    
    int popBack() {
        if (q.isEmpty) {
            return -1;
        } else {
            return q.removeLast();
        }
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * FrontMiddleBackQueue obj = FrontMiddleBackQueue();
 * obj.pushFront(val);
 * obj.pushMiddle(val);
 * obj.pushBack(val);
 * int param4 = obj.popFront();
 * int param5 = obj.popMiddle();
 * int param6 = obj.popBack();
 */
```