# Java Solutions with Explanation (Approach 1 - object lock, Approach 2- Semaphore)

**Author:** mitesh_pv
**Votes:** 17
**Link:** [https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/3084050/](https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/3084050/)

---

# Intuition
Four separate threads is supposed to operate on thie FizzBuzz class. We need to guard the block of code that has the logic to decide if the number is multiple of 3&5, 3|5 or none.

# Approach 1 - Using Object Lock
Using two instance variables, `n` which is the the last number, `i` which is the currrent number to be printed.
Each time `i` is incremented, check if it is divisible by 3, 5 according to the functions requireemnts. <br>
Await the thread if condition does not satisfy, else increment and notify.

# Code
```java
class FizzBuzz {
    private int n;
    private int i;

    public FizzBuzz(int n) {
        this.n = n;
        this.i = 1;
    }

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        synchronized (this) {
            while (i<=n) {
                if (i%3==0 && i%5!=0) {
                    printFizz.run();
                    i+=1;
                    notifyAll();            
                } else {
                    wait();
                }
            }
        }
    }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        synchronized (this) {
            while (i<=n) {
                if (i%3!=0 && i%5==0) {
                    printBuzz.run();
                    i+=1;
                    notifyAll();            
                } else {
                    wait();
                }
            }
        }
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        synchronized (this) {
            while (i<=n) {
                if (i%15==0) {
                    printFizzBuzz.run();
                    i+=1;
                    notifyAll();            
                } else {
                    wait();
                }
            }
        }
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        synchronized (this) {
            while (i<=n) {
                if (i%3!=0 && i%5!=0) {
                    printNumber.accept(i);
                    i+=1;
                    notifyAll();            
                } else {
                    wait();
                }
            }
        }
    }
}
```

# Approach 2 - Using Semaphore
The main logic remains same as above. <br>
In place of object lock, here we make use of `Semaphore`.
We take 3 semaphores, `fizzSem`, `buzzSem`, `fizzBuzzSem` and `numSem`. <br>
Based on what is the next value of `currentNum` we release the required semaphore to continue. <br>
Lastly we need to make sure that the program doesn't goes on bounded wait, for that we need to release all the semaphores if any acquired. <br>

This is achieved in `else` part of `release()` function.

# Code

```java
class FizzBuzz {
    private int num;
    private int currentNum;
    private Semaphore fizzSem;
    private Semaphore buzzSem;
    private Semaphore fizzBuzzSem;
    private Semaphore numberSem;

    public FizzBuzz(int num) {
        this.num = num;
        this.currentNum = 1;
        this.fizzSem = new Semaphore(0);
        this.buzzSem = new Semaphore(0);
        this.fizzBuzzSem = new Semaphore(0);
        this.numberSem = new Semaphore(1);
    }

    private void release() {
        currentNum++;
        if (currentNum <= num) {
            if (currentNum % 3 == 0 && currentNum % 5 != 0) {
                fizzSem.release();
            } else if (currentNum % 3 != 0 && currentNum % 5 == 0) {
                buzzSem.release();
            } else if (currentNum % 15 == 0) {
                fizzBuzzSem.release();
            } else {
                numberSem.release();
            }
        } else {
            fizzSem.release();
            buzzSem.release();
            fizzBuzzSem.release();
            numberSem.release();
        }
    }

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        while (currentNum <= num) {
            fizzSem.acquire();
            if (currentNum <= num) {
                printFizz.run();
            }
            release();
        }
    }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        while (currentNum <= num) {
            buzzSem.acquire();
            if (currentNum <= num) {
                printBuzz.run();
            }
            release();
        }
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        while (currentNum <= num) {
            fizzBuzzSem.acquire();
            if (currentNum <= num) {
                printFizzBuzz.run();
            }
            release();
        }
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        while (currentNum <= num) {
            numberSem.acquire();
            if (currentNum <= num) {
                printNumber.accept(currentNum);
            }
            release();
        }   
    }
}
```