# easiest solution || c-plus-plus || easy to understand || without using mutex 😎😎😎

**Author:** youdontknow001
**Votes:** 17
**Link:** [https://leetcode.com/problems/print-in-order/solutions/2846704/](https://leetcode.com/problems/print-in-order/solutions/2846704/)

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
class Foo {
    promise<void> p1,p2;
public:
    Foo() {
        
    }

    void first(function<void()> printFirst) {
        
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        p1.set_value();
    }

    void second(function<void()> printSecond) {
        
        // printSecond() outputs "second". Do not change or remove this line.
        p1.get_future().wait();
        printSecond();
        p2.set_value();
    }

    void third(function<void()> printThird) {
        
        // printThird() outputs "third". Do not change or remove this line.
        p2.get_future().wait();
        printThird();
    }
};
```