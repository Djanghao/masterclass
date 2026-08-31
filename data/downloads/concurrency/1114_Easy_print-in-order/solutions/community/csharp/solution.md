# Using Manual Reset Event Set/Wait Methods

**Author:** aroraneha
**Votes:** 6
**Link:** [https://leetcode.com/problems/print-in-order/solutions/2988841/](https://leetcode.com/problems/print-in-order/solutions/2988841/)

---

# Intuition
We need to synchronize the method execution in multi threaded environment so same can be achived using ManualResetEventslim class.  

# Approach
We can have two slim events, one to synchronize the call for first and second method to ensure that first always executed before second method. 
And second slim event is to make sure that second method gets executed before the third method. 
So, we can intialize these instance in the constructions with disabled state. Till the time we enable them by calling Set method. The thread will wait on Wait method. 
After priting first, we can set the first slim event. If a thread is waiting at Wait method in second method will get notified about its status change and now will resume its work. Same will happen for second slim event. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.Threading;

public class Foo {

     public ManualResetEventSlim slimEvent { get; set; }
     public ManualResetEventSlim secondslimEvent { get; set; }

    public Foo() 
    {
        slimEvent = new ManualResetEventSlim(false);
        secondslimEvent = new ManualResetEventSlim(false);
    }

    public void First(Action printFirst) 
    {
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        slimEvent.Set();
    }

    public void Second(Action printSecond) 
    {
        slimEvent.Wait();
        
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        secondslimEvent.Set();
    }

    public void Third(Action printThird) 
    {
        secondslimEvent.Wait();
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
}
```