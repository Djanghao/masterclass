# Two maps

**Author:** dtheriault
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494894/](https://leetcode.com/problems/frequency-tracker/solutions/3494894/)

---

```typescript []
class FrequencyTracker {
    freq = {}
    numb = {}

    add(number: number): void {
        const freq = this.numb[number] ?? 0
        this.freq[freq] = (this.freq[freq] ?? 0) - 1
        this.freq[freq+1] = (this.freq[freq+1] ?? 0) + 1
        this.numb[number] = freq + 1
    }

    deleteOne(number: number): void {
        const freq = this.numb[number] ?? 0
        if (freq === 0) return
        this.freq[freq] = (this.freq[freq] ?? 0) - 1
        this.freq[freq-1] = (this.freq[freq-1] ?? 0) + 1
        this.numb[number] = freq - 1
    }

    hasFrequency(frequency: number): boolean {
        return (this.freq[frequency] ?? 0) > 0
    }
}
```
```php []
class FrequencyTracker
{
    public function __construct()
    {
        $this->freq = [];
        $this->numb = [];
    }

    public function add(int $number): void
    {
        $freq = $this->numb[$number] ?? 0;
        $this->freq[$freq] = ($this->freq[$freq] ?? 0) - 1;
        $this->freq[$freq + 1] = ($this->freq[$freq + 1] ?? 0) + 1;
        $this->numb[$number] = $freq + 1;
    }
  
    public function deleteOne(int $number): void {
        $freq = $this->numb[$number] ?? 0;
        if ($freq === 0) {
            return;
        }
        $this->freq[$freq] = ($this->freq[$freq] ?? 0) - 1;
        $this->freq[$freq - 1] = ($this->freq[$freq - 1] ?? 0) + 1;
        $this->numb[$number] = $freq - 1;
    }
  
    public function hasFrequency(int $frequency): bool
    {
        return ($this->freq[$frequency] ?? 0) > 0;        
    }
}
```
```golang []
type FrequencyTracker struct {
    FrequencyMap map[int]int
    NumberMap map[int]int
}


func Constructor() FrequencyTracker {
    return FrequencyTracker{map[int]int{}, map[int]int{}}
}


func (this *FrequencyTracker) Add(number int)  {
    freq, _ := this.NumberMap[number]
    this.FrequencyMap[freq]--
    this.FrequencyMap[freq + 1]++
    this.NumberMap[number]++
}


func (this *FrequencyTracker) DeleteOne(number int)  {
    freq, _ := this.NumberMap[number]
    if freq > 0 {
        this.FrequencyMap[freq]--
        this.FrequencyMap[freq - 1]++
        this.NumberMap[number]--
    }
}


func (this *FrequencyTracker) HasFrequency(frequency int) bool {
    freq, _ := this.FrequencyMap[frequency];
    return freq > 0
}
```
```python3 []
class FrequencyTracker:

    def __init__(self):
        self.frequency_map = Counter()
        self.number_map = Counter()

    def add(self, number: int) -> None:
        freq = self.number_map[number]
        self.frequency_map[freq] -= 1
        self.frequency_map[freq + 1] += 1
        self.number_map[number] += 1

    def deleteOne(self, number: int) -> None:
        freq = self.number_map[number]
        if freq == 0: return
        self.frequency_map[freq] -= 1
        self.frequency_map[freq - 1] += 1
        self.number_map[number] -= 1

    def hasFrequency(self, frequency: int) -> bool:
        return self.frequency_map[frequency] > 0
```