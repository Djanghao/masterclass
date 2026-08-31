# Easy Mutex Solution || Love Babbar Approach || Best Way 🔥🔥

**Author:** abhi_pandit_18
**Votes:** 7
**Link:** [https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/3757858/](https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/3757858/)

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
class FizzBuzz {
private:
    int n;
    mutex m;
    condition_variable c;
    int i;

public:
    FizzBuzz(int n) {
        this->n = n;
        this->i = 1;
    }

    // printFizz() outputs "fizz".
    void fizz(function<void()> printFizz) {
        while(i<=n)
        {
            unique_lock<mutex> lock(m);
            while(i<=n && (((i%3) == 0) && ((i%5) != 0)) == 0)
            {
                c.wait(lock);
            }
            if(i<=n)
            {
                printFizz();
                i++;
            }
            c.notify_all();
        }
    }

    // printBuzz() outputs "buzz".
    void buzz(function<void()> printBuzz) {
        while(i<=n)
        {
            unique_lock<mutex> lock(m);
            while(i<=n && (((i%3) != 0) && ((i%5) == 0)) == 0)
            {
                c.wait(lock);
            }
            if(i<=n)
            {
                printBuzz();
                i++;
            }
            c.notify_all();
        }
    }

    // printFizzBuzz() outputs "fizzbuzz".
	void fizzbuzz(function<void()> printFizzBuzz) {
        while(i<=n)
        {
            unique_lock<mutex> lock(m);
            while(i<=n && (((i%3) == 0) && ((i%5) == 0)) == 0)
            {
                c.wait(lock);
            }
            if(i<=n)
            {
                printFizzBuzz();
                i++;
            }
            c.notify_all();
        }
    }

    // printNumber(x) outputs "x", where x is an integer.
    void number(function<void(int)> printNumber) {
        while(i<=n)
        {
            unique_lock<mutex> lock(m);
            while(i<=n && (((i%3) != 0) && ((i%5) != 0)) == 0)
            {
                c.wait(lock);
            }
            if(i<=n)
            {
                printNumber(i++);
            }
            c.notify_all();
        }
    }
};
```