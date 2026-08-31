# Easy to Understand || Clean Code || use of mutex and condition_variable

**Author:** ironblade
**Votes:** 5
**Link:** [https://leetcode.com/problems/building-h2o/solutions/3657766/](https://leetcode.com/problems/building-h2o/solutions/3657766/)

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
class H2O {
public:
    mutex m;
    condition_variable cv;
    int turn;
    H2O() {
        turn = 0;
    }

    void hydrogen(function<void()> releaseHydrogen) {
        unique_lock<mutex> lock(m);
        while(turn==2) cv.wait(lock);
        // releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen();
        turn++;
        cv.notify_all();
    }

    void oxygen(function<void()> releaseOxygen) {
        unique_lock<mutex> lock(m);
        while(turn<2) cv.wait(lock);
        // releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen();
        turn = 0;
        cv.notify_all();
    }
};
```