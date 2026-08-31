# Easy Semaphore + Mutex || Love Babbar Solution || Best Approach

**Author:** abhi_pandit_18
**Votes:** 8
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/3757848/](https://leetcode.com/problems/the-dining-philosophers/solutions/3757848/)

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
class Semaphore
{
    public:
    Semaphore() {}
    Semaphore(int c) : count(c) {}

    void setCount(int a)
    {
        count=a;
    }
    inline void signal()
    {
        std::unique_lock<std::mutex> lock(m);
        count++;
        if(count<=0)
        cv.notify_one();
    }
    inline void wait()
    {
        std::unique_lock<std::mutex> lock(m);
        count--;
        while(count<0)
        {
            cv.wait(lock);
        }
    }

    private:
    std::mutex m;
    std::condition_variable cv;
    int count;
};

class DiningPhilosophers {
    Semaphore fork[5];
    std::mutex m,l;
public:
    DiningPhilosophers() {
        for(int i=0;i<5;i++)
        {
            fork[i].setCount(1);
        }
    }

    void wantsToEat(int philosopher,
                    function<void()> pickLeftFork,
                    function<void()> pickRightFork,
                    function<void()> eat,
                    function<void()> putLeftFork,
                    function<void()> putRightFork) {
		{
            std::lock_guard<std::mutex>lock(m);
            fork[(philosopher+1)%5].wait();
            fork[philosopher].wait();
        }
        pickLeftFork();
        pickRightFork();

        eat();

        putLeftFork();
        fork[(philosopher+1)%5].signal();
        putRightFork();
        fork[philosopher].signal();
    }
};
```