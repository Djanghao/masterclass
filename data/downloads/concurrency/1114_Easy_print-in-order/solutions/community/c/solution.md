# [C++]Why most of the solutions using mutex are wrong+solution

**Author:** dev1988
**Votes:** 168
**Link:** [https://leetcode.com/problems/print-in-order/solutions/343384/](https://leetcode.com/problems/print-in-order/solutions/343384/)

---

I actually started learning about threads recently only and even my first attempt was to take 2 mutex and lock/unlock them in order desired by us. That solution is actually accepted in leetcode.

However, while researching for difference between mutex and conditional_variable usage, i realised that the way mutex are being used here are totally wrong.

Some points that must be taken note of are: 
* **Mutex** are used for **mutual exclusion** i.e to safe gaurd the critical sections of a code.
* **Semaphone/condition_variable** are used for **thread synchronisation**(which is what we want to achieve here).
* **Mutex have ownership assigned with them**, that is to say, *the thread that locks a mutex must only unlock it.* Also, we must not unlock a mutex that has not been locked **(This is what most programs have got wrong)**.
* If the mutex is not used as said above, **the behavior is undefined**, which however in our case produces the required result.

References:
1. [If the mutex is not currently locked by the calling thread, it causes undefined behavior.](http://www.cplusplus.com/reference/mutex/mutex/unlock/)
2. [The precondition for calling unlock is holding an ownership of the mutex, according to (std)30.4.1.2](https://stackoverflow.com/questions/43487357/how-stdmutex-got-unlocked-in-different-thread)

I did read few more places the same thing, but i think these do put the point across :)

Now my solution using a condition_variable:

```
class Foo {
public:
    int count = 0;
    mutex mtx;
    condition_variable cv;
    Foo() {
        count = 1;
        //cv.notify_all();
    }

    void first(function<void()> printFirst) {
        
        unique_lock<mutex> lck(mtx);
		// No point of this wait as on start count will be 1, we need to make the other threads wait.
        // while(count != 1){
        //     cv.wait(lck);
        // }
        // printFirst() outputs "first". Do not change or remove this line.

        printFirst();
        count = 2;
        cv.notify_all();
    }

    void second(function<void()> printSecond) {
        unique_lock<mutex> lck(mtx);
        while(count != 2){
            cv.wait(lck);
        }
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        count = 3;
        cv.notify_all();
    }

    void third(function<void()> printThird) {
        unique_lock<mutex> lck(mtx);
        while(count != 3){
            cv.wait(lck);
        }
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};
```

**Disclaimer**:  I am still learning :P. So, please do enlighten me if you think my understanding of this topic is wrong/misleading.
Thanks for reading :)