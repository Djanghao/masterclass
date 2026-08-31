# C# AutoResetEvent

**Author:** abicah
**Votes:** 3
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/3247866/](https://leetcode.com/problems/print-foobar-alternately/solutions/3247866/)

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
using System.Threading;
public class FooBar {
    private int n;

    AutoResetEvent auto=new AutoResetEvent(false);
    AutoResetEvent auto2=new AutoResetEvent(false);

    public FooBar(int n) {
        this.n = n;
    }

    public void Foo(Action printFoo) {
        
        for (int i = 0; i < n; i++) {
            
        	// printFoo() outputs "foo". Do not change or remove this line.
        	printFoo();
            auto.Set();
            auto2.WaitOne();
        }
    }

    public void Bar(Action printBar) {
        
       
        for (int i = 0; i < n; i++) {
             auto.WaitOne();
            // printBar() outputs "bar". Do not change or remove this line.
        	printBar();
            auto2.Set();
        }
    }
}
```