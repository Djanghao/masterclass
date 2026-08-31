# Swift Double Dictionary O(1) TC

**Author:** tmunir
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/4515262/](https://leetcode.com/problems/frequency-tracker/solutions/4515262/)

---

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(n)$$

# Code
```
class FrequencyTracker {

    private var freqs = [Int: Int]()
    private var nums = [Int: Int]()
    
    private func updateFreqs(_ number: Int, _ isIncrement: Bool) {
        freqs[nums[number, default: 0], default: 0] -= 1
        if freqs[nums[number, default: 0]] ?? 0 < 1 {
            freqs[nums[number, default: 0]] = nil
        }
        
        nums[number, default: 0] += isIncrement ? 1 : -1
        freqs[nums[number, default: 0], default: 0] += 1
    }

    func add(_ number: Int) {
        updateFreqs(number, true)
    }
    
    func deleteOne(_ number: Int) {
        if nums[number] ?? 0 > 0 {
            updateFreqs(number, false) 
        }
    }
    
    func hasFrequency(_ frequency: Int) -> Bool {
        freqs[frequency] != nil
    }
}
```