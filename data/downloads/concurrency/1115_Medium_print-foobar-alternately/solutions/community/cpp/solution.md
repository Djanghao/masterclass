# C/C++ | 3 ways to solve: atomic; mutex; semaphore

**Author:** nuoxoxo
**Votes:** 16
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/2392439/](https://leetcode.com/problems/print-foobar-alternately/solutions/2392439/)

---

# 1st way in C++: atomic
Explanation: 

atomic variables `atomic<T>` have `mutex locks` embedded in them. 

The idea is that, if a thread acquires the lock, no other thread can acquire it (ie. modify it) until it is released.

Well just how to tell the program to lock/unlock? 
Use `this_thread::yield()`, which, after a job (printFoo or printBar) is done, will `reschedule` the same job of that thread, allowing other threads to run.
```go
class FooBar {
private:
    int             n;
    atomic<bool>    alt; // added

public:
    FooBar(int n)
    {
        this->n = n;
        alt = false;
    }

    void foo(function<void()> printFoo) {
        
        for (int i = 0; i < n; i++)
        {
		/* solution part start */
		while (alt)
		{
			this_thread::yield();
		}
		/* end */

		// printFoo() outputs "foo". Do not change or remove this line.
		printFoo();

		alt = !alt; // added
        }
    }

    void bar(function<void()> printBar) {
        
        for (int i = 0; i < n; i++)
        {
		/* solution part start */
		while (!alt)
		{
			this_thread::yield();
		}
		/* end */

		// printBar() outputs "bar". Do not change or remove this line.
		printBar();

		alt = !alt; // added
        }
    }
};
```



# 1st way in C: atomic
Explanation: 

In C, the same task is implemented using <kbd> signal </kbd>
`sig_atomic_t  alt` is equivalent to `atomic<bool>  alt` in C++.

One perk to notice is that `sig_atomic_t` is actually of <kbd> int type </kbd>.
It means that even if we use an `int  alt;`, the solution will also be accepted XD

Then `sched_yield();` is equivalent to `this__thread::yied();` in C++.

```go
#include <signal.h>

typedef struct
{
    int             n;
    sig_atomic_t    alt; // added
}   FooBar;

FooBar* fooBarCreate(int n)
{
    FooBar* obj = (FooBar*) malloc(sizeof(FooBar));
    obj->n = n;

    obj->alt = 0; // added

    return obj;
}

void foo(FooBar* obj)
{    
    for (int i = 0; i < obj->n; i++)
    {
        /* added part start */
        while (obj->alt)
        {
            sched_yield();
        }
        /* end */

        // printFoo() outputs "foo". Do not change or remove this line.
        printFoo();

        obj->alt = 1; // added
    }
}

void bar(FooBar* obj)
{    
    for (int i = 0; i < obj->n; i++)
    {
        /* added part start */
        while (!obj->alt)
        {
            sched_yield();
        }
        /* end */

        // printBar() outputs "bar". Do not change or remove this line.
        printBar();

        obj->alt = 0; // added
    }
}

void fooBarFree(FooBar* obj)
{
    if (obj)
        free(obj);
}
```

# 2nd way in C++: mutex

The most intuitive and simplest way is to use 2 `mutex`.
One for each function, ie. one mutex for `foo()` and the other for `bar()`.

To start, the "bar()" mutex is locked first. 
Then we alternatively lock and unlock both mutex:

```go
class FooBar {
private:
    int             n;
    mutex           food; // added
    mutex           bart; // added

public:
    FooBar(int n)
    {
        this->n = n;
        bart.lock(); // added
    }

    void foo(function<void()> printFoo) {
        
        for (int i = 0; i < n; i++)
        {
            food.lock(); // added

            // printFoo() outputs "foo". Do not change or remove this line.
        	printFoo();

            bart.unlock(); // added
        }
    }

    void bar(function<void()> printBar) {
        
        for (int i = 0; i < n; i++)
        {
            bart.lock(); // added
            // printBar() outputs "bar". Do not change or remove this line.
        	printBar();

            food.unlock(); // added
        }
    }
};
```

# 2nd way in C: mutex

Explanation: 

Same things as in C++ mutex locking, just that some <kdb>writing</kbd> is different:

To declare mutex, use `pthread_mutex_t  mtx`.
We also have to init them first `pthread_mutex_init(& mtx, NULL);`
Then in each thread we do the same sequence, locking/unlocking each mutex:
```cpp
pthread_mutex_lock(& mtx1);
print();
pthread_mutex_unlock(& mtx2)
```
The entire code:
```go
# include "pthread.h"

typedef struct 
{
    pthread_mutex_t     mtx_foo; // +
    pthread_mutex_t     mtx_bar; // +
    int                 n;
    
}   FooBar;

FooBar* fooBarCreate(int n)
{
    FooBar* obj = (FooBar*) malloc(sizeof(FooBar));
    obj->n = n;

    pthread_mutex_init(& obj->mtx_foo, NULL); // +
    pthread_mutex_init(& obj->mtx_bar, NULL); // +

    return obj;
}

void foo(FooBar* obj)
{
    for (int i = 0; i < obj->n; i++)
    {
        pthread_mutex_lock(& obj->mtx_bar); // +
        // printFoo() outputs "foo". Do not change or remove this line.
        printFoo();
        pthread_mutex_unlock(& obj->mtx_foo); // +
    }
}

void bar(FooBar* obj) {
    
    for (int i = 0; i < obj->n; i++)
    {
        pthread_mutex_lock(& obj->mtx_foo); // +
        // printBar() outputs "bar". Do not change or remove this line.
        printBar();
        pthread_mutex_unlock(& obj->mtx_bar); // +
    }
}

void fooBarFree(FooBar* obj)
{
    if (obj)
        free(obj);
}
```

# 3rd way in C++: semaphore

In this leetcode problem, using `semaphore` is similar to mutex in C. 

`sem_init` is equivalent to `pthread_mutex_init`
The second parameter is set to 0, as we have only one process (1 for management between processes; 0 for between threads of a single process). 

The thrid parameter sets the initial value/order for a semaphore. In this case it is set to 0 and 1 respectively. 

Then we use `sem_wait` & `sem_wait` in place of mutex_lock and mutex_unlock.

```go
#include "semaphore.h" /* added */

class FooBar {
private:
    int         n;
    sem_t       food;
    sem_t       bart;

public:
    FooBar(int n)
    {
        this->n = n;
        sem_init(& food, 0, 0); /* added: */
        sem_init(& bart, 0, 1); /* added: */
    }

    void foo(function<void()> printFoo)
    {
        
        for (int i = 0; i < n; i++)
        {
            sem_wait(& bart); /* added */

            // printFoo() outputs "foo". Do not change or remove this line.
			printFoo();

            sem_post(& food); /* added */
        }
    }

    void bar(function<void()> printBar)
    {
        
        for (int i = 0; i < n; i++)
        {
            sem_wait(& food); /* added */

			// printBar() outputs "bar". Do not change or remove this line.
			printBar();

            sem_post(& bart); /* added */
        }
    }
};
```

# 3rd way in C: semaphore
```go
typedef struct 
{
    int         n;

    sem_t       foo_; // added
    sem_t       bar_; // added
    
} FooBar;

FooBar* fooBarCreate(int n) {
    FooBar* obj = (FooBar*) malloc(sizeof(FooBar));
    obj->n = n;

    sem_init(& obj->foo_, 0, 0); // added
    sem_init(& obj->bar_, 0, 1); // added

    return obj;
}

void foo(FooBar* obj) {
    
    for (int i = 0; i < obj->n; i++)
    {
        sem_wait(& obj->bar_); // added

        // printFoo() outputs "foo". Do not change or remove this line.
        printFoo();

        sem_post(& obj->foo_); // added
    }
}

void bar(FooBar* obj) {
    
    for (int i = 0; i < obj->n; i++)
    {
        sem_wait(& obj->foo_); // added

        // printBar() outputs "bar". Do not change or remove this line.
        printBar();

        sem_post(& obj->bar_); // added
    }
}

void fooBarFree(FooBar* obj)
{
    sem_destroy(& obj->foo_); // added
    sem_destroy(& obj->bar_); // added
}
```