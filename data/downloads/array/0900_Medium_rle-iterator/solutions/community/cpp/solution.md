# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/3513912/](https://leetcode.com/problems/rle-iterator/solutions/3513912/)

---

```C++ []
class RLEIterator {
public:
    RLEIterator(const std::vector<int>& encoding)
    {
        m_encodings.reserve(encoding.size() / 2);
        for (int i = 0; i < encoding.size(); i += 2) {
            const int count = encoding[i];
            const int number = encoding[i + 1];
            m_encodings.emplace_back(count, number);
        }
    }
    int next(int n)
    {
        while (m_current_idx < m_encodings.size() && m_encodings[m_current_idx].first < n) {
            n -= m_encodings[m_current_idx].first;
            m_encodings[m_current_idx].first = 0;
            ++m_current_idx;
        }
        if (m_current_idx >= m_encodings.size())
            return -1;
        m_encodings[m_current_idx].first -= n;
        return m_encodings[m_current_idx].second;
    }
private:
    int m_current_idx = 0;
    std::vector<std::pair<int, int>> m_encodings;
};
```

```Python3 []
class RLEIterator:

    def __init__(self, encoding: List[int]):
        self.lst=encoding

    def next(self, n: int) -> int:
        num=-1
        while self.lst and n>0:
            if n<=self.lst[0]:
                self.lst[0]-=n  
                n=0
                num=self.lst[1]
            else:
                n-=self.lst[0]
                self.lst[0]=0
            if self.lst[0]==0:
                self.lst.pop(0)
                self.lst.pop(0)
        if n>0:
            return -1
        return num
```

```Java []
class RLEIterator {
    public int[] encoding;
    public int index;
    public RLEIterator(int[] encoding) {
        this.encoding = encoding;
        this.index = 0;
    }
    public int next(int n) {   
        while (n > 0 && index < encoding.length) {
            if (encoding[index] < n) {
                n -= encoding[index];
                encoding[index] = 0;
                index += 2;
            } else {
                encoding[index] -= n;
                n = 0;
            }
        }
        if (index >= encoding.length) return -1;
        return encoding[index + 1];
    }
}
```
