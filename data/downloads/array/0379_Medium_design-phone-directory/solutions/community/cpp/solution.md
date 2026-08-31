# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/3337832/](https://leetcode.com/problems/design-phone-directory/solutions/3337832/)

---

```C++ []
class PhoneDirectory {
    vector<int> val;
    int pos;
public:
    PhoneDirectory(int maxNumbers) {
        val = vector<int>(maxNumbers, 0);
        for (int i = 0; i < maxNumbers; ++i) val[i] = (i + 1) % maxNumbers;
        pos = 0;
    }
    int get() {
        if (val[pos] == -1) return -1;
        int v = pos;
        pos = val[pos];
        val[v] = -1;
        return v;
    }
    bool check(int number) {
        return val[number] != -1;
    }
    void release(int number) {
        if (val[number] == -1)
        {
            val[number] = pos;
            pos = number;
        }
    }
};
```

```Python3 []
from collections import deque

class PhoneDirectory:

    def __init__(self, maxNumbers: int):

        self.maxNumbers = maxNumbers
        self.lastGivenNumber = -1
        self.recycled = set()

    def get(self) -> int:
        
        if self.lastGivenNumber + 1 < self.maxNumbers:
            self.lastGivenNumber += 1
            return self.lastGivenNumber
        elif self.recycled:
            return self.recycled.pop()
        return -1

    def check(self, number: int) -> bool:
        if self.maxNumbers > number > self.lastGivenNumber:
            return True
        elif number in self.recycled:
            return True
        else:
            return False
        
    def release(self, number: int) -> None:
        if number <= self.lastGivenNumber:
            self.recycled.add(number)
```

```Java []
class PhoneDirectory {
    private int[] next;
    private int pos;

    public PhoneDirectory(int maxNumbers) {

        next = new int[maxNumbers];
        for (int i = 0; i < maxNumbers; i++){
            next[i] = (i+1) % maxNumbers;
        }
        pos = 0;
    }
    public int get() {

        if (next[pos] == -1){
            return -1;
        }
        int ret = pos;
        pos = next[pos];
        next[ret] = -1;
        return ret;
    }
    public boolean check(int number) {

        return next[number] != -1;
    }
    public void release(int number) {

        if (next[number] != -1){
            return;
        }
        next[number] = pos;
        pos = number;
    }
}
```
