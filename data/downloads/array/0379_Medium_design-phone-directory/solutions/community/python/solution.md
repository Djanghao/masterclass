# Subclassing Set - Python/Java

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/85370/](https://leetcode.com/problems/design-phone-directory/solutions/85370/)

---

Props to @agave, I saw [his Python solution](https://discuss.leetcode.com/topic/53109/4-line-python-solution-using-only-1-set-and-no-queue) by  before really thinking for myself (was still sleepy lying in bed browing on my phone :-)

Not sure how clean it is to extend existing classes without caring whether the combined functionality is something consistent, but meh, whatever.

### Python

First a Python version, accepted in 144 ms:
```
class PhoneDirectory(set):

    def __init__(self, maxNumbers):
        self.update(range(maxNumbers))

    def get(self):
        return self.pop() if self else -1

    def check(self, number):
        return number in self

    def release(self, number):
        self.add(number)
```

I don't know whether the following style of setting methods in the constructor is good, but I like it (accepted in 132):
```
class PhoneDirectory(set):
    def __init__(self, maxNumbers):
        self.update(range(maxNumbers))
        self.get = lambda: self.pop() if self else -1
        self.check = self.__contains__
        self.release = self.add
```
That style can also be done without subclassing `set` and without explicitly storing the set (accepted in 132 ms):
```
class PhoneDirectory(object):
    def __init__(self, maxNumbers):
        available = set(range(maxNumbers))
        self.get = lambda: available.pop() if available else -1
        self.check = available.__contains__
        self.release = available.add
```

### Java

Extending `TreeSet`, gets accepted in about 640 ms (first attempt was Memory Limit Exceeded, but then it was accepted in 661, 602, 646 and 654 ms). Probably slow, but at least it's simple.
```
public class PhoneDirectory extends TreeSet<Integer> {

    public PhoneDirectory(int maxNumbers) {
        for (int i=0; i<maxNumbers; i++)
            add(i);
    }
    
    public int get() {
        return isEmpty() ? -1 : pollFirst();
    }
    
    public boolean check(int number) {
        return contains(number);
    }
    
    public void release(int number) {
        add(number);
    }
}
```
Props to @jiangbowei2010, whose [solution](https://discuss.leetcode.com/topic/53103/one-set-solution) made me aware of `pollFirst`. Before, I had done the following and the solution speed appeared to be borderline (got accepted in 657 and 733 ms in two out of four attempts, the other two attempts got Time Limit Exceeded):
```
    public int get() {
        for (int number : this) {
            remove(number);
            return number;
        }
        return -1;
    }
```

Then I remembered seeing the word `BitSet` here in a topic title (of the [solution](https://discuss.leetcode.com/topic/53102/java-ac-solution-with-bitset-and-efficient-get-comments) from @johnyrufus16). and got the following accepted in 422 ms and 385 ms:
```
public class PhoneDirectory extends BitSet {

    public PhoneDirectory(int maxNumbers) {
        super(maxNumbers);
        flip(0, maxNumbers);
    }

    public int get() {
        if (isEmpty())
            return -1;
        int number = nextSetBit(0);
        clear(number);
        return number;
    }
    
    public boolean check(int number) {
        return get(number);
    }
    
    public void release(int number) {
        set(number);
    }
}
```